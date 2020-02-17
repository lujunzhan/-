function login()
{
	var sid=document.getElementById("sid").value;
	var sname=document.getElementById("sname").value;
	
	if(sid==localStorage.getItem("sid"))
	{
		if(sname==localStorage.getItem("sname"))
		{
			alert("登录成功");
			sessionStorage.setItem("username",sname);
			location.href="index.html";
		}
		else
		{
			alert("你输入的姓名有误");
		}
	}
	else
	{
		alert("你输入的学号有误");
	}
}
function over(e)
{
	document.getElementById(e).classList.remove("display_none");
	document.getElementById(e).classList.add("display_out");
}
function out(e)
{
	document.getElementById(e).classList.remove("display_out");
	document.getElementById(e).classList.add("display_none")
}