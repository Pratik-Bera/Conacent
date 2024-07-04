$(document).ready(function(){
    $(".topic").click(function(){
        $(".desc").slideDown('slow');
    })
    $(".desc").click(function(){
        $(".desc").slideUp('slow');
    })
});