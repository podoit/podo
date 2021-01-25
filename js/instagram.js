var token = "IGQVJWVWdValdTdFNMUHgzSlVrX2lEdURWTHpreHlBdTU5WEtOZAktzZAThENE1RM0lOdlhtSWVfNlpuNkV6QldYNnhRLWZAlN2FlSnhhSjhrSGNmakxVU1VzT1NYUnhsMEpEejVVdWhEN1RyMlZANZAmpubwZDZD";

$.ajax({

    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://graph.instagram.com/me/media?access_token=" + token + "&fields=id,caption,media_type,media_url,thumbnail_url,permalink",

    success: function(response) {

        if (response.data != undefined && response.data.length > 0) {

            for (i = 0; i < 6; i++) {

                if (response.data[i]) {
                    var item = response.data[i];

                    if (item.media_type === "VIDEO"){
                    image_url = item.thumbnail_url;
                    }

                    else {
                    image_url = item.media_url;
                    }
                    
                    var post = "<div class='instagram-"+ i +"'><a target='_blank' href=' " + item.permalink + "'><img src='"+ image_url+"'></a></div>"   
   
                    $('#myInstagram').append(post);
                }

                else {
                    // if no curent item
                    show_fallback('#insta-item-'+i)
                }

            }

        }

        else {
        // if api error
        show_fallback('.instagram-item')
        }
    },

    error :function() {
    // if http error
    show_fallback('.instagram-item')
    }
});


function show_fallback(el) {
    $(el).addClass('loaded fallback');
}