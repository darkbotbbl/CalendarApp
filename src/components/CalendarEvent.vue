<!-- the background color is not working 
refactor the code and write a better markup for the event box
-->

<template>
    <div style="width:90%;" class="text-center">
        <div class="mt-1 mb-1" :style="getEventBackgroundColor" v-for="event in events" :key="event.details">
            <span class="">{{ event.details }}</span> <br>
            <span class="icons">
                <i class="fas fa-pencil-alt mr-2"></i> 
                <i class="fa fa-calendar-alt" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</template>


<script>

export default {
    name: "CalendarEvent",
    data() {
        return {
            
        }
    },
    props: ['events'],
    computed: {
        getEventBackgroundColor() {
            const colors = ['#FF9999', '#85D6FF', '#99FF99', '#98228F', '#F9F8F7', '#F1F2F3', '#FF1133']
            let randomColor = colors[Math.floor(Math.random() * colors.length)]
            return `background-color: ${randomColor}`
        }
    }
}
</script>



<style scoped>
.g-event-box {
	color: white;
	width: 90%;
	border-radius: 0.3rem;
	font-size: 0.9rem;
}

.icons i {
	cursor: pointer;
}
</style>