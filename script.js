function login(event) {
    event.preventDefault();
  
    var idInput = document.getElementById("id");
    var id = idInput.value;
  
    var name = "";
  
    if (id === "neevowner.nb") {
      name = "Neev Bansal";
    } else if (id === "aaryanfriend.nb") {
      name = "Aaryan Goyal";
    } else if (id === "tusharfriend.nb") {
      name = "Tushar Gupta";
    } else if (id === "narayanfriend.nb") {
      name = "Narayan Bansal";
    } else if (id === "akshitafriend.nb") {
      name = "Akshita Goyal";
    } else if (id === "kunalfriend.nb") {
      name = "Kunal Jain";
    } else if (id === "shikharfriend.nb") {
      name = "Shikhar Garg";
    } else if (id === "garvitfriend.nb") {
      name = "Garvit Kalra";
    } else {
      alert("Invalid ID. Please try again.");
      return;
    }
  
    window.location.href = "main.html?name=" + encodeURIComponent(name);
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get("name");
  
    var welcomeName = document.getElementById("welcomeName");
    welcomeName.textContent = name;
  });
  
  function addTask(event) {
    event.preventDefault();
  
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
  
    var listItem = document.createElement("li");
    listItem.textContent = taskText;
  
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", function () {
      var listItem = this.parentNode;
      var ul = listItem.parentNode;
      ul.removeChild(listItem);
    });
    listItem.appendChild(deleteBtn);
  
    var taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  }
  
  function printList() {
    window.print();
  }
  