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
        str+="<td>"+line.employeeID+"</td>";
        str+="<td>"+line.Name+"</td>";
        str+="<td>"+line.Clockin+"</td>";
        str+="<td>"+line.Clockout+"</td>";
        str+="<td>"+line.Date+"</td>";
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

getList();
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

