"use strict";

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: "\n    <section>\n        <div class=\"container\">\n            <div class=\"product-image item\">\n                <img v-bind:src=\"image\" width=\"250\" height=\"250\">\n                <p>\n                    <a v-bind:href=\"product_link\">Link</a>\n                </p>\n\n                <p>Colors</p>\n                <div style=\"display: inline-block;padding:5px; margin: 10px;\" v-for=\"(variant, index ) in variants\"\n                    :key=\"variant.variantId\" class=\"color-box\" :style=\"{backgroundColor: variant.variantColor }\"\n                    @mouseover=\"updateProduct(index)\">\n                    <small style=\"position: relative; top: -25px;\"> #{{variant.variantId}}</small>\n                </div>\n            </div>\n\n            <div class=\"product-header item\">\n                <p class=\"prd-name\">{{title}}</p>\n                <p style=\"text-align: left;\">Product Code : {{product_code}}</p>\n                <div class=\"product-desc\">\n                    <a class=\"badge-link\" href=\"#\" title=\"Men's Workout &amp; Training Shirts\">\n                        <i class=\"best-seller-badge\">#1 Best Seller</i>\n                        <span class=\"cat-name\"> in Men's Workout &amp; Training Shirts</span>\n                    </a>\n                    <div>\n                        <small>{{product_description}} : </small>\n                        <span v-if=\"onSale\">Product On Sale!</span>\n                        <span v-else style=\"color:red;\">Product not available</span>\n                        <p>Shipping : {{ shipping }}</p>\n                    </div>\n                    <p v-if=\"inventory > 10\" :class=\"{lineThrough: !onSale}\">In Stock</p>\n                    <p v-else-if=\" inventory <=10 && inventory> 0\">Almost sold out <strong>{{inventory}}</strong>\n                        left!\n                    </p>\n                    <p v-else>Sold Out</p>\n                    <div>\n                        <ul>\n                            <li v-for=\"details in details\">{{details}}</li>\n                        </ul>\n                    </div>\n\n                    <strong>Sizes :</strong>\n                    <div style=\"display: inline-block;\" v-for=\"size in sizes\">\n                        <p\n                            style=\"border: 1px solid gray; width: calc(280px/4 ); text-align: center; padding: 5px 2px;margin-right: 5px;\">\n                            {{size}}</p>\n                    </div>\n                </div>\n                <div>\n                  <button v-on:click=\"addToCart\" :disabled=\"!inStock || !onSale\" :class=\"{disabledButton: !inStock || !onSale}\"\n                  class=\"cart-btn\"> + Add to Cart</button>\n                  </div>\n                  \n                  <div>\n                   <button v-on:click=\"removeFromCart\" class=\"cart-btn\" style=\"float:right;background: #d91e18;\"\n                  >- Remove</button>  \n                  </div>\n            </div>\n        </div>\n      </section>\n",
  data: function data() {
    return {
      app_name: "Shopping list",
      product_image: "/assets/img/tshirt-green.jpg",
      product_link: "#",
      product_name: "Men's Tech 2.0 Short Sleeve T-Shirt",
      product_brand: "Under Armour",
      product_code: '#00PRD34',
      product_description: "Product info",
      inStock: true,
      inventory: 50,
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Made in Greece", "Size : XXL"],
      variants: [{
        variantId: 222,
        variantColor: "#2ecc71",
        variantImage: "/assets/img/tshirt-green.jpg",
        variantQuantity: 10
      }, {
        variantId: 223,
        variantColor: "#3498db",
        variantImage: "/assets/img/tshirt-blue.jpg",
        variantQuantity: 0
      }, {
        variantId: 224,
        variantColor: "#f1c40f",
        variantImage: "/assets/img/tshirt-yellow.jpg",
        variantQuantity: 0
      }, {
        variantId: "goku",
        variantColor: "#ffd194",
        variantImage: "/assets/img/tshirt-goku.jpg",
        variantQuantity: 10
      }],
      sizes: ["small", "medium", "large", "xxl"]
    };
  },
  methods: {
    updateProduct: function updateProduct(index) {
      this.selectedVariant = index;
    },
    addToCart: function addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    removeFromCart: function removeFromCart() {
      this.$emit('remove-from-cart', this.variantId);
    }
  },
  computed: {
    title: function title() {
      return this.product_brand + ' ' + this.product_name;
    },
    image: function image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    onSale: function onSale() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping: function shipping() {
      if (this.premium) {
        return "Free";
      }

      return 2.99 + '$';
    }
  }
});
var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    shipping: true,
    cart: [],
    remove_from_cart: []
  },
  methods: {
    updateCart: function updateCart(id) {
      this.cart.push(id);
      console.log(id);
    },
    removeFromCart: function removeFromCart(id) {
      this.cart.pop(id);
    }
  },
  components: {
    'header': header
  }
});