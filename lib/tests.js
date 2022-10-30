const { isObject, isArray, isType, notNull, notUndefined, isClass } =  require('./check')
const d = { notNull, notUndefined }
module.exports = {
  string:   { ...d, isType: (v) => isType(v, 'string')  },
  number:   { ...d, isType: (v) => isType(v, 'number')  },
  bigint:   { ...d, isType: (v) => isType(v, 'bigint')  },
  boolean:  { ...d, isType: (v) => isType(v, 'boolean') },
  symbol:   { ...d, isType: (v) => isType(v, 'symbol')  },
  function: { ...d, isType: (v) => isType(v, 'function')},
  array:    { ...d, isArray  },
  object:   { ...d, isObject },
  class:    { ...d, isClass  },
}