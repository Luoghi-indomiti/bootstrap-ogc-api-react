import React, {Component} from "react";
import axios from "axios";

class Collections extends Component {


    constructor(props) {
        super(props)

        this.state = {
            url: props.url,
            collections: []
        }
    }

    componentDidMount() {
        axios.get(this.state.url + '/collections?f=json')
        .then(response => { 
            
            this.setState({
                collections: response.data.collections
            })

        }).catch(error => {
            console.log('Something wrong with ' + this.state.url)
            // Not valid URL
            this.setState({
                collections: []
            })
        })
    }

    componentWillUnmount() {
        this.setState({
                collections: []
        })
    }

    render() {
        const{collections} = this.state
        return(
            <div>
                <h3>Features collections</h3>
                <ul>
                {collections.filter(collection => collection.itemType === 'feature').map(collection => <li key={collection.id}>{collection.title} - {collection.description}</li>)}
                </ul>
                <ul>
                <h3>Other collections</h3>
                {collections.filter(collection => collection.itemType !== 'feature').map(collection => <li key={collection.id}>{collection.title} - {collection.description}</li>)}
                </ul>
            </div>
            )
    }
}

export default Collections