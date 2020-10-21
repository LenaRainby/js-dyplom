import { getCalendar } from "./calendarLogic"
import { ROOT_NODE } from "../form/./users"

import "./calendar.scss"


const template = `<div class="calendarText">This month calendar
</div>
<div class="calendar" id="calendar">
</div>`



export const initCalendar = () => {
    ROOT_NODE.innerHTML = template;

    getCalendar();

}
