// ---------------------------------------------------------------------------------------------------------------------
// Get selected list
async function getList() {
    let response = await fetch('/employees/List');
    let data = await response.json();
    let select = document.getElementById("select");
    data.forEach(employee => {
        select.appendChild(new Option(employee.Name, employee.employeeID)); });    }
getList();
// ---------------------------------------------------------------------------------------------------------------------
// Clock-in
async function Clockin() {
    let select = document.getElementById("select");
    let selectedIndex = select.value;
        let response = await fetch('/timereport/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' },
            body: JSON.stringify({employeeID:selectedIndex}) });
        getList(); }
// ---------------------------------------------------------------------------------------------------------------------
// Clock-Out
async function Clockout() {
    let select = document.getElementById("select");
    let selectedIndex = select.value;
        let response = await fetch('/timereport/Clockout', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({employeeID: selectedIndex})  });
        getList();  }
getList();
// // ---------------------------------------------------------------------------------------------------------------------
// Clock
function updateClock() {
    let clockElement = document.getElementById("clock");
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    clockElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`; }
function padZero(number) {
    return (number < 10) ? "0" + number : number; }
setInterval(updateClock, 1000);
updateClock();







