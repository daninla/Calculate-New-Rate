"use strict";

/**
 *
 * @param {number} winner - Current rating of the winner
 * @param {number} loser  - Current rating of the loser
 * @returns {number} New rating of the winner rounded to 1 decimal place,
 */

function calculateNewRate(winner, loser) {
  if (
    typeof winner !== "number" ||
    typeof loser !== "number" ||
    winner < 0 ||
    loser < 0
  ) {
    return NaN;
  }

  if (winner === 0) return loser;
  if (loser === 0) return winner;

  const increment =
    loser < winner
      ? smallRatingDetermination(winner, loser)
      : bigRatingDetermination(winner, loser);

  return Number((winner + increment).toFixed(1));
}

/**
 *
 * @param {number} winner
 * @param {number} loser
 * @returns {number}
 */
const smallRatingDetermination = (winner, loser) => {
  const diff = winner - loser;
  if (diff <= 2) return 2;
  if (diff < 20) return 1;
  return 0;
};

/**
 *
 * @param {number} winner
 * @param {number} loser
 * @returns {number}
 */
const bigRatingDetermination = (winner, loser) => {
  return (loser - winner + 5) / 3;
};

console.log(calculateNewRate(10, 10));
console.log(calculateNewRate(130, 10));
console.log(calculateNewRate(30, 0));
