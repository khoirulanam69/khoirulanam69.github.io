// using javascript
function sendEmail(params) {
    var tempParams = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#body').value,
    };

    emailjs.send('service_dq9xnz3', 'template_zsbuaor', tempParams)
    .then(
        alert("Mail sent successfully"),
        document.querySelector('#sendmail').reset()
    );
}

// using php mailer
// function sendEmail() {
//     const name = $('#name');
//     const email = $('#email');
//     const subject = $('#subject');
//     const body = $('#body');
    
//     if (isNotEmpty(name) && isNotEmpty(email) && isNotEmpty(subject) && isNotEmpty(body)) {
//         $.ajax({
//             url : "SendEmail.php",
//             method: 'POST',
//             dataType : 'json',
//             data : {
//                 name: name.val(),
//                 email: email.val(),
//                 subject: subject.val(),
//                 body: body.val(),
//             },
//             success: function(response) {
//                 $('#sendmail')[0].reset();
//                 $('.sent-notification').text("Message sent success!");
//                 alert('Message sent success!');
//             }
//         });       
//     }
// }