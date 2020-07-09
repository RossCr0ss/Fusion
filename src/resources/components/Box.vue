<template>
    <div class="box_card">
        <div class="content">
            <div class="wrapper">
                <slot name="image">
                    <img/>
                </slot>
            </div>

            <slot name="title">
                <h4/>
            </slot>

            <slot name="subtitle">
                <p/>
            </slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Box',
        props: {
            items: Array,
        }
    }
</script>
