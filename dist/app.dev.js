"use strict";

var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      app_name: "Shopping list",
      product_image: "/assets/img/tshirt-green.jpg",
      product_link: "#",
      product_name: "Under Armour Men's Tech 2.0 Short Sleeve T-Shirt",
      product_code: '#00PRD34',
      product_description: "Product info",
      onSale: true,
      inStock: true,
      inventory: 50,
      details: ["80% cotton", "20% polyester", "Made in Greece", "Size : XXL"],
      variants: [{
        variantId: 222,
        variantColor: "#2ecc71",
        variantImage: "/assets/img/tshirt-green.jpg"
      }, {
        variantId: 223,
        variantColor: "#3498db",
        variantImage: "/assets/img/tshirt-blue.jpg"
      }, {
        variantId: 224,
        variantColor: "#f1c40f",
        variantImage: "/assets/img/tshirt-yellow.jpg"
      }, {
        variantId: "goku",
        variantColor: "#ffd194",
        variantImage: "/assets/img/tshirt-goku.jpg"
      }],
      sizes: ["small", "medium", "large", "xxl"],
      cart: 0
    };
  },
  methods: {
    addToCart: function addToCart() {
      this.cart += 1;
    },
    updateProduct: function updateProduct(variantImage) {
      this.product_image = variantImage;
    }
  }
});