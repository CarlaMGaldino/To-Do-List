function add() {
  let li = document.createElement("LI");
  let input_value = document.botoes.digitar_tarefas.value;
  let input_text = document.createTextNode(input_value);

  li.appendChild(input_text);
  document.querySelector("ul").appendChild(li);
  document.botoes.digitar_tarefas.value = "";

  createCloseButton(li);
}

document.querySelectorAll("li").forEach(createCloseButton);

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.classList.toggle("checked");
});

function createCloseButton(li) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = () => (span.parentElement.style.display = "none");
}
