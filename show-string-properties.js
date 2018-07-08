const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: "Sridhar"
}

showStringProperties(movie);

function showStringProperties(jsobject) {
    for (let property in jsobject) {
        if (typeof jsobject[property] === 'string') console.log(property, jsobject[property]);
    }
}