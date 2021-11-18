<template>
  <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <slot name="username">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      <div class="time">
        Time: 
        <slot name="time"></slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info:Object
  },
  computed:{
    userInfo(){
      return this.$store.state.user;
    }
  },
}
</script>

<style>

</style>