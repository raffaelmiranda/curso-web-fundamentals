let data = [];

function renderTodo() {
  document.querySelector(".todo").innerHTML = "";

  data.forEach((tasks) => {
    let li = document.createElement("li");

    li.innerHTML = `<input type="checkbox" id="${tasks.id}">
    <label for="${tasks.id}">${tasks.title}</label>
    <button type="button">x</button>`;

    li.querySelector("input").addEventListener("change", (e) => {
      if (e.target.checked) {
        li.classList.add("complete");
      } else {
        li.classList.remove("complete");
      }
    });

    li.querySelector("button").addEventListener("click", (e) => {
      let button = e.target;
      let li = button.parentNode;
      let input = li.querySelector("input");
      let id = input.id;
      let title = li.querySelector("label").innerText;

      if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {
        data = data.filter((task) => task.id !== parseInt(id));
        renderTodo();
      }
    });

    document.querySelector(".todo").append(li);
  });
}

document.querySelector("#new-task").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    data.push({
      id: data.length + 1,
      title: e.target.value,
    });
    e.target.value = "";
    renderTodo();
  }
});

renderTodo();
