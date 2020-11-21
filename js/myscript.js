//Request Variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//Get Request
request.open('GET', 'https://api.github.com/users/MattVi/repos', true);

request.onload = function(){
  //Access JSON data
  var data = JSON.parse(this.response);

  var statusHTML = '';

  $.each(data, function(i, status){
    statusHTML += '<tr>';
    statusHTML += '<td>' + status.name + '</td>';
    statusHTML += '<td>' + status.html_url + '</td>';
    statusHTML += '<td>' + status.language + '</td>';
    statusHTML += '<td>' + status.description + '</td>';
    statusHTML += '</tr>'
  });

  $('tbody').html(statusHTML);

}

//Send request
request.send();
