<template>
    <div class="pt-3">
        <div class="alert alert-warning" role="alert" v-if="errors.length">Požadovaný článek není možné zobrazit</div>

        <article v-if="article">
            <h1 class="display-4">{{ article.heading }}</h1>
            <p class="lead" v-if="article.lead">{{ article.lead }}</p>
            <hr class="my-4">
            <p v-for="content in article.content" :key="content.id">{{ content.text }}</p>
        </article>
    </div>
</template>

<script>
import ArticlesApi from '@/services/Articles'

export default {
  name: 'singleArticleByTag',

  props: ['tag'],

  data () {
    return {
      article: null,
      errors: [],
    };
  },

  created () {
    ArticlesApi.findFirstArticleByTag(this.tag).then(article => {
      this.article = article;
    }).catch(error => {
      this.errors.push(error);
    });
  },
};
</script>
