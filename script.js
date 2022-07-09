// var full-imgbox = document.getElementById("full-imgbox");
// var full-img = document.getElementById("full-img");
 
// function open full-img(pic){
//     full-imgbox.style.display="flex";
//     full-img.src= pic;

// }
//      function close full-img() {
//          full-imgbox.style.display="none";
         
//      }
<script 
 src ="https://code.jquery.com/jquery-3.4.1.js"></script>
 $(document).ready(function(){
     $('#icon').click(function(){
     $('ul').toggleClass('show');
     });
 }); 




 /* .img-gallery{
        width: 80%;
        margin: 100px auto 50px;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-gap:30px;
    } */
     /* .img-gallery img{
        width: 100%;
        cursor: pointer;  
    }
    /* .full-img{
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 100;

  } */
  /* .full-img img{
      width: 90%;
      max-width: 500px;

  }
  .full-img span{
      position: absolute;
      top: 5%;
      right: 5%;
      font-size: 30px;
      color: #ffff;
      cursor: pointer;
  } */ 