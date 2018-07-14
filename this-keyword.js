// "this" keyword inside a method of an object refers to the object
// "this" keyword inside a function refers to the global object (window in browser, global in node.js)

const video = {
    title: 'a',
    play: function() {
        console.log(this); // displays video object
    }
}
video.play();

function videoFn() {
    console.log(this); // displays window object in browser, global in node.js
}
videoFn();

const movie = {
    title: 'b',
    tags: ['t1', 't2'],
    showTags: function() {
        this.tags.forEach(function(tag) {
            console.log(tag, this); // displays window for each tag. this inside the anonymous function refers to window or global object
            // IF this was a arrow function, the "this" keyword would be inherited
        });
    },
    showTagsProper: function() {
        this.tags.forEach(function(tag) {
            console.log(tag, this); // displays the movie object for each tag because the forEach accepts this argument; 
        }, this);
    },
    showTagsArrow: function() {
        this.tags.forEach(tag => {
            console.log(tag, this); // this here refers to movie object because of using the arrow function
        });
    }

}
movie.showTags();
movie.showTagsProper();
movie.showTagsArrow();

function otherVideo(a, b) {
    console.log(this);
}
otherVideo(); // displays window/global object
otherVideo.call({name: 'Hello'}, 1, 2); // displays the object passed instead
otherVideo.apply({name: 'Hello'}, [1, 2]); // same as call() except arguments to be passed as an array
otherVideo.bind({name: 'Bind'}); // returns a copy of the function that is permanently bound to the object supplied; does not invoke the function here
let fn = otherVideo.bind({name: 'Bind1'});
fn(); // invokes the function
otherVideo.bind({name: 'Bind2'})(); // invoke directly here
