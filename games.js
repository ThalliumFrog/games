const gamesContainer = document.querySelector('.games');
const gameContainer = document.querySelector('.gamecontainer');
const gameFrame = gameContainer.querySelector('.frame');
fetch('https://raw.githubusercontent.com/3kh0/3kh0.github.io/main/assets/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    games.forEach((game) => {
      const gameEl = document.createElement('div');
      gameEl.className = 'game';
      gameEl.innerHTML = `<img src="${"https://raw.githack.com/3kh0/3kh0-assets/main/" + game.root + "/" + game.img}" onerror="this.src='https://raw.githubusercontent.com/3kh0/3kh0.github.io/main/assets/globe.svg'"/><span>${game.name}</span>`;
      gamesContainer.appendChild(gameEl);
      gameEl.onclick = (e) => {
        gamesContainer.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        gameFrame.querySelector('iframe').src = `https://raw.githack.com/3kh0/3kh0-assets/main/game?game=${game.root}`;
        gameNav.querySelector('span').textContent = game.name;
      };
