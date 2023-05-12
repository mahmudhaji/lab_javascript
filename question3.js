// Get references to the DOM elements
const input = document.getElementById('item');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const list = document.getElementById('list');

let isWhite = true; // Flag to track background color

// Add event listener for adding items to the list
addBtn.addEventListener('click', () => {
  // Get the input value and split it into an array of words
  const value = input.value.trim();
  const words = value.split(/\s+/);

  // Create an li element for each word and add it to the list
  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    li.style.backgroundColor = isWhite ? 'white' : 'yellow';
    list.appendChild(li);
    isWhite = !isWhite;
  });

  // Clear the input box and set focus to it
  input.value = '';
  input.focus();
});

// Add event listener for removing items from the list
removeBtn.addEventListener('click', () => {
  // Get the input value and convert it to lowercase
  const value = input.value.trim().toLowerCase();

  // Find the first li element whose text content matches the input value (case-insensitive)
  const liToRemove = Array.from(list.getElementsByTagName('li')).find(li => li.textContent.toLowerCase() === value);

  // If an li element was found, remove it from the list
  if (liToRemove) {
    list.removeChild(liToRemove);
  }

  // Reset the background colors of the list items
  const lis = list.getElementsByTagName('li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = i % 2 === 0 ? 'white' : 'yellow';
  }

  // Clear the input box and set focus to it
  input.value = '';
  input.focus();
});
