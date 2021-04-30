<template>
  <div class="container">
    <div class="div-title">
      <strong class="div-strong">Github</strong>
      <div class="div-title-search">Search</div>
    </div>
    <div class="div-search">
      <h1>teste</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  width: 100%;
  height: 550px;
  margin: 35px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 5px;
  font-family: 'Roboto Mono', 'sans-serif';
}
.div-title {
  width: 473px;
  height: 76px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div-strong {
  font-size: 74px;
}
.div-search {
  font-size: 74px;
  font-style: oblique;
}
</style>
