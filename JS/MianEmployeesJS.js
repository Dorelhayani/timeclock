// ---------------------------------------------------------------------------------------------------------------------
// get selected list
async function getList() {
    let response = await fetch('/employees/List');
    let data = await response.json();
    let employeelist = document.getElementById("select");
    data.forEach(employee => {
        let option = document.createElement("option");
        option.value = employee.Name;
        option.textContent = employee.Name;
        employeelist.appendChild(option);
    });
}

getList();
// ---------------------------------------------------------------------------------------------------------------------
// Add Clock-in
// async function clockin() {
//     let EmployeeName = document.getElementById("select").value;
//     let clockin = document.getElementById("clockin").value;
//
//     let response = await fetch('/timereport/Add', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({Name: EmployeeName, Clockin: clockin})
//     });
// }
//
// clockin();
// console.log(clockin);

// ---------------------------------------------------------------------------------------------------------------------
// Function to add a clock-in entry to the "timereport" table
// async function addClockin() {
//     let employeeID = document.getElementById("select").value;
//     let clockin = document.getElementById("clockin").value;
//
//     console.log("Employee ID:", employeeID);
//     console.log("Clockin:", clockin);
//
//         let response = await fetch('/timereport/Add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ employeeID: employeeID, Clockin: clockin })
//         });
// }
//
//
//
//
// function updateClock() {
//     let clockElement = document.getElementById("clock");
//     let currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let seconds = currentTime.getSeconds();
//     clockElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`; }
// function padZero(number) {
//     return (number < 10) ? "0" + number : number; }
// setInterval(updateClock, 1000);
// updateClock();




async function addClockin() {
    let employeeID = document.getElementById("select").value;

    // Get the current time
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    console.log("Employee ID:", employeeID);
    console.log("Clockin:", formattedTime); // Log the formatted current time

    let response = await fetch('/timereport/Add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employeeID: employeeID, Clockin: formattedTime })
    });
}

function padZero(number) {
    return (number < 10) ? "0" + number : number;
}

