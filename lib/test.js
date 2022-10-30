const { isObject, hasOwnProperty } = require('./check')
const notEmpty = require('./empty')

module.exports = (t, v, e, y) => {
  if (!isObject(t)) throw Error('test must be an object')
  for (const k in t) {
    if (hasOwnProperty(t, k)) {
      const p = t[k](v)
      if (typeof p === 'boolean' && p === false) {
        return false
      }
      if (e) {
        const c = notEmpty(v, y)
        if (typeof c === 'boolean' && c === false) {
          return false
        }
      }
    }
    
  }
  return true
}