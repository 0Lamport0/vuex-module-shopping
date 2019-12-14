<template>
    <div>
        <h2>产品列标</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.name}} / {{product.price}}.00
                <button>加入购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { LOADPRODUCTS } from "../store/modules/action-types.js"
import {mapState} from 'vuex';

export default {
    mounted() {
        this.$store.dispatch("products/" + LOADPRODUCTS)
    },
    computed: {
        ...mapState("products",{
            products: state => state.all
        })
    },
}
</script>

<style lang="css">
    li{
        margin-bottom: 5px;
    }
    
</style>