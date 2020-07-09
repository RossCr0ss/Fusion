<template>
  <div class="profile">
        <div class="container">

            <div class="top mb-4">
                <app-profile-card/>
                <app-profile-packet/>
            </div>

            <section class="my-4 boxes">
                <app-profile-box 
                    v-for="profileItem in boxes"
                    :key="profileItem.id"
                    class="gradient"
                >
                    <img slot="image" :src="profileItem.picture" class="circle image"/>
                    <h4 slot="title" class="title">{{profileItem.title}}</h4>
                    <p slot="subtitle" class="subtitle">{{profileItem.subtitle}}</p>
                </app-profile-box>

                <div class="box_card box_buttons">
                    <router-link tag="button" to="/withdraw" class="btn py-2 px-4">Пополнить</router-link>
                    <router-link tag="button" to="/withdraw" class="btn py-2 px-4">Вывести</router-link>
                </div>
            </section>

            <div class="middle mb-4">
                <div class="middle__left mr-4">
                    <app-table class="table p-4 table_shadow table_profile">
                        <div slot="sortButtons" class="buttons">
                            <div
                                class="buttons__item"
                                v-for="(entry, index) in filterList"
                                :item="entry"
                                :key="index"
                            >
                                <button
                                    @click="filter = entry; active = index;"
                                    class="btn py-2 px-4"
                                    :class="{ active: entry == filter }"
                                >
                                    {{ entry }}
                                </button>
                            </div>
                        </div>
                
                        <div 
                            slot="rows" 
                            class="row" 
                            v-for="row in rows" 
                            :key="row.id" 
                            v-if="resultsFilter(row, 'category', filter)"
                        >
                            <div class="row__cell">{{row.operation}}</div>
                            <div class="row__cell">{{row.category}}</div>
                            <div class="row__cell">{{row.sum}}</div>
                            <div class="row__cell">{{row.registered}}</div> 
                            
                        </div>
                    </app-table>
                </div>
                <app-profile-mobile/>
            </div>
            
        </div>
    </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue"
import ProfilePacket from "../components/ProfilePacket.vue"
import ProfileMobileApp from "../components/ProfileMobileApp.vue"
import Table from "../components/Table.vue"
import Box from "../components/Box.vue"

export default {
    name: 'Profile',
    components: {
        'app-profile-card': ProfileCard,
        'app-profile-packet': ProfilePacket,
        'app-profile-mobile': ProfileMobileApp,
        'app-table': Table,
        'app-profile-box': Box,
    },
    data() {
        return {
            fkey: 'category',
            filterList: ["Всего", "Пополнение", "Расходы", "Выведено", "Рефералы"],
            rows: [],
            boxes: [],
            filter: "Всего",
        }
    },

    created() {
        const tableURL = "https://next.json-generator.com/api/json/get/VySFPYF3d";
        const boxesURL = "https://next.json-generator.com/api/json/get/NkEL80Y3u";
        fetch(tableURL)
            .then(res => res.json())
            .then(data => (this.rows = data))
            .catch(error => console.log(error));

        fetch(boxesURL)
            .then(res => res.json())
            .then((data) => {
                (this.boxes = data)
            })
            .catch(error => console.log(error)); 
    },

    
    methods: {
        resultsFilter(entry) {            
            if (this.filter !== "Всего") {
                if (entry[this.fkey] === this.filter) {
                    return entry;
                }
            } else {
                return entry;
            }
        },
    }
};
</script>
