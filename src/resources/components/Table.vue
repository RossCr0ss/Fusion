<template>
    <section>
        <slot name="sortButtons">
            <div v-for="option in options" :key="option.id">{{option}}</div>
        </slot>
    
            
        <div class="table__content">
            <slot name="titles">
                <div v-for="title in titles" :key="title.id">{{title}}</div>
            </slot>
            
            <slot name="rows">
                <div v-for="row in rows" :key="row.id">
                    <div v-for="cell in row" :key="cell.id">{{cell}}</div>
                </div>
            </slot>

            <slot name="buttons">
                <div v-for="button in buttons" :key="button.id">{{button}}</div>
            </slot>
        </div>
    </section>




</template>

<script>
    export default {
        name: 'Table',
        props: {
            titles: Array,
            rows: Array,
            buttons: Array,
            options: Array
        }
    }
</script>
