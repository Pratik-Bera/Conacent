
$(document).ready(function(){
    let user={};

    $("#user-reg").on("submit",function(event){
        event.preventDefault();
    });
    $("#user-reg").submit(function(){
        user["name"] = $("#name").val();
        user["email"] = $("#email").val();
        user["gender"] = $("input[name='gender']:checked").val();
        user["religion"] = $("#religion").val();
        user["userId"] = $("#user-id").val();
        user["password"] = $("#password").val();
        user["confirmPassword"] = $("#confirmPassword").val();
        // console.log(user);

        if((user.name=="")||(user.email=="")||(user.userId=="")||(user.password=="")||(user.confirmPassword=="")){
            $(".outbox").text("Please enter all required fields above.");
            return false;
        }else if(user.password!==user.confirmPassword){
            $(".outbox").text("Passwords do not match.");
            return false;
        }else{
            $("#user-reg")[0].reset();
            alert("Your Form is Submitted");
            return true;
        }
    })


});