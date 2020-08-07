<template>
  <div class="basket">
    <div class="basket_icon" @click="isVisible = !isVisible">
      <i class="fa fa-shopping-cart btn_basket"></i>
      <p class="basket_text" v-if="cart.length">({{ totalQuantity }})</p>
    </div>
    <div v-show="isVisible" class="basket_products">
        <p v-if="!cart.length">No products!</p>
        <div class="basket_item" v-for="product in cart" :key="product.id_product">
            <h3>{{ product.product_name }}</h3>
            <img v-if="product.image" class='basket_product_image'
              :src="require(`../assets/foto/${product.image}`)"
              :alt="product.product_name">
            <img v-else class='basket_product_image'
              :src="require(`../assets/foto/${defaultImg}`)"
              :alt="product.product_name">
            <p class='basket_price'>Price: {{ product.price * product.quantity }} &euro;</p>
            <p class='basket_count'>Count: {{ product.quantity }}</p>
            <a class="del_btn" @click="deleteBasketProduct(product)">Delete</a>
        </div>
    </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',

  data() {
    return {
      isVisible: false,
      defaultImg: 'default-image.jpg',
    };
  },

  computed: {
    ...mapGetters(['cart']),

    totalQuantity() {
      return this.cart.reduce(
        (sum, product) => {
          sum += product.quantity;
          return sum;
        }, 0,
      );
    },

    totalPrice() {
      return this.cart.reduce(
        (sum, product) => {
          sum += product.price * product.quantity;
          return sum;
        }, 0,
      );
    },
  },

  methods: {
    ...mapActions(['getCart', 'deleteBasketProduct']),
  },

  created() {
    this.getCart();
  },

};
</script>
