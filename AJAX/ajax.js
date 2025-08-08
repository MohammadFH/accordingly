const loadUsersBtn = document.getElementById('loadUsersBtn');

loadUsersBtn.addEventListener('click' , () =>{
    var xhr = new XMLHttpRequest();
    xhr.open('GET' , 'https://jsonplaceholder.typicode.com/users' , true);

    xhr.onload = function() 
    {
        if(xhr.status >= 200 && xhr.status < 400)
        {
            var users = JSON.parse(xhr.responseText);
            displayUsers(users);
        }
        else
        {
            console.error('Error fetching data');
        }
    }
    xhr.onerror = function()
    {
        console.error('Network error');
    }

    xhr.send();
});

function displayUsers(users)
{
    var usersListDiv  = document.getElementById('usersList');
    usersListDiv.innerHTML = '<h2>User List</h2>';
    var ul = document.createElement('ul');

    users.forEach(function(user){
        var li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
    });

    usersListDiv.appendChild(ul);
}