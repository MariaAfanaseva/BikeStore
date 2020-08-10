<template>
    <div class="content">
        <h1 class="title">Search</h1>
        <div class="catalog_products_container">
            <p v-if="!filtered.length" class="cart_info">No products!</p>
            <div class="catalog_product" v-for="product of filtered" :key="product.id_product">
                <router-link class="catalog_product_link" :to="`/product/${product.id_product}`">
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
  name: 'SearchProducts',

  computed: {
    ...mapGetters(['filtered']),
  },

  methods: {
    ...mapActions(['fetchJSON']),
  },

  created() {
    this.fetchJSON();
  },
};

</script>
