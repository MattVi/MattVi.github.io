//Request Variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//Get Request
request.open('GET', 'https://api.github.com/users/MattVi/repos', true);

request.onload = function(){
  //Access JSON data
  var data = JSON.parse(this.response);

  var statusHTML = '';

  $.each(data, function(i, status){
    $(".accordion").append('<div class="panel panel-default">'+
          '<div class="panel-heading" role="tab" id="heading_'+i+'">'+
            '<h4 class="panel-title">'+
              '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse_'+i+'" aria-expanded="true" aria-controls="collapse_'+i+'">'+
                  status.name+
              '</a>'+
            '</h4>'+
          '</div>'+
          '<div id="collapse_'+i+'" class="panel-collapse collapse in" role="tabpanel" data-parent="#accordion" aria-labelledby="heading_'+i+'">'+
            '<div class="panel-body">'+
              status.description+
            '</div>'+
          '</div>'+
        '</div>')

    //statusHTML += '<li>' + status.html_url + '</li>';
    //statusHTML += '<li>' + status.language + '</li>';
    //statusHTML += '<li>' + status.description + '</li>';
    //statusHTML += '</ul>'
  });
}

//Send request
request.send();
