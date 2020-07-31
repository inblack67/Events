import React, { useContext, useEffect, Fragment } from 'react'
import EventContext from '../context/events/eventContext'

const Home = ({ history }) => {

    const eventContext = useContext(EventContext);

    const { events } = eventContext;

    useEffect(() => {

        let mounted = true;

        if (mounted) {

        }

        return () => {
            mounted = false;
        }

        // eslint-disable-next-line
    }, [])

    const onClick = e => {
        history.push('/add-event');
    }

    return (
        <div>
            { events.length === 0 && <Fragment>
                <p className="flow-text">No Events, Yet.</p>
            </Fragment> }
            <button className="btn red" onClick={onClick}>Add Event</button>
        </div>
    )
}

export default Home
