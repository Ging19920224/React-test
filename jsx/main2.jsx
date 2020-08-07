import Title from './Title.jsx'

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <Title />
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                    <li>{this.props.phone}</li>
                </ul>
            </div>
        );
    }
}

let inputName = 'Randy Zhang';

ReactDOM.render(<ShoppingList name={inputName} phone="0989822377"/>, document.getElementById('root'));