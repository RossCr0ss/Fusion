<template>
    <div class="achievements_block py-4 my-4">
        <div class="animate_block">
            <div class="circle">
                <div 
                    class="circle__box"
                    v-for="(item, index) in 8"
                    :key="item.id" 
                >
                    <div 
                        class="circle__item" 
                        @mouseover="mouseOver(index)"
                        @mouseleave="mouseleave(index)"
                        :class="[{ active: activeIndex === index }, `circle__item_${index}`]"
                    >
                        <div class="wrapper">
                            {{index + 1}} item
                        </div>
                    </div>

                    <div 
                        class="circle__content"
                        v-if="activeIndex === index"
                    >
                        <div class="title">
                            {{index + 1}}
                        </div>
                        <p class="text">
                            Их суммарный вклад составляет ${{(index+1) * 1000}}.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="info_block p-4">
            <div class="content">
                <h2 class="title">Заглавие</h2>
                <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ea quibusdam perspiciatis in enim magnam amet quos modi temporibus, exercitationem dolorem ipsum eos maiores eius non, iste laborum accusamus. Accusantium!</p>    
            </div>
            <div class="button_box pt-4 mb-4">
                <div class="my-2">
                    <router-link tag="a" to="/#" class="btn_violet py-2 px-4">Ссылка</router-link>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            interval: null,
            stop: false
        }
    },
    mounted() {
        if (!this.stop) {
            this.animate = setInterval(() => {
                this.animateCircle()
            }, 2000)
        }
        else {
            this.animate = setInterval(() => {
                this.animateCircle()
            }, 10000)
        }
    },
    methods: {
        mouseOver(index){
            this.stop = true
            this.activeIndex = index
            
        },
        mouseleave(index) {
            this.stop = false
        },
        animateCircle() {    
            this.activeIndex++
            this.activeIndex > 7 ? this.activeIndex = 0 : this.activeIndex
    
        }
    },   
};
</script>