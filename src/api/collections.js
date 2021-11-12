import React, {Component} from "react";
import axios from "axios";

class Collections extends Component {


    constructor(props) {
        super(props)

        this.state = {
            url: props.url,     // url of API
            collections: [],    // array with collections objects
            expanded: false       // component expanded
        }
    }

    // Runs on component mount
    componentDidMount() {
        // Gets collection from API
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

    // Runs on component unmount
    componentWillUnmount() {
        this.setState({
                collections: []
        })
    }

    // Invert expanded state
    expand = (e) => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        const{collections, expanded} = this.state
        return(
            <div>
                { 
                    // Collections are loaded but not shown
                    !expanded && 
                    <button type="button" onClick={this.expand}>Show {collections.length} features</button> 
                }
                { 
                    // Collections are shown
                    expanded && 
                    <div>
                        <h3>Features collections</h3>
                        <ul>
                            {collections.filter(collection => collection.itemType === 'feature').map(collection => <li key={collection.id}>{collection.title} - {collection.description}</li>)}
                        </ul>
                        <ul>
                            <h3>Other collections</h3>
                            {collections.filter(collection => collection.itemType !== 'feature').map(collection => <li key={collection.id}>{collection.title} - {collection.description}</li>)}
                        </ul>
                        <button type="button" onClick={this.expand}>Hide</button>
                    </div>
                }
            </div>
            )
    }
}

export default Collections