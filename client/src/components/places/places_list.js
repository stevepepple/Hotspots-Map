import React, { Component } from 'react'
import _ from 'lodash'

import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { store } from '../../redux/store'

import { Container, Dimmer, Form, Input, Item, Loader, Segment, Dropdown } from 'semantic-ui-react'
import { Global, css } from '@emotion/core'

import helpers from '../../helpers.js'

import ListItem from './list_item.js'
import * as Constants from '../../constants.js'
import TimeAndTemp from '../weather/timeAndTemp'

import { Translation, Trans } from 'react-i18next'

class PlacesList extends Component {

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)

        this.state = {
            place_type_options: [
                { key: 'both', value: 'both', text: 'Everything' },
                { key: 'places', value: 'places', text: 'Places' },
                { key: 'events', value: 'events', text: 'Events' }
            ]
        }
    }    

    onChange = (e, { value }) => {
        this.props.setSearchTerm(value)
    }

    handlePlaceType = (e, { value }) => {
        this.props.setPlaceType(value)
    }

    handleActivityChange = (event, { value }) => {
        this.setState({ current_activity: value })
        this.props.setActivity(value)
    }

    onClick = (event, id, type) => {        
        this.props.setDetailsId(id)
        this.props.setDetailsType(type)
        this.props.setDetailsShown(true)
    }

    render() {
        let has_items = this.props.data.length > 0;
        let top_item = null;
        let items = null;

        let searchTerm = this.props.searchTerm

        // i18n Translations        
        const activity_placeholder = <Translation>{
            (t, { i18n }) => t('Pick Activity')
        }</Translation>

        const place_type_text = <Translation>{
            (t, { i18n }) => t(this.props.placeType)
        }</Translation>

        const filters_text = <Translation>{
            (t, { i18n }) => t('Filters')
        }</Translation>
        
        if (has_items) {
            // TODO: @cory, sorting should happen on the server. 
            // And we should be able to sort by distance, relevance, tc. 
            let sorted = this.props.data.sort((a, b) => (a.properties.score > b.properties.score) ? -1 : 1)
            items = sorted.map((place) => {                
                return <ListItem key={place.id} id={place.id} type={place.properties.place_type} link={place.properties.url} onClick={this.onClick} properties={place.properties} />
            })
        }

        return (
            <Segment>
                <Global
                    styles={{
                        '.listType' : {
                            marginLeft: '2% !important',
                            width: '98%'
                        },
                        '.ui.inverted.purple .button': {
                            color: Constants.PURPLE + '!important',
                        },
                        '.ui.inverted.purple.buttons .active.button': {
                            backgroundColor: Constants.PURPLE + '!important',
                            color: '#FFFFFF !important'
                        }
                    }}
                />            

                <TimeAndTemp />                
                
                <Segment vertical>
                    <Form>
                        <Form.Field widths='equal'>
                            <Translation>{
                                (t, { i18n }) => <Input
                                        fluid
                                        placeholder={t('Search')}
                                        icon='search'
                                        iconPosition='left'
                                        onChange={_.debounce(this.onChange, 500, {
                                            leading: true,
                                        })}
                                        value={searchTerm} />                                
                            }</Translation>
                            
                        </Form.Field>
                        <Form.Field widths='equal'>
                            <Dropdown
                                search
                                placeholder={activity_placeholder}
                                selection
                                onChange={this.handleActivityChange}
                                options={Constants.activty_categories}
                                value={this.props.activity}
                            />
                        </Form.Field>
                        <Form.Group widths='equal'>                            
                            <Dropdown                                
                                icon='map pin'
                                labeled
                                fluid
                                button
                                compact
                                className='icon small'
                                onChange={this.handlePlaceType}
                                options={this.state.place_type_options}
                                text={place_type_text}
                                value={this.props.placeType}
                            >
                                <Dropdown.Menu>
                                    {this.state.place_type_options.map((option) => (
                                        <Translation>{
                                                (t, { i18n }) => <Dropdown.Item key={option.value} text={t(option.text)} value={option.value} />
                                        }</Translation>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown
                                text={filters_text}
                                icon='filter'
                                fluid
                                labeled
                                button
                                compact
                                className='icon small'
                            />
                        </Form.Group>
                    </Form>
                </Segment>
                
                
                {has_items? (
                    <Item.Group divided relaxed className='events_list'>
                        {items}
                    </Item.Group>
                ) : (
                    <Segment placeholder>
                        <Dimmer active inverted><Loader inverted><h3>Have you ever stopped to smell the roses near Grand Avenue?</h3></Loader></Dimmer>
                    </Segment>
                )}
                     
                
            </Segment>
        );
    }
}

const mapStateToProps = state => {
    return {
        activity: state.activity,
        searchTerm: state.searchTerm,
        detailsId: state.detailsId,
        detailsType: state.detailsType,
        detailsShown: state.detailsShown,
        placeType: state.placeType
    }
}

export default connect(mapStateToProps, actions)(PlacesList)