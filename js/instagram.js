var xhttp = new XMLHttpRequest();
var token = "IGQVJWVWdValdTdFNMUHgzSlVrX2lEdURWTHpreHlBdTU5WEtOZAktzZAThENE1RM0lOdlhtSWVfNlpuNkV6QldYNnhRLWZAlN2FlSnhhSjhrSGNmakxVU1VzT1NYUnhsMEpEejVVdWhEN1RyMlZANZAmpubwZDZD";

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
    console.log(obj);

    for(i=0;i<6;i++) {
      if(obj.data[i].media_type == "VIDEO") {
        obj.data[i].media_url = obj.data[i].thumbnail_url
      }
      document.getElementById("myInstagram").innerHTML +=  
      "<a href='" + obj.data[i].permalink + "' target='_blank' rel='noopener noreferrer'>"
      + "<div class='post' style='background-image:url("+ obj.data[i].media_url +")'></div></a>"
    }
  }
};

xhttp.open("GET", "https://graph.instagram.com/me/media?access_token=" + token + "&fields=id,caption,media_type,media_url,thumbnail_url,permalink", true);
xhttp.send();