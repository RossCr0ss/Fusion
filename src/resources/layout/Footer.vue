<template>
    <div class='footer'>
        <div class="footer__top py-2 footer_container">
            <nav class="navigation" role="navigation">

                <ul class="navbar">
                    <li 
                        class="navbar__link"
                        v-for="link of links" 
                        :key="link.index"
                    >
                        <router-link :to="link.route" class="item">
                            {{link.title}}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="footer__bottom py-2 footer_container">Copyright © 2020 NewVeer. All rights reserved</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
             links: [
                {
                    title: "Блок №1",
                    route: "#anchor1"
                },
                {
                    title: "Блок №2",
                    route: "#anchor2"
                },
                {
                    title: "Блок №3",
                    route: "#anchor3"
                },
                {
                    title: "Блок №4",
                    route: "#anchor4"
                },
                {
                    title: "Блок №5",
                    route: "#anchor5"
                },
                {
                    title: "Блок №6",
                    route: "#anchor6"
                },
                {
                    title: "Блок №7",
                    route: "#anchor7"
                }
            ]
        }
    }
}
</script>
