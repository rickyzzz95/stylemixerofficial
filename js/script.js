var arrayCategory = ["interior", "menswear", "womenswear", "print", "jewerly"];

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
    
    