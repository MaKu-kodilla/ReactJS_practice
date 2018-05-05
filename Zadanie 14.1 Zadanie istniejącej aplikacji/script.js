var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: './images/harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: './images/lion-king.jpg'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Film o podróży przez Śródziemie',
        image: './images/lord-of-the-rings.jpg'
    },
    {
        id: 4,
        title: 'Matrix',
        desc: 'Film o alternatywnej rzeczywistości',
        image: './images/matrix.jpg'
    },
    {
        id: 5, 
        title: 'Avengers',
        desc: 'Film o superbohaterach Marvela',
        image: './images/avengers.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});

var element =  
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista Filmów'),
        React.createElement('ul', {}, moviesElements),
);

ReactDOM.render(element, document.getElementById('app'));
