var Card = React.createClass({
    render: function () {
        return (
            <div>works</div>
        );
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <Card />
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('root'));