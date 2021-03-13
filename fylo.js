function validate()
{
  var emailid = document.getElementById("email").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(emailid) == false && emailid != ""){
    document.getElementById("lbl").style.visibility="visible";

  }
  else{
    document.getElementById("lbl").style.visibility="hidden";
  }
}
