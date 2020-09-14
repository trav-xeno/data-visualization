const btn5 = document.getElementById("btn5");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

 let list = [1,2,3,6,7,8,9,4];             
 //const id =[1,2,3,6,9,8,7,4];

 btn5.addEventListener("click", () =>{ 
      let end = list.pop();
      list.unshift(end);
      rotate();
  });
  function rotate(){

      btn1.innerHTML = list[0];
      btn2.innerHTML = list[1];
      btn3.innerHTML = list[2];
      btn6.innerHTML = list[3];
      btn9.innerHTML = list[4];
      btn8.innerHTML = list[5];
      btn7.innerHTML = list[6];
      btn4.innerHTML = list[7];
      /*
          for(let i = 0 ; i < 7; i++){
              console.log(`id${id[i]} list${list[i]} `);
              let temp = document.getElementById(`btn${id[i]}`) ;
              temp.innerHTML = list[i];
          }
        */
      }
  

  
  const startUp = () =>{
    for(let i = 1 ; i <= 9; i++){
        document.getElementById(`btn${i}`).innerHTML = i;
    }


  }
  window.onload = () => {
      startUp();
  }