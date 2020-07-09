<template>
    <div class="session container">
            <app-table class="table px-4 my-4 table_shadow table_session">
                <div 
                    slot="rows" 
                    class="row" 
                    v-for="row in tableData" 
                    :key="row.id" 
                >
                    <div 
                        class="row__cell" 
                        v-for="cell in row" 
                        :key="cell.id"
                    >
                        {{cell}}
                    </div>
                </div>  
            </app-table>
 
    </div>
</template>

<script>
import Table from '../components/Table.vue';

export default {
    components: {
        'app-table': Table
    },
    data() {
        return {
            tableData: [],
        }
    },
    created() {
        const tableURL = "https://next.json-generator.com/api/json/get/EkYg9ONsd";
        fetch(tableURL)
            .then(res => res.json())
            .then(data => (this.tableData = data))
            .catch(error => console.log(error));
    }

}
</script>
