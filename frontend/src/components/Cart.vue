<template>
  <div class="basket" @click="isVisible = !isVisible">
    <div class="basket_icon">
      <i class="fa fa-shopping-cart btn_basket"></i>
      <p class="basket_text" v-if="cart.length">({{ totalQuantity }})</p>
    </div>
    <div v-show="isVisible" class="basket_products">
        <p v-if="!cart.length">No products!</p>
        <div class="basket_item" v-for="product in cart" :key="product.id_product">
            <h3>{{ product.product_name }}</h3>
            <img :src="defaultImg" class='basket_product_image'>
            <p class='basket_price'>Price: {{ product.price * product.quantity }} ₽</p>
            <p class='basket_count'>Count: {{ product.quantity }}</p>
            <a class="del_btn" @click="deleteBasketProduct(product)">Delete</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Cart',

  data() {
    return {
      isVisible: false,
      basketUrl: 'api/cart/',
      defaultImg: './images/default-image.jpg',
      cart: [{
        id_product: 457,
        product_name: 'Gamepad',
        price: 3000,
        quantity: 1,
      }],
    };
  },

  computed: {
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
};
</script>
