//Request Variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//Get Request
request.open('GET', 'https://api.github.com/users/MattVi/repos', true);

request.onload = function(){
  //Access JSON data
  var data = JSON.parse(this.response);

  var statusHTML = '';
  $.each(data, function(i, status){
    $("#card-list").append('<div class="card text-white bg-dark mb-3">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title">' + status.name + '</h5>' +
                            '<h6 class="card-subtitle mb-2 text-muted">Description:</h6>' +
                            '<p class="card-text">' + status.description + '</p>' +
                            '<a href="'+ status.html_url + '" class="btn btn-primary">Go To Project!</a>'+
                            '</div>' +
                            '<div class="card-footer text-muted">' + status.language + '</div>' +
                            '</div>'
                            )
  });
}

//Send request
request.send();
