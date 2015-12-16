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

    setData: function (logins) {
        this.setState({data: logins});
    },

    componentDidMount: function () {

        $.get('https://api.github.com/users/' + this.props.userInput, function (logins) {
            this.setData(logins);
        }.bind(this))
    },

    render: function () {
        return (
            <div>
                <h3>{this.state.data.login}</h3>
                <img src={this.state.data.avatar_url} width="80"/>
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

        var cards = this.state.logins.map(function (login, i) {
            return <Card userInput={login} key={i}/>
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