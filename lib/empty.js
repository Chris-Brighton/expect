const STRING = 'string'
const OBJECT = 'object'
const ARRAY = 'array'

const f = {
  string: (v) => v !== '',
  object: (v) => !!Object.keys(v).length,
  array: (v) => v.length > 0
}


module.exports = (v, t) => {
  switch (t) {
    case STRING: return f[STRING](v)
    case OBJECT: return f[OBJECT](v)
    case ARRAY: return  f[ARRAY](v)
    default: return false
  }
}