<template>
	<div id="app" class="container-fluid">
		<calendar-week></calendar-week>
		<calendar-entry></calendar-entry>
	</div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue"
import CalendarEntry from "./components/CalendarEntry.vue"


export default {
	name: 'App',
	data() {
		return {
			
		}
	},
	components: {
		CalendarWeek,
		CalendarEntry,
	}
}
</script>

<style>

#app {

}

</style>