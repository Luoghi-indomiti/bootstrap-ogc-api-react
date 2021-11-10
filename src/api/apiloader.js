import React, {Component} from "react";
import axios from "axios";

class ApiLoader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: '',
            conforms: 0
        }
    }

    checkUrl = (e) => {
        // Updates the state of the component onChange
        this.setState({
            url : e.target.value,
            conforms: 0
        })

        // Conformances to verify
        const features_core = 'http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core'
        const features_geojson = 'http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson'

        // Checks after the URL has a minimal length
        if(e.target.value.length > 9) {
            console.log('Checking ' + e.target.value + '/conformance?f=json with a timeout of 5 seconds')
            // HTTP get with axios
            axios.get(e.target.value + '/conformance?f=json', {timeout: 5000})
                .then(response => {
                    if(response.data && response.data.conformsTo) {
                        // Checks conformance
                        if(response.data.conformsTo.includes(features_core) 
                            && response.data.conformsTo.includes(features_geojson)) {
                            // Valid OGC API
                            this.setState({
                                conforms: 1
                            })
                        } else {
                            // Missing required conformance
                            this.setState({
                                conforms: -2
                            })
                        }
                    } else {
                        // Not valid OGC API
                        this.setState({
                            conforms: -1
                        })
                    }
                })
                .catch(error => {
                        // Not valid URL
                        this.setState({
                            conforms: -1
                        })
                })
        }
    }

    render() {
        const{url,conforms} = this.state
        return(
            <div>
                <label>API url </label>
                <input type='text' name='url' value={url} onChange={this.checkUrl}></input>
                {
                    conforms > 0 && 
                    <div>
                        <h2>It looks good!</h2>
                    </div>
                }
                {
                    conforms < 0 && 
                    <div>
                        <h2>Not valid</h2>
                    </div>
                }
                {
                    conforms === -1 && 
                    <div>
                        <h3>It doesn't seem an OGC Open API</h3>
                    </div>
                }
                {
                    conforms === -2 && 
                    <div>
                        <h3>Missing required conformance</h3>
                    </div>
                }
            </div>
            )
    }
}

export default ApiLoader