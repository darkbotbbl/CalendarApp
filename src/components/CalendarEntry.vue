<template>
    <div id="calendar-entry">
        <div class="row justify-content-center">
            <div class="col-2 g-entry-box">
                <form action="." method="post" class="mt-4">
                    <div class="form-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            id="eventText" 
                            aria-describedby="eventHelp"
                            placeholder="Event Name"
                        >
                        <small id="eventHelpHelp" class="form-text text-success text-black">Day of Event: <span class="text-bold">Monday</span></small>
                    </div>
                    <button type="submit" class="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "CalendarEntry",
    data() {
        return {
            
        }
    },
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