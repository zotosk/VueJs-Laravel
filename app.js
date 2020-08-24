var app = new Vue({
  el: "#app",
  data() {
    return {
      app_name: "Shopping list",
      product_image: "/assets/img/tshirt-blue.jpg",
      product_link: "#",
      product_name: "Under Armour Men's Tech 2.0 Short Sleeve T-Shirt",
      product_description: "Product info",
      onSale: true,
      inventory: 50,
      details: [
        "80% cotton", "20% polyester", "Made in Greece", "Size : XXL"
      ]
    };
  }
});