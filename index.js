localStorage.tasks = "";
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

    var but = document.createElement("input");
    but.className = "but";
    but.type = "button";
    but.value = "delete";
    //but.innerHTML = "<a onclick='cut(this)'>删除</a>"
    inp.appendChild(but);
    /*function cut(x) {
        var inp = x.parentNode.parentNode;
        inp.parentNode.removeChild(inp);
    }*/
    function cut() {
        var butt = document.querySelectorAll(".but");
        for (var i = 0; i < butt.length; i++) {
            butt[i].addEventListener("click", cutt);
            function cutt() {
                var a = document.querySelectorAll(".task");
                var b = a.splice(i,1)[0];
            }
        }
    }
    if (window.localStorage) {
        localStorage.setItem("tasks",document.querySelector("#list").innerHTML);
    }
    else {
        Cookie.write("tasks", document.queryselector("#list").innerHTML);
    }
}
