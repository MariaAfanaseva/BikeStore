<template>
    <div class="content">
        <h1 class="title">Catalog</h1>
        <div class="catalog_products_container">
            <div class="catalog_product" v-for="product of products" :key="product.id_product">
                <router-link class="catalog_product_link" to="/product/1">
                    <img class="catalog_product_img"
                    :src="require(`../assets/foto/${product.image}`)"
                    :alt="product.product_name">{{ product.product_name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Catalog',

  computed: {
    ...mapGetters(['products']),
  },

  methods: {
    ...mapActions(['fetchJSON']),
  },

  created() {
    this.fetchJSON();
  },
};

</script>
