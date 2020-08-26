Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <section>
        <div class="container">
            <div class="product-image item">
                <img v-bind:src="image" width="250" height="250">
                <p>
                    <a v-bind:href="product_link">Link</a>
                </p>

                <p>Colors</p>
                <div style="display: inline-block;padding:5px; margin: 10px;" v-for="(variant, index ) in variants"
                    :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                    <small style="position: relative; top: -25px;"> #{{variant.variantId}}</small>
                </div>
            </div>

            <div class="product-header item">
                <p class="prd-name">{{title}}</p>
                <p style="text-align: left;">Product Code : {{product_code}}</p>
                <div class="product-desc">
                    <a class="badge-link" href="#" title="Men's Workout &amp; Training Shirts">
                        <i class="best-seller-badge">#1 Best Seller</i>
                        <span class="cat-name"> in Men's Workout &amp; Training Shirts</span>
                    </a>
                    <div>
                        <small>{{product_description}} : </small>
                        <span v-if="onSale">Product On Sale!</span>
                        <span v-else style="color:red;">Product not available</span>
                        <p>Shipping : {{ shipping }}</p>
                    </div>
                    <p v-if="inventory > 10" :class="{lineThrough: !onSale}">In Stock</p>
                    <p v-else-if=" inventory <=10 && inventory> 0">Almost sold out <strong>{{inventory}}</strong>
                        left!
                    </p>
                    <p v-else>Sold Out</p>
                    <div>
                        <ul>
                            <li v-for="details in details">{{details}}</li>
                        </ul>
                    </div>

                    <strong>Sizes :</strong>
                    <div style="display: inline-block;" v-for="size in sizes">
                        <p
                            style="border: 1px solid gray; width: calc(280px/4 ); text-align: center; padding: 5px 2px;margin-right: 5px;">
                            {{size}}</p>
                    </div>
                </div>
                <div>
                  <button v-on:click="addToCart" :disabled="!inStock || !onSale" :class="{disabledButton: !inStock || !onSale}"
                  class="cart-btn"> + Add to Cart</button>
                  </div>
                  
                  <div>
                   <button v-on:click="removeFromCart" class="cart-btn" style="float:right;background: #d91e18;"
                  >- Remove</button>  
                  </div>
            </div>
        </div>
      </section>
`,
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
      sizes: ["small", "medium", "large", "xxl"]
    }
  },
  methods: {
    updateProduct: function (index) {
      this.selectedVariant = index
    },
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart: function () {
      this.$emit('remove-from-cart', this.variantId)
    },
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
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99 + '$'
    }
  },

})



var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    shipping: true,
    cart: [],
    remove_from_cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
      console.log(id)
    },
    removeFromCart(id) {
      this.cart.pop(id)
    }
  },

  components: {
    'header': header
  }

});