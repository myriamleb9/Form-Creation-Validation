// Async function to fetch and render user names
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Network response was not ok');

    const users = await response.json();

    // Clear loading text
    dataContainer.innerHTML = '';

    // Build list of user names
    const userList = document.createElement('ul');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (err) {
    // On error, show friendly message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error(err);
  }
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
