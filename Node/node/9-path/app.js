const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // /Users/cyh/vscode/TIL/Node/9-path
console.log(__filename); // /Users/cyh/vscode/TIL/Node/9-path/app.js

console.log(path.sep); //  파일경로 구분자 : /
console.log(path.delimiter); // 환경변수 구분자 : :

// basename
console.log(path.basename(__filename)); // 파일 정보 : app.js
console.log(path.basename(__filename, '.js')); // 삭제하고 보여줄 부분 : app

// dirname
console.log(path.dirname(__filename)); // 확장자 제외 : /Users/cyh/vscode/TIL/Node/9-path

// extension
console.log(path.extname(__filename)); // 확장자만 : .js

//parse
const parsed = path.parse(__filename);
console.log(parsed);
// {
//   root: '/',
//     dir: '/Users/cyh/vscode/TIL/Node/9-path',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

parsed.root;
parsed.name;

const str = path.format(parsed);
console.log(str); // /Users/cyh/vscode/TIL/Node/9-path/app.js

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // isAbsolute? true /User 절대경로
console.log('isAbsolute?', path.isAbsolute('../')); //   isAbsolute? false ../ 상대경로




// normalize
console.log(path.normalize('./folder////////sub')); //folder/sub


// join
console.log(__dirname + path.sep + 'image'); // /Users/cyh/vscode/TIL/Node/9-path/image
console.log(path.join(__dirname, 'image')); // /Users/cyh/vscode/TIL/Node/9-path/image

