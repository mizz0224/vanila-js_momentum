const toDoForm  = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; 
let count_Nums = 0;
let toDos  = [];
function emptyNumber(LengthOfArray)
{ 
    for(let i = 0; i<LengthOfArray;i++)
    {
        if(toDos.includes(i)==false)
        {
            return i;
        }
    }
}
function paintToDo(text)
{
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    
    span.innerText = text;
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    
    toDoList.appendChild(li);
    
    const toDoObj = {
        text : text,id : emptyNumber(toDos.length)
    };
    count_Nums++;
    toDos.push(toDoObj);
    saveToDos();
}

function saveToDos()
{
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function deleteToDo(event)
{
    const btn = event.target;
    const li  = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos(toDos);
    ///window.location.reload();//새로고침추가 새로고침 안할시 li.id 중복현상발생,삭제시 중복삭제
    //loadToDos(toDos);
}
function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    
}
function xxxx(toDos)
{
    paintToDo(toDos.text);
}
function loadToDos()
{
    const loadedToDos  = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null)
    {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(xxxx);

    }
}
function init()
{
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);

}
init();