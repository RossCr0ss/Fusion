<template>
    <div class="exchange_block">
        <ul class="list">
            <li 
                class="list__item"
                v-for="item in info"
                :key="item.id"
            >
                <div class="wrapper_image">
                    <img
                        :src="item.image"
                        alt="cryptoImage"
                        class="image"
                    />
                </div>
                <span class="name">{{item.name}}</span>
                <span class="value">{{item.current_price}}$</span>
                
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    name: 'ExchangeBlock',
    data() {
        return {
            info: null
        }
    },
    created() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20bip&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            this.info = data            
        })
        .catch(error => console.log(error));
    }

    
}
</script>
