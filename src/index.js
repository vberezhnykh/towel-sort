module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix !== undefined) {
    if (matrix.length === 0) {
      return result;
    } else if (matrix.length % 2 !== 0) {
      for (let i = 0; i < matrix.length - 1; i += 2) {
        result = result.concat(matrix[i], matrix[i + 1].reverse());
      } 
      return result = result.concat(matrix[matrix.length - 1])
    } else {
      for (let n = 0; n < matrix.length; n += 2) {
        result = result.concat(matrix[n], matrix[n + 1].reverse());
      }
      return result;
  }} else { return result }
}