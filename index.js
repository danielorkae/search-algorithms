import { linearSearch, linearRecursiveSearch } from "./search/linear-search.js";
import { randomSearch, randomRecursiveSearch } from "./search/random-search.js";

const k = 5;
const searchable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Linear Search: " + linearSearch(k, searchable));
console.log("Linear Recursive Search: " + linearRecursiveSearch(k, searchable));
console.log("Random Search: " + randomSearch(k, searchable));
console.log("Random Recursive Search: " + randomRecursiveSearch(k, searchable));
