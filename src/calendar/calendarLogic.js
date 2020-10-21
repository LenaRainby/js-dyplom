export const getCalendar = () => {
    const calendar = document.getElementById('calendar')

    // Date

    const today = new Date();
    const dayIsTodayNumber = today.getDate();
    const dayOfTheWeekNow = today.getDay()
    console.log(dayIsTodayNumber)
    const month = today.getMonth(); //9
    const year = today.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0)
    const daylsInMonthResult = daysInMonth.getDate()
    // console.log(daylsInMonthResult)


    // Get WeekendDaysNames

    const arrWeekDaysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    for (let weekName = 0; weekName < arrWeekDaysNames.length; weekName++) {
        console.log(weekName);
        let weekNameDiv = document.createElement("div");
        weekNameDiv.className = "weekName";
        console.log(arrWeekDaysNames[weekName]);
        console.log(weekNameDiv);
        weekNameDiv.innerText = arrWeekDaysNames[weekName];
        // console.log(weekNameDiv)
        calendar.append(weekNameDiv)
    }

    // Get DaysNames + Empty Divs in the begining

    if (dayOfTheWeekNow % 1) {
        for (let day = 1; day <= daylsInMonthResult; day++) {

            console.log(day);
            let dayDiv = document.createElement("div");

            const isWeekend = () => {
                if (day % 7 === 0 || (day + 1) % 7 === 0) { //or day % 7 === 6
                    return true
                } else {
                    return false
                }
            }

            if (isWeekend() && day === dayIsTodayNumber) {
                dayDiv.className = "day weekend dayActive";
            } else if (isWeekend() && day !== dayIsTodayNumber) {
                dayDiv.className = "day weekend";
            } else if (!isWeekend() && day === dayIsTodayNumber) {
                dayDiv.className = "day dayActive";
            } else {
                dayDiv.className = "day";
            }
            dayDiv.innerText = day;
            // console.log(dayDiv);

            calendar.append(dayDiv);
            // console.log(dayDiv);   


        }

    } else {
        for (let emptyDays = 0; emptyDays <= dayOfTheWeekNow-1; emptyDays++) {
            let emptyDaysDiv = document.createElement("div");
            emptyDaysDiv.className = "day"
            calendar.append(emptyDaysDiv);
        }
        for (let day = 1; day <= daylsInMonthResult; day++) {

            let dayDiv = document.createElement("div");

            const isWeekend = () => {
                if (day % 7 === 0 || (day + 1) % 7 === 0) { //or day % 7 === 6
                    return true
                } else {
                    return false
                }
            }

            if (isWeekend() && day === dayIsTodayNumber) {
                dayDiv.className = "day weekend dayActive";
            } else if (isWeekend() && day !== dayIsTodayNumber) {
                dayDiv.className = "day weekend";
            } else if (!isWeekend() && day === dayIsTodayNumber) {
                dayDiv.className = "day dayActive";
            } else {
                dayDiv.className = "day";
            }
            dayDiv.innerText = day;
            // console.log(dayDiv);

            calendar.append(dayDiv);
            // console.log(dayDiv);   


        }


    }

    // Empty Divs In the End

    const allDivsInContainer = calendar.getElementsByTagName("div") 
    console.log(allDivsInContainer.length)
    do {
        let emptyDaysDiv = document.createElement("div");
            emptyDaysDiv.className = "day"
            calendar.append(emptyDaysDiv);
    } while (!allDivsInContainer % 7)
}
