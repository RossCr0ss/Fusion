<template>
    <div class="home">
        <div class="container">
            <div class="main-background"></div>
            <app-slider/>

            <section class="my-4 boxes" id="anchor1">
                <app-box 
                    v-for="item in itemData"
                    :key="item.id"
                    class="gradient box_home"
                >
                    <img slot="image" :src="item.img" class="circle image"/>
                    <h4 slot="title" class="title">{{item.title}}</h4>
                    <p slot="subtitle" class="subtitle">{{item.subtitle}}</p>
                </app-box>
            </section>

            <app-home-info-block/>

            <app-payments-sum-block id="anchor2"/>

            <div class="single-block my-4">
                <div class="info_box px-4 py-8">
                    <h2 class="title">Интересует доход на автопилоте?</h2>
                    <div class="button_box py-4">
                        <div class="pt-2">
                            <a tag="button" href="https://fusion-group.io" class="btn_violet py-2 px-4">Начать сотрудничество</a>
                        </div>
                    </div>
                </div>
            </div>

            <app-exchange-block/>
            
            <!-- <app-table class="table px-4 my-4 table_shadow table_main">
                <div slot="rows" class="table__row" v-for="row in tableData" :key="row.id">
                    <div class="table__cell" v-for="cell in row" :key="cell.id">{{cell}}</div>
                </div>
                <div slot="buttons" class="table__row">
                    <div class="table__cell"></div>
                    <div class="table__cell" v-for="button in buttonsData" :key="button.id">
                        <router-link tag="button" to="/tariff" class="btn py-2 px-4">{{button.text}}</router-link>
                    </div>
                </div>
            </app-table> -->

            <app-tariff-boxes id="anchor3"/>

            <app-achievement-block id="anchor4"/>
            
            <app-home-calculator id="anchor5"/>
            
            <section class="card my-4" id="anchor6">
                <app-card 
                    class="card_box" 
                    v-for="card in cardData" 
                    :key="card.id"
                >
                    <div slot="title" class="left__top mb-4" :style="{ 'background-image' : 'url(\'' + card.img + '\')' }">
                        <h2 class="title title__background">{{card.title}}</h2>
                    </div>
                    <p slot="info">{{card.text}}</p>
                    <p slot="info">{{card.text2}}</p>
                    
                    <a slot='button' href="#" class="btn py-2 px-4 mb-4">Подробнее</a>
                   
                </app-card>
            </section>

            <section class="card my-4" id="anchor7">
                <app-news-item-block v-for="item in newsItemBlockData" :key="item.id">
                    <h2 slot="title" class="title">{{item.title}}</h2>
                    <h4 slot="subtitle" class="subtitle">{{item.subtitle}}</h4>
                    <div slot="info" class="content__text py-4">{{item.text}}</div>
                    <h4 slot="subtitle2" class="subtitle">{{item.subtitle2}}</h4>
                    <div slot="info2" class="content__text py-4">{{item.text2}}</div>
                </app-news-item-block>
            </section>
        </div>
    </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import InfoBlock from "../components/InfoBlock.vue";
import Table from "../components/Table.vue";
import Card from "../components/Card.vue";
import Box from '../components/Box.vue';
import NewsItemBlock from '../components/NewsItemBlock.vue';
import HomeInfoBlock from '../components/HomeInfoBlock.vue';
import HomeCalculator from '../components/HomeCalculator.vue';
import ExchangeBlock from '../components/ExchangeBlock.vue';
import TariffBoxes from '../components/TariffBoxes.vue';
import AchievementBlock from '../components/AchievementBlock.vue';
import PaymentsSumBlock from '../components/PaymentsSumBlock.vue';

export default {
    name: 'Home',
    components: {
        'app-slider': Slider,
        'app-box': Box,
        'app-info-block': InfoBlock,
        'app-table': Table,
        'app-card': Card,
        'app-news-item-block': NewsItemBlock,
        'app-home-info-block': HomeInfoBlock,
        'app-home-calculator': HomeCalculator,
        'app-exchange-block': ExchangeBlock,
        'app-tariff-boxes': TariffBoxes,
        'app-achievement-block': AchievementBlock,
        'app-payments-sum-block': PaymentsSumBlock
    },
    data() {
        return {
            itemData: [],
            tableData: [],
            cardData: [],
            buttonsData: [
                {
                text: "Купить"
                },
                {
                text: "Купить"
                },
                {
                text: "Купить"
                },
                {
                text: "Купить"
                }
            ],
            images: [
                    '/assets/img/images/main/1.jpg',
                    '/assets/img/images/main/FUSION EXCHANGE.jpg'
                ],
            newsItemBlockData: [],
        };
    },
    created() {
        const dataMainTableURL = "https://next.json-generator.com/api/json/get/41wBRow5u";
        const itemURL = "https://next.json-generator.com/api/json/get/Nk8C0qZ2_";
        const cardURL = "https://next.json-generator.com/api/json/get/Eymyu2ncd";
        const newsItemURL = "https://next.json-generator.com/api/json/get/E1DivTuq_"
        fetch(dataMainTableURL)
        .then(res => res.json())
        .then(data => {
            this.tableData = data
        })
        .catch(error => console.log(error));

        fetch(itemURL)
        .then(res => res.json())
        .then(data => {
            this.itemData = data
        })
        .catch(error => console.log(error));

        fetch(cardURL)
        .then(res => res.json())
        .then(data => {
            this.cardData = data
        })
        .catch(error => console.log(error));

        fetch(newsItemURL)
        .then(res => res.json())
        .then(data => {
            this.newsItemBlockData = data
        })
        .catch(error => console.log(error));
    },
};
</script>