// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import CalcEval from '../build/CalcEval'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

const co = ['', '%', '√', '²', '1/', 'ans', 'c', 'bs', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '=']

/* eslint-disable no-new */

new Vue({
  el: '#calculator',
  data: {
    title: 'Naive online calculator',
    usage: 'A simple calculator for practice, it may produce wrong answers due to the accuracy problem',
    expression: '0',
    answer: '0',
    readyNum1: false,
    readyNum2: false,
    opReady: false,
    num1: 0,
    num1Raw: '',
    num2: 0,
    num2Raw: '',
    op: '',
    toClear: false,
    lastAnswer: 0
  },
  methods: {
    details: function () {
      return this.title + '- demo demo demo'
    },
    addC: function (id) {
      if (this.toClear) {
        this.clear()
      }

      if (this.readyNum2) {
        return
      }

      if (id > 4 || id < 2) {
        this.expression = this.expression + ' ' + co[id] + ' '
        this.op = co[id]
      } else
      if (id !== 3) {
        this.expression = co[id] + this.expression
        this.op = co[id]
        this.num2 = 1
        this.readyNum2 = true
      } else {
        this.readyNum2 = true
        this.expression = this.expression + co[id]
        this.op = co[id]
      }

      this.num1 = parseFloat(this.expression)
      this.opReady = true

      if (!this.readyNum1) {
        this.readyNum1 = true
      }

      if (id >= 2 && id <= 4) {
        this.doCalculate()
      }
      // console.log(this.num1)
    },
    addN: function (n) {
      if (this.toClear) {
        this.clear()
      }

      if (n === -1) {
        n = this.lastAnswer
      }

      if (!this.readyNum1) {
        this.expression = n.toString()
        this.num1Raw = n.toString()
        this.readyNum1 = true
        if (n === 0) {
          this.readyNum1 = false
        }
      } else
      if (this.readyNum1 && !this.opReady) {
        this.expression += n.toString()
        this.num1Raw += n.toString()
      } else
      if (this.readyNum1 && this.opReady && !this.readyNum2) {
        this.expression += n.toString()
        this.num2Raw = n.toString()
        this.readyNum2 = true
      } else
      if (this.readyNum1 && this.opReady && this.readyNum2) {
        this.expression += n.toString()
        this.num2Raw += n.toString()
      }
    },
    addDot: function () {
      if (this.toClear) {
        this.clear()
        this.toClear = false
      }

      if (this.readyNum1 && this.opReady && this.readyNum2) {
        this.expression += '.'
        this.num2Raw += '.'
      } else
      if (!this.opReady) {
        this.expression += '.'
        this.num1Raw += '.'
        if (this.num1 === 0) {
          this.readyNum1 = true
        }
      }
    },
    reverse: function () {
      if (this.toClear) {
        this.clear()
      }

      if (this.readyNum1 && !this.opReady) {
        this.expression = '-' + this.expression
      } else
      if (this.readyNum1 && this.opReady && this.readyNum2 && this.op !== '/') {
        this.expression = this.num1Raw + ' ' + this.op + ' -' + this.num2Raw
      }
    },
    backspace: function () {
      if (this.toClear) {
        this.clear(true)
      }

      if (this.readyNum2) {
        this.expression = this.expression.substring(0, this.expression.length - 1)
        this.num2Raw = this.num2Raw.substring(0, this.num2Raw.length)
        if (this.num2Raw.length === 0) {
          this.readyNum2 = false
        }
      }

      if (this.readyNum1 && !this.opReady) {
        this.expression = this.expression.substring(0, this.expression.length - 1)
        this.num1Raw = this.num1Raw.substring(0, this.num1Raw.length)
        if (this.num1Raw.length === 0) {
          this.readyNum1 = false
        }
      }

      if (this.readyNum1 && this.opReady) {
        this.expression = this.num1Raw
        this.opReady = false
      }
    },
    doCalculate: function () {
      if (this.readyNum1 && !this.readyNum2 && this.opReady) {
        return
      }
      if (!this.readyNum1) {
        return
      }

      let exp = this.expression
      // console.log(exp)
      if (this.op === '÷') {
        exp = this.num1Raw + '/' + this.num2Raw
        // console.log(exp)
      }
      if (this.op === '√') {
        exp = 'Math.sqrt(' + this.num1Raw + ')'
      }
      if (this.op === '²') {
        exp = 'Math.pow(' + this.num1Raw + ', 2)'
      }
      if (this.op === '×') {
        exp = this.num1Raw + '*' + this.num2Raw
      }
      console.log(exp)
      // let ce = new CalcEval()
      this.lastAnswer = eval(exp)
      this.answer = this.lastAnswer.toString()
      this.toClear = true
    },
    clear: function (all) {
      this.expression = '0'
      this.readyNum1 = false
      this.readyNum2 = false
      this.opReady = false
      this.num1 = 0
      this.num1Raw = ''
      this.num2 = 0
      this.num2Raw = ''
      this.op = ''
      this.toClear = false

      if (all) {
        this.answer = '0'
      }
    }
  }
})
