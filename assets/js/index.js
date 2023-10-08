// popup video start

$(document).ready(function() {
    // Gets the video src from the data-src on each button   
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
         
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
           
    // document ready  
    });
    


    
  // parents says slider

    $('#parents-carousel').on('initialized.owl.carousel', function () {
      $('.navigator').eq(0).addClass('active');
      console.log('initialized');
    });
  
    $('#parents-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      nav: false,
      singleItem: true,
      smartSpeed:5000,
      autoplaySpeed:9000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  
    $('#parents-carousel').on('changed.owl.carousel', function (ev) {
      var item_index = ev.page.index;
      $('.navigator').removeClass('active').eq(item_index).addClass('active');
    });
  
    $('.navigator').on('click', function () {
      var item_no = $(this).data('item');
      $('#parents-carousel').trigger('to.owl.carousel', [item_no, 10000, true]);
    });
  

    // floating button

    $(document).ready(function() {
      $(".share-btn").click(function(){
        $(".share-btn").toggleClass("active")
        $("ul").toggleClass("active")
       })
    })


    
// Counter Start

// Counter To Count Number Visit
var a = 0;
$(window).scroll(function() {

  var oTop = $('#school-stats').offset().top - window.innerHeight;
  // Md.Asaduzzaman Muhid
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;// Md.Asaduzzaman Muhid
  }
});

  
// back to top button

$(document).ready(() => {
  
  const backToTop = $('#backToTop')
  const amountScrolled = 300
  
  $(window).scroll(() => {
    $(window).scrollTop() >= amountScrolled 
      ? backToTop.fadeIn('fast') 
      : backToTop.fadeOut('fast')
  })
  
  backToTop.click(() => {
    $('body, html').animate({
      scrollTop: 0
    }, 600)
    return false
  })
})



// INITIALIZE AOS
AOS.init();
















