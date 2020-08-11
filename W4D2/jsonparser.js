$(function() {
    $("#send").click(function(){
        let id = $("#user_id").val();
        $.get("https://jsonplaceholder.typicode.com/users/"+ id)
        .done(function (data){
        console.log(data);
           $("#userId").text(data.id);
           $("#name").text(data.name);
           $("#u_name").text(data.username);
           $("#email").text(data.email);
           $("#phone").text(data.phone);
           $("#website").text(data.website);
        });
    });

});
