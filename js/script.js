$(function() {
    var self = $("#grid");
    var categories = ["interior", "menswear", "womenswear", "jewerly", "print"];
    var i = -1;
    document.getElementById("splashPage").innerHTML='<object type="text/html" data="test.html" ></object>';

    self.imagesLoaded(function(){
        self.masonry({
            gutterWidth: 15,
            isAnimated: true,
            itemSelector: ".item",
            isAnimated: false
        });
    });
    $(".fancybox").fancybox({
//    	'showCloseButton': true,
//    	'titlePosition': 'inside'
        openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
    $(".fancybox").click(function(){
       console.log(this); 
    });
    
    $(".filter li, .nextProject p").click(function filtering(e) {
        e.preventDefault();
        var filter = $(this).attr("data-filter");
//        var $previous = $(".filter").filter(function() { 
//                return $(".filter li").attr("data-count") == i;
//            });
//            console.log($previous);
        if($(this).parent().hasClass("filter")){
            i = $(this).attr("data-count");
        }else{
            if(i==4){
                i = -1;
            }else{
              i++;  
            }
            filter = categories[i];
        }
        
        self.masonryFilter({
            filter: function() {
                if (!filter) return true;
                return $(this).attr("data-filter") == filter;
            }
        });
    });
});

setTimeout(function(){
    $(".container-fluid").css('opacity',1);
    $("#splashPage").fadeOut(500);
    
},7000);
$(".arrowTop").click(goToTop);
$(".burger-menu").click(menu);
$('.filter').each(selectedFilter);

function goToTop(event){
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            window.location.hash = hash;
        });
    }
}

function menu(){
  $(this).toggleClass("burger-menu--opened");
  $(this).toggleClass("burger-menu--closed");
}

function selectedFilter(i, buttonGroup) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li', function() {
    $buttonGroup.find('.selected').removeClass('selected');
    $( this ).addClass('selected');
  });
}