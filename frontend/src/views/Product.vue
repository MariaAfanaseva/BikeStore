<template>
    <div class="product_block">
        <h1 class="title">{{ product.product_name }}</h1>
            <div class="product_container">
                <div>
                    <img class="product_detail_img"
                        src="../assets/foto/Glory_27_5_0_Brushed_Black.jpg"
                        alt="Giant Glory 27.5"
                    >
                </div>
                    <div class="product_short">
                        <p class="product_short_description">
                            {{ product.description }}
                        </p>
                        <p class="product_price">
                            Price: {{ product.price }} &euro;
                        </p>
                        <button class="product_button_buy"
                            @click="addProduct(product)">Add to cart
                        </button>
                    </div>
            </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Product',

  computed: {
    ...mapGetters(['product']),
  },

  methods: {
    ...mapActions(['getProduct', 'addProduct']),
  },

  created() {
    this.getProduct(this.$route.params.id);
  },
};
</script>
