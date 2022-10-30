let easy = document.getElementById("easy");
let mid = document.getElementById("mid");
let hard = document.getElementById("hard");
let funny = document.getElementById("funny");
let text_number = document.getElementById("getpass");
let sub = document.getElementById("get");
let alert1 = document.getElementById("1noalert");
let alert2 = document.getElementById("2noalert");
let con = [
  "a","b","c","d","e","f","g","h","i","j", "k","l","m","n","o","p","q","r","s","t","u","v",
  "w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,
  2,3,4,5,6,7,8,9,0,"","",">",
  "<","[","]","{","}",")","(","@","#","$","^","&","*","-","+",
];
let funnypass = ["choti-bacchi-ho-kia","eaha-hamari-parrri-horihihe","not-password","your-rabish","password-is-incorrect"
,"kacha-badam","harry-bhia-zindabat","passsuo","popopopopopopopo","i-found-your-password","1234567890"]
// easy.addEventListener('toggle',easy);

let pass = "";
sub.addEventListener("click", gege);

// for (let i = 0; i < 8; i++) {
//     let random = Math.random().toFixed(1)*60;
//     let pass = con[random]
//     text.innerText = pass.slice(0,7);
//     console.log(con[random] , random);
// }

function gege() {
  if (easy.checked === true && hard.checked === false && mid.checked === false) {
    for (let i = 0; i < text_number.value; i++) {
      let random = Math.random().toFixed(1) * 20;
      pass = con[random];
      document.write(pass);
      console.log(pass, random);
      console.log(1);
      // document.write(pass)
    }
         document.write(`<p>I am are so sorry to took you another page for pass word </p> <button onclick="location.reload();">click here to go back</button>`);  


  } else if (mid.checked === true && easy.checked === false && hard.checked === false && funny.checked === false) {
    for (let i = 0; i < text_number.value; i++) {
      random = Math.random().toFixed(1) * 40;
      pass = con[random];
      document.write(pass);
      console.log(pass, random);
      console.log(2);
      // document.write(pass)
    }
    document.write(`<p>I am are so sorry to took you another page for pass word </p> <button onclick="location.reload();">click here to go back</button>`);  

  } else if ( hard.checked === true && mid.checked === false && easy.checked === false && funny.checked === false) {
    for (let i = 0; i < text_number.value; i++) {
      random = Math.random().toFixed(1) * 70;
      pass = con[random];
      document.write(pass ) ;
      console.log(pass, random);
      console.log(3);
      // document.write(pass)
    } 
    document.write(`<p>I am are so sorry to took you another page for pass word </p> <button onclick="location.reload();">click here to go back</button>`);  

  }
  
  else if ( funny.checked === true && hard.checked === false && mid.checked === false && easy.checked === false ) {
    
      random = Math.random().toFixed(1) * 10;
      document.write(funnypass[random] ) ;
      console.log(pass, random);
      console.log(4);
      // document.write(pass)
    document.write(`<p>I am are so sorry to took you another page for pass word </p> <button onclick="location.reload();">click here to go back</button>`);  

  }else if (hard.checked === true && mid.checked === true && easy.checked === false && funny.checked === false) {
    alert1.style.display = "block";    
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000)
    }
   else if (hard.checked === true && mid.checked === false && easy.checked === true && funny.checked === false) {
    alert1.style.display = "block"; 
  
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000)
    }
   else if (hard.checked === false && mid.checked === true && easy.checked === true && funny.checked === false) {
    alert1.style.display = "block";
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000) 
    }
   else if (hard.checked === true && mid.checked === true && easy.checked === true && funny.checked === true) {
    alert1.style.display = "block"; 
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000) 
    }
   else if (hard.checked === true && mid.checked === false && easy.checked === false && funny.checked === true) {
    alert1.style.display = "block";
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000)  
    }
   else if (hard.checked === false && mid.checked === true && easy.checked === false && funny.checked === true) {
    alert1.style.display = "block";  
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000)
    }
   else if (hard.checked === false && mid.checked === false && easy.checked === true && funny.checked === true) {
    alert1.style.display = "block"; 
    setTimeout(() => {
      alert1.style.display = "none"
    }, 5000) 
    }
 
  
    
   else {
    alert2.style.display = "block";  
    setTimeout(() => {
      alert2.style.display = "none"
    }, 5000)
  }
}
