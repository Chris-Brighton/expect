
const empty = require('./empty')

const isObject = (v) => {
  const type = typeof v
  return (
    type === 'object' &&
    !Array.isArray(v) &&
    Object.prototype.toString.call(v) === '[object Object]'
  )
}

const isArray = (v) => {
  return (
    Object.prototype.toString.call(v) === '[object Array]' && Array.isArray(v)
  )
}

const isType = (v, t) => {
  t = t.toLowerCase()
  return typeof v === t
}

const isClass = (v) => {
  if(!(v && v.constructor === Function) || v.prototype === undefined) return false;
  if(Function.prototype !== Object.getPrototypeOf(v)) return true;
  return Object.getOwnPropertyNames(v.prototype).length > 1;
}

const isOneOf = (v, t) => {
  let pass = true
  t.forEach((type)=> {
    if (!isType(v, type)) {
      pass = false
    }
  })
  return pass
}

const notNull = (v) => {
  return v !== null
}

const notUndefined = (v) => {
  return v !== undefined
}

const notEmpty = (v, t) => {
  return empty(v, t)
}

const hasOwnProperty = (o, k) => {
  return Object.prototype.hasOwnProperty.call(o, k)
}

const hasKeys = (v, ks) => {
  if(!isArray(ks) && !isObject(ks)) throw new Error('keys must be an array or object')
  const vK = Object.keys(v)
  let r = true
  if(isArray(ks)) {
    ks.forEach(k => {
      if(isType(k, 'string') && !vK.includes(k)) r = false
    });
  }
  if(isObject(ks)) {
    for(const k in ks) {
      if(hasOwnProperty(ks, k)) {
        const vtc = v[k]
        const ktlf = k
        const ttc = ks[k]
        if(hasOwnProperty(v, ktlf)) {
          let tc = true
          let ec = true
          switch (ttc) {
            case 'string':
              tc = isType(vtc, ttc)
              ec = notEmpty(vtc, ttc)
              break;
            case 'object':
              tc = isObject(vtc)
              ec = notEmpty(vtc, ttc)
              break;
            case 'array':
              tc = isArray(vtc)
              ec = notEmpty(vtc, ttc)
              break;
            default:
              tc = isType(vtc, ttc)
              break;
          }
          if(tc === false || ec === false) r = false
        } else {
          r = false
        }
      }
    }
  }
  return r
}

module.exports = {
  isArray,
  isClass,
  isObject,
  isType,
  notNull,
  notUndefined,
  notEmpty,
  hasOwnProperty,
  hasKeys,
  isOneOf,
}