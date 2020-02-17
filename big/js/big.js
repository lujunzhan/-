var i = 1;

	function roll() {
		
			if(i <= 7) {
				if(i==1)
				{
				document.getElementById("roll1").src = 'images/banner1.png';
				document.getElementById("p7").classList.remove("active");
				document.getElementById("p1").classList.add("active");
				
				}
				if(i==2)
				{
				document.getElementById("roll1").src = 'images/banner' + i + '.png';
				document.getElementById("p1").classList.remove("active");
				document.getElementById("p2").classList.add("active");
				
				}
				if(i==3)
				{
				document.getElementById("roll1").src = 'images/banner' + i + '.png';
				document.getElementById("p2").classList.remove("active");
				document.getElementById("p3").classList.add("active");
				
				
				}
				if(i==4)
				{
				document.getElementById("roll1").src = 'images/banner' + i + '.png';
				document.getElementById("p3").classList.remove("active");
				document.getElementById("p4").classList.add("active");
				
				
				}
				
				if(i==5)
				{
				document.getElementById("roll1").src = 'images/banner' + i + '.png';
				document.getElementById("p4").classList.remove("active");
				document.getElementById("p5").classList.add("active");
				
				}
				if(i==6)
				{
				document.getElementById("roll1").src = 'images/banner' + i + '.png';
				document.getElementById("p5").classList.remove("active");
				document.getElementById("p6").classList.add("active");
				
				}
				if(i==7)
				{
				document.getElementById("roll1").src = 'images/banner' + i + '.png';
				document.getElementById("p6").classList.remove("active");
				document.getElementById("p7").classList.add("active");
				
				}
				i++;
				
			} else i = 1;
			
		}
		
		setInterval("roll()", 2300);
		
		function click()
		{
		alert("!")
		//document.getElementById("roll1").src = 'images/banner' + 1 + '.png';
		
		}