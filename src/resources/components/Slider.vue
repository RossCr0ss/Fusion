<template>
    <div class="slider">
        <carousel
                class="slider__container"
                :autoplay="true"
                :perPage="1"
                :controls="false" :indicators="false" :interval="3000"
                :navigationEnabled="true"
                navigationPrevLabel="❮"
                navigationNextLabel="❯"
                :paginationEnabled="false"
        >
            <!-- <slide
                    v-for="image in images"
                    :key="image.key"
                    class="slider__item"
                    :style="{ 'background-image' : 'url(\'' + image + '\')' }">
                <div class="slider__item">
                    <div class="content">
                        <h2>TITLE</h2>
                        <div class="text">Caption Two</div>
                        <a class="button">Some button</a>
                    </div>
                </div>
            </slide> -->
            <slide
                    v-for="image in images"
                    :key="image.key"
                    class="slider__item"
                    :style="{ 'background-image' : 'url(\'' + image + '\')' }">
                <div class="slider__item">
                    <div class="content">
                        <h2>FUSION CLUB</h2>
                        <div class="text">Экосистема Fusion ищет активных партнеров для совместного роста на новом огромном рынке. Мы понимаем, что криптоактивы — это уже не чудачество гиков, а наша текущая реальность. Крупные корпорации говорят о создании своих токенов и бирж.</div>
                        <div class="text">Хотите сесть в первый люксовый вагон уже сегодня, или будете завтра догонять последний плацкарт и занимать боковое около туалета. Решать вам.</div>
                        <router-link tag="a" to="/register" class="button">Зарегистрироватся</router-link>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>

</template>


<script>

    import { Carousel, Slide } from 'vue-carousel';


    export default {
        name: 'Slider.vue',
        data() {
            return {
                images: [
                    '/assets/img/images/main/1.jpg',
                ],
            }
        },
        components: {
            Carousel,
            Slide,
        },
    };
</script>

<style lang="scss">

.VueCarousel {
    &-wrapper {
        height: 100%;
    }

    &-inner {
        height: 100% !important;
    }

    &-navigation {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;

        &-button {
            padding: 10px;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            font-size: 1rem;
            color: white !important;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(90deg, #673AB7, #9C27B0);
        }

        &-prev {
            margin-left: 60px;
        }

        &-next {
            margin-right: 60px;
        }
    }
}

@media screen and (max-width: 768px) {
    .VueCarousel {
        &-button {
            display: none;
        }
    }
}
</style>



