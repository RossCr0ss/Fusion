<template>
    <div class="history">
        <div class="container">
            <app-history-table class="table p-4 my-4 table_shadow table_wallet">
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
                    v-for="row in historyData" 
                    :key="row.id" 
                    v-if="resultsFilter(row, 'category', filter)"
                >
                    <div class="row__cell">{{row.operation}}</div>
                    <div class="row__cell">{{row.category}}</div>
                    <div class="row__cell">{{row.sum}}</div>
                    <div class="row__cell">{{row.registered}}</div>             
                </div>
            </app-history-table>
        </div>
    </div>
</template>

<script>
import Table from '../components/Table.vue';
export default {
    components: {
        "app-history-table": Table
    },
    data() {
        return {
            fkey: 'category',
            filterList: ["Всего", "Пополнение", "Расходы", "Выведено", "Рефералы"],
            filter: "Всего",
            historyData: []
        };
    },
    created() {
        const tableURL = "https://next.json-generator.com/api/json/get/4JQSutYn_";
        fetch(tableURL)
            .then(res => res.json())
            .then(data => {
                this.historyData = data
                console.log(this.historyData)
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
