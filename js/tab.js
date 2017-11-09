$(function() {

    slideshow();
    
    function slideshow() {

        $("body").css("background-image", "url(img/clear.gif)");
        $("#bug").css("display", "block");
        $.getJSON("http://tv.giphy.com/v1/gifs/screensaver?api_key=wBL1FvTTel6OQ&tag=giphytrending", null, function(response) {
            var image = response.data.image_original_url;
            var gifId = response.data.id;
            $("#gif").css("background-image", "url(" + image + ")");
            $("#gif").click(function() {
                location.href = "http://giphy.com/gifs/" + gifId;
            });
        });
    };  
    setInterval(slideshow, 7000);  

});
