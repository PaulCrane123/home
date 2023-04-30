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

        


