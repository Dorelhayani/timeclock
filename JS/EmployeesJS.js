let raw_data=[];
let srchTerm="";

// filter Data
function FilterData(el){
    console.log("FilterData::",el);
    if(srchTerm==="")
        return true;
    let reg=new RegExp(srchTerm,"i");
    return reg.test(el.Name);
}

// Create
function CreateTable(){
    srchTerm=document.getElementById("filterField").value;
    let data=raw_data.filter(FilterData);
    let str="";
    for(let line of data){
        str+="<tr>";
        str+=`<td><button onclick="editLine(${line.id});">edit</button></td>`;
        str+="<td>"+line.id+"</td>";
        str+="<td>"+line.Name+"</td>";
        str+=`<td><button onclick="deleteLine(${line.id});">delete</button></td>`;
        str+="</tr>";
    }
    document.getElementById("mainEmployees").innerHTML=str;
}

// Read
async function getList() {
    let response = await fetch('/employees/List');
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTable();
}

// Update
async function editLine(id) {
    let objToServer={};
    objToServer.id=id;
    objToServer.name=document.getElementById("name").value;
    // objToServer.pob=document.getElementById("pob").value;
    let response = await fetch('/employees/Update', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objToServer)
        }
    );

    getList();
}

getList();

// Delete
async function deleteLine(id) {
    let objToServer={};
    objToServer.id=id;
    let response = await fetch('/employees/Delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objToServer)
        }
    );
    // let data = await response.json();
    // console.log(data);
    getList();
    }


// Add
async function addNewLine() {
    let name=document.getElementById("name").value;
    let response = await fetch('/employees/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:name})
        }
    );
    let data = await response.json();
    console.log(data);
    getList();
}
