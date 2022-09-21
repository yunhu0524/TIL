const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8') //
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') // 덮어 쓰기
  .catch(console.error);

fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') // 추가
  .then(()=>{

  })
  .catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt') // 복사
  .catch(console.error);

// folder
fs.mkdir('sub-folder') // 파일 만들기
  .catch(console.error);

fs.readdir('./') // 잃어오기
  .then(console.log)
  .catch(console.error);

// [
//   '.DS_Store', '.idea',
//   '1-global',  '10-file',
//   '11-buffer', '12-stream',
//   '13-event',  '2-console',
//   '3-this',    '4-module',
//   '5-module',  '6-os',
//   '7-process', '8-timer',
//   '9-path'
// ]
