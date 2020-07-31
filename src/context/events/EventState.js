import React, { useReducer } from 'react'
import EventContext from './eventContext'
import EventReducer from './eventReducer'
import { ADD_EVENT } from '../types'

const EventState = (props) => {

    const initalState = {
        loading: true,
        events: []
    }

    const [state, dispatch] = useReducer(EventReducer, initalState);

    const addEvent = formData => {
        console.log(formData);
    }

    return (
        <EventContext.Provider value={{
            loading: state.loading,
            events: state.events,
            addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventState
