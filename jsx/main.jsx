class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '555'
        }
    }
    inputHandler(e) {
        this.setState({name: e.target.value});
    }
    render() {
        return (
            <p>
                input test <br />
                <input type="text" value={this.state.name} onChange={this.inputHandler.bind(this)}/>
            </p>
        )
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));