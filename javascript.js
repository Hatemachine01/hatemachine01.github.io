$( document ).ready(function() {
    $(".contact-trigger").click(function(){
    $(".contact").show();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
    $(".project-trigger").click(function(){
    $(".next-project").show();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });


});