import { SETPRODUCTS,LOADPRODUCTS } from './action-types';
import axios from 'axios';

const state = {
    all: []
}

const mutations = {
    [SETPRODUCTS] (state,data){
        state.all = data
    }
}

const actions = {
    [LOADPRODUCTS] ({commit}){
        axios({
            url: "https://api.myjson.com/bins/k7ya8"
        })
        .then((result)=>{
            console.log(result)
            commit(SETPRODUCTS,result.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions 
}