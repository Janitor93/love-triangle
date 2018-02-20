/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {
// function getLoveTrianglesCount(preferences = []) {
  let lovers = [];
  preferences.unshift(0);
  for(let i = 1; i <= preferences.length; i++) {
    if(
      preferences[i] != preferences[preferences[i]] &&
      preferences[preferences[i]] != preferences[preferences[preferences[i]]] &&
      preferences[preferences[preferences[i]]] != preferences[i] &&
      preferences[preferences[preferences[i]]] == i
    ) {
      lovers.push([preferences[i], preferences[preferences[i]], preferences[preferences[preferences[i]]]]);
      preferences[i] = 0;
      preferences[preferences[i]] = 0;
      preferences[preferences[preferences[i]]] = 0;
    }
  }
  return lovers.length;
};

// console.log(getLoveTrianglesCount([2, 3, 1, 5, 6, 4]));
