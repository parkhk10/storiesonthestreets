function truncateText(name) {
  var texts = document.getElementsByClassName(name);

  for (i = 0; i < texts.length; i++) {
    var array = texts[i].innerHTML.split(' ');
    while (texts[i].scrollHeight > texts[i].offsetHeight) {
      array.pop();
      texts[i].innerHTML = array.join(' ') + '..."';
    }
  }
}

truncateText("story-short");
truncateText("more-story");


function filter() {
  document.getElementById("filtered-by").innerHTML = "Search completed.";
}
function verifyDonation() {
  if (confirm("Are you sure you want to submit your donation?")) {
    window.location.href = "submittedDonation.html";
  }
}

function verifyAddStory() {
  if (confirm("Are you sure you want to submit your story?")) {
    window.location.href = "submittedStory.html";
  }
}


$(document).ready(function () {
  // Name can't be blank
  $('#first-name, #last-name, #address1, #city, #card-holder-name').on('input', function () {
    var input = $(this);
    var is_name = input.val();
    if (is_name) { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });
  // Email must be an email
  $('#email').on('input', function () {
    var input = $(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email = re.test(input.val());
    if (is_email) { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });
  // phone number can have periods and dashes but no parenthesis
  $('#phone-number').on('input', function () {
    var input = $(this);
    var res = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var is_phonenumber = res.test(input.val());
    if (is_phonenumber) { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });
  // donation amounts can have $ and . or not
  $('#donation-amount').on('input', function () {
    var input = $(this);
    var re = /^[0-9.$]+$/;
    var is_donation = re.test(input.val());
    if (is_donation) { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });
  // credit card number must be all numbers, no spaces.
  $('#card-number, #sec-code, #zip-code').on('input', function () {
    var input = $(this);
    var re = /^[0-9]+$/;
    var is_card = re.test(input.val());
    if (is_card) { input.removeClass("invalid").addClass("valid"); }
    else { input.removeClass("valid").addClass("invalid"); }
  });
  // /^[0-9-+]+$/
});

// trying to check whether or not all required fields have been filled
function updatePreview() {
  for (var i = 0; i < 14; i++) {
    //check if its a truthy value
    if ($(".req")[i].value) { }
    else {
      alert("Please fill in all the required fields (indicated by *)");
      return;
    }
  }
  if (confirm("Are you sure you want to submit your donation?")) {
    window.location.href = "submittedDonation.html";
  }
}
