// var image = {
//     name: 'Kotek',
//     src: './images/cat.jpeg'
// };
  
// var element = React.createElement(GalleryItem, {image: image});
// ReactDOM.render(element, document.getElementById('app'));

var movieId = {
    Id: 1,
};

var element2 = React.createElement(Movie, {movieId: movieId});
ReactDOM.render(element2, document.getElementById('app'));

var title = {
    name: 'Władca Pierścieni'
};

var element3 = React.createElement(MovieTitle, {title: title});
ReactDOM.render(element3, document.getElementById('app'));

var description = {
    desc: 'Film o podróży przez Śródziemie'
}

var element4 = React.createElement(MovieDescription, {description: description});
ReactDOM.render(element4, document.getElementById('app'));


var list = {

};

var element5 = React.createElement(MovieList, {list: list});
ReactDOM.render(element5, document.getElementById('app'));
