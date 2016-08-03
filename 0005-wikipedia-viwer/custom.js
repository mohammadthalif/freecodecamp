function getWeather(lat, lon) {

  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=df20f96b8b63c086406df5d6d9a5274d'
  var jqxhr = $.getJSON(url, function(data) {
      var temp = data.main.temp - 273.15;
      var icon_url = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      $('#temprature').html(temp);
      $('#climate').html(data.weather[0].main);
      $('#icon').attr("src", icon_url);
      $('#app').removeClass("hidden");
      $('#loader').addClass("hidden");
    })
    .fail(function() {
      console.log("error");
    })
}

function getLocation() {

  var jqxhr = $.getJSON("http://ipinfo.io/json", function(data) {
      var lat_long = data["loc"].split(',');
      $('#glat').html(lat_long[0]);
      $('#glong').html(lat_long[1]);
      $('#location').html(data["city"] + ',' + data["country"]);

      getWeather(lat_long[0], lat_long[1]);
    })
    .fail(function() {
      console.log("error");
    })
}

//REF: http://stackoverflow.com/questions/25891076/wikipedia-api-fulltext-search-to-return-articles-with-title-snippet-and-image
function searchWiki(keyword) {

  var api_url = 'http://en.wikipedia.org/w/api.php';
  $.ajax({
    url: api_url,
    data: {
      action: 'query',
      format: 'json',
      list: 'search',
      srlimit: 15,
      utf8: 1,
      srsearch: keyword
    },
    dataType: 'jsonp',
    success: function(data) {

      console.log("Success");
      console.log(data);

      $('#loading').hide();
      $('#result-box').text("");
      $('#result').removeClass("hidden");

      var ar = data.query.search
      for (var i = 0; i < ar.length; i++) {
        var result = '<div class="art">';
        var wiki_url = 'http://en.wikipedia.org/w/index.php?title=' + ar[i].title;
        result += '<p class="art-title"> <a target="_blank" href="' + wiki_url + '">' + ar[i].title + '</a> </p>'
        result += '<p class="art-summary">' + ar[i].snippet + '</p>'
        result += '</div>';
        $("#result-box").append(result);
      }

    }
  });

}

$(document).ready(function() {

  $('#searchbox').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      var keyword = document.getElementById("searchbox").value;
      //console.log("Keyword --------" + keyword);
      $('#app').removeClass("box");
      $('#app').addClass("box-top");
      $('#loading').removeClass("hidden");
      searchWiki(keyword);
    }

  });
});
/*
$(document).ready(function() {
  getLocation();

  document.getElementById("degree").addEventListener("click", function(event) {
    event.preventDefault();

    var str = $("#degree").text();
    var temp = parseInt($("#temprature").text());
    if (str == 'C') {
      temp += 32;
      $('#degree').html('F');
    } else {
      temp -= 32;
      $('#degree').html('C');
    }
    $('#temprature').html(temp);
  });
});
*/
