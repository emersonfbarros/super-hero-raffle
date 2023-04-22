import Swal from 'sweetalert2/dist/sweetalert2.all';

export async function fetchHeroesIds() {
  try {
    const res = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
    const hData = await res.json();
    const heroesIds = hData.map((hero) => hero.id);

    return heroesIds;
  } catch (error) {
    Swal.fire(
      'Oops... The servers are not working well.',
      `${error.message}`,
      'error',
    );
  }
}

export function fetchHeroInfo(id) {
  const heroInfo = fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
    .then((res) => res.json())
    .then((hero) => ({ name: hero.name, image: hero.images.lg }))
    .catch((error) => Swal.fire(
      'Oops... The servers are not working well.',
      `${error.message}`,
      'error',
    ));

  return heroInfo;
}
