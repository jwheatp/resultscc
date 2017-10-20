$(document).ready(function(){

  $.getJSON("projects.json",

      function(data) {
      $.each(data, function(key,val) {

          $('#projects').append("\
              <div class='col-sm-4'>\
                <a href='http://"+val.account+".github.io/"+val.repo+"' target='_blank'>\
                <article>\
                  <h4>"+val.title+"</h4>\
                  <h5>by "+val.students+"</h5>\
                  <img class='screenshot' src='http://image.thum.io/get/http://"+val.account+".github.io/"+val.repo+"'>\
                </article>\
                </a>\
              </div>\
          ");


      });

    }
  );


});
