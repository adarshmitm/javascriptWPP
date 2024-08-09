function displayDateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date();

    let day = daysOfWeek[today.getDay()];
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    let time = `${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    
    console.log(`Today is: ${day}`);
    console.log(`Current time is: ${time}`);
}

// Call the function to display the date and time
displayDateTime();