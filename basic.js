let input = document.querySelector(".inputBar");
let addbtn = document.querySelector(".addBtn");
let mainCont = document.querySelector(".mainContainer");

// this is for add button
addbtn.addEventListener("click", function () {
    let taskInput = input.value;
    input.value = "";
    if(taskInput!=""){
    // console.log(taskInput)


// creat a main element div in mainContainer for store task inpute and buttons. 
    let mainEle = document.createElement("div");
    mainEle.classList.add("container");

    let myEle = document.createElement("div");
    myEle.classList.add("taskoutput");
    myEle.innerHTML = `  <span class="tasktext"> ${taskInput} </span>`

    let secEle = document.createElement("div");
    secEle.classList.add("buttons");
    secEle.innerHTML = `<button class="done">Done</button>
                        <button class="delete">Delete</button>`

// select all maincontainer button
     let tasktext = myEle.querySelector(".tasktext");
     let doneBtn = secEle.querySelector(".done");
     let delBtn = secEle.querySelector(".delete");

// function of done button 
     doneBtn.addEventListener("click",function(){
            if(doneBtn.innerHTML=="Done"){
            tasktext.classList.add("strike");
            doneBtn.innerHTML="Undo";
            tasktext.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg> ${taskInput}`
            }else{
                tasktext.classList.remove("strike");
                doneBtn.innerHTML="Done";
                tasktext.innerHTML = taskInput;
            }
     })

// function of delete button 
     delBtn.addEventListener("click",function(){
      input.value="";
       mainCont.removeChild(mainEle); 
     })
    mainCont.appendChild(mainEle);
    mainEle.appendChild(myEle);
    mainEle.appendChild(secEle);

}
else{
    alert("Please enter a task");
}

})