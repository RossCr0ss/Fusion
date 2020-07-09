<template>
    <div id="app">
        <app-header/>
         <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
        <app-social-bar/>
        <app-footer/>
    </div>
</template>

<script>

import Header from "./resources/layout/Header.vue"
import Footer from './resources/layout/Footer.vue'
import SocialBar from './resources/components/SocialBar.vue'

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-social-bar': SocialBar
    },
}
</script>