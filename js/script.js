var arrayCategory = ["interior", "menswear", "womenswear", "print", "jewerly"];

<<<<<<< Updated upstream
=======


$('.burger-menu').on('click', function() {
  $(this).toggleClass("burger-menu--opened");
  $(this).toggleClass("burger-menu--closed");
});

>>>>>>> Stashed changes
$(".filter li").click(filter);

function filter(){
    var category = $(this).attr("class");
    category = category.replace("Btn","");
    $(".grid").masonryFilter({
        filter: function () {
            if (!filter) return true;
            return $(this).attr("data-filter") == category;
        }
    });
}
<<<<<<< Updated upstream
    
    
=======
>>>>>>> Stashed changes
