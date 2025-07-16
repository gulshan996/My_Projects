let text=document.getElementById("text")
let added=document.getElementById("added")
let todoo=document.getElementById("todoo")
let clear=document.getElementById("clear")
let deletee
let arr=[]

clear.addEventListener('click',()=>{
    try {
        arr.splice(0, arr.length);
        call()
        text.value=null
    } catch (error) {
        console.log(error)
    }
})

added.addEventListener('click',(e)=>{
    try {
        if (text.value=='') {
            e.preventDefault()
        }
        else{
            e.preventDefault()
            arr.push(text.value)
            call()
            text.value=null
        }
    } catch (error) {
        console.log(error)
    }
})
let call=()=>{
    let html = "";
    arr.forEach((e) => {
        html += `<div class="todos"><div class="todo_con">${e}</div><div class="delete_con" ><button id='delete'>Delete</button></div></div>`;
    });
    todoo.innerHTML = html;
    deletee=document.querySelectorAll("#delete")
    deletee.forEach((e, i) => {
        e.addEventListener("click", (ie) => {
            console.log(i);
            arr.pop(i)
            call()
        });
    });

}