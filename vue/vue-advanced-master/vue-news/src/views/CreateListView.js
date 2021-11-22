import LsitView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    // #1
    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch(() => {});
      }, 1000);
    },
    render(createElement) {
      return createElement(LsitView);
    },
  };
}
