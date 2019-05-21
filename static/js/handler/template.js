$(document).ready(function () {

    $page = getURL();
    loadHTML($page);
  });



function getURL(){
    url = window.location.href ;
    url = url.split("?");
    return url.pop()
}

function loadHTML($page){
    $.ajax({
    dataType: "json",
    url: "./static/text/"+$page+".json",
    mimeType: "application/json",
    success: function(response){
        response = response[0];
        $("#title").append('<h2>'+response['title']+'</h2>');
        $("#title").append('<p>'+response['description']);
        items = response['items'];
        $.each(items,function(){
            console.log(this.description)
            $('#items-list').append(`<ul class="list-group template-tables" >

              <li class="list-group-item list-group-item-light title" id="item" >
            <h4>${this.name}</h4>
            <div>
              <table class="table table-bordeless">
                <tbody>
                    <tr class="row">
                        <td class="col-md-12">
                            <p>${this.description}</p>
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="col-sm-4 text-center"> <a class="btn btn-primary" href=${this.link}>Ver Precios</a></td>
                    </tr>
                </tbody>
             </table>
            </div>
          </li>  </ul>`);
        })




    },
    error: function(){
        console.log("no se ha obtenido respuesta de "+ "./static/text/"+$page+".json")
    }
    });
}
