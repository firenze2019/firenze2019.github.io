$( document ).ready(function() {

    $('form').submit(function(event) {
      event.preventDefault();

      $.ajax({
          url: "https://formspree.io/tbmbknupfer@gmail.com",
          method: "POST",
          data: {
            email: $('#js-email').val(),
            address: $('#js-address').val()
          },
          dataType: "json"

      }).error(function(jqXHR, status, error){
        alert("Uh oh, something went wrong and your rsvp was not sent");
      }).success(function(data, status, jqXHR) {
          alert("Thank you for sending in your early bird rsvp!")
          /*Empty form values so it's obvious to user rsvp was sent*/
          $('form').find('#js-email, #js-address').val('');
      });
   });
/*
    document.getElementById('js-maybeRSVP').onchange = function() {
      document.getElementById('js-address').disabled = !this.checked;
    };

     */
/*
    $("input[name='rsvpDecisionNo']").click(function(){
               if ($(this).is(':checked')) {
                      document.getElementById('js-address').attr("disabled", false);
                 }
               else if ($(this).not(':checked')) {
                    var remove = '';
                      document.getElementById('js-address').attr('value', remove);
                      document.getElementById('js-address').attr("disabled", true);
                }
    });
    */

});
