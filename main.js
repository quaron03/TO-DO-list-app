const headlineInput = document.getElementById('headline')
const sublineInput = document.getElementById('subline')
const notPinnedTaskContainer = document.getElementById('not-pinned')
const pinnedTaskContainer = document.getElementById('pinned')

function submit(){
	let headlineVal = headlineInput.value;
  let sublineVal = sublineInput.value;
	if(headlineVal !== '' && sublineVal !== '') {
		const task = document.createElement('div');
		task.className ='task';
		taskContent =`
		<div class="text-box">
			<h3>${headlineVal}</h3>
			<p>${sublineVal}</p>
		</div>
		<div id="btn-box">
			<button id="pin-btn" onclick="pinTask(this.parentElement.parentElement)">📌</button>
			<button id="remove-btn" onclick="removeTask(this.parentElement.parentElement)">✖</button>
		</div>
		`;
		task.innerHTML = taskContent;
		notPinnedTaskContainer.prepend(task)
	}else{
		alert("Fill in the blanks")
	}
}

function removeTask(task) {
  task.remove();
}

function pinTask(task) {
  const pinnedContainer = document.getElementById('pinned');

  if (task.parentElement === notPinnedTaskContainer) {
    const clonedTask = task.cloneNode(true);
    const btnBox = clonedTask.querySelector('#btn-box');
    const pinButton = btnBox.querySelector('#pin-btn');
    pinButton.innerText = '🔗';
    pinButton.onclick = function() {
      unpinTask(clonedTask);
    };

    pinnedContainer.prepend(clonedTask);
    task.remove();
    hideDeleteButton(clonedTask);
  }
}

function unpinTask(task) {
  const notPinnedContainer = document.getElementById('not-pinned');
  const btnBox = task.querySelector('#btn-box');
  const pinButton = btnBox.querySelector('#pin-btn');
  pinButton.innerText = '📌'; 
  pinButton.onclick = function() {
    pinTask(task);
  };

  notPinnedContainer.prepend(task);
  showDeleteButton(task);
}

function hideDeleteButton(task) {
  const deleteButton = task.querySelector('#remove-btn');
  deleteButton.style.display = 'none';
}

function showDeleteButton(task) {
  const deleteButton = task.querySelector('#remove-btn');
  deleteButton.style.display = 'block';
}