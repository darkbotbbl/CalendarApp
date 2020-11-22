import { seedData } from './seed.js'

export const store = {
    state: {
        seedData,
    },
    // a function to get the active day
    getActiveDay() {
        return this.state.seedData.find((day) => day.active);
    },
    // a function to set the active day using the day id
    setActiveDay(dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        })
    },
    // a function that is going to push a new event unto the events in the store
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay();

        activeDay.events.push({"details": eventDetails, "edit": false});
    },
    // a function that is going to edit the event
    editEvent(dayId, eventDetails) {
        const dayObj = this.state.seedData.find(
            day => day.id === dayId
        );
        const eventObj = dayObj.events.find(
            event => event.details === eventDetails
        );
        eventObj.edit = true;
    },
}