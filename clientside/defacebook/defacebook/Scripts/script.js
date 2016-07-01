$(document).ready(function(){
    $("#login").click(function(){
        var email = $('#txtemail').val(),
           password = $('#txtpassword').val();
        $.ajax({
            url: "http://api.baabtra.com/LoginService/login.php",
            data: { email: email, password: password },
            success: function (response) {
                var result = JSON.parse(response);
                //console.log(result);
                
                if (result[0].ResponseCode=="200") {
                    window.location.href = "Home/sucess?message=" + result[0].vchr_first_name + " &&photo=" + result[0].vchr_prof_pic + "";
                
                }
                else if (result[0].ResponseCode == "500" && result[0].Msg == "Password Incorrect!") {
                    window.location.href = "Home/error?message=" + result[0].vchr_user_name + " &&photo=" + result[0].vchr_prof_pic + "";
                   // console.log(result[0].vchr_user_name);

                }
                else {
                    window.location.href = "Home/error?message="+" &&photo=" + result[0].vchr_prof_pic + "";
                }
            }
        });

        //$.post("http://api.baabtra.com/LoginService/login.php", { email: email, password: password })
        //.done(function (d) {
        //    console.log(d)
        //});
    });
});
//$("#btnLogin").click(function (e) {


//    e.preventDefault();
//    var a = $('#txtUname').val();
//    var b = $('#txtPwd').val();
//    window.location.href = '/LoginAndSignup/Login?username=' + a + '&password=' + b;

//    //validateEmail(a);
//    //required(password);
//    //$.ajax
//    //({
//    //    type: 'POST',
//    //    url: '/LoginAndSignup/Login/',
//    //   // data: "{'username': '" + $("#txtUname").val() + "', 'password': '" + $("#txtPwd").val() + "'}",
//    //    data:{username:a,password:b},
//    //    crossDomain: 'true',
//    //    dataType: 'jsonp',
//    //    contentType: 'application/json; charset=utf-8',
//    //    success: function (response)
//    //    {

//    //        var result = JSON.parse(response.d);
//    //        console.log(result);
//    //        if((result.ResponseCode)==500)
//    //        {

//    //            window.location.href = "LoginAndSignUp/Login";          

//    //        }
//    //        else if((result.ResponseCode)==200)
//    //        {
//    //             window.location.href = "LoginAndSignUp/Profile"; 
//    //        }
//    //        else if(((result.ResponseCode)==500) && ((result.Msg)=="Email doesnt exist,Login Failed"))
//    //        {

//    //        }


//    //    },
//    //    error: function (error) {
//    //        alert("Error");
//    //        alert($("#txtUname").val());
//    //        alert($("#txtPwd").val());

//    //        console.log(error);
//    //    }
//    //});
//});
