# css

### opacity

- 투명도 0.0 ~ 1.0 의 값을 사용.

### background-image

> repeat - 반복 이미지 설정<br>
> repeat-x : x축, 가로로 반복 <br>
> no-repeat : 반복 제거<br>
> position : right top - 포지션 지정<br>
> attachment : <br>
> fixed - 스크롤 내려갈때 같이 내려간다.<br>
> scroll - 이미지 고정
> <br> <br>

<p style="
color: black;
    border-left: 6px solid red;
  background-color: lightgrey;"> 
  Some text
</p>

```css
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}
```

### letter-spacing

- 자간 간격

### line-height

- 라인 높이

### word-spacing

- 단어 간격

### text-shadow

- 텍스트 그림자 효과
- 가로 세로 퍼짐정도 색깔

### position

- static
- relative
- absolute - 가까운 위치에 있는 조상을 기준으로 배치된다(relative)
- fiexd - 스크롤을 따라서 간다.( 고정된 위치)
- sticky - 사용자의 스크롤 위치를 기중으로 배치

### z-index

- 우선 요소 설정

### overflow

- visible : 상자 외부에서 렌더링됨
- hidden : 오버플로우가 잘리고, 콘텐츠의 나머지는 숨겨진다.
- scroll : 상자 내부를 수크롤 할 수 있게 된다.
- auto : scroll 과 비슷
- overflow-x,y : hidden,scroll

### float

- left,right
- none - 이미지 옆에 텍스트 사용 불가

### div > p

- div 안에 모든 p 에 이벤트를 준다.

### div + p

- div 밖 인접한 p 태그에 이벤트 적용

### ::first-line

- font-variant : small-caps : 한줄만 작게

### ::first-letter

- font-size : xx-large;

<a>https://flexboxfroggy.com/#ko</a> => flexbox 레이아웃 연습

# `display: flex`

### justify-content

- flex-start : 요소들을 컨테이너의 왼쪽으로 정렬합니다.
- flex-end : 요소들을 컨테이너의 오른쪽으로 정렬합니다.
- center : 요소들을 컨테이너의 가운데로 정렬합니다.
- space-between : 요소들 사이에 동일한 간격을 둡니다.
- space-around : 요소들 두위에 동일한 간격을 둡니다.

### align-items

- flex-start : 요소들을 컨테이너의 꼭대기로 정렬합니다.
- flex-end : 요소들을 컨테이너의 바닥으로 정렬합니다.
- center : 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
- baseline : 요소들을 컨테이너의 시작 위치에 정렬합니다.
- stretch : 요소들을 컨테이너에 맞도록 늘립니다.

### align-content

- 여러 줄 사이의 간격을 지정할 수 있습니다.
- flex-start
- flex-end
- center
- space-between
- space-around
- stretch

### flex-direction

- row : 요소들을 텍스트의 방향과 동일하게 정렬합니다.
- row-reverse : 요소들을 텍스트의 반대 방향으로 정렬합니다.
- column : 요소들을 위에서 아래로 정렬합니다.
- column-reverse : 요소들을 아래에서 위로 정렬합니다.

  `justify-content` 와 함께 쓰일 때 `reverse` 를 사용하면 요소가 반대로 작용한다.

### flex-wrap

- nowrap : 모든 요소들을 한 줄에 정렬합니다.
- wrap : 요소들을 여러 줄에 걸쳐 정렬합니다.
- wrap-reverse : 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.

### flex-flow

- 앞은 `flex-direction` 값 뒤는 `flex-wrap` 을 넣어 한번에 표시

```css
flex-flow: column wrap;
```

### order

- 속성을 사용해 우선순위 지정가능

### align-self

- 개인 `align-items` 속성 사용
