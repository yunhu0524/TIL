# 26장 ES6 함수의 추가 기능

ES5 까지의 자바스크립트 함수는 별다른 구분 없이 일반 함수, 생성자 함수, 메서드 등으로 다양하게 호출할 수 있다.

언뜻 보면 편리한 것 같지만 혼란을 야기할 수 있고 성능 상에서도 좋지 않다.

ES5 까지의 모든 함수는 생성자 함수로서 호출되지 않아도 불필요한 프로토타입 객체를 생성할 뿐만 아니라, 호출 방식에 특별한 제약이 없기 때문에 실수를 유발할 가능성이 있기 때문이다.

이러한 문제를 해결하기 위해 ES6에서는 함수를 사용 목적에 따라 일반 함수, 메서드, 화살표 함수로 종류를 구분하였다.

|ES6 function|constructor|prototype|super|arguments
|----|----|----|----|----
일반 함수| O | O | X | O |
메서드 | X | X | O | O |
화살표 함수 | X | X | X | X |

## 2. 메서드 

메서드 만들기 

객체 user에게 인사할 수 있는 능력을 부여해 줍시다.
```js 
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
}; 

user.sayHi(); // 안녕하세요! 

// 함수 선언 //이미 정의된 함수를 이용해서 만들 수도 있다.
function sayHi() {
  alert("안녕하세요!");
};

// 선언된 함수를 메서드로 등록
user.sayHi = sayHi;

```
함수 표현식으로 함수를 만들고, 객체 프로퍼티 user.sayHi에 함수를 할당해 주었습니다.

이제 객체에 할당된 함수를 호출하면 user가 인사를 해줍니다.

이렇게 객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.

위 예시에선 user에 할당된 sayHi가 메서드이다.
```js
const obj = {
  x: 1,
  
  // 메서드
  foo() { 
    return this.x;
  },
  
  // 메서드가 아닌 일반 함수
  bar: function() {
    return this.x;
  }
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1
```
ES6 메서드는 인스턴스를 생성할 수 없는 non-constructor이기 때문에, 생성자 함수로서 호출할 수 없고 프로토타입 또한 생성하지 않는다.

> 호출할 수 있는 함수 객체를 callable이라 하며 인스턴스를 생성할 수 있는 함수 객체를 construtor 인스턴스를 생성할 수 없는 함수 객체를 non-constructor라고 부른다.

<br>
<br>

> 인스턴스 
> * a instanceof B 는 a가 B의 인스턴스라면 true를 반환하고, 아니라면 false를 반환한다.
MDN에서는 instanceof 연산자에 대해 이렇게 설명하고 있다.
> * [instanceof 연산자](https://velog.io/@code-bebop/JS-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4instance)는 object의 프로토타입 체인에 constructor.prototype이 존재하는지 판별합니다.
>

<br>
<br>

```js
new obj.foo(); // TypeError: obj.foo is not a constructor
new obj.bar(); // bar {}
```

또한 수퍼클래스의[super](https://geunee92.tistory.com/14) 메서드를 참조하는 super 키워드를 사용할 수 있다. ES6 메서드가 아닌 함수는 super 키워드를 사용할 수 없다.

```js
const base = {
  name: 'Lee',
  sayHi() {
    return `H! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  
  // 메서드
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
  
  // 일반 함수
  sayHi: function () {
    // SyntaxError. 'super' keyword unexpected here
    return `${super.sayHi()}. how are you doing?`;
  }
}

console.log(derived.sayHi()); // Hi! Lee. how are you doing?

```

> ES6의 메서드는 본연의 기능인 super를 추가하고 의미적으로 맞지 않는 기능인 constructor는 제거했기 때문에, ES6 이전의 메서드 정의 방식은 사용하지 않는 것이 좋다.



## 3. 화살표 함수

화살표 함수(arrow function)는 function 키워드 대신 화살표 => 를 사용해 함수를 간략히 정의한다.

화살표 함수의 특징은 다음과 같다.
<br/>
<br/>
### 1. 인스턴스를 생성할 수 없다.

화살표 함수는 생성자 함수로서 호출할 수 없다.

```js
const Foo = () => {};

new Foo(); // TypeError: Foo is not a constructor
```

인스턴스를 생성할 수 없기 때문에 prototype 프로퍼티도 없고 프로토타입도 생성하지 않는다.
<br/><br/>
### 2. 중복된 매개변수 이름을 선언할 수 없다.

```js

// 일반 함수
function normal(a, a) {
  return a + a;
}
console.log(normal(1, 2)); // 4


// 화살표 함수
const arrow = (a, a) => a + a;
// SyntaxError: Duplicate parameter name not allowed in this context

```
일반 함수는 매개변수 이름을 중복해서 선언해도 에러가 발생하지 않지만, 화살표 함수에서는 에러가 발생한다.
<br/><br/>
### 3. 함수 자체의 this, super, arguments를 갖지 않는다.

화살표 함수는 함수 내부에서 this, super, arguments를 참조하면, 스코프 체인을 통해 상위 스코프의 this, super, arguments를 참조한다.
<br/><br/>
### 4. this

화살표 함수가 일반 함수와 구별되는 가장 큰 특징은 바로 this다.<br/>

화살표 함수의 this는 일반 함수의 this와 다르게 동작한다.

22장 this에서도 살펴봤듯이 this 바인딩은 함수가 어떻게 호출했는지에 따라 동적으로 결정된다.<br/>

 이 때 주의할 것은 일반 함수로서 호출되는 콜백 함수의 경우다.

22장에서 봤던 콜백 함수 예제를 다시 보자.

```js
var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: f}
    
    // 콜백 함수
    setTimeout(function() {
      console.log("callback's this: this", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  }
};

obj.foo();
```

일반 함수로서 호출되는 모든 함수 내부의 this는 전역 객체를 가리킨다.<br/>
 즉, 메서드 내부에서 setTimeout 함수에 전달된 콜백 함수의 this에는 전역 객체가 바인딩이 된다. <br/>
 그렇기 때문에 this.value는 obj 객체의 value 프로퍼티가 아닌 전역 객체의 window.value 프로퍼티를 참조한다.

화살표 함수는 이런 콜백 함수의 this와 외부 함수의 this의 불일치 문제를 해결할 수 있다.

```js
var value = 1;

const obj = {
  value: 100,
  foo() {
    setTimeout(() => console.log(this.value), 100); // 100
  }
};

obj.foo();
```
화살표 함수는 함수 자체의 this 바인딩을 갖지 않으며, 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 참조한다.

그렇기 때문에 setTimeout 함수에 전달된 콜백 함수는 상위 스코프인 foo 함수의 this를 참조해, obj 객체의 value 프로퍼티를 참조한다.

그렇다면 다음의 예제의 결과는 어떻게 나오는지 보자.

```js
const counter = {
  num: 1,
  increase: () => ++this.num
};

console.log(counter.increase()); // ?

```
프로퍼티에 할당한 화살표 함수도 스코프 체인 상에서 가장 가까운 상위 함수 중에서 화살표 함수가 아닌 함수의 this를 참조한다.<br/>
 즉 counter.increase() 값은 화살표 함수의 상위 스코프인 전역 객체를 가리켜, NaN이 출력된다.

따라서 이렇게 메서드를 화살표 함수로 정의하는 것은 피해야 한다.

### 5. super

화살표 함수는 함수 자체의 super 바인딩을 갖지 않는다. 화살표 함수 내부에서 super를 참조하면 상위 스코프의 super를 참조한다.

```js 
class Base {
  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  sayHi = () => `${super.sayHi()} how are you doing?`;
}

const derived = new Derived('Lee');
console.log(derived.sayHi()); // Hi! Lee how are you doing?
```
super는 ES6 메서드 내에서만 사용할 수 있다. 화살표 함수 sayHi는 상위 스코프인 constructor super 바인딩을 참조해 super 바인딩을 갖지 않아도 에러가 발생하지 않는다.

### 6. arguments

화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다. 화살표 함수 내부에서 arguments를 참조하면 상위 스코프의 arguments를 참조한다.

```js 
(function () {
  const foo = () => console.log(arguments);
  foo(3, 4); // [Arguments] { '0': 1, '1': 2 }
}(1, 2));


const foo = () => console.log(arguments); 
foo(1, 2); // ReferenceError: arguments is not defined
```

즉시 실행 함수 안에서 화살표 함수 foo는 상위 스코프인 즉시 실행 함수의 arguments를 가리킨다. <br/>또한 전역 함수로 선언한 화살표 함수 foo는 상위 스코프인 전역의 arguments를 가리켜 에러를 발생시킨다. <br/>전역에는 arguments 객체가 존재하지 않기 때문이다.

## 26.4 Rest 파라미터

Rest 파라미터는 매개변수 이름 앞에 세 개의 점 `...`을 붙여서 정의한 매개변수를 말하며, 
<br/>함수에 전달된 인수들의 목록을 배열로 전달받는다.

```js
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [2, 3, 4, 5]
}

foo(1, 2, 3, 4, 5);
```
Rest 파라미터는 이름 그대로 먼저 선언된 매개변수에 할당된 인수를 제외한 나머지 인수들로 구성된 배열이 할당되므로, <br/>반드시 마지막 파라미터이어야 한다.

또한 <strong>Rest 파라미터는 단 하나만 선언할 수 있다.</strong>

```js
function foo(...rest1, ...rest2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```
Rest 파라미터는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.

```js
function foo(...rest) {}
console.log(foo.length); // 0

function bar(x, ...rest) {}
console.log(bar.length); // 1

function baz(x, y, ...rest) {}
console.log(baz.length); // 2
```

## 26.5 매개변수 기본값

자바스크립트 엔진은 매개변수의 개수와 인수의 개수를 체크하지 않으며, <br>
인수가 전달되지 않은 매개변수의 값은 undefined다. 이를 방치하면 의도치 않은 결과가 나올 수 있다.

```js 
function sum(x, y) {
  return x + y;
}

console.log(sum(1)); // NaN
```

따라서 매개변수에 인수가 전달되었는지 확인해 인수가 전달되지 않은 경우에는 매개변수에 기본 값을 할당하는 방어 코드를 넣어야 한다.

```js 
function sum(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

console.log(sum(1)); // 1
```
ES6에서 도입된 매개변수 기본값을 사용하면 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다.

```js 
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1)); // 1
```
단, 매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효하다.

```js
function logName(name = 'Lee') {
  console.log(name);
}

logName();          // Lee
logName(undefined); // Lee
logName(null);      // null
```
앞서 살펴본 Rest 파라미터에는 기본값을 지정할 수 없다.
```js
function foo(...rest = []) {
  console.log(rest);
}
// SyntaxError: Rest parameter may not have a default initializer
```
