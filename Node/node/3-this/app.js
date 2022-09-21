function hello() {
  console.log(this);
  console.log(this === global); // global
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('----- class -----');
    console.log(this);
    console.log(this === global); // num
  }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports); // module.exports
