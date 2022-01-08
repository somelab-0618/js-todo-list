const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  const li = document.createElement('li');
  li.className = 'list-row'

  const p = document.createElement('p');
  p.innerText = inputText;
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    alert('完了')
  })

  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  })

  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  document.getElementById('incomplete-list').appendChild(li);
}

document.getElementById('add-todo').addEventListener('click', ()=> onClickAdd());