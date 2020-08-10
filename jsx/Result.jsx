class Result extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {count, handler} = this.props;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button type="button" onClick={handler}>Click me 2!!</button>
            </div>
        )
    }
}

export default Result;