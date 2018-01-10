$( document ).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: "http://formspree.io/tbmbknupfer@gmail.com",
            method: "POST",
            data: {
              name: $('#js-name').val()
              email: $('#js-email').val(),
              maybeRSVP: $('#js-maybeRSVP').val()
              noRSVP: $('#js-noRSVP').val()
              address: $('#js-address').val()
            },
            dataType: "json"
        }).error(function(jqXHR, status, error){
            alert('Uh oh, something went wrong. Please try again.');
        }). success(function(data, status, jqXHR) {
            alert('Thank you for your early bird RSVP!');
            $('form').find('#js-name, #js-email, #js-address, #js-maybeRSVP, #js-noRSVP').val('');
        });
    });

});
