
var detailsElements = document.getElementsByClassName("details"); //för att gömma alla element med classen "details" när man kommer in på hemsidan
for (var i = 0; i < detailsElements.length; i++) { //eftersom att det finns flera element med classen details måste man loopa den 
    detailsElements[i].style.display = "none";
}

function changeArrow(argId){ 
    var x = document.getElementById(argId)
    var y = document.getElementById(argId + "-arrow")
    var z = document.getElementById(argId + "-path")

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



var ChangeImg = document.getElementById('växjö-img');
var arrowHover = document.getElementsByClassName('kurser-arrow');

for (var i = 0; i < arrowHover.length; i++) { //eftersom att det är en klass måste jag loopa genom den för att beröra alla element med denna klass.
    arrowHover[i].addEventListener("mouseover", () => {
        ChangeImg.style.maskImage = 'linear-gradient(to top, transparent 7vh, rgb(0, 0, 0) 100%)';
    });
    
    arrowHover[i].addEventListener("mouseout", () => {
        ChangeImg.style.maskImage = 'linear-gradient(to top, transparent, rgb(0, 0, 0) 100%)';
    });
}




function scrollToSection(id) { //scroll (smoothly), jag skulle göra scrollning bara i html men för att göra det smooth så blir det js, dock funkar det inte? 
    var section = document.getElementById(id);
    var offsetTop = section.offsetTop;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}