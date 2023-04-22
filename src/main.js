import { fetchHeroInfo, fetchHeroesIds } from './services/api';
import './style.css';

const heroPhoto = document.getElementById('image');
const heroName = document.getElementById('name');
const raffleBtn = document.getElementById('raffle-btn');

const heroesIds = await fetchHeroesIds();

const randomIndex = () => {
  const multiplier = 562;
  return Math.round(Math.random() * multiplier);
};

const raffleHero = () => {
  heroPhoto.src = 'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif';
  heroPhoto.style.border = 'none';
  heroName.innerHTML = 'Loading...';

  fetchHeroInfo(heroesIds[randomIndex()])
    .then((hero) => {
      heroPhoto.src = `${hero.image}`;
      heroName.innerHTML = `${hero.name}`;
      heroPhoto.removeAttribute('style');
    });
};

window.onload = () => {
  raffleHero();
  raffleBtn.addEventListener('click', raffleHero);
};
