// Obtener el modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("foto1");
var img2 = document.getElementById("foto2");
var img3 = document.getElementById("foto3");
var img4 = document.getElementById("foto4");
var img5 = document.getElementById("foto5");
var img6 = document.getElementById("foto6");
var img7 = document.getElementById("foto7");
var img8 = document.getElementById("foto8");
var img9 = document.getElementById("foto9");
var img10 = document.getElementById("foto10");
var img11 = document.getElementById("foto11");
var img12 = document.getElementById("foto12");
var img13 = document.getElementById("foto13");
var img14 = document.getElementById("foto14");
var img15 = document.getElementById("foto15");
var img16 = document.getElementById("foto16");
var img17 = document.getElementById("foto17");

var modalImg = document.getElementById("img01");

var captionText = document.getElementsByClassName(".caption");

// Cuando el usuario hace clic en la imagen abre el modal

img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img9.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img12.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img13.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img14.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img15.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img16.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img17.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el span (X) cierra el modal
span1.onclick = function() { 
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal cierra el mismo

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}