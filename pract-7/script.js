const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✖";

    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = "";
});
