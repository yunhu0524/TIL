import store from '@/store/index';

export function setInterceptors(instance) {
  // 요청 인터셉터 추가
  instance.interceptors.request.use(
    function(config) {
      // 요청이 전송되기 전에 수행
      // console.log(구성);
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // 2xx 범위 내에 있는 모든 상태 코드는 이 함수가 트리거되도록 합니다.
      // 응답 데이터로 작업 수행
      return response;
    },
    function(error) {
      // 2xx 범위를 벗어나는 모든 상태 코드로 인해 이 함수가 트리거됩니다.
      // 응답 오류가 있는 작업 수행
      return Promise.reject(error);
    },
  );
  return instance;
}
