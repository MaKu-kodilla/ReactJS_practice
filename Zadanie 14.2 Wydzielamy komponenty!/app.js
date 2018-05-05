
// var GalleryItem = React.createClass({
//     propTypes: {
//         image: React.PropTypes.object.isRequired
//     },

//     render: function() {
//         return (
//             React.createElement('div', {},
//                 React.createElement('h2', {}, this.props.image.name),
//                 React.createElement('img', {src: this.props.image.src})
//             )
//         )
//     },
// })

var Movie = React.createClass ({
    propTypes: {
        movieId: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('li', {key: movieId}, this.props.movieId.Id)
        )
    },
})

var MovieTitle = React.createClass ({
    propTypes: {
        title: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title.name)
        )
    },
})

var MovieDescription = React.createClass ({
    propTypes: {
        description: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.description.desc)
        )
    },
})

var MovieList = React.createClass ({
    propTypes: {
        list: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('ul', {}, this.props.list)
        )
    },
})


