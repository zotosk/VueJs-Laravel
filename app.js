var app = new Vue({
  el: "#app",

  data() {
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
      details: [
        "80% cotton", "20% polyester", "Made in Greece", "Size : XXL"
      ],
      variants: [{
          variantId: 222,
          variantColor: "#2ecc71",
          variantImage: "/assets/img/tshirt-green.jpg",
          variantQuantity: 10
        },
        {
          variantId: 223,
          variantColor: "#3498db",
          variantImage: "/assets/img/tshirt-blue.jpg",
          variantQuantity: 0
        },
        {
          variantId: 224,
          variantColor: "#f1c40f",
          variantImage: "/assets/img/tshirt-yellow.jpg",
          variantQuantity: 0
        },
        {
          variantId: "goku",
          variantColor: "#ffd194",
          variantImage: "/assets/img/tshirt-goku.jpg",
          variantQuantity: 10
        }
      ],
      sizes: ["small", "medium", "large", "xxl"],
      cart: 0
    }
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.product_brand + ' ' + this.product_name
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    onSale() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  },
});