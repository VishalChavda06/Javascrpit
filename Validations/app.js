const getvalue = (id) => {
  return document.getElementById(id).value;
};

const UserData = (e) => {
  e.preventDefault();
  //   let Username = document.getElementById("Username").value;
  let nameregex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/
  let Username = getvalue("Username");
  let email = getvalue("Email");
  let pass = getvalue("password");
  let number = getvalue("number");
  console.log(Username, email, pass, number);

  if (nameregex.test(Username)) {
    document.getElementById("Username").setAttribute("class", "passed");
  } else {
    document.getElementById("Username").setAttribute("class", "err");
  } 
};

document.getElementById("UserData").addEventListener("submit", UserData);
