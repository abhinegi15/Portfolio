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


    // $('#parents-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     items:1
    // })



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


    function inVisible(element) {
      //Checking if the element is
      //visible in the viewport
      var WindowTop = $(window).scrollTop();
      var WindowBottom = WindowTop + $(window).height();
      var ElementTop = element.offset().top;
      var ElementBottom = ElementTop + element.height();
      //animating the element if it is
      //visible in the viewport
      if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
    }
    
    function animate(element) {
      //Animating the element if not animated before
      if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
          countNum: element.html()
        }).animate({
          countNum: maxval
        }, {
          //duration 5 seconds
          duration: 5000,
          easing: 'linear',
          step: function() {
            element.html(Math.floor(this.countNum) + html);
          },
          complete: function() {
            element.html(this.countNum + html);
          }
        });
      }
    
    }
    
    //When the document is ready
    $(function() {
      //This is triggered when the
      //user scrolls the page
      $(window).scroll(function() {
        //Checking if each items to animate are 
        //visible in the viewport
        $("h2[data-max]").each(function() {
          inVisible($(this));
        });
      })
    });
  