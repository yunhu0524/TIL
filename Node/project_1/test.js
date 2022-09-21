const fs = require('fs').promises;

fs.mkdir('/project_1/video') // 파일 만들기
  .catch(console.error);

fs.mkdir('/project_1/captured') // 파일 만들기
  .catch(console.error);

fs.mkdir('/project_1/duplicated') // 파일 만들기
  .catch(console.error);