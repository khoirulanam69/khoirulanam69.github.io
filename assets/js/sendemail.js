function sendEmail(params) {
    const nama = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#body').value;
    if (nama=="" || email=="" || subject=="" || message=="") {
        alert("All field is required");
    } else {
        // using javascript
        var tempParams = {
            name: nama,
            email: email,
            subject: subject,
            message: message
        };

        emailjs.send('service_dq9xnz3', 'template_zsbuaor', tempParams)
        .then(
            alert("Mail sent successfully"),
            document.querySelector('#sendmail').reset()
        );
    }
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