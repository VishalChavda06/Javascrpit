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
  const newuser = document.getElementById("newuser");
  const Alreday = document.getElementById("alreday");
  let user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  if (IsExist(user.email)) {
    // alert("User Alreday Exist..");
    Alreday.style.display = "inline-block";
    newuser.style.display = "none";
    return;
  } else {
    Users.push(user);
    localStorage.setItem("Users", JSON.stringify(Users));
    // alert("User Create A SuccessFully..");
    newuser.style.display = "inline-block";
    Alreday.style.display = "none";

    document.getElementById("authForm").reset();
    window.location.href = "/Clothing/Login/Log.html";
  }
  //   console.log(user);
};

const validatename = () => {
  const Username = username.value.trim();
  const nameerror = document.getElementById("name-error");

  if (Username.length < 4) {
    nameerror.innerHTML = "Enter the Valid Name";
    return false;
  } else {
    nameerror.innerHTML = "Valid Name";
    nameerror.style.color = "green";
    return true;
  }
};
const validateemail = () => {
  const Email = email.value.trim();
  const emailerror = document.getElementById("email-error");

  if (!/^\S+@\S+\.\S+$/.test(Email)) {
    emailerror.innerHTML = "Invalid email format";
    return false;
  } else {
    emailerror.innerHTML = "valid email";
    emailerror.style.color = "green";
    return true;
  }
};

const validatepass = () => {
  // const passregex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const Password = password.value.trim();
  const passworderror = document.getElementById("password-error");

  if (Password.length < 4) {
    passworderror.innerHTML = "Enter a Valid Password";
    return false;
  } else {
    passworderror.innerHTML = "valid Password";
    passworderror.style.color = "green";
    return true;
  }
};

username.addEventListener("input", validatename);
password.addEventListener("input", validatepass);
email.addEventListener("input", validateemail);

document.getElementById("authForm").addEventListener("submit", handleSubmit);
