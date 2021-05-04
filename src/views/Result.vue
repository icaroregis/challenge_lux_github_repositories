<template>
  <div class="container">
    <div class="container-components">
      <TitleBoldAndItalicTwo />
      <SearchMagnifyingGlassTwo />
    </div>
    <section class="chief-container">
      <div class="son-chief-container">
        <img class="image-user" :src="user.avatar_url" alt="foto" />
        <p class="result-title">{{ user.name }}</p>
        <h3 class="result-title-secundary">{{ user.login }}</h3>

        <div class="icons-image">
          <div class="user-information">
            <img
              class="icons"
              src="../assets/organization.png"
              alt="organização"
            />
            <h6 class="text-icons">{{ user.company }}</h6>
          </div>
          <div class="user-information">
            <img class="icons" src="../assets/location.png" alt="localização" />
            <h6 class="text-icons">{{ user.location }}</h6>
          </div>
          <div class="user-information">
            <img class="icons" src="../assets/stars.png" alt="estrela" />
            <h6 class="text-icons">{{ user.public_repos }}</h6>
          </div>
          <div class="user-information">
            <img
              class="icons"
              src="../assets/repository.png"
              alt="respositórios"
            />
            <h6 class="text-icons">{{ user.public_repos }}</h6>
          </div>
          <div class="user-information">
            <img class="icons" src="../assets/followers.png" alt="" />
            <h6 class="text-icons">{{ user.followers }}</h6>
          </div>
        </div>
      </div>

      <div class="user-projects">
        <ul
          class="list-li"
          v-for="repository in repositories"
          :key="repository.id"
        >
          <li>
            <p class="name-repository">{{ repository.name }}</p>
          </li>
          <li>
            <p class="text-project">
              {{ repository.description }}
            </p>
          </li>
          <li>
            <div class="user-information">
              <img class="icons" src="../assets/stars.png" alt="estrelas" />
              <h6 class="text-icons">{{ repository.watchers }}</h6>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import TitleBoldAndItalicTwo from '../components/TitleBoldAndItalicTwo/index';
import SearchMagnifyingGlassTwo from '../components/SearchMagnifyingGlassTwo/index';
// import axios from 'axios';

export default {
  name: 'Result',
  components: { TitleBoldAndItalicTwo, SearchMagnifyingGlassTwo },
  data() {
    return {
      user: [],
      repositories: [],
      userRepositories: [],
      name: '',
      login: '',
      company: '',
      location: '',
      public_repos: '',
      followers: '',
      avatar_url: {
        url: 'https://avatars.githubusercontent.com/u/62527468?v=4',
        titulo: 'foto',
      },
    };
  },
  methods: {},
  mounted() {
    this.$http.get(`users/${this.$route.params.name}`).then((response) => {
      this.user = response.data;
    });

    this.$http
      .get(`users/${this.$route.params.name}/repos`)
      .then((response) => {
        this.repositories = response.data;
      });

    // axios
    //   .post(
    //     'https://salve-github-database-default-rtdb.firebaseio.com/userRepositories.json',
    //     this.repositories
    //   )
    //   .then(() => {
    //     this.repositories.name = '';
    //     this.repositories.description = '';
    //     this.repositories.watchers = '';
    //   });
  },
  updated() {
    this.userRepositories = [...this.user, ...this.repositories];
    console.log('teste', this.userRepositories);
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  width: 100%;
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
  width: 160px;
  margin-right: 40px;
}
.text-project {
  margin-bottom: 5px;
  color: var(--grey-light);
  font-size: 17px;
}
.result-title-secundary {
  color: var(--grey-light);
}
.text-icons {
  color: var(--grey-light);
  font-size: 11px;
}
.result-title {
  font-size: 25px;
}
li {
  list-style: none;
}
.list-li {
  margin-bottom: 15px;
}
.name-repository {
  font-size: 20px;
}
</style>
