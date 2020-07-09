<template>
    <radial-progress-bar :diameter="200"
                        :completed-steps="completedSteps"
                        :total-steps="totalSteps"
                        startColor="#673ab7"
                        stopColor="#673ab7"
                        innerStrokeColor="#ecf0f1"
                        :animateSpeed="1000"
                        class="shadow"
                        >
    </radial-progress-bar>

</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
    data () {
        return {
            completedSteps: 79,
            totalSteps: 100,
        }
    },
    components: {
        RadialProgressBar
    },
}
</script>

<style lang="scss">
    .radial-progress-container {
        font-size: 1rem;
    }
</style>