<template>
    <div class="container">
      <ul class="document__list card-shadow my-4">
            <app-documents-list-item v-for="item in documentsList" :key="item.id">
                <h4 class="title">{{item.documents}}</h4>
            </app-documents-list-item>
        </ul>
    </div>
</template>

<script>
import DocumentsListItem from '../components/DocumentsListItem.vue'
export default {
    components: {
        'app-documents-list-item': DocumentsListItem
    },
    data() {
        return {
            documentsList: [],
        }
    },
    created() {
        const documentURL = "https://next.json-generator.com/api/json/get/VJIs8Q8qO";
        fetch(documentURL)
            .then(res => res.json())
            .then(data => (this.documentsList = data))
            .catch(error => console.log(error));
    },
}
</script>
