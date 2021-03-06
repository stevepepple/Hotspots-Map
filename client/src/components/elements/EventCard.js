import React, { Fragment } from 'react'

import { Item, Icon, Label } from 'semantic-ui-react'

import moment from 'moment'

function cardPLaceLayout(props) {

    let content = props.properties

    let name = content.name
    let date = content.start_date
    let score = Math.round(content.average_score)

    /* TODO: THis can be removed? 
    let categories = null

    if (typeof (content.categories) == 'object') {
        categories = content.categories.map((category) => <span class={category}>Category</span>)
    } else {
        categories = content.categories
    } 
    */

    // TODO: Move to server side; or atleast to VibeMap module
    if (name) {
        name = name.split(' | ')
        name = name[0]
    }

    let venue = null
    if (content.venue) venue = <span className='venue'>{content.venue}</span>

    let vibes = null;
    
    if (typeof content.vibes !== "undefined") {
        let remainder = content.vibes.length - 1
        vibes = null

        if (remainder > 0) {
            vibes = <Label key={content.vibes[0]} className={'vibe label ' + content.vibes[0]}>{content.vibes[0] + ' & ' + remainder + ' more'}</Label>
        }

        if (remainder === 0) {
            vibes = <Label key={content.vibes[0]} className={'vibe label ' + content.vibes[0]}>{content.vibes[0]}</Label>
        }

        // vibes = content.vibes.map((vibe) => <Label key={vibe} className={'vibe label ' + vibe}>{vibe}</Label>);
    }

    return (
        <Fragment>
            <Item.Image src={content.images[0]} size='small' />
            <Item.Content>
                <Item.Extra className='date'>{moment(date).format('h:mm a')} {moment(date).format('dddd')}</Item.Extra>
                <Item.Header>{name}</Item.Header>
                <Item.Extra>
                    <div>
                        {vibes}
                    </div>
                    {venue}
                    <span className='interested'>
                        <Icon name='user' />
                        {score} VibeMap Score
                        </span>
                </Item.Extra>
            </Item.Content>
        </Fragment>    
    );
}

export default cardPLaceLayout