<template>
  <div class="container">
    <div class="div-title">
      <strong class="div-strong">Github</strong>
      <div class="div-title-search">Search</div>
    </div>
    <div class="div-search">
      <input class="div-search-child" />
      <div class="div-son-of-son">
        <img
          class="image-lupa"
          src="../assets/magnifying-glass-1976105.svg"
          alt="lupa"
        />
      </div>
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
  font-family: 'Roboto Mono', 'sans-serif';
}
.div-title {
  width: 473px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div-strong {
  font-size: 74px;
}
.div-title-search {
  font-size: 74px;
  font-style: oblique;
  font-family: Rubik;
}
.div-search {
  margin-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-search-child {
  width: 600px;
  padding: 10px;
  font-size: 30px;
  height: 50px;
  border: 2px solid var(--black-dark);
}
.div-son-of-son {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background-color: var(--black-dark);
}
.image-lupa {
  width: 30px;
  height: 30px;
}
</style>
