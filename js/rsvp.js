$( document ).ready(function() {

      $('form').submit(function(event) {
          event.preventDefault();

          $.ajax({
              url: "http://formspree.io/tbmbknupfer@gmail.com",
              method: "POST",
              data: {
                  name: $('#js-name').val()
                  email: $('#js-email').val(),
                  address: $('#js-address').val()
                  maybeRSVP: $('#js-maybeRSVP').val()
                  noRSVP: $('#js-noRSVP').val()
              },
              dataType: "json"
          }).error(function(jqXHR, status, error){
              alert('Uh oh, something went wrong. Please try again.');
          }). success(function(data, status, jqXHR) {
              alert('Thank you for your RSVP');
              $('form').find('#js-email, #js-address, #js-rsvp').val('');
          });
      });

  });
