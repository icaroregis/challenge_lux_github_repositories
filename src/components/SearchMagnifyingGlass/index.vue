<template>
  <div class="div-search">
    <input class="div-search-child" />
    <div class="div-son-of-son">
      <img class="image-lupa" src="../../assets/search.svg" alt="lupa" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMagnifyingGlassType',
};
</script>

<style scoped>
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
