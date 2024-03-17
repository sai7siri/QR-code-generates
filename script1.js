
const qInput = document.querySelector("#qrinput");

const qButton = document.querySelector("#qrbut");

const qImage = document.querySelector("#qrimg");



qButton.addEventListener("click",() =>{
   
   let inputval = qInput.value;
   
   if( !inputval  ){
      alert("please enter your valid QR");
      qImage.style.display = "none";
   }else{
       qImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`; 

      
       
      
      
      }
   
})