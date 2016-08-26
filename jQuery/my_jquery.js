

$(document).ready(function(){


   $('figure img').click(function(){


      $('#photo_modal').modal();

      $('.modal-body').load($(this).attr("src"));


   });








});