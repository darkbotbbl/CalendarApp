<template>
    <div class=" g-col-box">
        <div class="g-day-box text-center mb-1">{{ day.abbvTitle }}</div>
        <div class="row justify-content-center m-1">
            <div class="col-12"><span class="g-day-number">{{ day.id }}</span></div>
            <CalendarEvent :events="day.events"/>
        </div>
    </div>
</template>


<script>
import CalendarEvent from "./CalendarEvent.vue"
export default {
    name: "CalendarDay",
    data() {
        return {

        }
    },
    components: {
        CalendarEvent,
    },
    props: ['day'],
}
</script>


<style scoped>
.g-col-box {
	border: 1px solid whitesmoke;
	background-color: rgb(58, 57, 57);
	margin: 0;
	padding: 0;
	width: calc(100% / 7) !important;
}

.g-day-box {
	background-color: black;
	color: white;
	font-size: 1.2rem;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	padding: 0.5rem;
	font-weight: bolder;
}

.g-day-number {
	color: whitesmoke;
	font-size: 0.9rem;
}

</style>