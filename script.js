let generateColorButton = document.querySelector('.bg-button')

generateColorButton.addEventListener('click', handleChangeBackgroundColor)

function generateRandomHEXColor() {
  randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return '#' + randomColor;
}

function handleChangeBackgroundColor() {
  let background = document.getElementsByClassName('rocketcard-background')[0]

  background.style.backgroundColor = generateRandomHEXColor();
}

const fetchURL = 'https://api.github.com/users/AlefSloan'

async function getUser() {
  const result = await fetch(fetchURL);
  const user = await result.json();

  let followers = document.querySelector('.followers');
  followers.innerText = `${user.followers} Seguidores`

  let following = document.querySelector('.following');
  following.innerText = `${user.following} Seguindo`;

  let repos = document.querySelector('.repos');
  repos.innerText = `${user.public_repos} Repositórios`;

  let company = document.querySelector('.company');
  company.innerText = user.company ? `${user.company}` : `@${user.login}`;

  let location = document.querySelector('.location');
  location.innerText = `${user.location}`;

  console.log(user)

  let avatar = document.getElementsByClassName('avatar')[0]
  avatar.src= user.avatar_url
}

window.onload = function() {
  getUser()
}