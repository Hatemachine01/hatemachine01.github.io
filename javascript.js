$( document ).ready(function() {
    $(".contact-trigger").click(function(){
    $(".contact").show();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
    $(".project-trigger").click(function(){
    $(".next-project").show();
    $(".arrow-link").hide();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });



    

});

