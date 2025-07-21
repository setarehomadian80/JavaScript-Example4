const list = document.querySelector("#list");
const inp = document.querySelector(".todo>input");
const btn = document.querySelector(".todo>button");
const deleteList = document.getElementById('garbage')

btn.addEventListener("click", () => {
  let temp = inp.value;

  if (temp === "") {
    alert("write your plan");
  } else {
   myAdd(temp)
  }
});

////////////////////////////////////////////////////
function myAdd(temp){
   let li = document.createElement("li");
    li.innerHTML = `
    <input class="hide" type="text" />
         <h3>${temp}</h3>
                <span><input type="checkbox" onchange='fnDel(this)'></span>
                <span onclick=myEdit(this)>✏️</span>
                <span onclick=mydel(this)>🗑️</span>
        `;
    list.appendChild(li);
    // after append to list
    inp.value = null;
    inp.focus();
}

function fnDel(s) {
  let temp = s.parentElement.previousElementSibling.innerText;
  if (s.checked) {
    s.parentElement.previousElementSibling.innerHTML =
      "<del> " + temp + " </del>";
  } else {
    s.parentElement.previousElementSibling.innerHTML = temp;
  }
}

function mydel(s){
  if(confirm('are you sure?')){
   let oldText = s.parentElement.children[1].innerText
    s.parentElement.classList.add('left')
    setTimeout(() => {
          s.parentElement.remove()
    }, 1000);


    ////////////
    let li = document.createElement('li')
    li.innerHTML = `
    <b>${oldText}</b>
    <span onclick ='addAgain(this)' >✅</span>

    `
    deleteList.appendChild(li)
  }
}
function addAgain(s){
 let temp =  s.previousElementSibling.innerText
 s.parentElement.remove()
myAdd(temp)
}

let num =1
function myEdit (s){
if(num%2){
   s.parentElement.children[0].classList.remove('hide')
   s.innerHTML='✅'
}else{
 s.parentElement.children[0].classList.add('hide')
   s.innerHTML='✏️'
}
num++
}