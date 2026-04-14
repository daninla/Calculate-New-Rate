"use strict";

/**
 *
 * @param {number} winner - current rating of the winner
 * @param {number} loser - current rating of the loser
 * @returns {number} new rating of the winner
 */
function calculateNewRate(winner, loser) {
  if (
    typeof winner !== "number" ||
    typeof loser !== "number" ||
    winner < 0 ||
    loser < 0
  ) {
    console.log("Invalid input: ratings must be non-negative numbers");
    return NaN;
  }

  if (winner === 0) return loser;
  if (loser === 0) return winner;

  let increment = 0;

  if (loser <= winner) {
    const diff = winner - loser;

    if (diff <= 2) increment = 2;
    else if (diff < 20) increment = 1;
    else increment = 0;
  } else {
    increment = (loser - winner + 5) / 3;
  }

  return Number((winner + increment).toFixed(1));
}
