<template>
    <div class="info_wrapper my-4 px-4">
        <div class="box p-4">
            <youtube :video-id="videoId" :player-vars="playerVars"/>
        </div>

        <div class="info_box p-4">
            <div class="content">
                <h2 class="title">Заглавие</h2>
                <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ea quibusdam perspiciatis in enim magnam amet quos modi temporibus, exercitationem dolorem ipsum eos maiores eius non, iste laborum accusamus. Accusantium!</p>    
            </div>
            <div class="button_box pt-4 mx-8 mb-4">
                <div class="my-2">
                    <router-link to="/tariff" class="py-2 px-4 btn_violet">Купить пакет</router-link>
                </div>
                <div class="my-2">
                    <a href="https://fusion-group.io" class="py-2 px-4 btn_violet">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
 
Vue.use(VueYoutube)

export default {
    data() {
        return {
            videoId: 'D6-G7m_RUSo',
            playerVars: {
                autoplay: 0
            }
        }
    },
}
</script>
