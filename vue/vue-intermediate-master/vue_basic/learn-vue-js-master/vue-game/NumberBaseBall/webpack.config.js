// webpack 쓰는 이유 
// 많은 js 파일을 한개로 합쳐 준다.
const VueloaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development', // 배포 할때 : production
  devtool:'eval', // hidden-sourcmap
  resolve:{
    extensions:['.js','.vue'] // main.js 에서 import 할때 .js .vue 를 삭제 할 수 있다.
  },
  entry:{
    app: path.join(__dirname,'main.js'), // ex) 100개의 js 가 main.js 하나로 모이게 해주는 설정
  },
  module:{ // 어떻게 합칠것인지에 대해 기술하는 곳
    rules:[{
      test:/\.vue$/,
      loader:'vue-loader',
    }]
  },
  plugins:[
    new VueloaderPlugin(),
  ],
  output:{
    filename:'[name].js', // entry 안에 app 이 name 안으로 들어 온다. app.js 로 써도 무방하다.
    path: path.join(__dirname,'dist'),  // dist 파일 안에 app.js 로 접근
  },
};