
$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".icon").addClass("fa-arrow-down").removeClass("fa-arrow-right");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".icon").removeClass("fa-arrow-right").addClass("fa-arrow-down");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".icon").removeClass("fa-arrow-down").addClass("fa-arrow-right");
    });
});