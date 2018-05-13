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


var Movie = React.createClass ({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {description: this.props.movie.desc}),
                React.createElement('img', {src: this.props.movie.image}),
            )
        )
    },
});

var MovieTitle = React.createClass ({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.description)
        )
    },
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmwów'),
                React.createElement('ul', {}, moviesElements(this.props.movies))
            )
        )
    },
});

var moviesElements = function(movies) {

    return movies.map(function(movie) {

        return React.createElement(Movie, {key: movie.id, movie: movie});
    });
};

var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));

