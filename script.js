$(document).ready(onReady);
function onReady(){
    console.log('DOM is loaded');
    //add click event handler that calls the AddEmployee
    $('#buttonToAddEmployees').on('click',addEmployees)

}

let employees = [];

function addEmployees(){
    //get input values
    let theFirstName = ('#firstName').val()
    let thelastName =('#lastName').val()
    let theID=('#employeeID').val()
    let theTitle=('#title').val()
    let theAnnualSalary=('#annualSalary').val()

    let addNewEmployee= {
    FirstName: theFirstName,
    LastName: theLastName,
    ID: theID,
    Title:theTitle,
    annualSalary:theAnnualSalary

    }
    addNewEmployee.push(employees)
}


function render(){
    for(let i=0; i<employees.length; i++)
}

function deletebutton(){
let = $(this).parent().parent()
}
