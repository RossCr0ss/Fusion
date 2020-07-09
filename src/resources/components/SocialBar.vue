<template>
    <div class="social-bar">
        <transition name="slide-fade">
            <ul class="list" v-show="showSocialBar">
                <li class="list__item">
                    <a href="mailto:fusion4pro@gmail.com">
                        <div class="wrapper">
                            <img
                                src="/assets/img/icons/social-bar-mail.svg"
                                alt="mail"
                                class="responsive-img"
                            />
                        </div>
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://www.facebook.com/Fusion-Group-111798193868619/" target="_blank">
                        <div class="wrapper">
                            <img
                                src="/assets/img/icons/social-bar-facebook.svg"
                                alt="facebook"
                                class="responsive-img"
                            />
                        </div>
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://www.instagram.com/fusion2pro/" target="_blank"> 
                        <div class="wrapper">
                            <img
                                src="/assets/img/icons/social-bar-instagram.svg"
                                alt="instagram"
                                class="responsive-img"
                            />
                        </div>
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://linkedin.com" target="_blank">
                        <div class="wrapper">
                            <img
                                src="/assets/img/icons/social-bar-linkedin.svg"
                                alt="linkedin"
                                class="responsive-img"
                            />
                        </div>
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://twitter.com/fusion2pro" target="_blank">
                        <div class="wrapper">
                            <img
                                src="/assets/img/icons/social-bar-twitter.svg"
                                alt="twitter"
                                class="responsive-img"
                            />
                        </div>
                    </a>
                </li>
                <li class="list__item">
                    <a href="https://www.youtube.com/channel/UCbMGUvcuG2virNvWjiAIFJg" target="_blank">
                        <div class="wrapper">
                            <img
                                src="/assets/img/icons/social-bar-youtube.svg"
                                alt="youtube"
                                class="responsive-img"
                            />
                        </div>
                    </a>
                </li>
            </ul>
        </transition>
        <div class="list__item icon_container"
            @click="showSocialBar = !showSocialBar"
        >
            <img v-if="!showSocialBar"
                src="/assets/img/icons/speech-bubble.svg"
                alt="speech-bubble"
                class="responsive-img"
            />
            <img v-else
                src="/assets/img/icons/close.svg"
                alt="close"
                class="responsive-img"
            />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showSocialBar: false
        }
    }
}
</script>