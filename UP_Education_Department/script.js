$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000 // Change the interval time (in milliseconds) as needed
    });
});





const readMoreLink = document.querySelector('.read-more-link');
const fullContent = document.querySelector('.container2 p');

readMoreLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (fullContent.style.display === 'none' || fullContent.style.display === '') {
        fullContent.style.display = 'block';
        readMoreLink.textContent = 'Read Less';
    } else {
        fullContent.style.display = 'none';
        readMoreLink.textContent = 'Read More';
    }
});



var $affectedElements = $("p, h1, h2, h3, h4, h5, h6"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});

$("#btn-increase").click(function(){
  changeFontSize(1);
})

$("#btn-decrease").click(function(){
  changeFontSize(-1);
})

$("#btn-orig").click(function(){
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}

i18next.init({
    lng: 'en', // Default language
    resources: {
      en: {
        translation: {
          // English translations here
        }
      },
      hi: {
        translation: {
          // Hindi translations here
        }
      }
    }
  });

  // Language switching logic
  document.getElementById('hindiButton').addEventListener('click', function() {
    i18next.changeLanguage('hi');
  });

  $(".dropdown-menu a").click(function() {
    $(this)
      .parents(".dropdown")
      .find(".btn")
      .html($(this).text() + ' <span class="caret"></span>');
    $(this)
      .parents(".dropdown")
      .find(".btn")
      .val($(this).data("value"));
    $("#toChange").text($(this).text());
  });

  


  
