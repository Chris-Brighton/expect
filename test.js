const { info, error } = require("winston-color");
const expect = require('./lib/expect')
const { hasKeys } = require('./lib/check')
class TestClass {
  constructor(v) {
    this.v = v
  }
  do(a) {
    this.v = a
  }
}

const tests = [
  { type: 'array', name: 'is array', data: [], want: true },
  { type: 'array', name: 'is not array', data: {}, want: false },

  { type: 'class', name: 'is class', data: TestClass, want: true },
  { type: 'class', name: 'is not class', data: 'dfaddv', want: false },

  { type: 'object', name: 'is object', data: {}, want: true },
  { type: 'object', name: 'is not object', data: null, want: false },

  { type: 'string', name: 'is string', data: 'ddfdvf', want: true },
  { type: 'string', name: 'is not string', data: 10, want: false },

  { type: 'number', name: 'is number', data: 10, want: true },
  { type: 'number', name: 'is not number', data: 'quiucdc', want: false },

  { type: 'bigint', name: 'is bigint', data: BigInt(10), want: true },
  { type: 'bigint', name: 'is not bigint', data: 'swscg', want: false },

  { type: 'symbol', name: 'is symbol', data: Symbol('ip'), want: true },
  { type: 'symbol', name: 'is not symbol', data: 10, want: false },

  { type: 'boolean', name: 'is boolean', data: true, want: true },
  { type: 'boolean', name: 'is not boolean', data: 10, want: false },
]

tests.forEach(({type, name, data, want}) => {
  const result = expect(data, type)
  if (result === want) {
    info('PASS:', data, name)
  } else {
    error('FAIL:', name, 'expected', data, 'to be', type)
  }
});

const data = {
  id: 'gfdfd',
  age: 23,
  type: ['a', 'b'],
  de: true
}

const pass  = hasKeys(data, {
  id: 'string',
  age: 'number',
  type: 'array',
  de: 'boolean'
})
console.log(pass)
