<template>
    <div class="partners">
        <div class="container">

            <div class="top_block my-4">
                
                <div class="referral_block card-shadow p-4">
                    Партнёры
                    <div class="link_wrapper mt-4">
                        <div class="link__box p-2">
                            <div class="text">Ваша реферальная ссылка</div>
                            <div class="referral">link:{{referralLink}}</div>
                            <input type="hidden" id="referralLink" :value="referralLink">
                        </div>
                        <button @click="copyRefferalLink" class="btn py-3 px-4">
                            Копировать
                        </button>
                    </div>
                </div>

                <div class="balance_block">
                    <div class="balance__item">
                        <div class="wrapper_image">
                            <img
                                src="/assets/img/icons/profit.svg"
                                alt="profit"
                                class="responsive-img"
                            />
                        </div>
                        <div class="wrapper_info">
                            <span class="value">{{ income | formatNumber }}</span>
                            <span class="text">Общая прибыль</span>
                        </div>
                    </div>

                    <div class="balance__item">
                        <div class="wrapper_image">
                            <img
                                src="/assets/img/icons/exchange.svg"
                                alt="turnover"
                                class="responsive-img"
                            />
                        </div>
                        <div class="wrapper_info">
                            <span class="value">{{ turnover | formatNumber }}</span>
                            <span class="text">Оборот команды</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cards_block my-4">
                <div 
                    class="item p-4 card-shadow"
                    v-for="item of 3" 
                    :key="item.id"
                >
                    <div class="item__top">
                        <div class="wrapper_image">
                            <img src="/assets/img/images/profile/avatar.png"
                                class="responsive-img" 
                                alt="image">
                            </div>
                        <div class="wrapper_info">
                            <div class="text">Прямые партнёры</div>
                            <div class="value">{{partners}}</div>
                        </div>
                    </div>
                    <div class="item__bottom p-4">
                        <span class="value">+ {{increase}}</span>
                        <span class="text">На сегодня</span>
                    </div>
                </div>
            </div>

            <app-table class="table px-4 my-4 table_shadow table_partners">
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

            <app-table class="table px-4 my-4 table_shadow table_partners"> 
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
    </div>
</template>

<script>
import Table from '../components/Table.vue'

export default {
    components: {
        'app-table': Table
    },
    data() {
        return {
            referralLink: 'http:fusion/assets/img/images/main/1.jpg',
            income: 0.00,
            turnover: 0.00,
            partners: 0,
            increase: 0,
            tableData: []
        }
    },
    created() {
        const tableURL = "https://next.json-generator.com/api/json/get/EJhyKxIsO";
        fetch(tableURL)
            .then(res => res.json())
            .then(data => (this.tableData = data))
            .catch(error => console.log(error));
    },
    filters: {
        formatNumber(number) {
            return new Intl.NumberFormat('EN-US', { style: 'currency', currency: 'USD' }).format(number) 
        }
    },
    methods: {
        copyRefferalLink () {
            let RefferalLinkToCopy = document.querySelector('#referralLink')
            RefferalLinkToCopy.setAttribute('type', 'text')    
            RefferalLinkToCopy.select()

            try {
                let copy = document.execCommand('copy');
                console.log(copy);
            } catch (err) {
                console.log(err);
            }
            RefferalLinkToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
        },
    }

}
</script>
