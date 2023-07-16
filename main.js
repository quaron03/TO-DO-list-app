const headline = document.getElementById('headline')
const subline = document.getElementById('subline')
const taskBox = document.getElementById('task-box')

function submit(){
	let headlineVal = headline.value;
	let sublineVal = subline.value;
	if(headlineVal && sublineVal) {
		const task = document.createElement('div');
		task.className ='task';
		task.innerHTML =`
		<div class="text-box">
			<h3>${headlineVal}</h3>
			<p>${sublineVal}</p>
		</div>
		<button id="remove-btn" onclick="this.parentElement.remove()">remove</button>
		`;
		taskBox.prepend(task)
	}else{
		alert("Fill in the blanks")
	}
}