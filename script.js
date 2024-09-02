const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];


function createTaskItem(task) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  li.className = "task__item";
  div.className = "task-info__container";
  button.className = "task__button--remove-task";

  switch (task.type) {
    case "Urgente":
      span.className = "task-type span-urgent";
      break;
    case "Importante":
      span.className = "task-type span-important";
      break;
    case "Normal":
      span.className = "task-type span-normal";
      break;
  }

  p.textContent = task.title;

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  button.textContent = "";
  button.addEventListener("click", () => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderElements(tasks);
    }
  });

  return li;
}

function renderElements(tasks) {
  const ulElement = document.getElementsByClassName("tasks__list")[0];
  ulElement.innerHTML = ""; 

  tasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    ulElement.appendChild(taskItem);
  });
}

const formButtonAddTask = document.getElementsByClassName("form__button--add-task")[0];
formButtonAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  const titleInput = document.getElementById("input_title");
  const typeSelect = document.getElementById("input__priority");
  const newTask = {
    title: titleInput.value,
    type: typeSelect.value
  }; 
  tasks.push(newTask);
  renderElements(tasks);
  titleInput.value = "";
  typeSelect.value = "";

});

renderElements(tasks);