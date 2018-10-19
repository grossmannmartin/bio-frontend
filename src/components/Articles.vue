<template>
    <div id="articles">
        <div class="card mt-5"
             v-for="article in articles"
             :key="article.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <h5 class="card-title"> {{ article.heading }}</h5>
                    </div>
                    <div class="col-6 text-muted text-right small">{{ article.publishedAt | formatDate }}</div>
                </div>
                <div class="card-subtitle mb-2 text-muted small">
                    {{ article.authorName }}
                </div>

                <p class="card-text">{{ article.lead }}</p>

                <router-link class="btn-link" v-bind:to="'/article/' + article.id">Číst dále…</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ArticlesApi from '@/services/Articles';

export default {
  name: 'articles',

  props: [
    'tag',
  ],

  data () {
    return {
      articles: [],
      errors: [],
    };
  },

  created () {
    ArticlesApi.findArticlesByTag(this.tag).then(articles => {
      this.articles = articles;
    }).catch(error => {
      this.errors.push(error);
    });
  },
};
</script>
