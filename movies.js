const movies = [
    { title: 'a', year: 2018, rating: 4.5 }, // use Shift + Alt + down arrow to duplicate lines to below
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.0 },
    { title: 'd', year: 2017, rating: 4.5 }
];

const topMoviesIn2018 = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .reverse((a, b) => a.rating - b.rating)
    .map(m => m.title);

console.log(topMoviesIn2018);