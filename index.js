const expect = require('./lib/expect')
const { isArray, isClass, isObject, isType, notNull, notUndefined, notEmpty, hasOwnProperty, hasKeys } = require('./lib/check')
const guessType = require('./lib/guess')

module.exports = {
  expect,
  isArray,
  isClass,
  isObject,
  isType,
  notNull,
  notUndefined,
  notEmpty,
  hasOwnProperty,
  hasKeys,
  guessType,
}
