<template>
  <form @submit="goForPageResult" class="search">
    <input class="search-input" />
    <button type="submit" class="search-button">
      <img class="search-lupa" src="../../assets/search.svg" alt="lupa" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchMagnifyingGlass',
  methods: {
    goForPageResult() {
      this.$router.push('/searchrepositories');
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}
.search-input {
  width: 300px;
  padding: 10px;
  font-size: 17px;
  height: 30px;
  border: 2px solid var(--black-dark);
}
.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 30px;
  background-color: var(--black-dark);
}
.search-lupa {
  width: 15px;
  height: 15px;
}
</style>
