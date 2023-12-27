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

funcion validateDtls(){
    const form = document.getElementById("myForm");
    const submitButton = document.getElementById("submitButton");
    
    submitButton.addEventListener("click", function() {alert();return;
        var name = document.getElementById('Name').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var message = document.getElementById('message').value;
        var address = document.getElementById('address').value;
    
        if(name.length>0){
            if(email.length>0){
                if(number.length>0){
                    if(message.length>0){
                        if(address.length>0){
                            form.submit();
                        }else{
                            alert('Please enter a valid address');return;
                        }
                    }else{
                        alert('Please enter a valid Message');return;
                    }
                }else{
                    alert('Please enter a valid Number');return;
                }
            }else{
                alert('Please enter a valid Email id');return;
            }
        }else{
            alert('Please enter a valid name');return;
        }
    });

    
    
    
}
