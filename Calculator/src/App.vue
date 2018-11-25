<template>
  <div>
    <div align="right" style="width: 62%;margin: auto;clear: both" >
      <a class="button button-block button-royal button-large button-primary" style="text-align: right">{{expression}}</a>
      <a class="button button-block button-royal button-large button-primary" style="text-align: right">=</a>
      <a class="button button-block button-royal button-large button-primary" style="text-align: right">{{answer}}</a>
    </div>
    <div style="width: 62%;margin: auto;clear: both">
      <div style="float:left;width: 25%; text-align: center">
        <button id="1" @click="addC(1)" class="button button-action button-large" style="width: 100%; font-weight: bolder">%</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="2" @click="addC(2)" class="button button-action button-large" style="width: 100%; font-weight: bolder">√</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="3" @click="addC(3)" class="button button-action button-large" style="width: 100%; font-weight: bolder">x²</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="4" @click="addC(4)" class="button button-action button-large" style="width: 100%; font-weight: bolder">1/x</button>
      </div>
    </div>
    <div style="width: 62%;margin: auto;clear: both">
      <div style="float:left;width: 25%; text-align: center">
        <button id="5" @click="addN(-1)" class="button button-action button-large" style="width: 100%; font-weight: bolder">ANS</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="6" @click="clear(true)" class="button button-action button-large" style="width: 100%; font-weight: bolder">C</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="7" @click="backspace()" class="button button-action button-large" style="width: 100%; font-weight: bolder">←</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="8" @click="addC(8)" class="button button-action button-large" style="width: 100%; font-weight: bolder">÷</button>
      </div>
    </div>
    <div style="width: 62%;margin: auto;clear: both">
      <div style="float:left;width: 25%; text-align: center">
        <button id="9" @click="addN(7)" class="button button-action button-large" style="width: 100%; font-weight: bolder">7</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="10" @click="addN(8)" class="button button-action button-large" style="width: 100%; font-weight: bolder">8</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="11" @click="addN(9)" class="button button-action button-large" style="width: 100%; font-weight: bolder">9</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="12" @click="addC(12)" class="button button-action button-large" style="width: 100%; font-weight: bolder">×</button>
      </div>
    </div>
    <div style="width: 62%;margin: auto;clear: both">
      <div style="float:left;width: 25%; text-align: center">
        <button id="13" @click="addN(4)" class="button button-action button-large" style="width: 100%; font-weight: bolder">4</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="14" @click="addN(5)" class="button button-action button-large" style="width: 100%; font-weight: bolder">5</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="15" @click="addN(6)" class="button button-action button-large" style="width: 100%; font-weight: bolder">6</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="16" @click="addC(16)" class="button button-action button-large" style="width: 100%; font-weight: bolder">-</button>
      </div>
    </div>
    <div style="width: 62%;margin: auto;clear: both">
      <div style="float:left;width: 25%; text-align: center">
        <button id="17" @click="addN(1)" class="button button-action button-large" style="width: 100%; font-weight: bolder">1</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="18" @click="addN(2)" class="button button-action button-large" style="width: 100%; font-weight: bolder">2</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="19" @click="addN(3)" class="button button-action button-large" style="width: 100%; font-weight: bolder">3</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="20" @click="addC(20)" class="button button-action button-large" style="width: 100%; font-weight: bolder">+</button>
      </div>
    </div>
    <div style="width: 62%;margin: auto;clear: both">
      <div style="float:left;width: 25%; text-align: center">
        <button id="21" @click="reverse()" class="button button-action button-large" style="width: 100%; font-weight: bolder">±</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="22" @click="addN(0)" class="button button-action button-large" style="width: 100%; font-weight: bolder">0</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id="23" @click="addDot()" class="button button-action button-large" style="width: 100%; font-weight: bolder">.</button>
      </div>
      <div style="float:left;width: 25%; text-align: center">
        <button id='24' @click="doCalculate()" class="button button-action button-large" style="width: 100%; font-weight: bolder">=</button>
      </div>
    </div>
    <br>
    <div style="width: 62%;margin: auto;clear: both" align="center">
      <br>
      <p align="center" style="font-family: Arial">{{usage}}</p>
    </div>
  </div>
</template>

<script>
const co = ['', '%', '√', '²', '1/', 'ans', 'c', 'bs', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '=']
export default {
  name: 'calculator',
  data () {
    return {
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
    }
  },
  methods: {
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
        this.num1Raw = '-' + this.num1Raw
      } else
      if (this.readyNum1 && this.opReady && this.readyNum2 && this.op !== '/') {
        this.expression = this.num1Raw + ' ' + this.op + ' -' + this.num2Raw
        this.num2Raw = '-' + this.num2Raw
      }
    },
    backspace: function () {
      if (this.toClear) {
        this.clear(true)
      }
      if (this.readyNum2) {
        this.expression = this.expression.substring(0, this.expression.length - 1)
        this.num2Raw = this.num2Raw.substring(0, this.num2Raw.length - 1)
        if (this.num2Raw.length === 0) {
          this.readyNum2 = false
        }
      } else
      if (this.readyNum1 && !this.opReady) {
        this.expression = this.expression.substring(0, this.expression.length - 1)
        this.num1Raw = this.num1Raw.substring(0, this.num1Raw.length - 1)
        if (this.num1Raw.length === 0) {
          this.readyNum1 = false
        }
      } else
      if (this.readyNum1 && this.opReady) {
        this.expression = this.num1Raw
        this.opReady = false
      }
    },
    doCalculate: function () {
      // console.log(1)
      // console.log(this.expression);

      if (this.readyNum1 && !this.readyNum2 && this.opReady) {
        return
      }
      if (!this.readyNum1) {
        return
      }
      // console.log(1)
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
      // console.log(exp)
      // let ce = new CalcEval()
      let a = eval(exp)
      this.lastAnswer = eval(exp)
      this.answer = this.lastAnswer.toString()
      this.toClear = true
      // console.log(a)
      return a
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
}
</script>

<style>
  @import './../static/buttons.css';
</style>
