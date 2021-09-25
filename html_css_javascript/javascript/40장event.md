# 40장 이벤트

브라우저는 클릭이나 키보드 입력, 마우스 이동 등이 일어나면 이를 감지해 특정한 타입의 이벤트를 발생시킨다.

이때 이벤트가 발생했을 때 호출될 함수를 <strong>이벤트 핸들러(event handler)</strong>라 하고, 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러의 호출을 위임하는 것을 <strong>이벤트 핸들러 등록</strong>이라 한다. 즉, 특정 버튼 요소에서 클릭 이벤트가 발생하면 특정 함수(이벤트 핸들러)를 호출하도록 브라우저에게 위임(이벤트 핸들러 등록)할 수 있다.
```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    // 사용자가 버튼을 클릭하면 함수를 호출
    $button.onclick = () => { alert('button click'); };
  </script>
</body>
</html>
```
이렇게 이벤트와 이벤트 핸들러를 통해 사용자와 애플리케이션은 상호작용할 수 있다.

click과 같은 이벤트 타입의 경우 약 200여 가지가 있는데, 이벤트 타입에 대한 상세 목록은 MDN의 Event reference에서 확인할 수 있다.

## 40.3 이벤트 핸들러 등록
### 40.3.1 이벤트 핸들러 어트리뷰트 방식
HTML 요소의 어트리뷰트에는 이벤트 핸들러 어트리뷰트가 있다. 이벤트 핸들러 어트리뷰트 값으로 함수 호출문 등의 문(statement)을 할당하면 이벤트 핸들러가 등록된다.
```html
<!DOCTYPE html>
<html>
<body>
  <button onclick="sayHi('Lee')">Click me!</button>
  <script>
    function sayHi(name) {
    	console.log(`Hi! ${name}.`);
    }
  </script>
</body>
</html>
```

어트리뷰트 값으로 함수 참조가 아닌 함수 호출문 등의 문을 할당한다는 것에 주의하자.

`onclick="sayHi('Lee')"` 어트리뷰트는 파싱되어 다음과 같은 함수를 암묵적으로 생성하고 이벤트 핸들러 어트리뷰트 이름과 동일한 키 `onclick` 이벤트 핸들러 프로퍼티에 할당한다.
```html
 function onclick(event) {
   sayHi('Lee');
 }
 ```
 이렇게 동작하는 이유는 이벤트 핸들러에 인수를 전달하기 위해서다. 만약 값으로 함수 참조를 할당해야 한다면 이벤트 핸들러에 인수를 전달하기가 곤란하다.

또한 이벤트 핸들러 어트리뷰트 값으로 할당한 문자열은 암묵적으로 생성되는 이벤트 핸들러의 함수 몸체이기 때문에, 어트리뷰트 값으로 여러 개의 문을 할당할 수도 있다.
```html
<button onclick="console.log('Hi! '); console.log('Lee');">Click me!</button>
```
### 40.3.2 이벤트 핸들러 프로퍼티 방식

`window` 객체와 `Document, HTMLElement` 타입의 DOM 노드 객체는 이벤트에 대응하는 이벤트 핸들러 프로퍼티를 가지고 있다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    $button.onclick = () => { console.log('button click'); };
  </script>
</body>
</html>
```
이벤트 타겟인 버튼이 클릭되면 이벤트 핸들러가 호출되도록 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩한다. 단, 이벤트 핸들러 프로퍼티에는 하나의 이벤트 핸들러만 바인딩할 수 있다.
```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    $button.onclick = () => { console.log('button clicked 1'); };
    $button.onclick = () => { console.log('button clicked 2'); };
  </script>
</body>
</html>
//출력
//button clicked 2
```
첫 번째로 바인딩된 이벤트 핸들러는 두 번째 바인딩된 핸들러로 인해 재할당되어 실행되지 않는다.

### 40.3.3
![스크린샷 2021-09-23 오후 9 40 22](https://user-images.githubusercontent.com/56018469/134508280-fb2edef6-0522-4234-9afe-a39347cb461b.png)
첫 번째 매개변수에는 click 등의 이벤트의 종류를 나타내는 문자열인 이벤트 타입을 전달한다. 두 번째 매개변수에는 이벤트 핸들러를 전달한다.

마지막 매개변수에는 이벤트를 캐치할 이벤트 전파 단계(캡쳐링 또는 버블링)을 지정한다. 생략하거나 false를 지정하면 버블링 단계에서 이벤트를 캐치하고 true를 지정하면 캡처링 단계에서 이벤트를 캐치한다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    $button.addEventListener('click', function() { 
    	console.log('[1] button clicked '); 
    });
    $button.addEventListener('click', function() { 
    	console.log('[2] button clicked '); 
    });
  </script>
</body>
</html>
//[1] button clicked 
//[2] button clicked
```
`addEventListener` 메서드는 하나 이상의 이벤트 핸들러를 등록할 수 있으며, 등록된 순서대로 호출된다. 단, 동일한 이벤트를 중복 등록하면 하나의 이벤트 핸들러만 등록된다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    
    const handleClick = () => console.log('button click');
    
    $button.addEventListener('click', handleClick);
    $button.addEventListener('click', handleClick);
  </script>
</body>
</html>

// button click

```

그렇다면 이벤트 핸들러 프로퍼티 방식과 `addEventListener` 메서드 방식을 모두 사용해 이벤트 핸들러를 등록하면 어떻게 동작할까?
```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    
    // 이벤트 핸들러 프로퍼티 방식
    $button.onclick = () => { console.log('button clicked 1'); };
    
    // addEventListener 메서드 방식
    $button.addEventListener('click', function() { 
    	console.log('button clicked 2'); 
    });
  </script>
</body>
</html>
// 출력
// button clicked 1
// button clicked 2
```
`addEventListener` 메서드 방식은 이벤트 핸들러 프로퍼티에 바인딩된 이벤트 핸들러에 아무런 영향을 주지 않기 때문에, 클릭 이벤트가 발생하면 2개의 이벤트 핸들러가 모두 호출된다.

## 40.4 이벤트 핸들러 제거
`addEventListener` 메서드로 등록한 이벤트 핸들러를 제거하기 위해 `removeEventListener` 메서드를 사용한다. 이때 `addEventListener` 메서드에 전달한 인수와 `removeEventListener` 메서드에 전달한 인수가 일치하지 않으면 이벤트 핸들러가 제거되지 않는다.

```html
<!DOCTYPE html>
<html>
<body>
  <button>Click me!</button>
  <script>
    const $button = document.querySelector('button');
    
    const handleClick = () => console.log('button click');
    
    $button.addEventListener('click', handleClick);
    
    $button.removeEventListener('click', handleClick, true); // 실패
    $button.removeEventListener('click', handleClick); // 성공
  </script>
</body>
</html>
```
또한 무명 함수를 이벤트 핸들러로 등록할 경우에도 제거할 수 없다.
```html
<script>
  $button.addEventListener('click', () => console.log('button click'));
</script>
```

하지만 기명 이벤트 핸들러 내부에서 removeEventListener 메서드를 호출해 이벤트 핸들러를 제거할 수 있다. 이때 이벤트 핸들러는 단 한 번만 호출된다.

```html
<script>
  $button.addEventListener('click', function foo() { 
  	console.log('button click');
  	$button.removeEventListener('click', foo);
  });
</script>
```
또한 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 `removeEventListener` 메서드를 제거할 수 없다. 제거하기 위해선 이벤트 핸들러 프로퍼티에 null을 할당해야 한다.

```html
<script>
  const $button = document.querySelector('button');
    
  const handleClick = () => console.log('button click');
  
  $button.onclick = handleClick;
  
  $button.removeEventListener('click', handleClick); // 제거 x
  $button.onclick = null; // 제거 o
</script>
```

## 40.5 이벤트 객체

이벤트가 발생하면 이벤트에 관련한 다양한 정보를 담고 있는 이벤트 객체가 동적으로 생성된다. 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.
```html
<!DOCTYPE html>
<html>
<!-- 어트리뷰트 방식의 경우 event가 아닌 다른 이름으로는 이벤트 객체를 전달받지 못한다. -->
<body onclick="showCoords(event)">
  <p>클릭하세요. 클릭한 곳의 좌표가 표시됩니다.</p>
  <em class="message"></em>
  <script>
    const $msg = document.querySelector('.message');
    
    // 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.
    function showCoords(e) {
      $msg.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
    }
  </script>
</body>
</html>
```

이때 이벤트 핸들러 어트리뷰트 방식의 경우 이벤트 객체를 전달받으려면 이벤트 핸들러의 첫 번째 매개변수 이름이 반드시 `event`이여야 한다. `event`가 아닌 다른 이름으로 매개변수를 선언하면 이벤트 객체를 전달받지 못한다.

앞서 살펴본 바와 같이 이벤트 핸들러 어트리뷰트 값은 암묵적으로 생성되는 이벤트 핸들러의 함수 몸체이기 때문이다. `onclick="showCoords(event)" `어트리뷰트는 파싱되어 다음과 같은 함수를 암묵적으로 생성하여 onclick 이벤트 핸들러 프로퍼티에 할당한다.

```js 
function onclick(event) {
  showCoords(event);
}
```

이때 암묵적으로 생성된 onclick 이벤트 핸들러의 첫 번째 매개변수 이름이 event로 암묵적으로 명명되기 때문에 event가 아닌 다른 이름으로는 이벤트 객체를 전달받지 못한다.

## 40.5.1 이벤트 객체의 상속 구조
이벤트가 발생하면 이벤트 타입에 따라 다양한 타입의 이벤트 객체가 생성된다. 이벤트 객체는 다음의 상속 구조를 갖는다.

![image](https://user-images.githubusercontent.com/56018469/134509643-99a9926e-bfeb-4493-b0a6-d3af12011d88.png)

`MouseEvent` 타입의 이벤트 객체는 사용자가 마우스를 클릭하거나 이동했을 때 생성되는 이벤트 객체이고, `CustomEvent `타입의 이벤트 객체는 html 코드로 인해 인위적으로 생성한 이벤트 객체다.

`Event` 인터페이스에는 모든 이벤트 객체의 공통 프로퍼티가 정의되어 있다.

![image](https://user-images.githubusercontent.com/56018469/134509969-01040004-4542-40ca-9a95-f59ec9d2cfde.png)

Event 하위 인터페이스에는 이벤트 타입에 따라 고유한 프로퍼티가 정의되어 있다. MouseEvent 타입의 이벤트 객체는 screenX/screenY, clientX/clientY, offsetX/offsetY 등의 프로퍼티를 갖고, KeyboardEvent 타입의 이벤트 객체는 altkey, ctrlKey, key, keyCode 등의 고유 프로퍼티를 갖는다.

## 40.6 이벤트 전파

DOM 트리 상에 존재하는 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파(event propagation)된다.


```html
<body>
  <ul id="fruits">
    <li id="apple">Apple</li>
    <li id="banana">Banana</li>
    <li id="orange">Orange</li>
  </ul>
</body>
```
ul의 두 번째 자식인 li를 클릭하면 클릭 이벤트가 발생한다. 이때 생성된 이벤트 객체는 이벤트를 발생시킨 DOM 요소인 이벤트 타겟을 중심으로 DOM 트리를 통해 전파된다.

이벤트 전파는 이벤트 객체가 전파되는 방향에 따라 3단계로 구분할 수 있다.

![image](https://user-images.githubusercontent.com/56018469/134510244-a83282a9-7468-45c0-9880-9a2d382dbe40.png)

캡처링 단계(capturing phase):<br> 이벤트가 상위 요소에서 하위 요소로 전파

타겟 단계(target phase): <br>이벤트가 이벤트 타겟에 도달

버블링 단계(bubbling phase): <br>이벤트가 하위 요소에서 상위 요소 방향으로 전파

이벤트 핸들러 어트리뷰트 및 프로퍼티 방식으로 등록한 이벤트 핸들러는 타겟 단계와 버블링 단계의 이벤트만 캐치할 수 있지만, addEventListener 메서드 방식으로 등록한 이벤트 핸들러는 캡처링 단계까지 캐치할 수 있다. 캡처링 단계 이벤트를 캐치하려면 addEventListener 메서드의 3번째 인수로 true를 전달하면 된다.

대부분의 이벤트는 캡처링과 버블링을 통해 전파되지만 다음의 이벤트는 버블링을 통해 전파되지 않는다. 즉, event.bubbles의 값이 모두 false다.

focus/blur (포커스 이벤트)
load/unload/abort/error (리소스 이벤트)
mouseenter/mouseleave (마우스 이벤트)
위 이벤트들은 버블링되지 않아 이벤트 타겟의 상위 요소에서 위 이벤트를 캐치하려면 캡처링 단계의 이벤트를 캐치해야 하지만, 버블링되는 이벤트로 위의 이벤트들을 대체할 수 있다. 포커스 이벤트는 focusin/focusout으로, 마우스 이벤트는 mouseover/mouseout으로 대체할 수 있다.

```html
<!DOCTYPE html>
<html>
<body>
  <p>버블링과 캡처링 이벤트 <button>버튼</button></p>
  <script>
    // 버블링 단계의 이벤트 캐치
    document.body.addEventListener('click', () => {
    	console.log('Handler for body.');
    });
    
    // 캡처링 단계의 이벤트 캐치
    document.querySelector('p').addEventListener('click', () => {
    	console.log('Handler for paragraph.');
    }, true);
    
    // 버블링 단계의 이벤트 캐치
    document.querySelector('button').addEventListener('click', () => {
    	console.log('Handler for button.');
    });
  </script>
</body>
</html>
// 출력
//Handler for paragraph.
//Handler for button.
//Handler for body.
```

body와 button은 버블링 단계의 이벤트만을 캐치하고 p는 캡처링 단계의 이벤트만 캐치한다. 이벤트는 캡처링 - 타겟 - 버블링 단계로 전파되기 때문에, button에서 클릭 이벤트가 발생하면 먼저 캡처링 단계를 캐치하는 p의 이벤트 핸들러가 호출되고, 그후 버블링 단계의 이벤트를 캐치하는 button과 body의 이벤트 핸들러가 호출된다.

만약 p에서 클릭 이벤트가 발생하면 캡처링 단계를 캐치하는 p의 이벤트 핸들러가 호출되고 버블링 단계를 캐치하는 body 의 이벤트 핸들러가 호출된다.

## 40.7 이벤트 위임

이벤트 위임(event delegation)은 여러 개의 하위 DOM 요소에 각각 이벤트 핸들러를 등록하는 대신 하나의 상위 DOM 요소에 이벤트 핸들러를 등록하는 것을 말한다. 이벤트 위임을 통해 상위 DOM 요소에 이벤트 핸들러를 등록하면 여러 개의 하위 DOM 요소에 이벤트 핸들러를 등록할 필요가 없다.

```html
<!DOCTYPE html>
<html>
<body>
  <ul class="post-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
    <li id="post-3">Item 3</li>
    <li id="post-4">Item 4</li>
  </ul>
  <div class="msg" />
  <script>
    const msg = document.querySelector('.msg');
    const list = document.querySelector('.post-list')

    list.addEventListener('click', function (e) {
      console.log(e.target.id);
    });
  </script>
</body>
</html>
```

모든 li가 클릭 이벤트에 반응하는 처리를 구현하고 싶으면 모든 li에 이벤트 핸들러를 바인딩하면 총 4개의 이벤트 핸들러를 바인딩해야 하지만, 이벤트 위임을 통해 부모 요소에만 이벤트 핸들러를 바인딩하는 것이다.

이는 이벤트가 이벤트를 발생시킨 요소의 부모 요소에도 영향(버블링)을 미치기 때문에 가능하다.