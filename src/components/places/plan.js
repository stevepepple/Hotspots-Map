import React from 'react'
import { withTranslation } from 'react-i18next';

import { Button, Icon, Label, Placeholder, Segment } from 'semantic-ui-react'

import SocialLinks from '../elements/SocialLinks'

const Plan = (props) => {

    const { t } = props
    let { categories, hours, address, instagram, open_now, popular_now, twitter, url } = props.currentItem

    if (props.currentItem.categories.length > 0) {
        categories = props.currentItem.categories.map((category) => <Label key={category} className={'image label ' + category}>{category}</Label>);
    }

    let openNow = null


    if (open_now) openNow = <span className='openNow'>Open now</span>
    if (popular_now) openNow = <span className='popularNow'>Vibe'n now</span>

    return <section id='plan' name='plan' >
        {
            props.loading ? (
                <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>
            ) : (
                    <div>
                        <Segment vertical>
                            <h4>{t('Hours')}</h4>
                            { openNow }
                            <br/>
                            {hours ? hours : t('No hours')}
                        </Segment>
                        <Segment vertical>
                            <h4>{t('Location')}</h4>
                            {address ? address : t('No location')}
                        </Segment>
                        <Segment vertical>
                            <h4>{t('Web & Social')}</h4>
                            <SocialLinks 
                                link={url}
                                instagram={instagram}
                                twitter={twitter} />
                            
                        </Segment>
                    </div>
                )
        }
    </section>
}

export default withTranslation()(Plan)