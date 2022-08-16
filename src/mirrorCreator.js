function _getStr(item, opt) {
  const { prefix, suffix, useSymbol } = opt;
  let ret = ''
  if (useSymbol) {
    ret = Symbol.for(item)
  } else {
    ret = `${prefix}${item}${suffix}`
  }
  return ret
}

export default (items, options = {}) => {
  const defaultOpt = {
    prefix: '',
    suffix: '',
    useSymbol: false,
    splitStr: '|',
  };
  const opts = Object.assign({}, defaultOpt, options);
  const container = {};
  if (Array.isArray(items)) {
    items.forEach(item => {
      container[item] = _getStr(item, opts);
    });
  } else if (Object.prototype.toString.call(items).slice(8, -1) === 'Object') {
    // initial keyMirror feature implement
    for (const key in items) {
      if (items.hasOwnProperty(key)) {
        container[key] = _getStr(key, opts)
      }
    }
  } else if (typeof items === 'string') {
    const arr = items.split(opts.splitStr)
    arr.forEach(item => {
      container[item] = _getStr(item, opts);
    });
  } else {
    throw new TypeError('argument error, the method call first argument have to be one of [string, array, object]')
  }

  return container;
}

