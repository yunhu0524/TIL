# 30장 Date 

표준 빌트인 객체인 Date는 

날짜와 시간(연, 월, 일, 시, 분, 초, 밀리초)을 위한 메서드를 제공하는 

빌트인 객체이면서 생성자 함수이다.

## 30.1 Date 생성자 함수 

Date는 생성자 함수다.

 Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 
 
 정수값을 갖는다.

 > 예를들어, 모든 시간의 기점인 1970년 1월 1일 0시를 나타내는 Date 객체는 내부적으로 정수값 0을 가지며, 1970년 1월 1일 0시를 기점으로 하루가 지난 1970년 1월 2일 0시를 나타내는 Date 객체는 내부적을 정수값 86,400,000(24h*60m60s*1000ms)을 갖는다.

 Date 생성자 함수로 객체를 생성하는 방법은 다음과 같이 4가지가 있다.

 ### 30.1.1 new Date()

 Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환한다.

 ```js
 new Date();
 //Mon Sep 06 2021 21:08:05 GMT+0900 (한국 표준시)
 ```

 Date 생성자 함수를 new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.

 ```js
 Date()
 //"Mon Sep 06 2021 21:10:12 GMT+0900 (한국 표준시)"
 ```

### 30.1.2 new Date(milliseconds)

인수로 숫자 타입의 밀리초를 전달하면 

1970년 1월 1일 00:00(UTC)을 기점으로 

인수로 전달된 밀리초만큼 경과한 날짜와 시간을 가지는 인스턴스를 반환한다.

```js
// KST(Korea Standard Time)는 GMT(그리니치 평균시: Greenwich Mean Time)에 9시간을 더한 시간이다.
let date = new Date(0);
console.log(date); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

// 86400000ms는 1day를 의미한다.
// 1s = 1,000ms
// 1m = 60s * 1,000ms = 60,000ms
// 1h = 60m * 60,000ms = 3,600,000ms
// 1d = 24h * 3,600,000ms = 86,400,000ms
date = new Date(86400000);
console.log(date); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)
```
### 30.1.3 new Date(dateString)

Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면

 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.

> 이때 인수로 전달한 문자열은 Date.parse메서드에 의해 해석 가능한 형식이어야 한다.

```js
let date = new Date('May 16, 2019 17:22:10');
console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)

date = new Date('2019/05/16/17:22:10');
console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)
```

### 30.1.4 new Date(year, month[, day, hour, minute, second, millisecond])

Date 생성자 함수에 년, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 전달하면

 지정된 날짜와 시간을 가지는 인스턴스를 반환한다.
 
  이때 년, 월은 반드시 지정하여야 한다. 
  
  지정하지 않은 옵션 정보는 0 또는 1으로 초기화된다.

  |인수|내용|
  |---|---|
  year|	1900년 이후의 년
month|	월을 나타내는 0 ~ 11까지의 정수 (주의: 0부터 시작, 0 = 1월)
day	|일을 나타내는 1 ~ 31까지의 정수
hour|	시를 나타내는 0 ~ 23까지의 정수
minute|	분을 나타내는 0 ~ 59까지의 정수
second|	초를 나타내는 0 ~ 59까지의 정수
millisecond|	밀리초를 나타내는 0 ~ 999까지의 정수

년, 월을 지정하지 않은 경우 1970년 1월 1일 00:00(UTC)을 가지는 인스턴스를 반환한다.

```js
// 월을 나타내는 2는 3월을 의미한다.
// 2019/5/1/00:00:00:00
let date = new Date(2020, 2);
 // Wed May 01 2019 00:00:00 GMT+0900 (한국 표준시)

// 월을 나타내는 2는 3월을 의미한다.
// Thu Mar 26 2020 10:00:00 GMT+0900 (한국 
new Date(2020, 2, 26, 10, 00, 00, 0);
// Thu Mar 26 2020 10:00:00 GMT+0900 (한국..

// 가독성이 훨씬 좋다.
new Date('2020/3/26/10:00:00:00');
// Thu Mar 26 2020 10:00:00 GMT+0900 (한국 표준시)
```

## 30.2 Date 메서드

### 30.2.1 Date.now
1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.

```js
Date.now();
//1630931075946
```

### 30.2.2 Date.parse

1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 

지정 시간(new Date(dateString)의 인수와 동일한 형식)까지의 밀리초를 숫자로 반환한다.

```js
Date.parse('Jan 2, 1970 00:00:00 UTC'); // UTC
 // 86400000

Date.parse('Jan 2, 1970 09:00:00'); // KST
 // 86400000

Date.parse('1970/01/02/09:00:00'); // KST
// 86400000
```

### 30.2.3 Date.UTC

1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.

Date.UTC 메소드는 new Date(year, month[, day, hour, minute, second, millisecond])와 같은 형식의 인수를 사용해야 한다. 

Date.UTC 메소드의 인수는 local time(KST)가 아닌 UTC로 인식된다.

months는 월을 의미 하는 0~11까지의 정수다. 

0부터 시작하므로 주의가 필요하다.

```js
Date.UTC(1970, 0, 2);
//86400000
Date.UTC('1970/1/2');
//NaN
```
### 30.2.4  Date.prototype.getFullYear

년도를 나타내는 4자리 숫자를 반환한다.

```js
new Date('2020/07/24').getFullYear();
//2020
```

### 30.2.5 Date.prototype.setFullYear

년도를 나타내는 4자리 숫자를 설정한다. 년도 이외 월, 일도 설정할 수 있다.

```js
const today = new Date();

// 년도 지정
today.setFullYear(2000);

today.getFullYear();
// 2000

// 년도 지정
today.setFullYear(1900, 0, 1);
today.getFullYear();
 // 1900
```
### 30.2.6 Date.prototype.getMonth
월을 나타내는 0 ~ 11의 정수를 반환한다. 1월은 0, 12월은 11이다.
```js
new Date('2020/07/24').getMonth();/// 6
```
### 30.2.7 Date.prototype.setMonth
월을 나타내는 0 ~ 11의 정수를 설정한다.

 1월은 0, 12월은 11이다. 월 이외 일도 설정할 수 있다.

 ```js
 const today = new Date();

// 월을 지정
today.setMonth(0); // 1월
today.getMonth();

// 월/일을 지정
today.setMonth(11, 1); // 12월 1일
today.getMonth();// 11

```

### 30.2.8 Date.prototype.getDate

날짜(1 ~ 31)를 나타내는 정수를 반환한다.

```js
new Date('2020/07/24').getDate();
// 24
```


### 30.2.9 Date.prototype.setDate
날짜(1 ~ 31)를 나타내는 정수를 설정한다.
```js
const today = new Date();
today.setDate(1);
today.getDate(); // 1
```

### 30.2.10 Date.prototype.getDay

요일(0 ~ 6)를 나타내는 정수를 반환한다. 반환값은 아래와 같다.

|요일|반환값|
|---|---|
일요일|	0
월요일|	1
화요일|	2
수요일|	3
목요일|	4
금요일|	5
토요일|	6

```js 

new Date('2020/07/24').getDay();
//5
```
### 30.2.11  Date.prototype.getHours

시간(0 ~ 23)를 나타내는 정수를 반환한다.

```js
new Date('2020/07/24/12:00').getHour(); // 12
```
### 30.2.12  Date.prototype.setHours

시간(0 ~ 23)를 나타내는 정수를 설정한다.

 시간 이외 분, 초, 밀리초도 설정할 수 있다.

 ```js
 const today = new Date();

// 시간 지정
today.setHours(7);

today.getHours(); // 7

// 시간/분/초/밀리초 지정
today.setHours(0, 0, 0, 0); // 00:00:00:00
today.getHours(); // 0
```

### 30.2.13  Date.prototype.getMinutes

분(0 ~ 59)를 나타내는 정수를 반환한다.

```js
new Date('2020/07/24/12:30').getMinutes();// 30
```
### 30.2.14  Date.prototype.setMinutes

분(0 ~ 59)를 나타내는 정수를 설정한다. 분 이외 초, 밀리초도 설정할 수 있다.

```js
const today = new Date();

// 분 지정
today.setMinutes(50);
today.getMinutes();// 50

// 분/초/밀리초 지정
today.setMinutes(5, 10, 999); // HH:05:10:999
 today.getMinutes();
 // 5
 ```

 ### 30.2.15  Date.prototype.getSeconds

 초(0 ~ 59)를 나타내는 정수를 반환한다.

 ```js
 new Date('2020/07/24/12:30:10').getSeconds(); // 10
 ```

 ### 30.2.16 Date.prototype.setSeconds

 초(0 ~ 59)를 나타내는 정수를 설정한다. 초 이외 밀리초도 설정할 수 있다.
```js 
const today = new Date();

// 초 지정
today.setSeconds(30);
today.getSeconds();
 // 30

// 초/밀리초 지정
today.setSeconds(10, 0); //HH:MM:10:000
 today.getSeconds();// 10
```
 ### 30.2.17 Date.prototype.getMilliseconds
```js 
new Date('2020/07/24/12:30:10:150').getMilliseconds(); //150
```
 ### 30.2.18  Date.prototype.setMilliseconds

 밀리초(0 ~ 999)를 나타내는 정수를 설정한다.

 ```js
 const today = new Date();

// 밀리초 지정
today.setMilliseconds(123);
today.getMilliseconds();
// 123
```
 ### 30.2.19  Date.prototype.getTime

1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 반환한다.

```js
new Date('2020/07/24/12:30').getTime// 159556140000
```
 ### 30.2.20  Date.prototype.setTime

1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초를 설정한다.

```js
const today = new Date();

// 1970년 1월 1일 00:00:00(UTC)를 기점으로 현재 시간까지 경과된 밀리초 지정
today.setTime(86400000); // 86400000 === 1day
const time = today.getTime();
 // 86400000
 ```

  ### 30.2.21 Date.prototype.getTimezoneOffset
UTC와 지정 로케일(Locale) 시간과의 차이를 분단위로 반환한다.

```js
const today = new Date();
//today의 지정 로캘은 KST다.
const x = today.getTimezoneOffset() / 60; // -9

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다. 
```
  ### 30.2.22  Date.prototype.toDateString

  사람이 읽을 수 있는 형식의 문자열로 날짜를 반환한다.
```js
  const today = new Date('2020/7/24/12:30');

today.toString(); //"Fri Jul 24 2020"
today.toDateString();
```

### 30.2.23 Date.prototype.toTimeStringß

사람이 읽을 수 있는 형식의 문자열로 시간을 반환한다.

```js
const today = new Date('2020/7/24/12:30');

today.toString();     // Fri Jul 24 2020 12:30:00 GMT+0900 (한국 표준시)
today.toTimeString(); // 12:30:00 GMT+0900 (한국 표준시)"
```


