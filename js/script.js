var self = $("#grid");
var categories = ["interior", "menswear", "womenswear", "jewerly", "print"];
var i = -1;
var imgAr = [
    {img:"1.jpg", caption:"Valentino1, art direction, graphic design, luxury, jewelry, watch", filter:"jewerly"},
    {img:"2.jpg", caption:"Valentino2, art direction, graphic design, luxury, jewelry, watch", filter:"womenswear"},
    {img:"3.jpg", caption:"Valentino3, art direction, graphic design, luxury, jewelry, watch",filter:"womenswear"},
    {img:"video2.mp4", filter:"interior"},
    {img:"4.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"interior"},
    {img:"5.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"jewerly"},
    {img:"6.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"menswear"},
    {img:"7.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"womenswear"},
    {img:"8.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"print"},
    {img:"9.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"interior"},
    {img:"10.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"jewerly"},
    {img:"11.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"menswear"},
    {img:"12.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"womenswear"},
    {img:"13.jpg", caption:"Valentino4, art direction, graphic design, luxury, jewelry, watch", filter:"print"},
    {img:"video.mp4", filter:"interior"},

    // Aggiungi qui altre immagini e/o video

];
var uniqueRandoms = [];
var numRandoms = imgAr.length;


$(function() {

    getRandomImage(imgAr);

    document.getElementById("splashPage").innerHTML='<object type="text/html" data="test.html" ></object>';

    self.imagesLoaded(function(){
        self.masonry({
            gutterWidth: 15,
            isAnimated: true,
            itemSelector: ".item",
            isAnimated: false
        });
    });

    setTimeout(function(){
        $(".container").css('opacity',1);
        $("#splashPage").fadeOut(500);
    },7000);

});

$(".arrowTop").click(goToTop);
$(".burger-menu").click(menu);
$('.filter').each(selectedFilter);
$("#mixer").click(randomImage);
$("#openMenu").click(openMenu);
$(".close").click(closeMenu);



$(".filter li").click(function filtering(e) {
        e.preventDefault();
        var filter = $(this).attr("data-filter");
//        if($(this).parent().hasClass("filter")){
//            i = $(this).attr("data-count");
//        }else{
//            if(i==4){
//                i = -1;
//            }else{
//              i++;
//            }
//            filter = categories[i];
//        }

        self.masonryFilter({
            filter: function() {
                if (!filter) return true;
                return $(this).attr("data-filter") == filter;
            }
        });
    });

function openMenu(){
    $(".container").fadeOut(500);
    $(".container-fluid").delay(1000).fadeIn(1000);
}
function closeMenu(){
    $(".container-fluid").fadeOut(500);
    $(".container").delay(1000).fadeIn(1000);
}

function makeUniqueRandom(imgAr) {
        if (!uniqueRandoms.length) {
            for (var i = 0; i < numRandoms; i++) {
                uniqueRandoms.push(i);
            }
        }
        var index = Math.floor(Math.random() * uniqueRandoms.length);
        var val = uniqueRandoms[index];
        uniqueRandoms.splice(index, 1);
        return val;
}

function randomImage(){
    if(!self.is(':empty')){
//        self.html(" ");
//        uniqueRandoms = [];
//        getRandomImage(imgAr);
//        msnry = new Masonry( self[0], {
//            gutterWidth: 15,
//            isAnimated: true,
//            itemSelector: ".item",
//            isAnimated: false
//        });
    }
}

function getRandomImage(imgAr) {

    for(i=0; i<imgAr.length; i++){
        var rand = makeUniqueRandom(imgAr);
        console.log(rand);
        var ext = imgAr[rand].img.split('.').pop();
        if(ext === "jpg"){
          self.append('<li class="item" data-filter="'+imgAr[rand].filter+'"><a href="images/'+imgAr[rand].img+'" data-fancybox data-caption="'+imgAr[rand].caption+'"><img src="images/'+imgAr[rand].img+'"></a></li>');
        } else if(ext === "mp4"){
            self.append('<li class="item" data-filter="'+imgAr[rand].filter+'"><video muted loop autoplay><source src="images/'+imgAr[rand].img+'" type="video/mp4"></video></li>');
        }
    }
}

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
