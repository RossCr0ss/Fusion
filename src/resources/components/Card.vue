<template>
    <section class="info__card grey-shadow">
        
        <div class="left">
        <slot name="title"/>
            <div class="left__text mx-8 mb-4">
                <slot name="info" class="left__text mx-8 mb-4"/>
            </div>
        </div>
        <slot name="button" class="pt-4 mx-8 mb-4"/> 
    </section>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {};
    }
};
</script>

