$(document).ready(function() {

  
 $.getJSON('data.json', function(data) {

for (var i = 0; i < data.length; i ++){
    var names = data[i].name
    var description = data[i].description
    
    var links = "https://www.google.com/maps?q=" + data[i].location ;;
        console.log(data[i].location[0])


    var newTr = document.createElement('tr')
    newTr.innerHTML = 
    "<td class =\'row\'>" + names + "</td>" +
    "<td class =\'row\'>" + description + "</td>" +
    "<td class =\'row\'>"+"<a class=\'btn btn-info\' href="+ links+">"+"Open In Google Maps"+"</a>"+"</td>"
    ;            
    $(newTr).appendTo('#table')   
}
  });
});





