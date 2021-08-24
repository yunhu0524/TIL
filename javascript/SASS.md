# SASS
## 데이터 타입 

* 프로퍼티 값으로 사용할 수 있는 값에는 각각 데이터 타입이 존재 한다. SassScript는 `7가지의 데이터 타입을 제동한다.`
  
  > 숫자형, 문자열, 컬러, boolean, null, list, map
```css
$foundation-palette: {
    primary:#E44347,
    mars: #D7525C,
    saturn: #E4B884 ,
    neptune: #5147D7
};

.mars{
    color : map-get($foundation-palette, mars);
}
// => .mars { color: #D7525C}
// map-get 함수를 사용하여 원하는 값은 추출할 수 있다.
```
변수를 CSS의 /와 함께 사용하고자 하는 경우 #{} (Interpolation)를 사용한다.

```css
p{
    $font-size: 12px;
    $line-heght: 30px;
    font: #{$font-size}/#{$line-height}; //12px/30px
}
```

& 는 부모요소를 참조하는 셀렉터이다.
```css
a {
  color: #ccc;

  &.home {
    color: #f0f;
  }

  &:hover {
    text-decoration: none;
  }

  // & > span (X)
  > span {
    color: blue;
  }

  span {
    color: red;
  }
}
```

는 css 로 다음 코드와 같다.
```css
a {
  color: #ccc;
}

a.home {
  color: #f0f;
}

a:hover {
  text-decoration: none;
}

a > span {
  color: blue;
}

a span {
  color: red;
}

```


