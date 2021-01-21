export function linearSearch(k, searchable) {
  for (let i in searchable) {
    if (searchable[i] === k) {
      return parseInt(i);
    }
  }

  return -1;
}

export function linearRecursiveSearch(k, searchable, i = 1) {
  if (searchable[i] == k) {
    return i;
  }

  if (i > searchable.length) {
    return -1;
  }

  return linearRecursiveSearch(k, searchable, ++i);
}
