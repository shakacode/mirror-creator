export default items => {

  if (!Array.isArray(items)) {
    throw new Error('mirrorCreator(...): argument must be an array.');
  }

  const container = {};
  items.forEach(item => container[item] = item);
  return container;

}
