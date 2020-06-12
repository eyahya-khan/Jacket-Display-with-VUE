var app = new Vue({
    el: '#app',
    data: {
        title: "Solid Men Turtle Neck Purple T-Shirt",
        selectedVariant: 0,
        variants: [
            {
                variantId: 2210,
                variantSize: "S",
                variantColor: "black",
                variantImage: "img/black.jpeg",
                variantQuantity: 20
            },
            {
                variantId: 2211,
                variantSize: "M",
                variantColor: "yellow",
                variantImage: "img/yellow.jpeg",
                variantQuantity: 0
            },
            {
                variantId: 2212,
                variantSize: "L",
                variantColor: "grey",
                variantImage: "img/grey.jpeg",
                variantQuantity: 8
            },
            {
                variantId: 2213,
                variantSize: "XL",
                variantColor: "maroon",
                variantImage: "img/maroon.jpeg",
                variantQuantity: 60
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity

        }

    }
})
