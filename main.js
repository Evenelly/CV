function grundskola(){

    var x = document.getElementById("grundskola");
    var y = document.getElementById("grundskola-arrow");
    var z = document.getElementById("grundskola-path");

    if(x.style.display==="block"){
        x.style.display="none"
        y.classList.remove("bi-arrow-up-short");
        y.classList.add("bi-arrow-down-short");
        z.setAttribute("d", "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4")
    }
    else{
        x.style.display="block";
        y.classList.remove("bi-arrow-down-short");
        y.classList.add("bi-arrow-up-short");
        z.setAttribute("d", "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5");
    }
}


function gymnasium(){

    var x = document.getElementById("gymnasium")
    var y = document.getElementById("gymnasium-arrow")
    var z = document.getElementById("gymnasium-path");

    if(x.style.display==="none"){
        x.style.display="block";
        y.classList.remove("bi-arrow-down-short");
        y.classList.add("bi-arrow-up-short");
        z.setAttribute("d", "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5");
    }
    else{
        x.style.display="none"
        y.classList.remove("bi-arrow-up-short");
        y.classList.add("bi-arrow-down-short");
        z.setAttribute("d", "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4")
    }
}


function HTML(){

    var x = document.getElementById("HTML")
    var y = document.getElementById("HTML-arrow")
    var z = document.getElementById("HTML-path");

    if(x.style.display==="none"){
        x.style.display="block";
        y.classList.remove("bi-arrow-down-short");
        y.classList.add("bi-arrow-up-short");
        z.setAttribute("d", "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5");
    }
    else{
        x.style.display="none"
        y.classList.remove("bi-arrow-up-short");
        y.classList.add("bi-arrow-down-short");
        z.setAttribute("d", "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4")
    }
}