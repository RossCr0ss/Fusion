<template>
    <div class="calculator_block grey-shadow my-4">
        <ul class="pt-4 px-8 mb-4 list">
            <li class="my-2" v-for="item in tariffData" :key="item.id" >
                <button class="btn py-2 px-4" @click="checkTariff(item)">{{item.title}}</button>
            </li>
        </ul>

        <div class="info_block p-4">
            <div class="box py-4">
                <p>Депозит:</p>
                <p>{{price}}$</p>
            </div>

            <div class="box py-4">
                <p>Чистая прибыль в месяц: {{mounthProfit}}$</p>
                <p>Чистая прибыль в год: {{yearsProfit}}$</p>
            </div>
        </div>

        <div class="button_box pt-4 mx-8 mb-4">
            <div class="my-2">
                <router-link v-if="isLogged" tag="a" to="/tariff" class="btn py-2 px-4">Купить пакет</router-link>
                <router-link v-else tag="a" to="/login" class="btn py-2 px-4">Купить пакет</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tariffData: [],
            price: null,
            mounthProfit: null,
            yearsProfit: null,
            isLogged: true
        }
    },
    created() {
        const tariffURL = "https://next.json-generator.com/api/json/get/N1zbe0es_";
        
        fetch(tariffURL)
        .then(res => res.json())
        .then(data => {
            this.tariffData = data
        })
        .catch(error => console.log(error))
    },
    methods: {
        checkTariff(item) {
            this.price = item.price,
            
            this.mounthProfit = Math.floor(item.price * ( item.percent / 100) /12),
            this.yearsProfit = Math.floor(item.price * ( item.percent / 100))   
        }
    }
}
</script>
