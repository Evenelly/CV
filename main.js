
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



var ChangeImg = getElementById('växjö-img');
var arrowHover = getElementsByClassName('kurser-arrow');

arrowHover.addEventListener('mouseover', ()=>
{
    ChangeImg.style.maskImage = 'mask-image: linear-gradient(to top, transparent, rgb(0, 0, 0) 100%)';
});
arrowHover.addEventListener('mouseout', ()=>
{
    ChangeImg.style.maskImage = 'mask-image: linear-gradient(to top, transparent, rgb(0, 0, 0) 75%)'
});