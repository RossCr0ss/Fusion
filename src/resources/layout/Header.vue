<template>
    <header class="header">
        <div class="header__top py-1 header_container">
            <ul class="left">
                <li class="box">
                    <a href="https://t.me/fusion2pro" target="_blank" class="link">
                        <img src="/assets/img/icons/icon-telegram.svg" alt="icon-telegram" class="middle-icon" />
                        <p class="text">Fusion</p>
                    </a>
                </li>

                <li class="box">
                    <a href="mailto:fusion4pro@gmail.com" class="link">
                        <img src="/assets/img/icons/icon-email.svg" alt="icon-email" class="email middle-icon" />
                        <p class="text">fusion4pro@gmail.com</p>
                    </a>
                </li>
            </ul>

            <ul class="right">
                <li class="box">
                    <a
                        href="https://www.facebook.com/Fusion-Group-111798193868619/"
                        class="link"
                        target="_blank"
                    >
                        <img src="/assets/img/icons/icon-facebook.svg" alt="icon-facebook" class="middle-icon" />
                    </a>
                </li>

                <li class="box">
                    <a href="https://www.instagram.com/fusion2pro/" class="link" target="_blank">
                        <img
                        src="/assets/img/icons/icon-instagram.svg"
                        alt="icon-instagram"
                        class="middle-icon"
                        />
                    </a>
                </li>
                <li class="box">
                    <a
                        href="https://www.youtube.com/channel/UCbMGUvcuG2virNvWjiAIFJg"
                        class="link"
                        target="_blank"
                    >
                        <img src="/assets/img/icons/youtubes.svg" alt="icon-youtube" class="middle-icon" />
                    </a>
                </li>
                <li class="box">
                    <a href="https://twitter.com/fusion2pro" class="link" target="_blank">
                        <img src="/assets/img/icons/twitter.svg" alt="icon-twitter" class="middle-icon" />
                    </a>
                </li>
            </ul>
        </div>

        <div class="header__bottom py-2 header_container">
            <router-link to="/" class="logo">
                <div class="wrapper">
                    <img src="/assets/img/images/brand/logo.png" alt="logo" class="responsive-img" />
                </div>
            </router-link>

            <nav class="navigation" role="navigation">
                <ul class="navbar" v-bind:class="{ responsive: showMobileMenu }">
                    <li class="navbar__link" v-for="link of links" :key="link.index">
                        <router-link :to="link.route">{{link.title}}</router-link>
                    </li>

                    <router-link
                        tag="li"
                        class="navbar__link navbar__auth"
                        active-class="active"
                        to="/login"
                        v-if="!isLogged"
                    >
                        <div class="small-icon">
                            <img src="/assets/img/icons/key.svg" alt="login" class="responsive-img" />
                        </div>
                        <span class="navbar__title ml-1">Логин</span>
                    </router-link>
                    <router-link
                        tag="li"
                        class="navbar__link navbar__auth"
                        active-class="active"
                        to="/register"
                        v-if="!isLogged"
                    >
                        <div class="small-icon">
                            <img src="/assets/img/icons/key.svg" alt="login" class="responsive-img" />
                        </div>
                        <span class="navbar__title ml-1">Регистрация</span>
                    </router-link>

                    <div
                        class="icon icon_container"
                        v-bind:class="{ change: showMobileMenu }"
                        @click="showMobileMenu = !showMobileMenu"
                    >
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </ul>

                <div class="avatar" v-if="isLogged">
                    <div class="wrapper">
                        <img src="/assets/img/images/profile/avatar.png" alt="avatar" class="responsive-img" />
                    </div>
                    <div class="dropdown" ref="dropdown">
                        <ul class="menu">
                            <router-link
                                tag="li"
                                class="menu__link"
                                active-class="active"
                                to="/profile"
                                v-if="isLogged"
                                @click.stop="stopTheEvent"
                            >
                                <div class="small-icon">
                                    <img src="/assets/img/icons/avatar.svg" alt="user-menu" class="responsive-img" />
                                </div>
                                <span class="menu__title ml-1">
                                Личный
                                кабинет
                                </span>
                            </router-link>
                            <router-link
                                tag="li"
                                class="menu__link"
                                active-class="active"
                                to="/tariff"
                                v-if="isLogged"
                            >
                                <div class="small-icon">
                                    <img src="/assets/img/icons/tariff.svg" alt="tariff" class="responsive-img" />
                                </div>
                                <span class="menu__title ml-1">Тарифы</span>
                            </router-link>
                            <router-link
                                tag="li"
                                class="menu__link"
                                active-class="active"
                                to="/documents"
                                v-if="isLogged"
                            >
                                <div class="small-icon">
                                    <img
                                        src="/assets/img/icons/text-document.svg"
                                        alt="text-document"
                                        class="responsive-img"
                                    />
                                </div>
                                <span class="navbar__title ml-1">Документы</span>
                            </router-link>
                            <router-link
                                tag="li"
                                class="menu__link"
                                active-class="active"
                                to="/wallet"
                                v-if="isLogged"
                            >
                                <div class="small-icon">
                                    <img src="/assets/img/icons/wallet.svg" alt="wallet" class="responsive-img" />
                                </div>
                                <span class="navbar__title ml-1">Кошелёк</span>
                            </router-link>
                            <router-link
                                tag="li"
                                class="menu__link"
                                active-class="active"
                                to="/history"
                                v-if="isLogged"
                            >
                                <div class="small-icon">
                                    <img src="/assets/img/icons/history.svg" alt="history" class="responsive-img" />
                                </div>
                                <span class="navbar__title ml-1">История</span>
                            </router-link>
                            <router-link
                                tag="li"
                                class="menu__link"
                                active-class="active"
                                to="/genealogy"
                                v-if="isLogged"
                            >
                                <div class="small-icon">
                                    <img src="/assets/img/icons/family.svg" alt="genealogy" class="responsive-img" />
                                </div>
                                <span class="navbar__title ml-1">Бинарное дерево</span>
                            </router-link>

                            <li class="menu__link menu__link_money" v-if="isLogged">
                                <div class="small-icon">
                                    <img src="/assets/img/icons/price.svg" alt="cash" class="responsive-img" />
                                </div>
                                <span class="navbar__title ml-1">{{ balance }} $</span>
                            </li>
                        </ul>
                        <div class="buttons">
                            <router-link tag="a" to="/withdraw" class="btn py-2 px-4 my-4">Ввести средства</router-link>
                            <router-link tag="a" to="/withdraw" class="btn py-2 px-4 mb-4">Вывести средства</router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
        balance: 1000,
        showMobileMenu: false,
        isLogged: true,
        links: [
            {
                title: "Блок №1",
                route: "#anchor1"
            },
            {
                title: "Блок №2",
                route: "#anchor2"
            },
            {
                title: "Блок №3",
                route: "#anchor3"
            },
            {
                title: "Блок №4",
                route: "#anchor4"
            },
            {
                title: "Блок №5",
                route: "#anchor5"
            },
            {
                title: "Блок №6",
                route: "#anchor6"
            },
            {
                title: "Блок №7",
                route: "#anchor7"
            }
        ]
        };
    },
    computed: {
        animatedNumber: function() {
            return this.balance.toFixed(0);
        }
    },   
};
</script>