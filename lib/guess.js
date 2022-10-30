const { isArray, isClass, isObject, isType } = require('./check')


const STRING = 'string'
const NUMBER = 'number'
const BIGINT = 'bigint'
const BOOLEAN = 'boolean'
const SYMBOL = 'symbol'
const OBJECT = 'object'
const ARRAY = 'array'
const CLASS = 'class'
const NULL = 'null'
const UNDEFINED = 'undefined'

module.exports = (v) => {
  if (v === null) return NULL
  if (v === undefined) return UNDEFINED
  if (isArray(v)) return ARRAY
  if (isObject(v)) return OBJECT
  if (isClass(v)) return CLASS
  if (isType(v, STRING)) return STRING
  if (isType(v, NUMBER)) return NUMBER
  if (isType(v, BIGINT)) return BIGINT
  if (isType(v, BOOLEAN)) return BOOLEAN
  if (isType(v, SYMBOL)) return SYMBOL
  return null
}