<template>
    <form action="/search?#" class="search_form">
        <input placeholder="Search" type="text" class="search_field" v-model="searchLine">
        <button class="btn_search" type="submit" @click="filter(searchLine)">
            <i class="fa fa-search search"></i>
        </button>
    </form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Search',

  data() {
    return {
      searchLine: '',
    };
  },

  methods: {
    ...mapActions(['filter']),
  },
};

</script>
