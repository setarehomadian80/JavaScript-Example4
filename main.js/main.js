const list = document.querySelector("#list");
const inp = document.querySelector(".todo>input");
const btn = document.querySelector(".todo>button");

btn.addEventListener("click", () => {
  let temp = inp.value;
  if (temp === "") {
    alert("write your plan");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
         <h3>${temp}</h3>
                <span><input type="checkbox"></span>
                <span>✏️</span>
                <span>🗑️</span>
        `;
    list.appendChild(li);
    // after append to list
    inp.value = null;
      inp.focus();
  }
});
