<script>
'use strict'; // 전역의 선두에 추가

function foo() {
  x = 10; // ReferenceError: x is not defined
}

foo();
</script>