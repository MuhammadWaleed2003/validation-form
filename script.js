$(document).ready(function() {

    $("#form").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 3
            },
            surname: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 6
            },
            dob: {
                required: true,
                date: true
            },
            experience: {
                required: true,
                number: true,
                min: 1
            },
            email: {
                required: true,
                email:true
            }
        },
        messages: {
            firstName: {
                required: "Please enter your first name",
                minlength: "First name must be at least 3 characters long"
            },
            surname: {
                required: "Please enter your surname",
                minlength: "Surname must be at least 3 characters long"
            },
            password: {
                required: "Please provide a password",
                minlength: "Password must be at least 6 characters long"
            },
            dob: {
                required: "Please enter your date of birth",
                date: "Please enter a valid date"
            },
            experience: {
                required: "Please provide your experience",
                number: "Experience must be a number",
                min: "Experience must be at least 1 year"
            },
            email: {
                required: "Please enter your email",
                email:"Enter valid email"
            }
        },
   
    });
});


// images 
let files=[]
button = document.querySelector('.top button').val()
form=$("#imgForm").val()
container= $(".container1").val()
text=$(".inner").val()
browse=$(".select").val()
input=$("#imgInput").val()

browse.addEventListener('click', () => input.click())
