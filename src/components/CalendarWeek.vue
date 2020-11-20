<template>
    <div id="calendar-weekly">
        <div class="row justify-content-center">
            <CalendarDay v-for="day in sharedState.seedData" :key="day.id" :day="day" />
        </div>
    </div>
</template>


<script>
import { store } from "../store.js"
import CalendarDay from "./CalendarDay.vue"

export default {
    name: "CalendarWeek",
    data() {
        return {
            sharedState: store.state,
        }
    },
    components: {
        CalendarDay,
    },
}
</script>

<style scoped>

#calendar-weekly {
	margin-top: 8rem;
}

</style>