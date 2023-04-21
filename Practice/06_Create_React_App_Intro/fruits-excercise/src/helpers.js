function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(items, item) {
  // let idx = items.indexOf(item);
  // if (idx > -1) {
  //   return [...items.slice(0, idx), ...items.slice(idx + 1)];
  // }

  // // OR-------

  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };
