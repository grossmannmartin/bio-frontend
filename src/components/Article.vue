<template>
    <div id="article">
        <h1>{{ article.heading }}</h1>
        <p v-for="content in article.content" :key="content.id">{{ content.text }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'article',

  props: ['id'],

  data () {
    return {
      article: [],
      errors: [],
    };
  },

  // Fetches articles when the component is created.
  created () {
    axios.get(`http://bio.local.tld/articles/get/` + this.id).then(response => {
      // JSON responses are automatically parsed.
      this.article = response.data.data;
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
