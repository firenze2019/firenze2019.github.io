$( document ).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: "http://formspree.io/tbmbknupfer@gmail.com",
            method: "POST",
            data: {
              name: $('name').val()
              email: $('_replyto').val(),
              maybeRSVP: $('rsvpDecisionMaybe').val()
              noRSVP: $('rsvpDecisionNo').val()
              address: $('address').val()
            },
            dataType: "json"
        }).error(function(jqXHR, status, error){
            alert('Uh oh, something went wrong. Please try again.');
        }). success(function(data, status, jqXHR) {
            alert('Thank you for your early bird RSVP!');
            $('form').find('name, _replyto, rsvpDecisionMaybe, rsvpDecisionNo, address').val('');
        });
    });

});
