<template>
    <div class="promotion">
        <div class="container">
            <div class="promotion_block card-shadow p-4 my-4">

                <div class="top mb-12"> 
                    <span>Баннеры</span>
                    <ul class="px-8 list">
                        <li class="my-2 item" v-for="item in buttonSize" :key="item.id" >
                            <button class="btn py-2 px-4" @click="checkSize(item)">{{item.size}}</button>
                        </li>
                    </ul>
                </div>

                <div class="main mb-4">
                    <div class="image_wrapper mr-4">
                        <img src="/assets/img/images/main/1.jpg" alt="picture" class="image">
                    </div>
                    <div class="link_block ml-4">
                        <div class="text mb-4">
                            <div class="span referral">link:{{referralLink}}</div>
                            <input type="hidden" id="referralLink" :value="referralLink">
                        </div>
                        <button @click="copyRefferalLink" class="btn py-2 px-4">
                            Скопировать код
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonSize: [
                {
                    id: 1,
                    size: '728х90',
                },
                {
                    id: 2,
                    size: '300х250',
                },
                {
                    id: 3,
                    size: '160х600'
                }
            ],
            referralLink: '<a href="https://fusion-group.io" target="_blank"><img src="/assets/img/images/main/1.jpg"></a>'
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

        checkSize(item) {
            console.log(item);
            
        }
    }
}
</script>
