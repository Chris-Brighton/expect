
const { notUndefined, notNull } = require("./check")
const _ = require('./tests')
const r = require('./test')

const STRING = 'string'
const NUMBER = 'number'
const BIGINT = 'bigint'
const BOOLEAN = 'boolean'
const SYMBOL = 'symbol'
const OBJECT = 'object'
const ARRAY = 'array'
const CLASS = 'class'


const simple = (v) => {
  return notNull(v) && notUndefined(v)
}

const iC = (v, t) => {
  if(!['string', 'object', 'array'].includes(t)) return false
  return v
}

const expect = (v, t, e) => {
  t = t.toLowerCase()
  switch (t) {
    case STRING:  return r( _[STRING],  v, iC(e, STRING),  STRING  )
    case NUMBER:  return r( _[NUMBER],  v, iC(e, NUMBER),  NUMBER  )
    case BIGINT:  return r( _[BIGINT],  v, iC(e, BIGINT),  BIGINT  )
    case BOOLEAN: return r( _[BOOLEAN], v, iC(e, BOOLEAN), BOOLEAN )
    case SYMBOL:  return r( _[SYMBOL],  v, iC(e, SYMBOL),  SYMBOL  )
    case OBJECT:  return r( _[OBJECT],  v, iC(e, OBJECT),  OBJECT  )
    case ARRAY:   return r( _[ARRAY],   v, iC(e, ARRAY),   ARRAY   )
    case CLASS:   return r( _[CLASS],   v, iC(e, CLASS),   CLASS   )
    default:
      throw new Error('unrecognized data type')
      break;
  }
}

module.exports = (value, type = null, emptyCheck = false) => {
  if (typeof emptyCheck !== 'boolean') throw new Error('emptyCheck must be a Boolean')
  if (type === null) return simple(value)
  if (typeof type !== 'string') throw new Error('type must be a String')
  return expect(value, type, emptyCheck)
}