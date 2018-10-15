<template>
    <div id="about">
        <div v-for="article in articles"
             :key="article.id">
            <router-link v-bind:to="'/article/' + article.id">{{ article.heading }}</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'about',
  data () {
    return {
      articles: [],
      errors: [],
    };
  },

  // Fetches articles when the component is created.
  created () {
    axios.get(`http://bio.local.tld/articles/list`).then(response => {
      // JSON responses are automatically parsed.
      this.articles = response.data.data;
      console.log(response.data);
    }).catch(e => {
      this.errors.push(e);
    });
  },
};
</script>
<!-- styling for the component -->
<style>
    #about {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
