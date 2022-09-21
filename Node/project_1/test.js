const fs = require('fs');
const path = require('path');
const os = require('os');


// 파일인자 확인.
const folder = process.argv[2];
// path 설정.
const workingDir = path.join(os.homedir(), 'vscode/TIL/Node/project_1', folder);
if (!folder || !fs.existsSync(`${workingDir}`)) {
  console.error('인자를 입력해주세요.');
  return;
}
// 만들 파일 경로설정
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

// existsSync = 경로 확인
// mkdirSync = 파일 만들기
// 존재하지 않으면 만들고 있으면 다음으로
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// readdir = // 잃어오기
fs.promises
  .readdir(workingDir)
  .then(processFiles)
  .catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir)
    } else if (isCaptured(file)) {
      move(file, capturedDir)
    } else if (isDuplicated(files, file)) {
      move(file, duplicatedDir)
    }
  })
}

// 파일 검증
function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match
}

function isCaptured(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match
}

function isDuplicated(files, file) {
  // 파일 이름이 IMG_ 가 아니거나 IMG_E 일떄
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }
  // E 버전이 있는 파일 duplicate 로 이동
  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

// 파일 이동
function move(file, targetDir) {
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath)
    .catch(console.log(err))
}

console.log('hi')

// // 파일 만들기
// fs.mkdir('video')
//   .catch(console.error);
// // 파일 만들기
// fs.mkdir('captured')
//   .catch(console.error);
// // 파일 만들기
// fs.mkdir('duplicated')
//   .catch(console.error);
//
// fs.readdir('./') // 잃어오기
//   .then((res) => {
//     res.forEach((item) => {
//       // mov
//       if (path.extname(`${item}`) === '.mov') {
//         // 파일 옮기기
//         fs.rename(`./${item}`, `./video/${item}`, (error) => {
//           console.log(error);
//         });
//       }
//       // mp4
//       if (path.extname(`${item}`) === '.mp4') {
//         // 파일 옮기기
//         fs.rename(`./${item}`, `./video/${item}`, (error) => {
//           console.log(error);
//         });
//       }
//       // aae
//       if (path.extname(`${item}`) === '.aae') {
//         // 파일 옮기기
//         fs.rename(`./${item}`, `./duplicated/${item}`, (error) => {
//           console.log(error);
//         });
//       }
//       // jpg
//       if (path.extname(`${item}`) === '.jpg') {
//         if (item.indexOf('_E') > 0) {
//           // 파일 옮기기
//           fs.rename(`./${item}`, `./captured/${item}`, (error) => {
//             console.log(error);
//           });
//         }
//       }
//       ;
//
//       // png
//       if (path.extname(`${item}`) === '.png') {
//         // 파일 옮기기
//         fs.rename(`./${item}`, `./captured/${item}`, (error) => {
//           console.log(error);
//         });
//       }
//     });
//   })
//   .catch(console.error);

