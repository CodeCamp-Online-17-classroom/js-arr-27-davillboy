// write code here
function updateTask(id, newName) {
  const index = tasks.findIndex(item => item.id === id);
  if (index !== -1) {
    tasks[index].name = newName;
  }
}

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

updateTask(2, 'Travelling');
console.log(tasks);
