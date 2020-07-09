<template>
    <div class="container">
        <div class="genealogy card-shadow my-4 px-4 py-8">
            <div class="tree">
                <div class="tree__row">
                    <app-tree-item/>
                </div>

                <div class="parrent_wrapper">
                    <div class="parrent__col ">
                        <span class="binary_line binary_line_left"></span>
                        <div class="tree__row">
                            <app-tree-item/>
                        </div>
                        
                        <div class="parrent_wrapper">
                            <div class="parrent__col">
                                <span class="binary_line binary_line_left"></span>
                                <div class="tree__row">
                                    <app-tree-item @changeItem='getInfo'/>
                                </div>
                            </div>
                            <div class="parrent__col">
                                <span class="binary_line binary_line_right"></span>
                                <div class="tree__row">
                                    <app-tree-item/>
                                </div>
                            </div>    
                        </div>

                    </div>

                    <div class="parrent__col parrent__col_right">
                        <span class="binary_line binary_line_right"></span>
                        <div class="tree__row">
                            <app-tree-item/>
                        </div>

                         <div class="parrent_wrapper">
                            <div class="parrent__col ">
                                <span class="binary_line binary_line_left"></span>
                                <div class="tree__row">
                                    <app-tree-item/>
                                </div>
                            </div>
                            <div class="parrent__col parrent__col_right">
                                <span class="binary_line binary_line_right"></span>
                                <div class="tree__row">
                                    <app-tree-item/>
                                </div>
                            </div>    
                        </div>
                    </div>    
                </div>


                <div class="tree__row" v-if="component">
                    <div class="parrent__col parrent__col_new">
                        <span class="binary_line binary_line_new"></span>
                        
                        <component :is="TreeItem" class="tree__item_new"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TreeItem from '../components/TreeItem.vue'

export default {
    name: 'GenealogyTree',
    components: {
        'app-tree-item': TreeItem
    },
    data() {
        return {
            component: false,
        }
    },
    computed: {
        TreeItem() {
            return TreeItem;
        }
    },
    methods: {
        getInfo(data) {
            if (data.id) {
                this.component = true
            }
            console.log(data);
            
        }
    }
}
</script>
