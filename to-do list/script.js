var inputtext=document.getElementById("input-text");
var listcontainer=document.getElementById("list-container");


function addtask()
{
if(inputtext.value === '')
{
    alert("you must enter task");
}
else
{
    var li=document.createElement("li");
    li.innerHTML=inputtext.value;
    listcontainer.appendChild(li);
    var remove=document.createElement("span")
    remove.innerHTML="X"
    li.appendChild(remove);
}
inputtext.value="";
saveData();
}

listcontainer.addEventListener("click",function(e){
 if(e.target.tagName==="LI")
 {
    e.target.classList.toggle("checked");
    saveData();
 }
 else if(e.target.tagName==="SPAN")
 {
    e.target.parentElement.remove();
    saveData();
 }


})

function saveData()
{
    // data is the name of localstorage you can give any name as localstotrage
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();
