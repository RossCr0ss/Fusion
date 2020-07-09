<template>
    <div class="page_wallet">
        <div class="container">

            <section class="my-4 boxes">
                <app-wallet-box 
                    v-for="profileItem in boxes"
                    :key="profileItem.id"
                    class="gradient"
                >
                    <img slot="image" :src="profileItem.picture" class="circle image"/>
                    <h4 slot="title" class="title">{{profileItem.title}}</h4>
                    <p slot="subtitle" class="subtitle">{{profileItem.subtitle}}</p>
                </app-wallet-box>

                <div class="box_card box_buttons">
                    <router-link tag="button" to="/withdraw" class="btn py-2 px-4">Пополнить</router-link>
                    <router-link tag="button" to="/withdraw" class="btn py-2 px-4">Вывести</router-link>
                </div>
            </section>

            <app-wallet-table class="table p-4 my-4 table_shadow table_wallet">
                <div slot="sortButtons" class="buttons">
                    <div
                        class="buttons__item"
                        v-for="(entry, index) in filterList"
                        :item="entry"
                        :key="index"
                    >
                        <button
                            @click="filter = entry; active = index;"
                            class="btn py-2 px-4"
                            :class="{ active: entry == filter }"
                        >
                            {{ entry }}
                        </button>
                    </div>
                </div>
                
                <div 
                    slot="rows" 
                    class="row" 
                    v-for="row in walletData" 
                    :key="row.id" 
                    v-if="resultsFilter(row, 'category', filter)"
                >
                    <div class="row__cell">{{row.operation}}</div>
                    <div class="row__cell">{{row.category}}</div>
                    <div class="row__cell">{{row.sum}}</div>
                    <div class="row__cell">{{row.registered}}</div> 
                </div>
            </app-wallet-table>
        </div>
    </div>
</template>

<script>
import Box from "../components/Box.vue";
import Table from '../components/Table.vue';

export default {
    components: {
        "app-wallet-box": Box,
        "app-wallet-table": Table
    },
    data() {
        return {
            fkey: 'category',
            filterList: ["Всего", "Пополнение", "Расходы", "Выведено", "Рефералы"],
            boxes: [],
            filter: "Всего",
            walletData: [],
        };
    },
    created() {
        const tableURL = "https://next.json-generator.com/api/json/get/4JQSutYn_";
        const boxesURL = "https://next.json-generator.com/api/json/get/NkEL80Y3u";
        fetch(tableURL)
            .then(res => res.json())
            .then(data => (this.walletData = data))
            .catch(error => console.log(error));

        fetch(boxesURL)
            .then(res => res.json())
            .then((data) => {
                (this.boxes = data)
            })
            .catch(error => console.log(error)); 
    },
    methods: {
        resultsFilter(entry) {            
            if (this.filter !== "Всего") {
                if (entry[this.fkey] === this.filter) {
                    return entry;
                }
            } else {
                return entry;
            }
        },
    }
};
</script>

