function imgClicked(obj) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = obj.src;
    captionText.innerHTML = obj.title;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function validateDtls(){
    alert();return;
}
