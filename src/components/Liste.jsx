import { Component } from "react";


class Liste extends Component {

    render() { 
        return <div>
            <h1>Liste des taches</h1>
            <ul>
                {this.props.elements.map(e => 
                    <li style={{color: e.completed ? 'green':'red'}}>{e.id} - {e.text}</li>
                    )}
            </ul>
        </div>;
    }
}
 
export default Liste;