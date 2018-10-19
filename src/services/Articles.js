import axios from 'axios';

export default {

  findFirstArticleByTag (tag) {
    return axios.get(process.env.VUE_APP_ROOT_API + `/articles/tag/` + tag)
      .then(response => {
        return response.data.data.shift();
      });
  },

  findArticlesByTag (tag) {
    return axios.get(process.env.VUE_APP_ROOT_API + `/articles/tag/` + tag)
      .then(response => {
        return response.data.data;
      });
  },

  getArticleById (id) {
    return axios.get(process.env.VUE_APP_ROOT_API + `/articles/get/` + id)
      .then(response => {
        return response.data.data;
      });
  },

};
