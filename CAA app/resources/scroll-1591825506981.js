(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-00ee1313-0daf-49de-8c0f-a54a0a8ca0c2 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
            jQuery(".s-547c2bf1-f2f2-4c60-86fb-d8603d27466b .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.5', thickness:'2'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);