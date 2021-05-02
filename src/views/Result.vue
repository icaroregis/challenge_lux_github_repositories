<template>
  <div class="container">
    <div class="container-components">
      <TitleBoldAndItalicTwo />
      <SearchMagnifyingGlassTwo />
    </div>
    <section class="chief-container">
      <div class="son-chief-container">
        <img class="image-user" src="" alt="" />
        <h1 class="result-title">Lidenberg</h1>
        <h3 class="result-title-secundary">lidenberg</h3>

        <div class="icons-image">
          <div class="user-information">
            <img
              class="icons"
              src="../assets/organization.png"
              alt="organização"
            />
            <h6 class="text-icons">Nome da Organizaçao</h6>
          </div>
          <div class="user-information">
            <img class="icons" src="../assets/location.png" alt="localização" />
            <h6 class="text-icons">Capítal</h6>
          </div>
          <div class="user-information">
            <img class="icons" src="../assets/stars.png" alt="estrela" />
            <h6 class="text-icons">Numero da estrela</h6>
          </div>
          <div class="user-information">
            <img
              class="icons"
              src="../assets/repository.png"
              alt="respositórios"
            />
            <h6 class="text-icons">Qtde de repositórios</h6>
          </div>
          <div class="user-information">
            <img class="icons" src="../assets/followers.png" alt="" />
            <h6 class="text-icons">Qtde de segidores</h6>
          </div>
        </div>
      </div>

      <div class="user-projects">
        <h1>Título do projeto</h1>
        <p class="text-project">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat
          ornare justo quis placerat. Etiam sollicitudin lectus sed ante
          vulputate lobortis. Curabitur vitae vehicula diam. Integer quis
          iaculis libero. Nulla.
        </p>
        <div class="user-information">
          <img class="icons" src="../assets/stars.png" alt="estrelas" />
          <h6 class="text-icons">Número da estrela</h6>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleBoldAndItalicTwo from '../components/TitleBoldAndItalicTwo/index';
import SearchMagnifyingGlassTwo from '../components/SearchMagnifyingGlassTwo/index';

export default {
  name: 'result',
  components: { TitleBoldAndItalicTwo, SearchMagnifyingGlassTwo },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  width: 100%;
  height: 570px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 15px;
}
.container-components {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.TitleBoldAndItalic {
  width: 311px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-user {
  width: 160px;
  height: 160px;
  border: 1px solid black;
}
.user-information {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.icons-image {
  margin-top: 27px;
}
.icons {
  width: 14px;
  height: 14px;
  margin-right: 6px;
}
.number-of-statistics {
  font-size: 14;
}
.user-projects {
  width: 600px;
  height: 400px;
}
.chief-container {
  display: flex;
}
.son-chief-container {
  margin-right: 40px;
}
.text-project {
  margin-bottom: 5px;
  color: var(--grey-light);
}
.result-title-secundary {
  color: var(--grey-light);
}
.text-icons {
  color: var(--grey-light);
}
</style>
