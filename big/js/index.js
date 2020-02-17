window.onload=function()
{
	if(sessionStorage.getItem("username"))
	{
		var mydiv=document.getElementById("msg");
		mydiv.innerHTML="欢迎您:"+sessionStorage.getItem("username");	
	}
    else
    {
    	alert("请先登录再访问");
    	location.href="login.html";
    }
}
