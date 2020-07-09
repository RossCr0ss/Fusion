<template>
    <section class="card__item grey-shadow">
        <div class="image ">
            <img src="/assets/img/images/main/1.jpg" alt="user" class="responsive-img"/>
        </div>
        <div class="content mx-4">
            <slot name="title">
                <h2 class="content__title"></h2>
            </slot>
            <slot name="subtitle">
                <h4 class="content__subtitle"></h4>
            </slot>
            <slot name="info">
                <div class="content__text"></div>
            </slot>
            <slot name="subtitle2">
                <h4 class="content__subtitle"></h4>
            </slot>
             <slot name="info2">
                <div class="content__text"></div>
            </slot>
        </div>
    </section>
</template>

<script>
export default {
    name: "NewsItemBlock"
}
</script>
