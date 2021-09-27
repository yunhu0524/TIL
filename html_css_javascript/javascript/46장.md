# 제너레이터와 async/await

## 46.1 제너레이터란? 
ES6에 도입된 제너레이터(generator)는 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수이다.

1. <strong>제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.</strong>
  <br><br>
  일반함수를 호출하면 제어권이 함수에게 넘어가고 함수 코드를 일괄 실행한다. 즉, 함수 호출자(caller)는 함수를 호출한 이후 함수 실행을 제어할 수 없다. 제너레이터 함수는 함수 실행을 함수 호출자가 제어할 수 있다. 다시 말해, 함수 호출자가 함수 실행을 일시 중지시키거나 재개시킬 수 있다. 이는 함수의 제어권을 함수가 독점하는 것이 아니라 함수 호출자에게 양도(yield)할 수 있다는 것을 의미한다.
  <br><br>
2. <strong>제너레이터 함수는 함수 호출자와 함수의 상태를 주고받을 수 있다.</strong>
  <br><br>
  일반 함수를 호출하면 매개변수를 통해 함수 외부에서 값을 주입받고 함수 코드를 일괄 실행하여 결과값을 함수 외부로 반환한다. 즉, 함수가 실행되고 있는 동안에는 함수 외부에서 함수 내부로 값을 전달하여 함수의 상태를 변경하 수 없다. 제너레이터 함수는 함수 호출자와 양방향으로 함수의 상태를 주고받을 수 있다. 
  다시 말해, 제너레이터 함수는 함수 호출자에게 상태를 전달할 수 있고 함수 호출자로부터 전달받을 수도 있다.
   <br><br>
3. <strong>제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.</strong>
  <br><br>
  일반 함수를 호출하면 함수 코드를 일괄 실행하고 값을 반환한다. 제너레이터 함수를 호출하면 함수 코드를 실행하는 것이 아니라 이터러블이면서 동시에 [이터레이터]('https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators')(객체의 멤버를 반복할 수 있는 객체) 인 제너레이터 객체를 반환한다.
   <br><br>

## 46.2 제너레이터 함수의 정의
제너레이터 함수는 `function*` 키워드로 선언한다. 그리고 하나 이상의 `yield` 표현식을 포함한다. 이것을 제외하면 일반 함수를 정의하는 방법과 같다.
```js
//  제너레이터 함수 선언문
function* genDecFunc() {
  yield 1;
}

// 제너레이터 함수 표현식
const genExpFunc = function* () {
  yield 1;
};

// 제너레이터 메서드
const obj = {
  * genObjMethod() {
    yield 1;
  }
};

// 제너레이터 클래스 메서드
class MyClass {
  * genClsMethd() {
    yield 1;
  }
}
```
애스터리스크(*)의 위치는 `function` 키워드와 함수 이름 사이라면 어디든지 상관없다. 다음 예제의 제너레이터 함수는 모두 유효하다. 하지만 일관성을 유지하기 위해 `function` 키워드 바로 뒤에 붙이는 것을 권장한다.

제너레이터 함수는 화살표 함수로 정의할 수 없다.
```js
const genArrowFunc = * () => {
  yield 1;
}; // SyntaxError: Unexpected token '*'

```

제너레이터 함수는 new 연산자와 함계 생성자 함수로 호출할 수 없다.
```js
function* genFunc() {
  yield 1;
}
new genFunc(); // TypeError: genFunc is not a constructor
```

## 46.3 제너레이터 객체
<strong>제너레이터 함수를 호출하면 함수를 실행하는 것이 아니라 제너레이터 객체를 생성해 반환한다.</strong> 이때 제너레이터 객체는 `이터러블(iterable)이면서 이터레이터(iterator)다.` 다시 말해서 Symbol.iterator 메서드를 상속받는 이터러블이면서 value와 done 프로퍼티를 갖는 객체를 반환하는 next 메서드를 소유하는 이터레이터다.


```js
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}
// 제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
const generator= genFnnc();

// 제너레이터는 이터러블이다.
// 이터러블은 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받는 객체다.
console.log(Symbol.iterator in generator); // true
// 이터레이터는 next 메서드를 갖는다.
console.log('next' in generator);// true
```

제너레이터는 next 메서드와 yield 키워드를 통해 실행을 일시 중지했다가 필요한 시점에 다시 재개할 수 있다.

```js
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = genFunc();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: undefined, done: true}
```

제너레이터 객체의 next 메서드를 호출하면 yield 표현식까지 실행되고 일시 중지되고 함수의 제어권이 호출자로 양도(yield)된다.

이때 next 메서드는 value와 done 프로퍼티를 갖는 객체를 반환한다. value 프로퍼티에는 yield 키워드 뒤의 값이 할당되고, done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 boolean 값이 할당된다.

이후 호출자가 next 메서드를 호출하면 일시 중지된 코드부터 실행을 재개해 다음 yield 표현식까지 실행되고 또 다시 일시 중지를 반복하다가 함수가 끝까지 실행되면 value 프로퍼티에는 함수의 반환 값을, done 프로퍼티에는 true가 할당된다.

## 46.3.1 제너레이터 메서드

제너레이터 객체는 next 메서드를 갖는 이터레이터이지만, 이터레이터에는 없는 return, throw 메서드를 갖는다.
```js
function* genFunc() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

const generator = genFunc();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.return('End!')); // {value: "End!", done: true}
```
`return` 메서드를 호출하면 인수로 전달받은 값을 value 프로퍼티 값으로, `true`을 done 프로퍼티 값으로 갖는 객체를 반환한다.

```js
const generator = genFunc();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.throw('Error!')); // {value: undefined, done: true}
```

`throw` 메서드를 호출하면 인수로 전달받은 에러를 발생시키고 undefined를 value 프로퍼티 값으로, true를 done 프로퍼티 값으로 갖는 객체를 반환한다.

### next 메서드

제너레이터 객체의 next 메서드에는 인수를 전달할 수 있다. 전달한 인수는 제너레이터 함수의 yield 표현식을 할당받는 변수에 할당된다.

```js
function* genFunc() {
  const x = yield 1;
  const y = yield (x + 10);
  return x + y;
}

const generator = genFunc(0);

let res = generator.next();
console.log(res); // {value: 1, done: false}

res = generator.next(10);
console.log(res); // {value: 20, done: false}

res = generator.next(20);
console.log(res); // {value: 30, done: true}
```
처음 호출하는 next 메서드에는 인수를 전달하면 무시되기 때문에 인수를 전달하지 않는다. 처음 next 메서드를 호출하면 yield된 값 1은 x 변수에 할당되지 않는다. x 변수의 값은 next 메서드가 두 번째 호출될 때 결정된다.

다시 next 메서드를 호출하면 두 번째 yield 표현식까지 실행되고 일시 중지된다. 두 번째 next 메서드에 인수로 전달한 10은 genFunc 함수의 x 변수에 할당된다.

마지막 next 메서드에 인수로 전달한 20은 genFunc 함수의 y 변수에 할당되고, 함수의 반환 값 x + y는 next 메서드가 반환한 객체의 value 프로퍼티에 할당된다.

일반적으로 제너레이터의 반환 값은 의미가 없다. 그렇기 때문에 제너레이터에서는 값을 반환할 필요가 없고 return은 종료의 의미로만 사용해야 한다.

> 함수 호출자는 next 메서드를 통해 yield 표현식까지 함수를 실행해 yield 값을 꺼내올 수 있고, next 메서드에 인수를 전달해 yield 표현식을 할당받는 변수에 값을 넣을 수 있다.

이러한 제너레이터의 특성을 활용하면 비동기 처리를 동기 처리처럼 구현할 수 있다.

46.5 제너레이터의 활용

46.5.2 비동기 처리

제너레이터 함수는 next 메서드와 yield 표현식을 통해 함수 호출자와 함수의 상태를 주고받을 수 있다. 이러한 특성을 활용하면 프로미스를 사용한 비동기 처리를 동기 처리처럼 구현할 수 있다. 다시 말해, 프로미스의 후속 처리 메서드 then/catch/finally 없이 비동기 처리 결과를 반환하도록 구현할 수 있다. 

## 46.6 async/await

제너레이터를 사용해서 비동기 처리를 동기 처리처럼 동작하도록 했지만, 제너레이터보다 간단하고 가독성 좋게 동기 처리처럼 동작하도록 구현할 수 있는 `async/await`이 ES8에 도입되었다.

`async/await`은 프로미스 기반으로 동작하고, 프로미스의 then/catch/finally 메서드 없이 동기 처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

`async` 함수는 암묵적으로 반환값을 resolve하는 프로미스를 반환하고, `await` 함수는 대기하다가 비동기 처리가 수행되면 resolve한 처리 결과를 반환한다. `await` 함수는 반드시 `async` 함수 내부에서 사용해야 한다.

```js
// Node.js 환경에서 window.fetch 함수를 사용하기 위함
const fetch = require('node-fetch');

const getGithubUserName = async id => {
  const res = await fetch(`https://api.github.com/users/${id}`);
  const { name } = await res.json();
  console.log(name); // Ungmo Lee
};

getGithubUserName('ungmo2');  
```
`fetch` 함수가 비동기 처리가 완료될 때까지 대기하다가, 완료되면 resolve한 처리 결과가 res 변수에 할당된다. `await` 키워드는 실행을 일시 중지시켰다가 프로미스가 처리 완료 상태가 되면 다시 재개하는 것이다.

### 46.6.3 에러처리
비동기 처리를 위한 전통적인 콜백 패턴은 에러 처리가 곤란하다는 점이 있다.
```js
try {
  setTimeout(() => { throw new Error('Error!'); }, 1000);
} catch (e) {
  // 에러를 캐치하지 못한다.
  console.error('캐치한 에러', e);
}
```

setTimeout 함수의 콜백 함수를 호출한 것은 setTimeout 함수가 아니기 때문에 try...catch 문을 사용해 에러를 캐치할 수 없다.

하지만 async/await에서 에러 처리는 try...catch 문을 사용할 수 있다. 프로미스를 반환하는 비동기 함수는 명시적으로 호출할 수 있기 때문에 호출자가 명확하다.
```js
const fetch = require('node-fetch');

const foo = async () => {
  try {
    const wrongUrl = 'https://wrong.url';
    
    const response = await fetch(wrongUrl);
    const data = await reponse.json();
    console.log(data);
  } catch (err) {
    console.error(err); // TypeError: Failed to fetch
  }
};

foo();
```

foo 함수의 catch 문은 HTTP 통신에서 발생한 네트워크 에러뿐 아니라 try 코드 블록 내의 모든 문에서 발생한 에러까지 모두 캐치할 수 있다.


catch 문을 사용해 에러 처리를 하지 않으면 async 함수는 에러를 reject하는 프로미스를 반환하기 때문에, Promise.prototype.catch 메서드를 사용해 에러를 캐치할 수도 있다.
```js
const fetch = require('node-fetch');

const foo = async () => {
  const wrongUrl = 'https://wrong.url';
    
  const response = await fetch(wrongUrl);
  const data = await reponse.json();
  return data;
};

foo()
  .then(console.log)
  .catch(console.error); // TypeError: Failed to fetch
```
