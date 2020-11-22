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
    
}