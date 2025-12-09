'use client';

import { useState, useEffect } from 'react';

type CoinSide = 'heads' | 'tails';

interface GameStats {
  wins: number;
  losses: number;
  total: number;
  streak: number;
  bestStreak: number;
}

export default function CoinFlipGame() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<CoinSide | null>(null);
  const [userChoice, setUserChoice] = useState<CoinSide | null>(null);
  const [gameResult, setGameResult] = useState<'win' | 'lose' | null>(null);
  const [rotation, setRotation] = useState(0);
  const [stats, setStats] = useState<GameStats>({
    wins: 0,
    losses: 0,
    total: 0,
    streak: 0,
    bestStreak: 0,
  });

  // Load stats from localStorage on mount
  useEffect(() => {
    const savedStats = localStorage.getItem('coinFlipStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Save stats to localStorage whenever they change
  useEffect(() => {
    if (stats.total > 0) {
      localStorage.setItem('coinFlipStats', JSON.stringify(stats));
    }
  }, [stats]);

  const flipCoin = (choice: CoinSide) => {
    if (isFlipping) return;

    setUserChoice(choice);
    setIsFlipping(true);
    setGameResult(null);

    // Random result
    const coinResult: CoinSide = Math.random() < 0.5 ? 'heads' : 'tails';

    // Calculate rotation (5 full spins + final position)
    const baseRotation = 1800; // 5 full rotations
    const finalRotation = coinResult === 'heads' ? 0 : 180;
    const totalRotation = baseRotation + finalRotation;

    setRotation(totalRotation);

    // After animation, show result
    setTimeout(() => {
      setResult(coinResult);
      const won = choice === coinResult;
      setGameResult(won ? 'win' : 'lose');

      // Update stats
      setStats(prev => {
        const newStreak = won ? prev.streak + 1 : 0;
        return {
          wins: won ? prev.wins + 1 : prev.wins,
          losses: won ? prev.losses : prev.losses + 1,
          total: prev.total + 1,
          streak: newStreak,
          bestStreak: Math.max(prev.bestStreak, newStreak),
        };
      });

      setIsFlipping(false);
    }, 1000);
  };

  const resetGame = () => {
    setResult(null);
    setUserChoice(null);
    setGameResult(null);
    setRotation(0);
  };

  const resetStats = () => {
    const confirmed = window.confirm('Are you sure you want to reset all statistics?');
    if (confirmed) {
      const emptyStats = {
        wins: 0,
        losses: 0,
        total: 0,
        streak: 0,
        bestStreak: 0,
      };
      setStats(emptyStats);
      localStorage.removeItem('coinFlipStats');
      resetGame();
    }
  };

  const winRate = stats.total > 0 ? ((stats.wins / stats.total) * 100).toFixed(1) : '0.0';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
          Coin Flip Game
        </h1>
        <p className="text-base sm:text-xl text-gray-300">Choose heads or tails and test your luck!</p>
      </div>

      {/* Game Container */}
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 w-full max-w-2xl">
        {/* Coin Display */}
        <div className="flex justify-center items-center mb-8 sm:mb-12" style={{ perspective: '1000px' }}>
          <div
            className="coin relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            style={{
              transform: `rotateY(${rotation}deg)`,
              transition: isFlipping ? 'transform 1s ease-out' : 'none',
            }}
          >
            <div className="coin-face coin-heads">
              <span className="text-4xl sm:text-5xl md:text-6xl">H</span>
            </div>
            <div className="coin-face coin-tails">
              <span className="text-4xl sm:text-5xl md:text-6xl">T</span>
            </div>
          </div>
        </div>

        {/* Result Message */}
        {gameResult && (
          <div className={`text-center mb-6 sm:mb-8 animate-bounce ${
            gameResult === 'win' ? 'text-green-400' : 'text-red-400'
          }`}>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {gameResult === 'win' ? '🎉 You Won!' : '😔 You Lost!'}
            </p>
            <p className="text-base sm:text-lg md:text-xl mt-2">
              The coin landed on <span className="font-bold capitalize">{result}</span>
            </p>
          </div>
        )}

        {/* Choice Buttons */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <button
            onClick={() => flipCoin('heads')}
            disabled={isFlipping}
            className={`py-4 sm:py-6 md:py-8 px-4 sm:px-6 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
              isFlipping
                ? 'bg-gray-500 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-yellow-900'
            } ${userChoice === 'heads' ? 'ring-4 ring-yellow-300' : ''}`}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2">H</div>
            <div className="text-sm sm:text-base md:text-lg">Heads</div>
          </button>

          <button
            onClick={() => flipCoin('tails')}
            disabled={isFlipping}
            className={`py-4 sm:py-6 md:py-8 px-4 sm:px-6 rounded-2xl text-lg sm:text-xl md:text-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
              isFlipping
                ? 'bg-gray-500 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-br from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-gray-900'
            } ${userChoice === 'tails' ? 'ring-4 ring-gray-300' : ''}`}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl mb-2">T</div>
            <div className="text-sm sm:text-base md:text-lg">Tails</div>
          </button>
        </div>

        {/* Control Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={resetGame}
            disabled={isFlipping}
            className="py-3 sm:py-4 px-4 sm:px-6 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md text-sm sm:text-base"
          >
            🔄 New Game
          </button>
          <button
            onClick={resetStats}
            disabled={isFlipping}
            className="py-3 sm:py-4 px-4 sm:px-6 bg-red-500 hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md text-sm sm:text-base"
          >
            🗑️ Reset Stats
          </button>
        </div>

        {/* Statistics */}
        <div className="bg-black/20 rounded-2xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">📊 Statistics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Total Games</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stats.total}</p>
            </div>
            <div className="bg-green-500/20 rounded-xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Wins</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">{stats.wins}</p>
            </div>
            <div className="bg-red-500/20 rounded-xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Losses</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-400">{stats.losses}</p>
            </div>
            <div className="bg-blue-500/20 rounded-xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Win Rate</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">{winRate}%</p>
            </div>
            <div className="bg-yellow-500/20 rounded-xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Current Streak</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">{stats.streak}</p>
            </div>
            <div className="bg-purple-500/20 rounded-xl p-3 sm:p-4 text-center">
              <p className="text-xs sm:text-sm text-gray-300 mb-1">Best Streak</p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">{stats.bestStreak}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm">
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </div>
  );
}
