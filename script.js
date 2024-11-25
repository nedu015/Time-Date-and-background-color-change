
// To update the calendar and time elements
function updateCalendarAndTime() {
  const now = new Date();

  // Date components
  const year = now.getFullYear();
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[now.getMonth()];
  const day = String(now.getDate()).padStart(2, '0');
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weekday = weekdayNames[now.getDay()];

  // Time components
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Update HTML elements
  document.querySelector('.calendar-year').textContent = year;
  document.querySelector('.calendar-month').textContent = month;
  document.querySelector('.calendar-day').textContent = `${day} ${weekday}`;
  document.querySelector('.time-hour').textContent = hours;
  document.querySelector('.time-minute').textContent = minutes;
  document.querySelector('.time-second').textContent = seconds;
}



// Function to change the background color at intervals
function changeBackgroundColor() {
    const container = document.querySelector('.calendar-time-container');
    const colors = [ "#efefef", "#7818de",  "#bd18de", "#de1875","#de1850" , "#7c8f3f",  "#65c22f", "#2fc27b", "#ffcc99", "#ccccff", "#1839de", "#f3f3f3",  "#9999ff", "#ff99ff", "#99ffff", "#ffff99", "#ff9999", "#99ccff", "#99ff99", "#267abf", "#2fa9c2","#943540" ];
    let index = 0;
    container.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;

// Change color every 1 seconds
    setInterval(() => {
        document.querySelector('.calendar-time-container').style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1000); 
}



// updated per seconds
setInterval(updateCalendarAndTime, 1000);
changeBackgroundColor();
updateCalendarAndTime();