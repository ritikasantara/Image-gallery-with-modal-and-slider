

$(window).load(function(){


   //$('figure img').click(function(){


     //$('#photo_modal').modal();

      //$('.modal-body').load($(this).attr("src"));


   //});

   

   //var modal = $("#photo_modal");
   //var figure_modal_img = $("figure img");
   //var modalImg= $("image_modal");
   //var captionText = $(figure figcaption);

   $('figure img').on('click',function(){

        var src = $(this).attr('src');

        var text = $(this).attr('alt');

        $('#modal_image').attr('src',src);

        $('#modal_caption').attr('alt',text);

        $('#photo_modal').modal();



   });

   




});