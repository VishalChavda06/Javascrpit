let Users = JSON.parse(localStorage.getItem("Users")) || [];

const IsExist = (email) => {
  let isuser = Users.find((ele) => ele.email === email);
  if (isuser) {
    return true;
  } else {
    return false;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  let user = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  if (IsExist(user.email)) {
    alert("User Alreday Exist..");
    return;
  } else {
    Users.push(user);
    localStorage.setItem("Users", JSON.stringify(Users));
    alert("User Create A SuccessFully..");
    document.getElementById("authForm").reset();
  }
  //   console.log(user);
};

document.getElementById("authForm").addEventListener("submit", handleSubmit);
