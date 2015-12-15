var Form = React.createClass({

    handleSubmit: function (e) {
        e.preventDefault();
        var inputContent = ReactDOM.findDOMNode(this.refs.login);
        alert(inputContent.value);
    },

    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="github username..." ref="login" />
                <button>Add</button>
            </form>
        );
    }
});

var Card = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Me</h3>
                <img src="https://avatars.githubusercontent.com/u/10364894?v=3" width="80"/>
                <hr/>
            </div>
        );
    }
});

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Form />
                <Card />
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('root'));