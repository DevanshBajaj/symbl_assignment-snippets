async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();
  let mappedUsers = users.map((user) => {
    return `\n ID: ${user.id}, Name: ${user.name}`
  })
  console.log(mappedUsers);
}

getData();