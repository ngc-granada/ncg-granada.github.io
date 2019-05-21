/*
  This files includes the functions related with courses html files
*/

function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

function getCourse(abbr, title, level){
  $.ajax({
    dataType: "json",
    url: "./static/text/courses.json",
    mimeType: "application/json",
    success: function(result){
        courses = result
        for(var i in courses){
          if (courses[i].abbr == abbr && courses[i].title == title && courses[i].level == level){
            $("#course_name").text(courses[i].course_name+" "+courses[i].level)
            $("#course_description").append(courses[i].description)
            console.log(courses[i].description)
            for (var j in courses[i].packages){
              $("#packages").append('<div class="card"><h5>'+courses[i].packages[j].title+'</h5><div class="container-fluid"><div class="row"><div class="col">'+courses[i].packages[j].col1+'</div><div class="col">'+courses[i].packages[j].col2+'</div><div class="col">'+courses[i].packages[j].col3+'</div></div></div></div>')
            }
          }
        }
    }
});
}

$(document).ready(function () {
  var abbr = gup("language")
  var title = gup("title")
  var level = gup("level")
  console.log(abbr);
  getCourse(abbr, title, level)
});
