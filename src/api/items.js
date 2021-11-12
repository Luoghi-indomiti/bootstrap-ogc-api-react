import React, {Component} from "react";
import axios from "axios";

class Items extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: props.url,
            id: props.id,
            items: [],
            expanded: false
        }
    }

    expand = (e) => {

        if(!this.state.expanded) {
            axios.get(this.state.url + '/collections/' + this.state.id + '/items?f=json')
            .then(response => { 

                this.setState({
                    items: response.data.features,
                    expanded: !this.state.expanded
                })
            })
        } else {
            this.setState({
                items: [],
                expanded: !this.state.expanded
            })
        }
        
    }

    render() {

        const{expanded, items, id} = this.state;

        return(
            <span className="ps-2">
                {!expanded && <button type="button" className="btn btn-dark btn-sm" onClick={this.expand} >+</button>}
                {expanded && <button type="button" className="btn btn-dark btn-sm" onClick={this.expand} >-</button>}
                {expanded && items.filter(item => item.type === 'Feature').map(feature => <Feature key={feature.id} collectionId={id} featureId={feature.id} url={this.state.url} />)}
            </span>
        )
    }
}

class Feature extends Component {


    constructor(props) {
        super(props)

        this.state = {
            collectionId: props.collectionId,
            featureId: props.featureId,
            feature: [],
            url: props.url,
            expanded: false
        }
    }

    expand = (e) => {

        if(!this.state.expanded) {
            axios.get(this.state.url + '/collections/' + this.state.collectionId + '/items/' + this.state.featureId + '?f=json')
            .then(response => { 

                this.setState({
                    feature: JSON.stringify(response.data),
                    expanded: !this.state.expanded
                })
            })
        } else {
            this.setState({
                feature: [],
                expanded: !this.state.expanded
            })
        }
        
    }

    render() {
        const{expanded, feature, featureId} = this.state;

        return(
            <div className="mb-3 ps-4">
                {featureId}
                {!expanded && <button type="button" className="btn btn-dark btn-sm" onClick={this.expand} >+</button>}
                {expanded && <button type="button" className="btn btn-dark btn-sm" onClick={this.expand} >-</button>}
                {expanded && 
                    <div className="ps-4">
                        <textarea className="form-control" id={"json-" + featureId} rows="5">{feature}</textarea>
                    </div>
                }
            </div>
        )
    }

}

export default Items