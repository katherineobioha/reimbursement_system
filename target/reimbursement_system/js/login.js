/**
 * @author kathe
 */

//it is fired when the entire page loads, including its content (images, css, scripts, etc.)

//"use strict"
window.onload= function()
{
	
	document.getElementById("submit").addEventListener("click", login);
	
}

function login()
{	
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState==4 && xhr.status == 200)
			{
				console.log(xhr.responseText);
			}
	}
	xhr.open("POST","/reimbursement_system/login.do");
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send("username="+username+"&password="+password); 
}