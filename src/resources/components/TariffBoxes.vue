<template>
        <section class="my-4 tariff_boxes">

            <div class="tariff_item m-2 card-shadow" v-for="item in tariffData" :key="item.id">
                <div class="background gradient">
                    <div class="background__title p-4">{{item.name}}</div>
                    <div class="price px-4">
                        {{item.price}} <sup>$</sup>
                    </div>
                    <div class="price__desc p-4">К-во уровней лидерского бонуса: {{item.validity}}</div>
                </div>

                <ul class="collection p-4">
                    <li class="collection__item">Процент дохода от реферала 
                        <span>{{item.percentByReferral}}%</span>
                    </li>
                    <li class="collection__item">Процент дохода от инвестиций 
                        <span>{{item.percentByInvest}}%</span>
                    </li>
                    <li class="collection__item">Процент командного бонуса 
                        <span>{{item.percentByTeam}}%</span>
                    </li>
                    <li class="collection__item">Максимальная сумма вывода в день по командному бонусу 
                        <span>{{item.maxAmountWithdraw}}$</span>
                    </li>
                    <li class="collection__item">К-во уровней лидерского бонуса 
                        <span>{{item.leaderBonusLevels}}%</span>
                    </li>
                    <li class="collection__item">Процент от лидерского бонуса 
                        <span>{{item.percentageOfLeadership}}%</span>
                    </li>
                    <li class="collection__item">Глубина получения вознаграждения 
                        <span>{{item.depthOfReward}}</span>
                    </li>
                </ul>

                <div class="action my-4">
                    <app-profile-popup></app-profile-popup>
                </div>
            </div>

        </section>
</template>

<script>

import PropilePopup from '../popups/PropilePopup.vue'

export default {
    components: {
        'app-profile-popup': PropilePopup
    },
    data() {
        return {
            packageName: null,
            packegePrice: null,
            validity: null,
            percentByReferral: null,
            percentByInvest: null,
            percentByTeam: null,
            maxAmountWithdraw: null,
            leaderBonusLevels: null,
            percentageOfLeadership: null,
            depthOfReward: null,
            tariffData: [],
        }
    },
    created() {
        const tariffDataURL = "https://next.json-generator.com/api/json/get/EJG92Uvsd"
        fetch(tariffDataURL)
        .then(res => res.json())
        .then(data => {
            this.tariffData = data
        })
    }
    
}
</script>