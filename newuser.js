class user {
  constructor(userName) {
    this.userName = userName;
  }
  editUser(userName) {
    this.userName = userName ;
  }
}
let users = [];

function addNewUser (  ) {
  let newUser = new user("queen");
  users.push(newUser);
  getAllUsers();
}
function getAllUsers() {
  console.log("called");
  let result = " ";
  if (users.length > 0) {
    users.forEach(() => {
      result += `
    <div  class="img2">
        <img src="pic.jpg" width="150px" height="150px">
    <br/>
        <button class="input1" onclick="deleteUSer"> remove</button>
    <br/>
         <button  class="input2" onclick="editUser('paramesh')"> Edit</button>
        </div> `;
    });
  } else {
    result += "no user found!";
  }
  document.querySelector(".hii").innerHTML = result;
}
