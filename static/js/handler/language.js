/*
  This files includes the functions related with language html files
*/


function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function getCourses(abbr, title){
  $.ajax({
    dataType: "json",
    url: "./static/text/courses.json",
    mimeType: "application/json",
    success: function(result){
        courses = result
        for(var i in courses){
          if (courses[i].abbr == abbr && courses[i].title == title){
            $("#courses").append('<a href="./course.html?language='+courses[i].abbr+'&title='+courses[i].title+'&level='+courses[i].level+'" class="card card-custom">'+courses[i].level+'</a>')
          }
        }
    }
});
}

$(document).ready(function () {
  var abbr = gup("language")
  var title = gup("title")
  getCourses(abbr, title)
});
