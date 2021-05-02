<template>
  <form class="div-search">
    <input class="div-search-child" />
    <div class="div-son-of-son">
      <img
        type="submit"
        class="image-lupa"
        src="../../assets/SearchTwo.png"
        alt="lupa"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'SearchMagnifyingGlassTwo',
  methods: {
    goForPageResult() {
      this.$router.push('/searchrepositories');
    },
  },
};
</script>

<style scoped>
.div-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-search-child {
  width: 310px;
  padding: 5px;
  font-size: 17px;
  height: 28px;
  border: 2px solid var(--black-dark);
}
.div-son-of-son {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 28px;
  background-color: var(--black-dark);
}
.image-lupa {
  width: 17px;
  height: 17px;
}
</style>
