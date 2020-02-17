function reg()
{
	var sid=document.getElementById("sid").value;
	var sname=document.getElementById("sname").value;
	var ssex=document.getElementsByName("ssex");
	var sex="";
	for(var i=0;i<ssex.length;i++)
	{
		if(ssex[i].checked)
		{
		  sex=ssex[i].value;
		  break;
	}}
	var sage=document.getElementById("sage").value;
	var major=document.getElementById("major").value;
	
	localStorage.setItem("sid",sid);
	localStorage.setItem("sname",sname);
	localStorage.setItem("sex",sex);
	localStorage.setItem("sage",sage);
	localStorage.setItem("major",major);
	
	alert("恭喜您注册成功");
	location.href="login.html";
	
}
