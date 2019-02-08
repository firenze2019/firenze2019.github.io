/*function shuffleBackend(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;

 // While there remain elements to shuffle...
 while (0 !== currentIndex) {

   // Pick a remaining element...
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   // And swap it with the current element.
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }

 return array;
}

function randomizePictures() {
  // Used like so
  var arr = [];
  arr.push("<div class="+"col-lg-4 col-sm-6"+"><a class="+"portfolio-box"+"href="+"img/portfolio/fullsize/P1030016.jpg"+"><img class="+"img-fluid"+"src="+"img/portfolio/thumbnails/P1030016.jpg"+"alt="+""+"><div class="+"portfolio-box-caption"+"><div class="+"portfolio-box-caption-content"+"><div class="+"project-category text-faded"+">July 2015</div><div class="+"project-name"+">Badlands National Park</div></div></div></a></div>");
  arr.push("<div class='col-lg-4 col-sm-6'><a class='portfolio-box' href='img/portfolio/fullsize/P1030068.jpg'><img class='img-fluid' src='img/portfolio/thumbnails/P1030068.jpg' alt=''><div class='portfolio-box-caption'><div class='portfolio-box-caption-content'><div class='project-category text-faded'>July 2015</div><div class='project-name'>Badlands National Park</div></div></div></a></div>");
  arr.push("<div class='col-lg-4 col-sm-6'><a class='portfolio-box' href='img/portfolio/fullsize/P1030217.jpg'><img class='img-fluid' src='img/portfolio/thumbnails/P1030217.jpg' alt=''><div class='portfolio-box-caption'><div class='portfolio-box-caption-content'><div class='project-category text-faded'>July 2015</div><div class='project-name'>Badlands National Park</div></div></div></a></div>");

  arr = shuffleBackend(arr);
  console.log(arr);

  return arr;
}
*/
(function($) {

  $.fn.randomize = function(tree, childElem) {
    return this.each(function() {
      var $this = $(this);
      if (tree) $this = $(this).find(tree);
      var unsortedElems = $this.children(childElem);
      var elems = unsortedElems.clone();

      elems.sort(function() { return (Math.round(Math.random())-0.5); });

      for(var i=0; i < elems.length; i++)
        unsortedElems.eq(i).replaceWith(elems[i]);
    });
  };

})(jQuery);

$("div.gallery.container-fluid.p-0").randomize("div", "div.picture.col-lg-4.col-sm-6");


/*(function($) {
  /*$(function() {
    $("div.gallery").randomize("div.picture");
  });*/
/*
  $.fn.randomize = function(childElem) {
    return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function () { return (Math.round(Math.random()) -0.5); });

      $this.remove(childElem);

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);
    });
  }

  $("div.gallery.container-fluid.p-0").randomize("div.picture.col-lg-4.col-sm-6");
})(jQuery); */
