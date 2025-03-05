let students = [];

// Make a function to errorDeatils
const ErrorsDetails = (id, msg) => {
  let error = document.createElement("p");
  error = innerHTML = msg;
  document.getElementById(id).append(error);
};

// All deleted function
function handleAllDelted() {
  students = [] = "";
  uimaker();
}

// deleted function
const handleDeleted = (index) => {
  students.splice(index, 1);
  uimaker();
};

// make a function map useing
const uimaker = () => {
  studentList = document.getElementById("studentList").innerHTML = "";
  students.map((ele, i) => {
    // add a table data
    let td1 = document.createElement("td");
    td1.innerHTML = ele.name;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.email;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.cousre;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.fee;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.number;
    // add deleted button
    let btn = document.createElement("button");
    btn.innerHTML = "deleted";
    let td6 = document.createElement("td");
    td6.append(btn);
    // deleted anyway data buttons
    btn.addEventListener("click", () => handleDeleted(i));
    // add the row in table
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6);
    // final output
    document.getElementById("studentList").append(tr);
  });
};
// input values
const sell = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let cousre = document.getElementById("cousre").value;
  let fee = document.getElementById("fee").value;
  let number = document.getElementById("number").value;
  // console.log(name, email, cousre, fee);

  // that is single error show in ux
  //   if(name.length < 2){
  //     // alert("enter the vaild name")
  //     let error = document.createElement("p")
  //         error.innerHTML = "Enter the vaild Name"
  //         document.getElementById("name-error").append(error)
  //     return
  //   }

  // that is multipla erorr use the function
  if (name.length < 2) {
    ErrorsDetails("name-error", "Enter the vaild Name");
    return
  }
  if (email.length < 2) {
    ErrorsDetails("email-error", "Enter the vaild Email");
    return
  }
  if (cousre.length < 2) {
    ErrorsDetails("select-error", "Enter the vaild cousre");
    return
  }
  if (fee.length < 2) {
    ErrorsDetails("fee-error", "Enter the vaild fee");
    return
  }
  if (number.length < 10 || number.length > 10) {
    ErrorsDetails("number-error", "Enter the vaild number");
    return
  }

  // create a object
  let student = {
    name: name,
    email: email,
    cousre: cousre,
    fee: fee,
    number: number,
  };

  students.push(student);
  // console.log(students);  array print

  // call function
  uimaker();
};

document.getElementById("StudentData").addEventListener("submit", sell);
function otp() {
  document.getElementById("content").innerHTML = `Please wait...`;

  setTimeout(() => {
    let otp = Math.floor(Math.random() * 1000000);
    document.getElementById("content").innerHTML = otp;
  }, 2000);
}
