import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('test \'doCalculator()\' (+ -)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'opReady', true)
    let ops = ['+', '-']
    for (let op = 0; op < 2; op ++)
      for (let i = 0; i < 100; i++)
        for (let j = 0; j < 100; j++) {
          vm.$set(vm.$data, 'expression', i.toString()+ops[op]+j.toString())
          expect(vm.doCalculate()).toEqual(eval(i.toString()+ops[op]+j.toString()))
        }

  })
})

describe('App.vue', () => {
  it('test \'doCalculator()\' (* /)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'opReady', true)
    let ops = ['×', '÷']
    let opsr = ['*', '/']
    for (let op = 0; op < 2; op ++)
      for (let i = 0; i < 100; i++)
        for (let j = 0; j < 100; j++) {
          vm.$set(vm.$data, 'num1Raw', i.toString())
          vm.$set(vm.$data, 'num2Raw', j.toString())
          vm.$set(vm.$data, 'op', ops[op])
          vm.$set(vm.$data, 'expression', i.toString()+ops[op]+j.toString())
          expect(vm.doCalculate()).toEqual(eval(i.toString()+opsr[op]+j.toString()))
        }
  })
})

describe('App.vue', () => {
  it('test \'doCalculator()\' (power)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'num2Raw', 1)
      for (let i = 0; i < 100; i++) {
        vm.$set(vm.$data, 'num1Raw', i.toString())
        vm.$set(vm.$data, 'op', '²')
        vm.$set(vm.$data, 'expression', i.toString()+'²')
        expect(vm.doCalculate()).toEqual(i*i)
      }
  })
})

describe('App.vue', () => {
  it('test \'doCalculator()\' (root)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'num2Raw', 1)
    for (let i = 0; i < 100; i++) {
      vm.$set(vm.$data, 'num1Raw', i.toString())
      vm.$set(vm.$data, 'op', '√')
      vm.$set(vm.$data, 'expression', '√'+i.toString())
      expect(vm.doCalculate()).toEqual(Math.sqrt(i))
    }
  })
})

describe('App.vue', () => {
  it('test \'addN\' (num1)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', false)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'opReady', false)
    for (let i = 0; i < 10; i++) {
      let oldE = vm.expression
      let oldR = vm.num1Raw
      vm.addN(i)
      if (oldE !== '0') {
        expect(vm.expression).toEqual(oldE + i.toString())
        expect(vm.num1Raw).toEqual(oldR + i.toString())
      }
    }
  })
})

describe('App.vue', () => {
  it('test \'addN\' (num2nr)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'opReady', true)
    for (let i = 0; i < 10; i++) {
      let oldE = vm.expression
      let oldR = vm.num2Raw
      vm.addN(i)
      expect(vm.expression).toEqual(oldE + i.toString())
      expect(vm.num2Raw).toEqual(oldR + i.toString())
    }
  })
})

describe('App.vue', () => {
  it('test \'addN\' (num2r)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'num2Raw', "3")
    vm.$set(vm.$data, 'opReady', true)
    for (let i = 0; i < 10; i++) {
      let oldE = vm.expression
      let oldR = vm.num2Raw
      vm.addN(i)
      expect(vm.expression).toEqual(oldE + i.toString())
      expect(vm.num2Raw).toEqual(oldR + i.toString())
    }
  })
})

describe('App.vue', () => {
  it('test \'addN\' (num2r)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'num2Raw', "3")
    vm.$set(vm.$data, 'opReady', true)
    for (let i = 0; i < 10; i++) {
      let oldE = vm.expression
      let oldR = vm.num2Raw
      vm.addN(i)
      expect(vm.expression).toEqual(oldE + i.toString())
      expect(vm.num2Raw).toEqual(oldR + i.toString())
    }
  })
})

describe('App.vue', () => {
  it('test \'addC\' (normal)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    let ops = [1,8,12,16,20]
    const co = ['', '%', '√', '²', '1/', 'ans', 'c', 'bs', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '=']
    for (let op = 0; op < ops.length; op++) {
      vm.$set(vm.$data, 'readyNum1', true)
      vm.$set(vm.$data, 'opReady', false)
      vm.$set(vm.$data, 'expression', '1')
      vm.$set(vm.$data, 'num1Raw', '1')
      let oldE = vm.expression
      let oldR = vm.num1Raw
      vm.addC(ops[op])
      expect(vm.expression).toEqual(oldE + ' ' + co[ops[op]] + ' ')
      expect(vm.num1Raw).toEqual(oldR)

    }
  })
})

describe('App.vue', () => {
  it('test \'addDot\' (num1)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', false)
    let oldE = vm.expression
    let oldR = vm.num1Raw
    vm.addDot()
    expect(vm.expression).toEqual(oldE + '.')
    expect(vm.num1Raw).toEqual(oldR + '.')
  })
})

describe('App.vue', () => {
  it('test \'addDot\' (num1,opr)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', true)
    let oldE = vm.expression
    let oldR = vm.num1Raw
    vm.addDot()
    expect(vm.expression).toEqual(oldE)
    expect(vm.num1Raw).toEqual(oldR)
  })
})

describe('App.vue', () => {
  it('test \'addDot\' (num2)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', true)
    let oldE = vm.expression
    let oldR = vm.num2Raw
    vm.addDot()
    expect(vm.expression).toEqual(oldE + '.')
    expect(vm.num2Raw).toEqual(oldR + '.')
  })
})

describe('App.vue', () => {
  it('test \'reverse\' (num1)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', false)
    vm.$set(vm.$data, 'expression', "123")
    vm.$set(vm.$data, 'num1Raw', "123")
    let oldE = vm.expression
    let oldR = vm.num1Raw
    vm.reverse()
    expect(vm.expression).toEqual('-'+oldE)
    expect(vm.num1Raw).toEqual('-'+oldR)
  })
})

describe('App.vue', () => {
  it('test \'reverse\' (num1ab)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'expression', "123 + ")
    vm.$set(vm.$data, 'num1Raw', "123")
    let oldE = vm.expression
    let oldR = vm.num1Raw
    vm.reverse()
    expect(vm.expression).toEqual(oldE)
    expect(vm.num1Raw).toEqual(oldR)
  })
})

describe('App.vue', () => {
  it('test \'reverse\' (num2)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'num2Raw', "321")
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'expression', "123 + 321")
    vm.$set(vm.$data, 'num1Raw', "123")
    vm.$set(vm.$data, 'op', '+')
    let oldE = vm.expression
    let oldR = vm.num2Raw
    vm.reverse()
    expect(vm.expression).toEqual("123 + -321")
    expect(vm.num2Raw).toEqual('-'+oldR)
  })
})

describe('App.vue', () => {
  it('test \'bs\' (num1)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', false)
    vm.$set(vm.$data, 'expression', "123")
    vm.$set(vm.$data, 'num1Raw', "123")
    vm.$set(vm.$data, 'op', '')
    let oldE = vm.expression
    let oldR = vm.num1Raw
    vm.backspace()
    expect(vm.expression).toEqual("12")
    expect(vm.num1Raw).toEqual('12')
  })
})

describe('App.vue', () => {
  it('test \'bs\' (num2)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'num2Raw', "321")
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'expression', "123 + 321")
    vm.$set(vm.$data, 'num1Raw', "123")
    vm.$set(vm.$data, 'op', '+')
    let oldE = vm.expression
    let oldR = vm.num2Raw
    vm.backspace()
    expect(vm.expression).toEqual("123 + 32")
    expect(vm.num2Raw).toEqual('32')
  })
})

describe('App.vue', () => {
  it('test \'bs\' (op)', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', false)
    vm.$set(vm.$data, 'num2Raw', "")
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'expression', "123 + ")
    vm.$set(vm.$data, 'num1Raw', "123")
    vm.$set(vm.$data, 'op', '+')
    let oldE = vm.expression
    let oldR = vm.num1Raw
    vm.backspace()
    expect(vm.expression).toEqual("123")
    expect(vm.num1Raw).toEqual('123')
  })
})

describe('App.vue', () => {
  it('test \'clear\' ', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$set(vm.$data, 'readyNum1', true)
    vm.$set(vm.$data, 'readyNum2', true)
    vm.$set(vm.$data, 'num2Raw', '321')
    vm.$set(vm.$data, 'opReady', true)
    vm.$set(vm.$data, 'expression', "123 + 321")
    vm.$set(vm.$data, 'num1Raw', "123")
    vm.$set(vm.$data, 'op', '+')

    vm.clear()
    expect(vm.expression).toEqual("0")
    expect(vm.num1Raw).toEqual('')
    expect(vm.num2Raw).toEqual('')
    expect(vm.op).toEqual('')
    expect(vm.opReady).toEqual(false)
    expect(vm.readyNum1).toEqual(false)
    expect(vm.readyNum2).toEqual(false)
  })
})
