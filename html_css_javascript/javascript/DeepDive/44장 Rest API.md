# 44장 Rest API

REST(Representational State Transfer)는 HTTP/1.0과 1.1의 스펙 작성에 참여하였고 아파치 HTTP 서버 프로젝트의 공동설립자인 로이 필딩 (Roy Fielding)의 2000년 논문에서 처음 소개되었다. 발표 당시의 웹이 HTTP의 설계 상 우수성을 제대로 사용하지 못하고 있는 상황을 보고 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로서 REST를 소개하였고 이는 HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하고 있다. REST의 기본 원칙을 성실히 지킨 서비스 디자인을 “RESTful”이라고 표현한다.

즉, Rest 는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API 는 REST를 기반으로 서비스 API를 구현한 것을 의미한다.

## 44.1 Rest API의 구성

REST API는 자원(resouce), 행위(verb), 표현(representations)의 3가지 요소로 구성된다. REST는 자체 표현 구조(self-de-scriptiveness)로 구성되어 REST API만으로 HTTP 요청의 내용을 이해할 수 있다.

구성요소| 내용| 표현 방법
----|---|---|
자원|자원|URI(엔드포인트)
행위| 자원에 대한 행위| HTTP 요청 메서드
표현| 자원에 대한 행위의 구체적 내용| 페이로드

## 44.2 Rest API 설계 원칙

REST에서 가장 중요한 기본적인 규칙은 두 가지이다. `URI는 자원을 표현`하는 데에 집중하고 `행위에 대한 정의는 HTTP 요청 메서드`를 통해 하는 것이 REST한 API를 설계하는 중심 규칙이다.

1. URI는 정보의 자원을 표현해야 한다.
  
리소스명은 동사보다는 명사를 사용한다. URI는 자원을 표현하는데 중점을 두어야 한다. get 같은 행위에 대한 표현이 들어가서는 안된다.

```js
# bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
```

2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다.

HTTP 요청 메서드| 종류| 목적| 페이로드
--|---|---|---|
GET|index/retrieve|모든/특정 리소스 취득| X
POST|create|리소스 생성|O
PUT|replace|리소스 전체 교체|O
PATCH|modify|리소스의 일부 수정|O
DELETE|delete|모든/특정 리소스 삭제|X

리소스에 대한 행위는 HTTP 요청 메서드를 통해 표현하며 URI에 표현하지 않는다. 예를 들어, 리솟를 취득하는 경우에는 GET, 리소스를 삭제하는 경우에는 DELETE를 사용하여 리소스에 대한 행우를 명확히 표현한다.
```shell
# bad
GET /todos/delete/1

# good
DELETE /todos/1
```
