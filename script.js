function addItem() {
  var date = document.getElementById("todo-date").value;
  var item = document.getElementById("todo-item").value;
  var container = document.getElementById("todo-list");

  if (date && item) {

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    //에딧딜리트
    var options = document.createElement("div");
    options.classList.add("options");

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function(event) {
      event.stopPropagation(); 
      var updatedItem = prompt("Enter the updated to-do item:", item);
      if (updatedItem !== null && updatedItem.trim() !== "") {
        item = updatedItem.trim();
        li.textContent = item + " - " + date;
      }
    });

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function(event) {
      event.stopPropagation(); 
      li.parentNode.removeChild(li);
    });

    options.appendChild(editButton);
    options.appendChild(deleteButton);

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(item + " - " + date));
    li.appendChild(options);

    //그룹
    var groups = container.querySelectorAll("ul.group");
    var groupExists = false;
    groups.forEach(function(group) {
      if (group.getAttribute("data-date") === date) {
        groupExists = true;
        group.appendChild(li);
      }
    });

    if (!groupExists) {
      var group = document.createElement("ul");
      group.classList.add("group");
      group.setAttribute("data-date", date);
      group.appendChild(li);
      container.insertBefore(group, groups[0]);
    }

    document.getElementById("todo-item").value = "";
  } else {
    alert("Please enter a date and a to-do item.");
  }
}

  
  
  
  