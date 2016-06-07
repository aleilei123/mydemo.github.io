window.onload=function(){
	var odiv=document.getElementById('hide_div');
	var obtn=document.getElementById('btn');
	var obtn1=document.getElementById('btn1');
	var obtn2=document.getElementById('btn2');
	var orec=document.getElementById('rec');

	var ored=document.getElementById('cred');
	var oyellow=document.getElementById('cyellow');
	var oblue=document.getElementById('cblue');
	var ow2=document.getElementById('w2');
	var ow3=document.getElementById('w3');
	var ow4=document.getElementById('w4');
	var oh2=document.getElementById('h2');
	var oh3=document.getElementById('h3');
	var oh4=document.getElementById('h4');
	var oshadow=document.getElementById('shadow');
	obtn.onclick=function(){
       oshadow.style.display="block";
       odiv.style.display="block";
	}
    ored.onmouseover=function(){
		 rec.style.background="red";
	}
	oyellow.onmouseover=function(){
		 rec.style.background="yellow";
	}
	oblue.onmouseover=function(){
		 rec.style.background="blue";
	}
	oh4.onmouseover=function(){
		 oh4.style.background="#FD7128";
		 rec.style.height="400px";
	}


    oh2.onmouseover=function(){
		 oh2.style.background="#FD7128";
		 rec.style.height="200px";
	}
	oh3.onmouseover=function(){
		 oh3.style.background="#FD7128";
		 rec.style.height="300px";
	}
	oh4.onmouseover=function(){
		 oh4.style.background="#FD7128";
		 rec.style.height="400px";
	}
	ow2.onmouseover=function(){
		 ow2.style.background="#FD7128";
		 rec.style.width="200px";
	}
	ow3.onmouseover=function(){
		 ow3.style.background="#FD7128";
		 rec.style.width="300px";
	}
	ow4.onmouseover=function(){
		 ow4.style.background="#FD7128";
		 rec.style.width="400px";
	}

	oh2.onmouseout=function(){
		 oh2.style.background="#fff";
	}
	oh3.onmouseout=function(){
		 oh3.style.background="#fff";
	}
	oh4.onmouseout=function(){
		 oh4.style.background="#fff";
	}
	ow2.onmouseout=function(){
		 ow2.style.background="#fff";
	}
	ow3.onmouseout=function(){
		 ow3.style.background="#fff";
	}
	ow4.onmouseout=function(){
		 ow4.style.background="#fff";
	}
	obtn1.onclick=function(){
		orec.removeAttribute('style');
	}
	obtn2.onclick=function(){
		odiv.style.display="none";
		oshadow.style.display="none";
	}
}