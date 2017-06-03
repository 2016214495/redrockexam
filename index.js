//localStorage.tasks = "";
if (localStorage.tasks != "") {
    document.querySelector("#list").innerHTML = localStorage.tasks;
}
document.querySelector("#add").addEventListener("click", cli);
function cli() {
    var con = document.querySelector("#con").value;
    var inp = document.createElement("div");
    inp.className = "task";
    document.querySelector("#list").appendChild(inp);

    var inpt = document.createElement("label");
    inpt.innerHTML = con;
    inp.appendChild(inpt);

    var inpb = document.createElement("input");
    inpb.type = "checkbox";
    inp.appendChild(inpb);

    if (window.localStorage) {
        localStorage.setItem("tasks",document.querySelector("#list").innerHTML);
    }
    else {
        Cookie.write("tasks", document.queryselector("#list").innerHTML);
    }
}