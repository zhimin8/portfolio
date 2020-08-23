 // Get the modal
    var modal = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
 
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];                               
    var span2 = document.getElementsByClassName("close2")[0]; 

     // When the user clicks on the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    btn2.onclick = function() {
      modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    } 
    span2.onclick = function() {
      modal2.style.display = "none";
    }
 


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        } else if(event.target == modal2) {
          modal2.style.display = "none";
        }
    }

// 이미지 슬라이드
let currSlide = 1;
showSlide(currSlide);

function button_click(num){
  showSlide((currSlide += num));
}

function showSlide(num){
  const slides = document.querySelectorAll(".slide");

  if(num > slides.length){
    currSlide = 1;
  } if(num < 1){
    currSlide = slides.length;
  }
  for(let i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }slides[currSlide -1].style.display="block";


}

let currSlide2 = 1;
showSlide2(currSlide2);

function button_click2(num){
  showSlide2((currSlide2 += num));
}

function showSlide2(num){
  const slides2 = document.querySelectorAll(".slide2");

  if(num > slides2.length){
    currSlide2 = 1;
  } if(num < 1){
    currSlide2 = slides2.length;
  }
  for(let i=0; i<slides2.length; i++){
    slides2[i].style.display="none";
  }slides2[currSlide2 -1].style.display="block";


}






    

