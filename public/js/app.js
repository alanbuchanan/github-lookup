var Form = React.createClass({

    handleSubmit: function (e) {
        e.preventDefault();
        var inputContent = ReactDOM.findDOMNode(this.refs.login);
        this.props.addCard(inputContent.value);
        inputContent.value = '';
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

    getInitialState: function () {
        return {data: {}};
    },

    componentDidMount: function () {

        var component = this;

        $.get('https://api.github.com/users/' + this.props.userInput, function (data) {
            component.setState(data);
        })
    },

    render: function () {
        return (
            <div>
                <h3>{this.state.login}</h3>
                <img src={this.state.avatar_url} width="80"/>
                <hr/>
            </div>
        );
    }
});

var Main = React.createClass({

    getInitialState: function () {
        return {logins: []};
    },

    addCard: function (login) {
        this.setState({logins: this.state.logins.concat(login)});
    },

    render: function () {

        var cards = this.state.logins.map(function (login) {
            return <Card userInput={login}/>
        });

        return (
            <div>
                <Form addCard={this.addCard}/>
                {cards}
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('root'));