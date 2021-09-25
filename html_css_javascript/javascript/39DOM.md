# 39장 DOM 

## 트리 자료구조

트리 자료구조는 노드들의 계층 구조로 이뤄진다.<br>
즉, 트리 자료구조는 부모 노드와 자식 노드로 구성되어 노드 간의 계층적 구조를 표현하는 <strong>비선형 자료구조</strong>를 말한다.

> 최상위 노드 : 루트 노드 <br>
> 자식 노드가 없는 노드 : 리프 노드

노드 객체들로 구성된 트리 자료구조를 DOM<sup>Document Object Model</sup> 이라 한다. <br>
노드 객체의 트로로 구조화되어 있기 때문에 DOM을 <strong>DOM 트리</strong>라고 부르기도 한다.

## 39.1.2 노드 객체의 타입
![스크린샷 2021-09-22 오후 8 12 25](https://user-images.githubusercontent.com/56018469/134333931-87c00e97-7d2f-4295-8440-da09a3bd8a89.png)
> 문서 노드(Document Node)<br>
> 트리의 최상위에 존재하며 각각 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다. <br>
> 즉, DOM tree에 접근하기 위한 시작점이다.

>요소 노드(Element Node)<br>
요소 노드는 HTML 요소를 표현한다. 

>어트리뷰트 노드(Attribute Node)<br>
어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다. 어트리뷰트 노드는 어트리뷰트가 지정된 HTML 요소의 요소 노드와 형제 관계를 갖는다.

>텍스트 노드(Text Node)<br>
텍스트 노드는 HTML 요소의 텍스트를 표현한다. 텍스트 노드는 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없다. 즉, 텍스트 노드는 DOM tree의 최종단이다.

DOM을 구성하는 노드 객체는 ECMAScript 사양에 정의된 표준 빌트인 객체<sup>standard bulit-in objects</sup> 가 아니라 브라우저 환경에서 추가적으로 제공하는 호스트 객체다. 하지만 노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.
![스크린샷 2021-09-22 오후 8 27 24](https://user-images.githubusercontent.com/56018469/134335599-aaf9f5f9-13f0-4611-822c-54886941e9af.png)

모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다. 이벤트와 관련된 기능은 EventTarget 인터페이스가 제공하고, 노드로서 트리 탐색이나 노드 정보 제공 등의 노드 관련 기능은 Node 인터페이스가 제공한다.

또한 문서 노드는 Document, HTMLDocument 인터페이스를 상속받고, 요소 노드는 Element, HTMLElement 인터페이스를 상속받는다. 어트리뷰트 노드는 Attr, 텍스트 노드는 CharacterData 인터페이스를 각각 상속받는다.

>`DOM`은 HTML의 계층적인 구조와 정보를 표현하는 것은 물론, 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 `DOM API`로 제공한다. 이 `DOM API`를 통해 HTML의 구조나 내용 또는 스타일 등을 동적으로 조작할 수 있다.

## 39.2 요소 노드 취득

HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 한다.<br>
텍스트 노드는 요소 노드의 자식 노드이고, 어트리뷰트 노드는 요소 노드의 형제 노드 이기 때문에 텍스트 노드나 어트리 뷰트 노드를 조작하고자 할 때도 마찬가지이다.

### Document.getElementById()

```js
<html>
  <body>
    <ul>
      <li id="apple">apple</li>
      <li id="orange">orange</li>
      <li id="banana">Banana</li>
    </ul>
    <script>
    // id 값이 'banana' 인 요소 노드를 탐색하여 반환한다.
    // 두 번째 li 요소가 파싱되어 생성된 요소 노드가 반환된다.
      const $elem = document.getElementById('banana');

      // 취득한 요소 노드의 style.color 프로퍼티 값을 변경한다.
      $elem.style.color = 'red';
    </script>
  </body>
</html>
```

### Document.getElementsByTagName()

인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.

```js 
<html>
  <body>
    <ul>
      <li id="apple">apple</li>
      <li id="orange">orange</li>
      <li id="banana">Banana</li>
    </ul>
    <script>
    // 태그 이름이 li 인 요소 노드를 모두 탐색하여 반환한다.
    // 탐색된 요소 노드들은 HTMLCollection 객체에 담겨 반환된다.
    // HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다.
      const $elems = document.getElementsByTagName('li');

      // 취득한 모든 요소 노드의 style.color 프로퍼티 값을 변경한다.
      // HTMLCollection 객체를 배열로 변환하여 순회하며 color 프로퍼티 값을 변경한다.
      [...$elems].forEach(elem => { elem.style.color = 'red'; });
      
      // 모든 요소 노드를 탐색하여 반환
      const $all = document.getElementsByTagName('*');
    </script>
  </body>
</html>
```

이 밖에 getElementsByClassName, querySelector 메서드 등을 통해 요소 노드를 얻을 수 있다.

## 39.2.6 HTMLCollection과 NodeList

DOM 컬렉션 객체인 HTMLCollection과 NodeList는 DOM API가 여러 개의 결과값을 반환하기 위한 DOM 컬렉션 객체다.  중요한 특징은 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 객체라는 것이다. HTMLCollection은 언제나 live 객체로 동작하고 NodeList는 대부분 non-live 객체로 동작한다.

둘은 예상과 다르게 동작할 때가 있어 실수하기 쉽다. 따라서 노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다. (forEach, map, filter, reduce 등 사용) 스프레드나 Array.from으로 배열로 변환하자

## 39.3 노드 탐색

DOM 트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티를 제공한다.

Node 인터페이스에는 parentNode, previousSibling, nextSibling, firstChild, lastChild, childNodes 프로퍼티를 제공하고 

Element 인터페이스에서는 previousElementSibling, nextElementSibling, firstElementChild, lastElementChild, children 프로퍼티를 제공
![image](https://user-images.githubusercontent.com/56018469/134338781-d5376231-a70e-47e7-a320-1fb2898149da.png)
노드 탐색 프로퍼티는 모두 접근자 프로퍼티다. 단, 노드 탐색 프로퍼티는 setter 없이 getter 만 존재하여 참조만 가능한 읽기 전용 접근자 프로퍼티다.

### 39.3.1 공백 텍스트 노드

HTML 요소 사이의 스페이스, 탭, 줄바꿈(개행) 등의 공백 문자는 텍스트 노드를 생성한다.

### 39.3.2 자식 노드 탐색

Node.prototype.childNodes <br> 자식 노드 모두 탐색하여 NodeList에 담아 반환(텍스트 노드 포함)

Node.prototype.children <br> 자식 노드중에서 요소 노드만 모두 탐색하여 NodeList에 담아 반환(텍스트 노드 미포함)

Node.prototype.firstChild <br> 첫번째 자식 노드(텍스트 노드이거나 요소 노드)

Node.prototype.lastChild <br> 마지막 자식 노드

Element.prototype.firstElementChild <br> 첫번째 자식 요소 노드를 반환

Element.prototype.lastElementChild <br> 마지막 자식 요소 노드를 반환

### 39.3.3 자식 노드 탐색

hasChildNodes()

요소 노드 확인 <br>
children.length 또는 childElementCount

### 39.3.5 부모 노드 탐색

parentNode

### 39.3.6 부모 노드 탐색

previousSibling <br> 이전 형제 노드 반환.

nextSibiling <br> 다음 형제 노드

previousElementSibiling <br> 이전 형제 노드 반환(요소 노드)

nextElementSibiling <br> 다음 형제 노드 반환(요소 노드)

## 39.4 노드 정보 취득

nodeType <br>

Node.ELEMENT_NODE<br> 요소 노드 타입. 1 반환

Node.TEXT_NODE <br> 텍스트 노드 타입. 3 반환

Node.DOCUMENT_NODE <br> 문서 노드 타입. 9 반환

nodeName <br>
 노드의 이름을 문자열로 반환

요소 노드 <br> 대문자 문자열로 태그 이름(UL, LI 등)

텍스트 노드 <br> '#text'

문서 노드 <br> '#document'
```js
<html>
  <body>
    <div id="foo">Hello</div>
  </body>
  <script>
  // 문서 노드의 노드 정보를 취득한다.
  console.log(document.nodeType); // 9
console.log(document.nodeName); // #document

// 요소 노드의 노드 정보를 취득한다.
const $foo = document.getelementById('foo');
console.log($foo.nodeType);// 1
console.log($foo.nodeName);// DIV
```
## 39.6 DOM 조작

### innerHTML
요소 노드의 콘텐츠 영역 내에 포함된 모든 HTML 마크업을 문자열로 반환한다.

> innerHTML 프로퍼티를 사용한 DOM 조작은 구현이 간단하고 직관적이라는 장점이 있지만 [크로스 사이트 스크립팅 공격(XSS)](https://noirstar.tistory.com/266)에 취약한 단점도 있다. 그리고 기존의 자식 노드까지 모두 제거하고 다시 처음부터 새롭게 자식 노드를 생성하여 DOM에 반영하므로 효율적이지 않고 새로운 요소를 삽입할 때 삽입될 위치를 지정할 수 없다는 단점도 있다.

```js
<html>
  <body>
    <ul id="fruits">
      <li class="apple">Apple</li>
    </ul>
  </body>
  <script>
    const $fruits = document.getElementById('fruits');
    
    // 노드 추가
    $fruits.innerHTML += '<li class="banana">Banana</li>';
    
    // 노드 교체
    $fruits.innerHTML = '<li class="orange">Orange</li>';
    
    // 노드 삭제
    $fruits.innerHTML = '';
  </script>
</html>
```

Element.prototype.insertAdjacentHTML(position, DOMString) <br>
메서드는 기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다. 기존 요소에는 영향을 주지 않고 새롭게 삽입될 요소만을 파싱하여 자식 요소로 추가하므로 innerHTML 프로퍼티보다 효율적이고 빠르지만 마찬가지로 HTML 마크업 문자열을 파싱하므로 크로스 사이트 스크립팅 공격에 취약하다는 점은 동일하다.
```js
<html>
  <body>
    <ul id="fruits">
      <li>Apple</li>
    </ul>
  </body>
  <script>
  const $fruits = document.getElementById('fruits');
  
  // 1. 요소 노드 생성
  const $li = document.createElement('li');
  
  // 2. 텍스트 노드 생성
  const $textNode = document.createTextNode('Banana');
  
  // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
  $li.appendChild(textNode);
  
  // 4. $li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
  $fruits.appendChild($li);
  </script>
</html>
```

 

 Document.prototype.createElement(tagName) <br>메서드는 요소 노드를 생성하여 반환한다. 요소 노드를 생성할 뿐 DOM에 추가되지 않고 홀로 존재하고 자식 노드인 텍스트 노드도 없는 상태다.
```js
// 요소 노드 생성
const $li = document.createElement('li');

// 생성된 요소 노드는 아무런 자식 노드가 없다.
console.log($li.childNodes); //NodeList[]
```

Document.prototype.createTextNode(text) <br>메서드는 텍스트 노드를 생성하여 반환한다. 매개변수 text에는 텍스트 노드의 값으로 사용할 문자열을 인수로 전달한다. createElement 메서드와 마찬가지로 텍스트 노드를 생성할 뿐 요소 노드에 추가하지 않는다.
```js
// 요소 노드 생성
const textNode = dpcument.createTextNode('Banana');
```

Node.prototype.appendChild(childNode)<br> 메서드는 매개변수 childNode에게 인수로 전달한 노드를 메서드를 호출한 노드의 마지막 자식 노드로 추가한다. appendChild 메서드를 통해 요소 노드와 텍스트 노드는 부자 관계로 연결되었지만 아직 기존 DOM에 추가되지 않은 상태다.

```js 
// 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
$li.appendChild(textNode);

// 텍스트 노드를 생성하여 요소 노드의 자식 노드로 추가
$li.appendChild(document.createTextNode('Banana'));

// $li 요소 노드에 자식 노드가 하나도 없는 위 코드와 동일하게 동작한다.
$li.textContent = 'Banana';

// 4. $li 요소 노드를 #fruis 요소 노드의 마지막 자식 노드로 추가
$fruits.appendChild($li);
```

요소 노드를 DOM에 추가할 때도 appendChild 메서드를 사용하여 텍스트 노드와 부자 관계로 연결한 요소 노드를 $fruits 요소 노드의 마지막 자식 요소로 추가한다. 비로소 새롭게 생성한 요소 노드가 DOM에 추가된다. 단 하나의 요소 노드를 생성하여 DOM에 한번 추가하므로 DOM은 한 번 변경된다. 이때 리플로우와 리페인트가 실행된다.

### 39.6.4 복수의 노드 생성과 추가
DocumentFragment 노드는 자식 노드들의 부모 노드로서 별도의 서브 DOM을 구성하여 기존 DOM에 추가하기 위한 용도로 사용한다. 먼저 DocumentFragment 노드를 생성하고 DOM에 추가할 요소 노드를 생성하여 노드에 자식 노드를 추가한 다음 노드를 기존 DOM에 추가한다. 이때 실제로 DOM 변경이 발생하는 것은 한 번뿐이며 리플로우와 리페인트도 한 번만 실행된다. 따라서 여러 개 의 요소 노드를 DOM에 추가하는 경우 DocumentFragment 노드를 사용하는 것이 더 효율적이다.
```js
<html>
  <body>
    <ul id="fruits">
      <li>Apple</li>
    </ul>
  </body>
  <script>
    const $fruits = document.getElementById('fruits');
  
    // DocumentFragment 노드 생성
    const $fragment = document.createDocumentFragment();
  
    ['Apple', 'Banana', 'Orange'].forEach(text => {
      // 1. 요소 노드 생성
      const $li = document.createElement('li');
  
      // 2. 텍스트 노드 생성
      const $textNode = document.createTextNode('Banana');
  
      // 3. 텍스트 노드를 $li 요소 노드의 자식 노드로 추가
      $li.appendChild(textNode);
  
      // 4. $li 요소 노드를 DocumentFragment 노드의 마지막 자식 노드로 추가
      $fragment.appendChild($li);
    });
  
    // 5. DocumentFragment 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
    $fruits.appendChild($fragment);
  </script>
</html>
```

### 39.6.5 노드 삽입
1.노드 삽입
- Node.prototype.appendChild(마지막 노드 추가)<br>인수로 전달받은 노드를 자신을 호출한 노드의 마지막 자식 노드로 DOM에 추가

- Node.prototype.insertBefore(newNode, childNode)(지정된 노드 삽입)<br> 두 번째 인수로 전달받은 노드 앞에 첫 번째 인수로 전달받은 노드를 삽입

2. 노드 복사

- Node.prototype.cloneNode([deep: true | false])<br> 노드의 사본을 생성하여 반환하고 기본 false를 인수로 전달하면 얕은 복사하여 노드 자신만의 사본을 생성하고 true를 인수로 전달하면 깊은 복사하여 모든 자손 노드가 포함된 사본을 생성

3. 노드 교체

- Node.prototype.replaceChild(newChild, oldChild)<br> 자신을 호출한 노드의 자식 노드(oldChild)를 다른 노드(newChild)로 교체

4. 노드 삭제

- Node.prototype.removeChild(child)<br> 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다. removeChild 메서드를 호출한 노드의 자식 노드이어야 함

## 39.7 어트리뷰트

 HTML 문서의 구성 요소인 HTML 요소는 여러 개의 어트리뷰트를 가질 수 있다. HTML 요소의 동작을 제어하기 위한 추가적인 정보를 제공하는 HTML 어트리뷰트는 HTML 요소의 시작 태그에 어트리뷰트 이름="어트리뷰트 값" 형식으로 정의한다.

 ```js
 <input id="user" type="text" value="ungmo2">
 ```
 HTML 어트리뷰트 값을 참조하려면 Element.prototype.getAttribute(attributeName) 메서드를 사용하고, HTML 어트리뷰트 값을 변경하려면 Element.prototype.setAttribute(attributeName, attributeValue)메서드를 사용한다. setAttribute 메서드는 노드에서 관리하는 HTML 요소에 지정한 어트리뷰트 값, 즉 초기 상태값을 변경한다.
 ```js
 <body>
  <input id="user" type="text" value="ungmo2">
  <script>
    const $input = document.getElementById('user');
    
    // value 어트리뷰트 값을 취득
    const inputValue = $input.getAttribute('value');
    console.log(inputValue); // ungmo2
    
    // value 어트리뷰트 값을 변경
    $input.setAttribute('value', 'foo');
    console.log($input.getAttribute('value')); // foo
    
    // value 어트리뷰트의 존재 확인
    if ($input.hasAttribute('value')) {
      // value 어트리뷰트 삭제
      $input.removeAttribute('value');
    }
    
    // value 어트리뷰트가 삭제되었다.
    console.log($input.hasAttribute('value')); // false
  </script>
</body>
```
 HTML 어트리뷰트의 역할은 HTML 요소의 초기 상태를 지정하는 것이고 이는 변하지 않는다. 요소 노드는 2개의 상태, 초기 상태와 최신 상태를 관리해야 하는데 초기 상태는 어트리뷰트 노드가 관리하며, 최신 상태는 DOM 프로퍼티가 관리한다.

```js
<body>
  <input id="user" type="text" value="ungmo2">
  <script>
    const $input = document.getElementById('user');
    
    // DOM 프로퍼티에 값을 할당하여 HTML 요소의 최신 상태를 변경한다.
    $input.value = 'foo';
    console.log($input.value); // foo
    
    // getAttribute 메서드로 취득한 HTMl 어트리뷰트 값
    // 즉 초기 상태 값은 변하지 않고 유지된다.
    console.log($input.getATtribute('value')); // ungmo2
  </script>
</body>
```
id 어트리뷰트에 대응하는 id 프로퍼티는 사용자의 입력과 아무런 관계가 없으므로 id 어트리뷰트 값이 변하면 id 프로퍼티 값도 변하고 그 반대도 마찬가지다.

 data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 자바스크립트 간에 데이터를 교환할 수 있다. data 어트리뷰트는 data-user-id, data-role과 같이 data- 접두사 다음에 임의의 이름을 붙여 사용한다.
