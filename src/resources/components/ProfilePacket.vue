<template>
    <div class="top__right card-shadow ml-2">
        <div class="leftside">
            <img src="/assets/img/images/profile/remote.png" class="responsive-img" alt="remote" />
        </div>
        <div class="rightside">
            <div class="rightside__badge white-text">
                Активный
            </div>

            <h5 class="my-4">Назва пакета</h5>
            <div class="rightside__box my-4">
                <span class="inbox rose">Бонус за рекомендацию 10%</span>
            </div>
            <hr class="mb-4"/>

            <ul class="rightside__list">
                <li class="item">Dual output USB interfaces</li>
                <li class="item">Compatible with all smartphones</li>
                <li class="item">Portable design and light weight</li>
                <li class="item">Battery type: Lithium-ion</li>
            </ul>
            <div class="rightside__box">
                <h5 class="mr-4 mb-4">Заработано:</h5>
                <h5>$199.00</h5>
            </div>
            <router-link to="/tariff" tag="button" class="btn py-2 px-4 mb-4">Улучшить</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileCard",
}
</script>
