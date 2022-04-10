// 3. 커링
// 1. _curry, _curryr
function _cuury1(fn) {
  return function (a) {
    return function (b) {
      return fn(a,b)
    }
  }
}
// 2. _curry, _curryr 변형
function _cuury2(fn) {
  return function (a) {
    if (argument.length == 2) return fn(a, b);
    return function (b) {
      return fn(a, b);
    };
  };
}
// 3. _curry, _curryr 변형
function _cuury3(fn) {
  return function (a) {
    return argument.length == 2 ? fn(a, b) : function (b) {
      return fn(a, b);
    };
  };
}
var add = _curry(function (a, b) {
  return a + b;
});

var add10 = add(10);
var add5 = add(5);
console.log(add10(5));
console.log(add(5)(3));
console.log(add5(3));
console.log(add(10)(3));
console.log(add(1, 2));

function _curryr(fn) {
  return function (a, b) {
    return argument.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  }
}

var sub = _curryr(function (a, b) {
  return a - b;
});

console.log(sub(10, 5));

var sub10 = sub(10);
console.log(sub10(5));

// 2. _get 만들어 좀 더 간단하게 하기
var _get = _curryr(function _get(obj, key) {
  return obj === null ? undefined : obj[key];
});

var user1 = users[0];
console.log(user1.name);
console.log(_get(user1,'name'));
console.log(_get(('name')(user1)));

console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    _get("name")
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get("age")
  )
);

//var user1 = users[0];
//console.log(user1.name);
//console.log(_get(user1, 'name'));
//console.log(_get('name')(user1));
//
//var get_name = _get('name');
//
//console.log( get_name(user1) );
//console.log( get_name(users[3]) );
//console.log( get_name(users[4]) );

//console.log( users[10].name );
//console.log( _get(users[10], 'name') );

console.clear();

// 4. _reduce 만들기

console.log(_reduce([1, 2, 3], add, 10));
// 16

console.log(_reduce([1, 2, 3], add));
// 6

console.log(_reduce([1, 2, 3, 4], add, 10));
// 20

// 5. 파이프라인 만들기
// 1. _pipe
var f1 = _pipe(
  function (a) {
    return a + 1;
  },
  function (a) {
    return a * 2;
  },
  function (a) {
    return a * a;
  }
);

console.log(f1(1));

// 2. _go
_go(
  1,
  function (a) {
    return a + 1;
  },
  function (a) {
    return a * 2;
  },
  function (a) {
    return a * a;
  },
  console.log
);

// 3. users에 _go 적용

console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    _get("name")
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get("age")
  )
);

_go(
  users,
  _filter(function (user) {
    return user.age >= 30;
  }),
  _map(_get("name")),
  console.log
);

_go(
  users,
  _filter((user) => user.age < 30),
  _map(_get("age")),
  console.log
);

/*
console.log(
  _map([1, 2, 3], function(val) { return val * 2; }));
console.log(
  _map(function(val) { return val * 2; })([1, 2, 3]));
*/

// 4. 화살표 함수 간단히

//var a = function(user) { return user.age >= 30; };
//var a = user => user.age >= 30;
//
//var add = function(a, b) { return a + b; };
//var add = (a, b) => a + b;
//var add = (a, b) => {
//  //
//  return a + b;
//};
//var add = (a, b) => ({ val: a + b });

// 6. _each의 외부 다형성 높이기
// 1. _each에 null 넣어도 에러 안나게
_each(null, console.log);
console.log(
  _filter(null, function (v) {
    return v;
  })
);

// 2. _keys 만들기
// 3. _keys에서도 _is_object인지 검사하여 null 에러 안나게

console.log(_keys({ name: "ID", age: 33 }));
console.log(_keys([1, 2, 3, 4]));
console.log(_keys(10));
console.log(_keys(null));

// 4. _each 외부 다형성 높이기
_each(
  {
    13: "ID",
    19: "HD",
    29: "YD",
  },
  function (name) {
    console.log(name);
  }
);

console.log(
  _map(
    {
      13: "ID",
      19: "HD",
      29: "YD",
    },
    function (name) {
      return name.toLowerCase();
    }
  )
);

_go(
  {
    1: users[0],
    3: users[2],
    5: users[4],
  },
  _map(function (user) {
    return user.name.toLowerCase();
  }),
  console.log
);
