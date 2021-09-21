# 32장 String 

## 32.1 String 생성자 함수 

> 표준 빌트인 객체인 String 객체는 생성자 함수 객체다. 
> 
> 따라서 new 연산자와 함께 호출하여 String 인스턴스를 생성할 수 있다.

String 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 

[[StringData]] 내부 슬롯에 빈문자열을 할당한 String 래퍼 객체를 생성한다.

```js
const strObj = new String();
console.log(strObj); 
//String {length: 0, [[PrimitiveValue]]: " "}
//실제 찍히는 값 => String {''}
```
위 예제를 크롬 브라우저의 개발자 도구에서 실행 해보면 [[PrimitiveValue]]라는 접근할 수 없느 프로퍼티가 보인다. 

이는 [[StringData]] 내부 슬롯을 가리킨다. 

ES5에서는 [[StringData]]를 [[PrimitiveValue]]라 불렀다.

String 생성자 함수의 인수로 문자열을 전달하면서 new 연산자와 함께 호출하면 

[[StringData]] 내부 슬롯에 인수로 전달받은 문자열을 할당한 String 래퍼 객체를 생성한다.

```js
const strObj = new String('Lee');
console.log(strObj);
//String {'Lee'}
```

String 래퍼 객체는 배열과 마찬가지로 length 프로퍼티와 인덱스를 나타내는 

숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.

> 유사 배열 객체 
> 
>  배열같이 생겼지만 사실 객체 해서 유사 배열 객체다.<br>
> 일반 객체와 중요한 차이가 forEach, map, filter, reduce 같은 메서드를 사용할 수 없다는 것
> 
> iterable 객체
> 
> 반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체입니다. 이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문을 적용할 수 있습니다.


따라서 배열과 유사하게 인덱스를 사용하여 각 문자에 접근할 수 있다.

```js
console.log(strObj[0]);// L

// 문자열은 원시 값이므로 변경할 수 없다. 
// 이떄 에러가 발생하지 않는다.

strObj[0] = 'S';
console.log(strObj); // 'Lee'
```

String 생성자 함수의 인술 문자열이 아닌 값을 전달하면 인수를 문자열로 강제 변환한 후,

[[StringData]] 내부 슬롯에 변환된 문자열을 할당한 String 래퍼 객체를 생성한다.

> 원시 타입이 wrapper 객체의 메소드를 사용할 수 있는 이유
> 
>  원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다.

```js
let strObj = new String(123);
console.log(strObj);
///String {'123'}

strObj = new String(null);
console.log(strObj);
//String {'null'}
```

## 32.1 length 프로퍼티

length 프로퍼티는 문자열의 문자 개수를 반환한다.

```js
'Hello'.length; // 5
'안녕하세요'.length; // 6
```
String 객체는 length 프로퍼티를 소유하고 있으므로 유사 배열 객체이다.

## 32.3 String 메서드

배열에는 원본을 직접 변경하는 메서드와 

원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드가 있다.

String 객체에는 원본 String 래퍼 객체를 직접 변경하는 메서드는 존재하지 않는다.

String 객체의 모든 메소드는 언제나 새로운 문자열을 반환한다. 문자열은 변경 불가능(immutable)한 원시 값이기 때문이다.

사용 빈도가 높은 String 메서드에 대해 살펴보자

## 32.3.1 String.prototype.indexOf

인수로 전달한 문자 또는 문자열을 대상 문자열에서 검색하여 처음 발견된 곳의 index를 반환한다.

 발견하지 못한 경우 -1을 반환한다.

 ```js
 const str = 'Hello World';

str.indexOf('l'));  // 2
str.indexOf('or')); // 7
str.indexOf('x')); //-1
// 문자열 str의 인덱스 3부터 l 을 검색하여 첫 번째 인덱스를 반환한다.
str.indexOf('l' , 3)); // -1


if (str.indexOf('Hello') !== -1) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}

// ES6: String.prototype.includes
// 사용하면 가독성이 더 좋다.
if (str.includes('Hello')) {
  // 문자열 str에 'hello'가 포함되어 있는 경우에 처리할 내용
}
```

## 32.3.2 String.prototype.search

search 메서드는 댁상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.

검색에 실패하면 -1을 반환한다.

```js
const str = 'Hello world';

//문자열 str에서 정규 표현식과 마치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
str.saerch(/o/); //4
str.search(/x/); //-1
```

## 32.3.3 String​.prototype​.includes

```js
const str = 'Hello world';

str.includes('Hello'); //true
str.includes('');//true
str.includes('x');//false
str.includes();//false

2째 인수로 검색을 시작할 인덱스를 전달 할 수 있다. 
str.includes('ㅣ',3); //ture
str.includes('H',3); //false
//문자열 str의 인덱스 3부터 'l'이 포함되어 있는지 확인
```
## 32.3.4 String​.prototype​.startsWith

ES6에서 도입된 startsWith 는 대상문자열로 시작하는지 확인하여 그결과를 ture 또는 false

```js
const str = 'Hello world';
//문자열이 str 이 'He'로 시작하는지 확인
str.startsWith('He'); // true
str.startsWith('x')//false
//2 번째 인수로 검색을 시작할 인덱스를 전달 가능

str.startsWith('',5); //ture

```

## 32.3.5 String​.prototype​.endsWith

문자열로 끝나는지 확인하여 그 결과를 true 또는 false로 반환한다.

```js
const str = 'Hello world';

// 문자열 str 이 'ld' 로 끝나는지 확인
str.endsWith('ld'); //true
str.endsWith('x'); // false

//2 번째 인수로 검색할 문자열의 길이를 전달 할 수 있다.
// 문자열 str의 처음부터 5자리까지 'lo'로 끝나는지 확인
str.endsWith('lo',5);
```
## 32.3.6 String.prototype.charAt

인수로 전달한 index를 사용하여 인덱스(index)에 해당하는 위치의 문자를 반환한다

```js
const str = 'Hello';

// 문자열 순회. 문자열은 length 프로퍼티를 갖는다.
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
} //H e l l o

```
인덱스가 문자열의 범위를 벗어난 정수인 경우 빈 문자열을 반환한다.

```js 
str.charAt(5); // ''
```

## 32.3.7 String.prototype.substring 

대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달 받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환한다.

```js
const str = 'Hello world';

//인덱스 1부터 인덱스 4 이전까지의 부분 문자열을 반환한다.

str.substring(1,4) // ell
// 인덱스 1부터 마지막 문자까지 부분 문자열을 반환한다.
str.substring(1) // 'ello world'
// 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
str.substring(4,1) //'ell'

// 인수 < 0 또는 NaN인 경우 : 0으로 취급된다.
console.log(str.substring(-2)); // Hello World

// 인수 > 문자열의 길이(str.length) : 인수는 문자열의 길이(str.length)으로 취급된다.
console.log(str.substring(1, 100)); // ello World

console.log(str.substring(20)); // ''
// indexOf메소드 와 함께 사용하면 특정 문자열을 기준으로 앞뒤에 위치한 부분 문자열을 취득할 수 있다.
console.log(str.substring(0, str.indexOf(' '))); // 'Hello'
console.log(str.substring(str.indexOf(' ') + 1, str.length)); // 'World'
```
## 32.3.8 String.prototype.slice

String.prototype.substring과 동일하다.

 단, String.prototype.slice는 음수의 인수를 전달할 수 있다.

 ```js
 const str = 'hello world';

 // 0번째부터 5번째 이전 문자까지 잘라내어 반환
str.substring(0, 5); // hello
// slice 메서드는 음수인 인수를 전달할 수 있다. 뒤에서 5자리를 잘라내어 반환한다.
str.slice(-5); // 'world'

// 2번째부터 마지막 문자까지 잘라내어 반환
console.log(str.substring(2)); // llo world
console.log(str.slice(2)); // llo world
```
## 32.3.9 String.prototype.toUpperCase()

대상 문자열의 모든 문자를 소문자로 변경한다.

```js
const str = 'Hello world'

str.toUpperCase); //HELLO WORLD
```

## 32.3.10 String.prototype.toLowerCase()

대상 문자열의 모든 문자를 소문자로 변경한다.

```js
const str = 'HELLO WORLD'

str.toUpperCase); //hello world
```

## 32.3.11 String.prototype.trim()

대상 문자열 양쪽 끝에 있는 공백 문자를 제거한 문자열을 반환한다.

```js

const str = '   foo  ';

str.trim(); // 'foo'

// 정규 표현ㅅㄱ을 인수로 전달하여 공백 문자를 제거할 수 도 있다.
console.log(str.replace(/\s/g, ''));   // 'foo'
console.log(str.replace(/^\s+/g, '')); // 'foo  '
console.log(str.replace(/\s+$/g, '')); // '   foo'
```

## 32.3.12 String.prototype.repeat
인수로 전달한 숫자만큼 반복해 연결한 새로운 문자열을 반환한다.

 count가 0이면 빈 문자열을 반환하고 음수이면 RangeError를 발생시킨다.
```js

const str = 'abc';
str..repeat(0));   // ''
str..repeat(1));   // 'abc'
str..repeat(2));   // 'abcabc'
str..repeat(2.5)); // 'abcabc' (2.5 → 2)
str.repeat(-1));  // RangeError: Invalid count value

```
## 32.3.13 String.prototype.replace

첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 두번째 인수로 전달한 문자열로 대체한다.

 원본 문자열은 변경되지 않고 결과가 반영된 새로운 문자열을 반환한다.

 ```js 

 const str = 'Hello world';

// 첫번째로 검색된 문자열만 대체하여 새로운 문자열을 반환한다.
str.replace('world', 'Lee'); // Hello Lee

// 특수한 교체 패턴을 사용할 수 있다. ($& => 검색된 문자열)
str.replace('world', '<strong>$&</strong>'); // Hello <strong>world</strong>

/* 정규표현식
g(Global): 문자열 내의 모든 패턴을 검색한다.
i(Ignore case): 대소문자를 구별하지 않고 검색한다.
*/
str.replace(/hello/gi, 'Lee'); // Lee Lee
```

## 32.3.14 String.prototype.split

첫번째 인수로 전달한 문자열 또는 정규표현식을 대상 문자열에서 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다. 

원본 문자열은 변경되지 않는다.

인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
```js
const str = 'How are you doing?';

// 공백으로 구분(단어로 구분)하여 배열로 반환한다
str.split(' '); // [ 'How', 'are', 'you', 'doing?' ]

// 정규 표현식
str.split(/\s/); // [ 'How', 'are', 'you', 'doing?' ]

// 인수가 없는 경우, 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.
str.split(); // [ 'How are you doing?' ]

// 각 문자를 모두 분리한다
str.split(''); // [ 'H','o','w',' ','a','r','e',' ','y','o','u',' ','d','o','i','n','g','?' ]

// 공백으로 구분하여 배열로 반환한다. 단 요소수는 3개까지만 허용한다
str.split(' ', 3); // [ 'How', 'are', 'you' ]

```