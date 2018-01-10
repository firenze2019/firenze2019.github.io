 $( document ).ready(function() {
     var gallery = $('#gallery').justifiedGallery({
         rowHeight : 200,
         lastRow : 'justify',
         margins : 3,
         randomize : true
     });

     gallery.on('jg.complete', function() {
        $('.swipeboxImg').swipebox({
          hideBarsDelay : 3000,
          loopAtEnd: true,
        })
    });
 });
