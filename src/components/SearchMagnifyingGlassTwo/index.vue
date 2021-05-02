<template>
  <form @submit="goForPageResult" class="search-form">
    <input class="search-input" />
    <button type="submit" class="search-button">
      <img class="search-lupa" src="../../assets/search.svg" alt="lupa" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchMagnifyingGlassTwo',
  methods: {
    goForPageResult() {},
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input {
  width: 310px;
  padding: 5px;
  font-size: 17px;
  height: 28px;
  border: 2px solid var(--black-dark);
}
.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 28px;
  background-color: var(--black-dark);
}
.search-lupa {
  width: 17px;
  height: 17px;
}
</style>
