var i=1;

function Instructions()
{
	alert("1.Click on Add for adding your task \n2. Click on Done To remove your task");
}

function Add()
{
	if(i>10)
	{
		alert("Max limit reached \n Adding Task to Task 1");
		i=1;
		return;
	}

	var k="Task";
	k+=i;
	var task = document.MyForm.Task.value;
	task =""+k+" :- "+task+"";
	var para = document.createElement("p");
	var node = document.createTextNode(task);
	para.appendChild(node);
	document.getElementById(k).appendChild(para);
	
	var button = document.createElement("button");
	button.innerHTML="Done";
	button.onclick = function(){
		document.getElementById(k).innerHTML="";
	}
	document.getElementById(k).appendChild(button);
	i++;
}