window.onload = function(){
  var usernameInput = document.getElementById("username");
  usernameInput.onblur=checkUserName;
      function checkUserName(){
        let reg=/^\w{6,12}$/;
        let username = usernameInput.value.trim()
        let flag=reg.test(username)
        if (flag){
      document.getElementById("username_err").style.display='none';
    }else{
      document.getElementById("username_err").style.display='';
    }
  }
}
