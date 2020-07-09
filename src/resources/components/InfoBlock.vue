<template>
    <section class="info py-4 my-4">
        <div class="info__card card_width mr-4 grey-shadow">
            <div class="left">
                <div class="left__top mb-4" style="background-image: url(/assets/img/images/main/1.jpg)">
                    <h2 class="title">Fusion World Club</h2>
                </div>

                <div class="left__text mx-8 mb-4">
                    <p>Капитал нельзя заработать, его можно только сделать. Чтобы его сделать, нужна команда Стань лидером своей команды и начни зарабатывать уже сейчас.</p>
                </div>

                <div class="left__buttons pt-4 mx-8 mb-4">
                    <div class="login mr-4">
                        <router-link tag="button" to="/login" class="btn py-2 px-4">Логин</router-link>
                    </div>
                    <div class="register mr4">
                        <router-link tag="button" to="/register" class="btn py-2 px-4">Регистрация</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="info__balance ml-4 p-4 grey-shadow">
            <div class="top">
                <h2 class="title">Current balance</h2>
                <p class="text">This billing cycle</p>
            </div>

            <div class="box-chart set-size charts-container">
                <div class="pie-wrapper progress-percent text-background">

                    <div class="label">
                        <span class="smaller">Balance</span>
                        <span class="title">$ 10k</span>
                    </div>

                    <app-circle-bar></app-circle-bar>
                </div>
            </div>

            <div class="text mb-2">
                <h5 class="title">$ 50,150.00</h5>
                <p class="subtitle">Used balance this billing cycle</p>
            </div>
        </div>
    </section>
</template>

<script>
import CircleBar from './CircleBar.vue'
    
    export default {
        name: 'InfoBlock',
        components: {
            'app-circle-bar': CircleBar
        },
    }
</script>
