// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer year

// A positive integer, designating the year.

// Guaranteed constraints:
// 1 ≤ year ≤ 2005.

// [output] integer

// The number of the century the year is in.

// This function calculates the century for a given year
function getCentury(year) {
  // We divide the year by 100 and round up to get the century
  const century = Math.ceil(year / 100)
  return century
}

// This function returns the century for a given year, taking into account that the current century ends at the end of the year that is a multiple of 100
function solution(year) {
  // We first call the getCentury() function to get the century for the input year
  const century = getCentury(year)

  // We check if the year is a multiple of 100 using the modulus operator (%)
  if (year % 100 === 0) {
    // If the year is a multiple of 100, we return the century as is
    return century
  } else {
    // If the year is not a multiple of 100, we also return the century as is, since the current century ends at the end of the year that is not a multiple of 100
    return century
  }
}

// Example usage:
console.log(solution(1905)) // Output: 20
console.log(solution(1700)) // Output: 17
