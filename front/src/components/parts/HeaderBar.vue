<template>
  <div class="header-top-container">
    <div class="header-container">
    </div>
    <img
      class="site-logo"
      :src="require('@/assets/logo.png')"
      alt=""
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$height: 10vh;
.header-top-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: $height;
  width: 100%;
  z-index: 1000;

  .header-container {
    height: $height;
    background-color: black;
    opacity: 0.4;
    width: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}
.site-logo {
  position: absolute;
  height: $height;
  top: 0px;
  left: 2vw;
}
</style>
