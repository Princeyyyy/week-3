// giving feedback to the customer
$("button").click(function (review) {
    var customer = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + customer + ' we have sucessfully received your message. ' + ' Feel free to reach out to us anytime.');
    review.preventDefault();
  });
  //    reset my form button
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });