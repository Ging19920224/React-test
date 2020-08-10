import Result from './Result.jsx';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    countPlusOneHandler() {
        let count = this.state.count + 1;
        this.setState({count: count});
    }
    render() {
        return (
            <div>
                <Result {...this.state} handler={this.countPlusOneHandler.bind(this)}/>
                <button type="button" onClick={this.countPlusOneHandler.bind(this)}>Click me!!</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));