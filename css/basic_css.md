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
> <br> > <br>

<p style="
color: black;
    border-left: 6px solid red;
  background-color: lightgrey;"> 
  Some text
</p>

```
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
