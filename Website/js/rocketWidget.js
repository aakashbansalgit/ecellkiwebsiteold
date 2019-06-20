$(document).ready(function() {
            $('.rocketWidget').draggable();
            
            $('div.platformWidget').droppable({
                drop: function(event, ui) {
                     window.open("contact.html","_self");
                }});
            
            $('#touch').droppable("option", "tolerance", "touch");

        });