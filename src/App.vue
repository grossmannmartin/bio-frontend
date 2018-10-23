<template>
    <div id="app" class="container">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <router-link class="navbar-brand" v-bind:to="'/'">❖ Martin Grossmann / Bio</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto order-1">
                    <li class="nav-item">
                        <router-link class="nav-link" v-bind:to="'/about'">~$ whoami █</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-bind:to="'/articles'">Popis aplikace</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-2 order-2">
                    <li class="nav-item small"><a class="nav-link" href="/static/cv-grossmann.pdf">Download CV</a></li>
                    <li class="nav-item small"><a class="nav-link" href="https://github.com/grossmannmartin/bio">Backend</a></li>
                    <li class="nav-item small"><a class="nav-link" href="https://github.com/grossmannmartin/bio-frontend">Frontend</a></li>
                </ul>
            </div>
        </nav>

        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
    @media (max-width: 991px) {
      .container {
        max-width: 98%;
      }
    }
</style>
