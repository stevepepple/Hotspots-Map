import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

import { Translation } from "react-i18next";

import { Label, Placeholder } from 'semantic-ui-react'


class TopVibes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'Current Vibe:',
            vibes: [],
            colors: {
                chill: 'olive',
                cozy: 'orange',
                local: 'teal',
                popular: 'purple',
            }
        }
    }

    componentWillReceiveProps(nextProps) {

        
        //this.setState({ vibes: top })

    }

    handleClick = (e, vibe) => {        
        let combinedVibes = []

        combinedVibes.concat(this.props.currentVibes)
        
        // Only add vibes that haven't been added.
        if (combinedVibes.indexOf(vibe) < 0) combinedVibes.push(vibe)

        this.props.setCurrentVibes(combinedVibes)
    }

    render() {   
        
        const style = {
            //padding: '1em',
            //paddingTop: '0.2em',
            cursor: 'pointer',
            fontSize: '1.1em',
            margin: '1em',
            positiion: 'fixed',
            zIndex: 200
        }        

        let top_vibes = this.props.topVibes.slice(1, 4)
        top_vibes.map((vibe) => vibe)
        
        let vibes = top_vibes.map((vibe) => 
            <Label 
                key={vibe[0]} onClick={((e) => this.handleClick(e, vibe[0]))} /*color={this.state.colors[vibe[0]]}*/ title={'clickToAdd'} className={'vibe tiny label ' + vibe[0]}>{vibe[0]}<Label.Detail>{vibe[1]}</Label.Detail></Label>)

        return (
            <div id='topVibes' style={style}>
                        
                <Translation>
                    {(t, { i18n }) => <p>{t("Trending Vibes")}</p>}
                </Translation>            
                
                { /* Show loading if vibes aren't there*/
                top_vibes.length > 0 ? (
                    vibes
                ) : (                    
                    <Placeholder style={{ display: 'inline', float: 'right', width: '8em' }} ><Placeholder.Line length='short' /></Placeholder>
                )}            
                
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    //console.log('store to weather: ', state)
    return {
        location: state.currentLocation,
        currentVibes: state.currentVibes,
        topVibes: state.topVibes
    }
}

export default connect(mapStateToProps, actions)(TopVibes);