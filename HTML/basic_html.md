# HTML

## 시멘틱 태그

---

1. 의미부여
   > - HTML문서를 접하는 사람이 어떤 데이터를 봐야할지, 어떤 데이터를 제공하는지 파악하기 쉽다.
   > - Semantic 마크업을 사용하여 의미를 부여해준다면, 유지보수하거나 소프트웨어 재공학을 위해 다시 문서를 분석할 뎡우, 시간을 절약할 수 있다.
   > - Semantic 마크업을 사용하는 행위는 문서에 의미를 부여해주는 행위이다. 의미를 올바르게 부여해주는 행위만으로 미래의 나에게 혹은 개발자 동료들에게 더 나은 미래 혹은 더 빠른 퇴근을 선물해 줄 수 있습니다.
2. 검색엔진 최적화(SEO)
   > - 검색엔진이 웹페이지의 자료를 수집하거나 순위를 방식에 맞게 웹페이지를 구성하여, 검색 결과의 상위에 나올 수 있게하는 행위를 말합니다.
   > - Semantic한 문서는 검색엔진이 유의미한 결과를 낳을 수 있도록 합니다.

### h1~h6 (제목)

```
<h1></h1>
<h2></h2>
```

### p (단락)

- 줄바꿈을 br로 주어야 한다.

```
<p></p>
```

### blockquote (인용된 섹션을 정의)

```
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote>
```

### addr(약어 ex)WHO)

```
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

### address(주소)

```
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```

### pre(텍스트)

- 요소 내부의 텍스트는 고정 너비 글꼴로 표시되며 공백과 줄 바꿈을 모두 유지한다.

```
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```

### a (링크)

- css
  <br>
  :link => a 기본 링크 일때 <br>
  :visited => a 방문 후 <br>
  :hover => a 에 마우스를 가져갔을때 <br>
  :active => a 링크가 활성화 되어 있을때

```
<a href="https://www.w3schools.com">This is a link</a>
```

### img(이미지)

- src => 이미지의 경로
- alt => 속성 값(이미지 설명)
- usemap => map 테그를 사용할때 사용

```
<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">
```

### picture

- 첫 번 요소를 인식 하면 다음 요소는 무시한다.
- source 를 사용해 media를 넣을 수 있다

```
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>
```

### map(이미지 맵)

- 사진에 클릭 이벤트를 지정 가능하다.
- rect - 직사각형 영역을 정의합니다. (왼쪽위 좌표 + 오른쪽 아래 좌표 : coords="34,44,270,350")<br>
- circle - 원형 영역을 정의 (원의 중심 좌표+반지름 지정 : coords="337,300,44")<br>
- poly - 다각형 영역을 정의합니다.(여러개 좌표를 설정해 불규칙한 모양에 클릭이벤트를 준다.<br>

```
<area shape="poly" coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147" href="croissant.htm">
```

- default - 전체 지역을 정의<br>

```
 <img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
 <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
 <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
 <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

### HTML 서식 요소

```
<b> - 굵은 텍스트
<strong> - 중요한 텍스트
<i> - 기울임꼴 텍스트
<em> - 기울임꼴 텍스트
<mark> - 강조 텍스트
<small> - 더 작은 텍스트
<del> - 삭제된 텍스트
<ins> - 밑줄
<sub> - 중앙을 기준으로 아래
<sup> - 중앙을 기준으로 위
```

### table(테이블)

- tr - 테이블 행
- th - 테이블 헤더<br> colspan - 행을 합쳐준다.<br>
  rowspan - 열을 합쳐준다.

- td - 테이블 셀
- 테이블 중앙에 이름을 넣고 싶으면 caption 테크를 사용한다.

* css - border-spacing : 각 요소 사이 간격

```
<table style="width:100%">
  <tr>
    //테이블 제목
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    //테이블 제목 아래 항목
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

### ul,li

결과 :

- 안건
- 안건
- 안건
- 안건

### ol,li

- type 을 줘서 스타일 변경 가능
- start 를 사용해 시작 숫자 지정 가능

결과 :

1. 안건
2. 안건
3. 안건
4. 안건

### dl,dt,dd

```
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
```

### iframe

- 웹 페이지 내에 웹 페이지를 표시하는데 사용

### Javascript

```
<!DOCTYPE html>
<html>
<body>

<h2>Use JavaScript to Change Text</h2>
<p>This example writes "Hello JavaScript!" into an HTML element with id="demo":</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

</body>
</html>
```

### meta

- 문자 집합, 페이지 설명, 키워드, 문서의 저자, 뷰포트 설정을 지정하는데 사용

```
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
```
