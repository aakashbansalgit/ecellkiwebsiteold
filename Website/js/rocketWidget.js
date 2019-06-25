$(document).ready(function() {
            $('.rocketentrepreneur').draggable();
            
            $('div.platformentrepreneur').droppable({
                drop: function(event, ui) {
                     window.open("contact.html","_self");
                }});
            
            $('#touch').droppable("option", "tolerance", "touch");

        });