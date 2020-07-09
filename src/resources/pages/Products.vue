<template>
    <div class="products">
        <div class="container">
            <div class="products__row my-4">
                <div class="item card-shadow" v-for="item of productsData" :key="item.id">
                    <div class="wrapper_image mb-4">
                        <img 
                            :src="item.img" 
                            alt="image" 
                            class="img"
                        >
                    </div>
                    <div class="title mb-4">
                        {{item.title}}
                    </div>
                    <div class="subtitle mb-4">
                        {{item.subtitle}}
                    </div>
                    <a :href="item.link" class="link btn py-2 px-4">Перейти</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productsData: [],
        }
    },
    created() {
        const productURL = "https://next.json-generator.com/api/json/get/4k2x9bIoO"
        fetch(productURL)
        .then(res => res.json())
        .then(data => {
            this.productsData = data
        })
        .catch(error => console.log(error));
    }

}
</script>