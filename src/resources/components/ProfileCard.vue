<template>
    <div class="top__left card-shadow mr-2">
        <div class="image">
            <img
                class="card-image-background"
                src="/assets/img/images/profile/profile-background.png"
                alt="user bg"
            />
        </div>

        <div class="content">
            <div class="image-wrapper circle">
                <img
                    src="/assets/img/images/profile/avatar.png"
                    alt="avatar"
                    class="circle responsive-img p-2"
                />
            </div>

            <h4 class="content-title grey-text text-darken">Roger Waters</h4>
            <div class="content-text">
                <img src="/assets/img/icons/rank.svg" alt="rank" class="small-icon" />
                <span class="span">Ранг</span>
            </div>
            <div class="content-text">
                <img src="/assets/img/icons/phone.svg" alt="phone" class="small-icon" />
                <span class="span">+7 777 777 77 77</span>
            </div>
            <div class="content-text">
                <img src="/assets/img/icons/email.svg" alt="mail" class="small-icon" />
                <span class="span">example@mail.com</span>
            </div>
            <div class="content-text">
                <img src="/assets/img/icons/link.svg" alt="link" class="small-icon" />
                <span class="span referral">link:{{referralLink}}</span>
                <button @click="copyRefferalLink" class="btn_copylink">
                    <img src="/assets/img/icons/copy.svg" alt="link" class="small-icon"/>
                </button>
                <input type="hidden" id="referralLink" :value="referralLink">
            </div>
            <span class="span">Ваш спонсор:</span>
            <div class="content-text">
                <img src="/assets/img/icons/email.svg" alt="mail" class="small-icon" />
                <span class="span">example.sponsor@mail.com</span>
            </div>

            <span class="span">До получения статуса:</span>
            <div class="content-text">
                <img src="/assets/img/icons/price_gray.svg" alt="money" class="small-icon" />
                <span class="span">150$</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileCard",
    data() {
        return {
            referralLink: 'referral link'
        }
    },
    methods: {
        copyRefferalLink () {
            let RefferalLinkToCopy = document.querySelector('#referralLink')
            RefferalLinkToCopy.setAttribute('type', 'text')    
            RefferalLinkToCopy.select()

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log(msg);
            } catch (err) {
                console.log(err);
            }
            RefferalLinkToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
        },
    }
};
</script>