<template>
    <div class="counter_block p-4 my-4">
        <div class="counter__box p-6">
            <h2 class="title">Выплаты участникам экосистемы Fusion</h2>
            <!-- <div class="list py-4">
                <span class="list__item">$</span>
                <span 
                    class="list__item"
                    ref="number"
                    v-for="item in animatedNumber" 
                    :key="item.id"
                >
                    {{item}}
                </span>
            </div> -->

            <app-flip-counter-block/>

            <div class="text">
                <p>Присоединяйся к нам!</p>
                <p>Fuison Group - доход здесь и сейчас!</p>
            </div>

            <!-- <div>{{count}}</div> -->
        </div>
    </div>
</template>

<script>

import { gsap } from "gsap";
import FlipCounterBlock from './FlipCounterBlock.vue';

export default {
    components: {
        'app-flip-counter-block': FlipCounterBlock
    }, 
    data() {
        return {
            number: 999982,
            tweenedNumber: 0,
            /* count: 943958 */
        };
    },
    created() {
        setInterval(() => {
            this.increaseNumber()
        }, 1000);
        
        /* this.transformBumber()  */
    },
    methods: {
        increaseNumber() {
            this.number += 0.032
        },
        
       /*  transformBumber() {
            let formatter = new Intl.NumberFormat("ru", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                useGrouping: true
            })
            return this.count = formatter.format(this.count)
        } */
    },
    mounted() {
        
        /* console.log(this.$refs.number); */
    },
    computed: {
        /* checkNumb() {
            this.$refs.number.forEach(element => {
                if (element.innerText == '.') {
                    element.className += "_dot"
                    console.log(element.style);
                }            
            });
        }, */
        animatedNumber() {
            /* console.log(this.$refs.number); */
            
            return this.tweenedNumber.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")
        },
    },
    watch: {
        number(newValue) {
            gsap.to(this.$data, { duration: 1, tweenedNumber: newValue });
        },
    }
};
</script>

