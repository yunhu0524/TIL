# 28장 Number
표준 빌트인 객체<sup>standard built-in Object</sup>인 Number는 원시 타입인 <strong>숫자를 다룰 때 유용한 프로퍼티와 메서드를 제공</strong>한다.

## 28.1 Number 생성자 함수

표준 빌트인 객체인 Number 객체는 생성자 함수 객체다. <br>

따라서 new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다.

Number 생성자 함수에 인수를 전달하지 않고 

new 연산자와 함께 호출하면 [[NumberData]] 내부 슬롯에 0을 할당한 Number 래퍼 객체를 생성한다.

```js
const numObj = new Number();
console.log(numObj);// Number {[[PrimittiValue]]:0}
```

위 예제를 크롬 브라우저의 개발자 도구에서 실행해보면 

[[PrimitiveValue]]라는 접근할 수 없는 프로퍼티가 보인다. 

이는 [[NumberData]] 내부 슬롯을 가리킨다. 

ES5에서는 [[NumberData]] 내부 슬롯에 인수로 전달받은 숫자를 할당한 Number [래퍼 객체](https://velog.io/@kim-jaemin420/Wrapper-Object%EB%9E%98%ED%8D%BC-%EA%B0%9D%EC%B2%B4-jyt19oms)를 생성한다.

> 원시 타입이 wrapper 객체의 메소드를 사용할 수 있는 이유는 원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.

```js
const numObj = new Number(10);
console.log(numObj);
//Number {{[PrimitiveValue]:10}}
```
Number 생성자 함수의 인수로 숫자가 아닌 값을 전달하면 인수를 수자로 강제 변환한 후

[[NumverData]] 내부 슬롯에 변환된 숫자를 할당한 Number 래퍼 객체를 생성한다. 인수를 숫자로 변환할 수 없다면 NaN을 [[NumberData]] 내부 슬롯에 할당한 Number 래퍼 객체를 생성한다.

## 28.2 Number 프로퍼티

### 28.2.1  Number.EPSILON
Number.EPSILON은 JavaScript에서 표현할 수 있는 가장 작은 수이다. 

이는 임의의 수와 그 수보다 큰 수 중 가장 작은 수와의 차이와 같다. 

Number.EPSILON은 약 2.2204460492503130808472633361816E-16 또는 2^-52이다.

부동소수점 산술 연산 비교는 정확한 값을 기대하기 어렵다. 

정수는 2진법으로 오차없이 저장이 가능하지만 부동소수점을 표현하는 가장 널리 쓰이는 표준인 [IEEE 754](https://ko.wikipedia.org/wiki/IEEE_754)은 2진법으로 변환시 무한소수가 되어 미세한 오차가 발생할 수밖에 없는 구조적 한계를 갖는다.

따라서 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 기능을 갖는 함수를 작성하여야 한다.

```js
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false!!!
//Number.EPSILON 은 부돈소수점으로 인해 발생하는 오차를 해결하기 위해 사용한다.

function isEqual(a, b){
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
```
### 28.2.2  Number.MAX_VALUE

자바스크립트에서 사용 가능한 가장 큰 숫자(1.7976931348623157e+308)를 반환한다. 

MAX_VALUE보다 큰 숫자는 Infinity이다.

```js 
Number.MAX_VALUE; // 1.7976931348623157e+308

var num = 10;
num.MAX_VALUE;    // undefined

console.log(Infinity > Number.MAX_VALUE); // true
```

### 28.2.3 Number.MIN_VALUE

자바스크립트에서 사용 가능한 가장 작은 숫자(5e-324)를 반환한다.

 MIN_VALUE는 0에 가장 가까운 양수 값이다. MIN_VALUE보다 작은 숫자는 0으로 변환된다.

 ```js
 Number.MIN_VALUE; // 5e-324

var num = 10;
num.MIN_VALUE;    // undefined

console.log(Number.MIN_VALUE > 0); // true

```

### 28.2.4 Number.POSITIVE_INFINITY
양의 무한대 Infinity를 반환한다.
```js
Number.POSITIVE_INFINITY // Infinity

var num = 10;
num.POSITIVE_INFINITY;   // undefined

```
### 28.2.5
음의 무한대 -Infinity를 반환한다.
```js
Number.NEGATIVE_INFINITY // -Infinity

var num = 10;
num.NEGATIVE_INFINITY;   // undefined
```
### 28.2.6
숫자가 아님(Not-a-Number)을 나타내는 숫자값이다. Number.NaN 프로퍼티는 window.NaN 프로퍼티와 같다.
```js
Number.NaN
```
### 28.2.7 Number.MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER 는 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값이다.
```js
Number.MAX_SAFE_INTEGER 
// 9007199254740991
```
### 28.2.8 Number.MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER 는 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수 값이다.
```js
Number.MIN_SAFE_INTEGER 
// -9007199254740991
```

## 28.3 Number 메서드 

### 28.3.1 Number.isFinite

매개변수에 전달된 값이 정상적인 유한수인지를 검사하여 그 결과를 Boolean으로 반환한다.
```js
Number.isFinite(Infinity)  // false
Number.isFinite(NaN)       // false
Number.isFinite('Hello')   // false
Number.isFinite('2005/12/12')   // false

Number.isFinite(0)         // true
Number.isFinite(2e64)      // true
Number.isFinite(null)      // false. isFinite(null) => true
```
Number.isFinite()는 전역 함수 isFinite()와 차이가 있다. 

전역 함수 isFinite()는 인수를 숫자로 변환하여 검사를 수행하지만 Number.isFinite()는 인수를 변환하지 않는다. 

따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false가 된다.

>인수(argument)란 함수가 호출될 때 함수로 값을 전달해주는 값을 말합니다.

<br>
<br>
28.3.2 Number.isInteger
<br>
<br>
매개변수에 전달된 값이 정수(Integer)인지 검사하여 그 결과를 Boolean으로 반환한다. 


검사전에 인수를 숫자로 변환하지 않는다.
```js
Number.isInteger(123)   //true
Number.isInteger(-123)  //true
Number.isInteger(5-2)   //true
Number.isInteger(0)     //true
Number.isInteger(0.5)   //false
Number.isInteger('123') //false
Number.isInteger(false) //false
Number.isInteger(Infinity)  //false
Number.isInteger(-Infinity) //false
Number.isInteger(0 / 0) //false
```

28.3.3 Number.isNaN

매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환한다.

Number.isNaN()는 전역 함수 isNaN()와 차이가 있다. 
전역 함수 isNaN()는 인수를 숫자로 변환하여 검사를 수행하지만 Number.isNaN()는 인수를 변환하지 않는다.

따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false가 된다.
<br>

```js
Number.isNaN(NaN)       // true
Number.isNaN(undefined) // false. undefined → NaN. isNaN(undefined) → true.
Number.isNaN({})        // false. {} → NaN.        isNaN({}) → true.
Number.isNaN('blabla')  // false. 'blabla' → NaN.  isNaN('blabla') → true.

Number.isNaN(true)      // false
Number.isNaN(null)      // false
Number.isNaN(37)        // false
Number.isNaN('37');     // false
Number.isNaN('37.37');  // false
Number.isNaN('');       // false
Number.isNaN(' ');      // false
Number.isNaN(new Date())             // false
Number.isNaN(new Date().toString())  // false. String → NaN. isNaN(String) → true.

```

28.3.4 Number.isSafeInteger

매개변수에 전달된 값이 안전한(safe) 정수값인지 검사하여 그 결과를 Boolean으로 반환한다. 

안전한 정수값은 -(253 - 1)와 253 - 1 사이의 정수값이다. 검사전에 인수를 숫자로 변환하지 않는다.
```js
Number.isSafeInteger(123)   //true
Number.isSafeInteger(-123)  //true
Number.isSafeInteger(5-2)   //true
Number.isSafeInteger(0)     //true
Number.isSafeInteger(1000000000000000)  // true
Number.isSafeInteger(10000000000000001) // false
Number.isSafeInteger(0.5)   //false
Number.isSafeInteger('123') //false
Number.isSafeInteger(false) //false
Number.isSafeInteger(Infinity)  //false
Number.isSafeInteger(-Infinity) //false
Number.isSafeInteger(0 / 0) //false

```

### 28.3.5 Number.prototype.toExponential

대상을 지수 표기법으로 변환하여 문자열로 반환한다. 

지수 표기법이란 매우 큰 숫자를 표기할 때 주로 사용하며 e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식으로 수를 나타내는 방식이다.

```js
1234 = 1.234e+3

var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77.toExponential());      // SyntaxError: Invalid or unexpected token
console.log(77 .toExponential());     // logs 7.7e+1

```
* 정수 리터럴과 함께 메소드르 사용할 경우
```js
77.toString(); // SyntaxError: Invalid or unexpected token
```

숫자 뒤의 .은 의미가 모호하다.

 소수 구분 기호일 수도 있고 객체 프로퍼티에 접근하기 위한 마침표 표기법(Dot notation)일 수도 있다. 
 
 따라서 자바스크립트 엔진은 숫자 뒤의 .을 부동 소수점 숫자의 일부로 해석한다. 
 
 그러나 77.toString()은 숫자로 해석할 수 없으므로 에러(SyntaxError: Invalid or unexpected token)가 발생한다.


```js
1.23.toString (); // '1.23'
```
위 예제의 경우, 숫자 뒤의 첫 번째 . 뒤에는 숫자가 이어지므로 .은 명백하게 부동 소수점 숫자의 일부이다. 

숫자에 소수점은 하나만 존재하므로 두 번째 .은 마침표 표기법(Dot notation)으로 해석된다.

따라서 정수 리터럴과 함께 메소드를 사용할 경우, 아래의 방법을 권장한다.


```js
(77).toString(); // '77'
```
또한 아래 방법도 허용되기는 한다. 

자바스크립트 숫자는 정수 부분과 소수 부분 사이에 공백을 포함할 수 없다.

 따라서 숫자 뒤의 . 뒤에 공백이 오면 .을 마침표 표기법(Dot notation)으로 해석하기 때문이다.
```js
77 .toString(); // '77'
```

### 28.3.5 Number.prototype.toFixed
매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.

```js
var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed());   // '12346'
// 소숫점 이하 1자리수 유효, 나머지 반올림
console.log(numObj.toFixed(1));  // '12345.7'
// 소숫점 이하 2자리수 유효, 나머지 반올림
console.log(numObj.toFixed(2));  // '12345.68'
// 소숫점 이하 3자리수 유효, 나머지 반올림
console.log(numObj.toFixed(3));  // '12345.679'
// 소숫점 이하 6자리수 유효, 나머지 반올림
console.log(numObj.toFixed(6));  // '12345.678900'
```
### 28.3.7 Number.prototype.toPrecision
매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다. 

지정된 전체 자릿수로 표현할 수 없는 경우 지수 표기법으로 결과를 반환한다.
```js
var numObj = 15345.6789;

// 전체자리수 유효
console.log(numObj.toPrecision());   // '12345.6789'
// 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));  // '2e+4'
// 전체 2자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(2));  // '1.5e+4'
// 전체 3자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(3));  // '1.53e+4'
// 전체 6자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(6));  // '12345.7'
```