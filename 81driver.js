// Fetch the games data from a JSON file
fetch('https://3kh0.github.io/assets/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      const gameEl = document.createElement('div');
      gameEl.className = 'game';
      gameEl.innerHTML = `<img src="${"https://3kh0.github.io/" + game.root + "/" + game.img}" onerror="this.src='https://3kh0.github.io/assets/globe.svg'"/><span>${game.name}</span>`;
      gamesContainer.appendChild(gameEl);

      // Add click event listener to the game element to show the game in the game container
      gameEl.onclick = (e) => {
        gamesContainer.classList.add('hidden');
        searchBar.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        document.querySelector('.saveItems').classList.add('hidden');
        document.querySelector('.navbar').classList.add('noshadow');
        gameFrame.querySelector('iframe').src = `https://3kh0.github.io/assets/game?game=${game.root}`;
        gameNav.querySelector('span').textContent = game.name;
      };
