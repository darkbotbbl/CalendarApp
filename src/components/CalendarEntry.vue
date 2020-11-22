<template>
    <div id="calendar-entry">
        <div class="alert alert-danger text-center" role="alert" v-if="error">
            <strong>danger</strong>
        </div>
        <div class="row justify-content-center">
            <div class="col-2 g-entry-box">
                
                <div class="form-group mt-4">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="eventText" 
                        aria-describedby="eventHelp"
                        placeholder="Event Name"
                        v-model="inputDetails"
                    >
                    <small id="eventHelpHelp" class="form-text text-success text-black">Day of Event: <span class="text-bold">{{ titleOfActiveDay }}</span></small>
                </div>
                <button @click.prevent="submitEvent(inputDetails)" type="button" class="btn btn-outline-success">Add Task</button>
                
            </div>
        </div>
    </div>
</template>


<script>
import { store } from "../store.js"

export default {
    name: "CalendarEntry",
    data() {
        return {
            inputDetails: "",
            error: false,
        }
    },
    computed: {
        titleOfActiveDay() {
            return store.getActiveDay().fullTitle
        }
    },
    methods: {
        submitEvent(eventDetails) {
            if (eventDetails === '') {
                return this.error = true
            }

            store.submitEvent(eventDetails);
            this.inputDetails = ""; // reset the input details
            this.error = false;
        }
    }
}
</script>

<style scoped>

#calendar-entry {
	margin-top: 2.5rem;
}

.g-entry-box {
	border:1px solid rgba(0, 128, 0, 0.479);
	height: 10em;
	border-radius: 0.8rem;
	background-color: whitesmoke;
}


</style>