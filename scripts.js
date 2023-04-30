import { addNewUser } from "./Users"
const userinput = document.getElementById("userInput");
const passinput = document.getElementById("passInput");
const SignUpbutton = document.getElementById("sign_up");
const Logbutton = document.getElementById("LogIn");


SignUpbutton.addEventListener("click", (e) => {
  e.preventDefault();
  addNewUser(userinput, passinput);
  alert("added new user and pass successfully");
}
);

Logbutton.addEventListener("click", (e) => {
  e.preventDefault();
  checkInfo();
}
);

function buildHome() {
  const header = document.createElement("h1")
  header.innerText = `Hello, ${userinput}`
}

buildHome()


function checkInfo() {
  userList.forEach((user) => {
    console.log(user.username);
    if (user.username  == userinput.value){
      user.password == passinput.value ? buildHome() : alert("pass incorrect");
    }else {
      alert("user not found");
    }
  })
  }

        
  let redirect_Page = (ele) => {
    ele.disabled = true;
   let iCnt = 12;	// for time in seconds.
   
   let iTimerId = setInterval(function () {
 document.getElementById ('msg').innerHTML = 'redirecting in ' + iCnt + ' seconds';
       
       iCnt--;     // decrease counter by 1.
       if (iCnt === 999) {
           // now, redirect page.
           window.location.href = 'https://paulcrane123.github.io/home/#slide-1';
       }

       if (iCnt === 69) {
           // now, redirect page.
           window.location.href = 'https://paulcrane123.github.io/home/#slide-2';
       }

       if (iCnt === 39) {
           // now, redirect page.
           window.location.href = 'https://paulcrane123.github.io/home/#slide-3';
       }
       
       if (iCnt === 90) {
           // now, redirect page.
           window.location.href = 'https://paulcrane123.github.io/home/#slide-4';
           clearInterval(iTimerId);		// clear time interval.
           redirect_Page(this);
       }
   }, 1000);
}


