export function randomSearch(k, searchable) {
  let i = Math.floor(Math.random() * searchable.length);

  while (true) {
    if (searchable[i] == k) {
      return i;
    }
  }
}

export function randomRecursiveSearch(k, searchable) {
  let i = Math.floor(Math.random() * searchable.length);

  if (searchable[i] == k) {
    return i;
  }

  return randomSearch(k, searchable);
}
