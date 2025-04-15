$(document).ready(function () {
  $("#send-contact").click(function (e) {
    e.preventDefault();

    var isValid = true;

    var name = $("#name-contact").val().trim();
    var email = $("#email-contact").val().trim();
    var phone = $("#number-contact").val().trim();
    var property = $("#property-contact").val().trim();
    var requirements = [];

    $(".requirement-checkbox:checked").each(function () {
      requirements.push($(this).val());
    });

   
    if (!name) {
      $("#name-contact").addClass("is-invalid");
      isValid = false;
    } else {
      $("#name-contact").removeClass("is-invalid").addClass("is-valid");
    }


    if (!email) {
      $("#email-contact").addClass("is-invalid");
      isValid = false;
    } else if (!validateEmail(email)) {
      $("#email-contact").addClass("is-invalid");
      isValid = false;
    } else {
      $("#email-contact").removeClass("is-invalid").addClass("is-valid");
    }

 
    if (!phone) {
      $("#number-contact").addClass("is-invalid");
      isValid = false;
    } else if (!validatePhoneNumber(phone)) {
      $("#number-contact").addClass("is-invalid");
      isValid = false;
    } else {
      $("#number-contact").removeClass("is-invalid").addClass("is-valid");
    }

  
    if (!property) {
      $("#property-contact").addClass("is-invalid");
      isValid = false;
    } else {
      $("#property-contact").removeClass("is-invalid").addClass("is-valid");
    }


    if (requirements.length === 0) {
      $("#checkbox-error").removeClass("d-none");
      isValid = false;
    } else {
      $("#checkbox-error").addClass("d-none");
    }

    if (!isValid) return;

    var data = {
      name: name,
      email: email,
      phone: phone,
      property: property,
      requirements: requirements
    };

    console.log("Data to be sent:", data);

    $.ajax({
      url: "https://localhost:7223/api/requirements", 
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function (response) {
        alert("Enquiry submitted successfully!");
        $("#form-contact1")[0].reset();
        $("#form-contact1 input").removeClass("is-valid is-invalid");
      },
      error: function (xhr) {
        console.error("Error:", xhr.responseText);
        alert("Failed to submit enquiry. Please try again later.");
      }
    });
  });


  $("#form-contact1 input").on("input", function () {
    $(this).removeClass("is-invalid");
  });

  $(".requirement-checkbox").on("change", function () {
    $("#checkbox-error").addClass("d-none");
  });


  function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  function validatePhoneNumber(number) {
    let re = /^[0-9]{10}$/;
    return re.test(number);
  }
});
