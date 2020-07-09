<template>
    <div id="popup-profile">
        <button class="btn mt-3 py-2 px-4" @click="showModal = true">
            Выбрать
        </button>

        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <h1>Тариф №1</h1>
                <h3>Ваш баланс: {{balance}}$</h3>
                <h3>Стоимость: {{cost}}$</h3>
                <p>Немного информации о тарифе</p>
                <button class="btn mt-3 py-2 px-4" @click="showModal = false">
                    Подтвердить
                </button>
                <button class="btn mt-3 py-2 px-4" @click="showModal = false">
                    Отклонить
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ProfilePopup',
    data() {
        return {
            showModal: false,
            balance: 100,
            cost: 10
        }
    }
}
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'montserrat', sans-serif;
    }

    #tariff-page {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal {
        position: fixed;
        text-align: center;
        top: 50%;
        color: #666;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        width: 100%;
        max-width: 400px;
        background-color: #FFF;
        border-radius: 16px;
        padding: 25px;
    
        p {
            color: #666;
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 15px;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform .5s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
    }
</style>
