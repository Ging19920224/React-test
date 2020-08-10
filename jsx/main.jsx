class InputTextWithPreview extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            title:　'randy'
        }
    }
    handler = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value}, () => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handler}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <InputTextWithPreview />,
    document.getElementById('root')
)