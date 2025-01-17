$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});


document.getElementById("submit").addEventListener("click", () => {
let Fname = document.getElementById("Fname").value;
let Lname = document.getElementById("Lname").value;
     let Phone = document.getElementById("num").value;
     let mail = document.getElementById("mail").value;
     let des = document.getElementById("detail").value;
     var bodys = "Name: " + Fname + " " + Lname + "<br/> Phone no.: " + Phone + "<br/> Email Id.:  " + mail + "<br/> Description: " + des;

     Email.send({
         Host: "smtp.gmail.com",
         Username: "theshaguntyagi@gmail.com",
         Password: "shaguntyagi@2003",
         To: 'theshaguntyagi@gmail.com',
         From: mail,
         Subject: Fname + " Sent you a mail (Portfolio)",
         Body: bodys
     }).then(
         message => {
             if (message == 'OK') {
                 progg.innerText = "Done";
                 setInterval(() => {
                     location.reload();
                 }, 2000)
             }
             else {
                 alert('There is an error in sending message. Or you missed some area')
             }
         }
     );
 })
