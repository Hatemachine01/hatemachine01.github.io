$( document ).ready(function() {
    $(".contact-trigger").click(function(){
    $(".contact").show();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });
});

