var Counter = React.createClass ({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
        console.log('Ustawienie domyślnych wartości propsów, które nie zostały przekazane do komponentu')
    },

    componentWillMount: function() {
        console.log('Wykonanie operacji opierającyh się na stanie i propsach(ustawienie stanu w tej metodzie nie ma spowoduje przerenderowania komponentu');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counter'}, 
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.decrement}, '-'),
                React.createElement('button', {onClick: this.increment}, '+'),
            )
        );
    },

    componentDidMount: function() {
        console.log('komponent zmontowany w drzewie DOM - możemy wykonywać na nim różnie operacje');
    },

    componentWillReceiveProps: function() {
        console.log('na podstawie nadchodzących właściwości można aktualizować stan kompnentu');
    },

    shouldComponentUpdate: function() {
        console.log('metoda ta sprawdza czy trzeba przerysować komponent, przyjmuje true lub false');
        return true;
    },

    componentWillUpdate: function() {
        console.log('jeśli poprzednia metoda zwróciła wartość true to ta metoda przygotowuje do nadchodząych zmian w drzewie DOM');
    },

    componentDidUpdate: function() {
        console.log('pozwala dokonać akutalizacji w drzewie DOM');
    },

    componentWillUnmount: function() {
        console.log('usunięcie komponetu z drzewa DOM');
    }
});

var element = React.createElement('div', {className: 'counters'},
    React.createElement('h2', {}, 'Independent Counters'),
    React.createElement(Counter),
    React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById('app'));


