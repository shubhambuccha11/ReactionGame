var start = new Date().getTime();
		function makeShapeAppear(){
			var top=Math.random()*300;
			var left=Math.random()*400;
			var width=Math.random()*400;
			var height=Math.random()*300;
			var color=getRandomColor();
			var radius=Math.floor(Math.random()*100);
			document.getElementById("shape").style.borderRadius = radius + "%" ;
			document.getElementById("shape").style.backgroundColor=color;
			document.getElementById("shape").style.top=top + "px";
			document.getElementById("shape").style.left=left + "px";
			document.getElementById("shape").style.width=width + "px";
			document.getElementById("shape").style.height=height + "px";
			document.getElementById("shape").style.display = "block";
			start = new Date().getTime();
		}

		function AppearAfterDelay(){
			setTimeout(makeShapeAppear,Math.random()*2000);
		}

		function getRandomColor(){
			var letter='0123456789ABCDEF'.split('');
			var color='#';
			for(var i=0;i<6;i++){
				color+=letter[Math.floor(Math.random()*16)];
			}
			return color;
		}	
		makeShapeAppear();
		document.getElementById("shape").onclick=function(){
			var end = new Date().getTime();
			document.getElementById("shape").style.display="none"; 
			var total_time = (end-start)/1000;
			document.getElementById("time_taken").innerHTML = total_time+ "s";
			AppearAfterDelay();
			}
