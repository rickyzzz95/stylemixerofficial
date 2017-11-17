$(function() {
    var self = $("#grid");
    var categories = ["interior", "menswear", "womenswear", "jewerly", "print"];

    self.imagesLoaded(function(){
        self.masonry({
            gutterWidth: 15,
            isAnimated: true,
            itemSelector: ".item"
        });
    });
    
    $(".filter li, .nextProject p").click(function filtering(e) {
        e.preventDefault();
        var filter = $(this).attr("data-filter");
        self.masonryFilter({
            filter: function() {
                if (!filter) return true;
                return $(this).attr("data-filter") == filter;
            }
        });
    });
});

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