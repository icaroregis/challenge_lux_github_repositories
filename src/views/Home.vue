<template>
  <div class="container">
    <TitleBoldAndItalic />
    <SearchMagnifyingGlass />
  </div>
</template>

<script>
import TitleBoldAndItalic from '../components/TitleBoldAndItalic/index';
import SearchMagnifyingGlass from '../components/SearchMagnifyingGlass/index';

export default {
  name: 'home',
  components: { TitleBoldAndItalic, SearchMagnifyingGlass },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  width: 100%;
  height: 555px;
  margin: 35px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--white);
  font-family: 'Roboto Mono', 'sans-serif';
}
</style>
