// This is where I get the Dom
$(document).ready(onReady);
//
function onReady(){
    console.log('DOM is loaded');
    //add click event handler that calls the AddEmployee
    // ButtonToAddEmployees is on the index as a button and when that button is clicked we use the submitaddEmployees fuction below
    $('#buttonToAddEmployees').on('click',submitaddEmployees)

    $('body').on('click',"#removeAddEmployees",deletebutton)

    $('#buttonToAddEmployees').on('click',calculateSalary)

    

}


//This is an array
let employees = [];
//This is where I created our monthly variable so that I can make it go red
let monthlySalary = 0;

// We make variable to connect with the inputs on the index.html and we use .val()
function submitaddEmployees(){
    //get input values
    //set varaible to index.html input IDs and .val()is facilitating the connection               
    let FirstName =$('#theFirstName').val()
    let LastName =$('#theLastName').val()
    let ID=$('#EmployeeID').val()
    let Title=$('#theTitle').val()
    let AnnualSalary=$('#theAnnualSalary').val()

//This is an object and we will use it
    let addNewEmployeeObject= {
    First: FirstName,
    Last: LastName,
    ID: Number(ID),
    Title:Title,
    Salary:Number(AnnualSalary)

    }

    //Employees is our Array and .push() is pushing the object into our Empty Array
    employees.push(addNewEmployeeObject)

    //Below is a for loop which run through the entire object
    for(let i=0; i<employees.length; i++){

    //Below is the table from the index.html
    //We are using append to insert specified content at the end of the selected element which is the Table in this case
    $('table').append(`
    <TR id='Employees'>
            <td>${employees[i].First}</td>
            <td>${employees[i].Last}</td>
            <td>${employees[i].ID}</td>
            <td>${employees[i].Title}</td>
            <td>${employees[i].Salary}</td>
            <td> <button id="removeAddEmployees">Delete</button> </td>

        </TR>
    `)
}



}


//This is where we created a fuction for the delete 
function deletebutton(){
$(this).parent().parent().remove()
}
function calculateSalary(){

//    let yearlySalary= $('#theAnnualSalary').val()
//    console.log('yearlySal', yearlySalary)
//     let Salary = yearlySalary / 12;
//     // monthlySalary= Salary + monthlySalary
//     $('#thingsinthespan').text(monthlySalary)
//     render (monthlySalary)

let yearlySalary = $('#theAnnualSalary').val()
console.log(yearlySalary, 'yearly salary');
 monthlySalary += yearlySalary / 12;

 $('#thingsinthespan').text(monthlySalary);


render(monthlySalary)


}
function render( monthlySal){

    if(monthlySal >=  20000)  return   $('h4').css('background-color','red')
    
    $('#theFirstName').val('')
    $('#theLastName').val('')
    $('#EmployeeID').val('')
    $('#theTitle').val('')
    $('#theAnnualSalary').val('')

    // if(monthlySalary > 20000){
    //     $('h4').css('background-color','green')
    // }

}


