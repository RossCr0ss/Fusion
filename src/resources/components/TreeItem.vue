
<template>
    <div class="tree__item single_item tooltip" :style="{ display: computedDisplay }">

        <div class="tooltip__wrapper">

            <div class="wrapper_image">
                <img src="/assets/img/images/profile/avatar.png" alt="avatar">
            </div>
            <span class="content">{{ name }}</span>

            <div class="tooltip__content">
                <div class="top">
                    <div class="top__image">
                        <img class="image_tooltip" 
                            src="/assets/img/images/profile/avatar.png"
                            alt="avatar">
                    </div>
                    <div class="black_text mt-2">Walker Robles</div>
                    <div class="mt-2">
                        <span>Username : </span>
                        <span class="black_text">walkerrobles</span>
                    </div>
                </div>

                <div class="detail">
                    <div class="mb-4" v-for="text of 4" :key="text.id">
                        <span class="text__label">Carry-forward (Right)</span>
                        <span class="text__value">$0.00</span>
                    </div>
                </div>

                <div class="footer_tooltip p-4 black_text">
                    <div class="text">
                        <span class="text-label">Joined Date : </span>
                        <span class="text-value">2019-04-22 08:30:00</span>
                    </div>
                </div>
            </div>      
        </div>
        

        <button 
            class="add_row" 
            @click="sendToParent()"
        >
            <img src="/assets/img/images/profile/last_layer_item.svg" alt="add">
        </button>
    </div>
</template>

<script>
export default {
    name: 'TreeItem',
    
    data() {
        return {
            name: 'Name',
            displayView: null,
            itemId: 1
        };
    },
    computed: {
        computedDisplay() {
        return this.displayView;
        }
    },
    methods: {
        changeDisplay(event) {
            this.displayView='none';
        },
        sendToParent() {
            this.changeDisplay()
            this.$emit('changeItem', {
                name: this.displayView,
                id: this.itemId
            })
        }
    }
   
}

</script>
