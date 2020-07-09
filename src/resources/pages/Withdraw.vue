<template>
    <div class="withdraw">
        <div class="container">
            <div class="wrapper">
                <div class="wrapper__top">
                    <div class="leftside">
                        <div class="leftside__box">
                            <label for="cash">Ввести сумму</label>
                            <input type="number" name="cash" id="cash" />
                        </div>
                        <div class="leftside__box">
                            <label for="wallet">Кошелек</label>
                            <input name="wallet" id="wallet" />
                        </div>
                        <div class="leftside__box">
                            <app-select-currency class="mt-4"/>
                        </div>
                        <button type="submit" class="btn mt-3 py-2 px-4">Подтвердить</button>
                    </div>

                    <form class="rightside">
                        <div class="rightside__box">
                            <input type="radio" id="control_01" name="select" value="1" checked />
                            <label for="control_01">
                                <h2>USDT</h2>
                            </label>
                        </div>
                        <div class="rightside__box">
                            <input type="radio" id="control_02" name="select" value="2" />
                            <label for="control_02">
                                <h2>PerfectMoney</h2>
                            </label>
                        </div>
                    </form>
                </div>
                <app-withdraw-table class="table px-4 my-4 table_shadow table_withdraw">
                    <div slot="rows" class="table__row" v-for="row in withdrawData" :key="row.id">
                        <div class="table__cell" v-for="cell in row" :key="cell.id">
                            {{cell}}
                        </div>
                    </div>
                </app-withdraw-table>
            </div>   
        </div>
  </div>
</template>


<script>
import Table from '../components/Table.vue'
import CurrencySelect from '../components/CurrencySelect.vue'


export default {
    name: "Withdraw",
    components: {
        "app-withdraw-table": Table,
        "app-select-currency": CurrencySelect
    },
    data() {
        return {
            withdrawData: [],
        }
    },
    created() {
        const dataURL = "https://next.json-generator.com/api/json/get/E1EQks25d"
        fetch(dataURL)
        .then(res => res.json())
        .then(data => {
            this.withdrawData = data
        })
    }, 
}
</script>
