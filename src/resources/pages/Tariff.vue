<template>
    <div id="tariff-page">
        <div class="container">
            <app-tariff-head></app-tariff-head>
            
            <app-tariff-boxes></app-tariff-boxes>
            <app-table class="table px-4 table_shadow mb-4">
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
                    v-for="row in tariffData" 
                    :key="row.id" 
                    v-if="resultsFilter(row, 'category', filter)"
                >
                    <div class="row__cell">{{row.operation}}</div>
                    <div class="row__cell">{{row.category}}</div>
                    <div class="row__cell">{{row.sum}}</div>
                    <div class="row__cell">{{row.registered}}</div> 
                </div>
            </app-table>
        </div>
    </div>
    
</template>

<script>
import TariffHead from '../components/TariffHead.vue';
import TariffBoxes from '../components/TariffBoxes.vue';
import Table from '../components/Table.vue';
export default {
    components: {
        'app-tariff-head': TariffHead,
        'app-tariff-boxes': TariffBoxes,
        'app-table': Table
    },
    data() {
        return {
            tariffData: [],
            fkey: 'category',
            filterList: ["Всего", "Пополнение", "Расходы", "Выведено", "Рефералы"],
            rows: [],
            addBoxes: [],
            mainBoxes: [],
            filter: "Всего",
        }
    },
    created() {
        const titleURL = "https://next.json-generator.com/api/json/get/N14aMr85d"
        const tableTafiffData = "https://next.json-generator.com/api/json/get/4JQSutYn_"
        fetch(tableTafiffData)
        .then(res => res.json())
        .then(data => {
            this.tariffData = data
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
}
</script>