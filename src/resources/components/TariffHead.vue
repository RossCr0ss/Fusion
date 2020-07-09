<template>
    
    <section class="head card-shadow">

        <div class="head__leftside">
            <div class="profile p-4">
                <div class="image-wrapper ml-8">
                    <img src="/assets/img/images/profile/avatar.png" alt="avatar" class="profile__image circle responsive-img">
                </div>
                <div class="profile__info pl-8">
                    <p>Имя</p>
                    <p>Фамилия</p>
                </div>
            </div>
            <div class="rank p-2">
                <span class="bold">Ранг:</span>
                <span>Нет</span>
            </div>
        </div>

        <div class="head__rightside">
            <div class="text p-5">
                <span class="bold">У вас нет активого тарифа</span>
            </div>
            <div class="buy px-5">
                <div class="buy__box py-2">Чтобы иметь преимущества, которые дают тарифы, Вы можете
                    <a href=""> <span>купить тариф</span>
                        <img src="/assets/img/icons/arrow-right-blue.svg" alt="arrow-right-blue" class="image pl-2">
                    </a>
                </div>
                <div class="buy__image py-2">
                    <img src="/assets/img/images/tariff/buy-tariff.png" alt="image" class="responsive-img ">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TariffHead'
}
</script>