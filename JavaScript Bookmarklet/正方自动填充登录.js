javascript: 
 var url='http://172.16.1.205/jwglxt/xtgl/login_slogin.html';
 if(location!=url)location=url;
 else{
  document.getElementById("yhm").value = "student ID";
  document.getElementById("mm").value = 'password';
  document.getElementById("dl").click();
 }
