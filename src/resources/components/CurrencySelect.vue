<template>
    <div class="custom-select-wrapper">
    
        <div
            v-click-outside="hide" 
            class="custom-select"
            @click="opened = !opened"
            :class="{ open: opened }"
        >
            <div class="custom-select__trigger px-4" ><span>{{checkedCurrency}} </span>
                <div class="arrow"/>
            </div>

            <div class="custom-options" >
                <span 
                    class="custom-option px-4" 
                    v-for="(item, i) in options" :key="i"
                    :class="{ selected: item === activeItem }"
                    @click="selectItem(item)"
                >
                    {{item.currency}}
                </span>
            </div>
        </div>
    </div>
 
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    data() {
        return {
            opened: false,
            activeItem: null,
            checkedCurrency: 'Выберите валюту: ',
            options: [
                {id: 1, currency: "USD"}, 
                {id: 2, currency: "RUB"},
                {id: 3, currency: "BYN"},
                {id: 4, currency: "KZT"},
                {id: 5, currency: "UAH"}
            ]
        }
    },
    mounted() {
        this.popupItem = this.$el
    },
    methods: {
        toggle () {
            this.opened = true
        },
    
        hide () {
            this.opened = false
        },
        selectItem(item) {
            this.activeItem = item;
            this.checkedCurrency = item.currency
            
        },
    },

    directives: {
        ClickOutside
    }
}
</script>
