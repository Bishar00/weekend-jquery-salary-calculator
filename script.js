let monthlySalary = 0;

// This is where I get the Dom
$(document).ready(onReady);
//
function onReady() {
  console.log("DOM is loaded");

  $("#buttonToAddEmployees").on("click", submitaddEmployees);

  $("body").on("click", "#removeAddEmployees", deletebutton);

  $("#buttonToAddEmployees").on("click", calculateSalary);
}

function clearValFunc() {
  $("#theFirstName").val("");
  $("#theLastName").val("");
  $("#EmployeeID").val("");
  $("#theTitle").val("");
  $("#theAnnualSalary").val("");
}

function submitaddEmployees() {
  //This is an object and we will use it
  let employeeObject = {
    firstName: $("#theFirstName").val(),
    lastName: $("#theLastName").val(),
    id: $("#EmployeeID").val(),
    title: $("#theTitle").val(),
    salary: $("#theAnnualSalary").val(),
  };
  calculateSalary(employeeObject.salary);
  clearValFunc();
  displaySalary(employeeObject);
}

function displaySalary(employeeSal) {
  $("table").append(`
    <tr id='Employees'>
            <td>${employeeSal.firstName}</td>
            <td>${employeeSal.lastName}</td>
            <td>${employeeSal.id}</td>
            <td>${employeeSal.title}</td>
            <td>${employeeSal.salary}</td>
            <td> <button id="removeAddEmployees">Delete</button> </td>
        </tr>
    `);
}

//This is where we created a fuction for the delete
function deletebutton() {
  $(this).parent().parent().remove();
}

function calculateSalary(yearlySalary) {
  yearlySalary = $("#theAnnualSalary").val();
  console.log(`MonthLy Sal ${yearlySalary}`);
  console.log(yearlySalary, "yearly salary");
  monthlySalary += yearlySalary / 12;

  $("#thingsinthespan").text(monthlySalary);

  render(monthlySalary);
}
function render(monthlySal) {
  if (monthlySal >= 20000) {
    return $("h4").css("background-color", "red");
  } else {
    return $("h4").css("background-color", "green");
  }
}
