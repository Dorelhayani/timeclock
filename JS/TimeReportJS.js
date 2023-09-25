let raw_data=[];
let srchTerm="";
// ---------------------------------------------------------------------------------------------------------------------
// filter Data
function FilterData(el){
    console.log("FilterData::",el);
    if(srchTerm==="")
        return true;
    let reg=new RegExp(srchTerm,"i");
    return reg.test(el.Name);}
// ---------------------------------------------------------------------------------------------------------------------
// Create
function CreateTable(){
    srchTerm=document.getElementById("filterField").value;
    let data=raw_data.filter(FilterData);
    let str="";
    for(let line of data){
        str+="<tr>";
        // str+=`<td><input type="text" name="edit" id="edit-${line.id}" placeholder="enter a name"></td>`;
        // str+=`<td><button onclick="editLine(${line.id});">edit</button></td>`;
        str+="<td>"+line.employeeID+"</td>";
        str+="<td>"+line.Name+"</td>";
        str+="<td>"+line.Clockin+"</td>";
        str+="<td>"+line.Clockout+"</td>";
        // str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str+="</tr>";
    }
    document.getElementById("mainTimeReport").innerHTML=str; }
// ---------------------------------------------------------------------------------------------------------------------
// Read
async function getList() {
    let response = await fetch('/timereport/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTable(); }
// ---------------------------------------------------------------------------------------------------------------------
// Update
// async function editLine(id) {
//     let objToServer={};
//     let edit = document.getElementById(`edit-${id}`).value;
//     objToServer.employeeID=id;
//     objToServer.Name=edit;
//     let response = await fetch('/timereport/Clockin', {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'},
//         body: JSON.stringify(objToServer) } );
//     getList(); }

getList();
// ---------------------------------------------------------------------------------------------------------------------
// Delete
// async function deleteLine(id) {
//     let objToServer={};
//     objToServer.id=id;
//     let response = await fetch('/timereport/Delete', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json' },
//         body: JSON.stringify(objToServer) } );
//     getList(); }
// ---------------------------------------------------------------------------------------------------------------------
// Add
// async function addNewLine() {
//     let name=document.getElementById("name").value;
//     let response = await fetch('/timereport/Add', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json' },
//         body: JSON.stringify({name:name}) } );
//     getList(); }
// ---------------------------------------------------------------------------------------------------------------------
// Current Time
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
// ---------------------------------------------------------------------------------------------------------------------