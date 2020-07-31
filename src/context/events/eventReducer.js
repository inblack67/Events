import { ADD_EVENT } from '../types'

export default (state, action) => {

    const { payload, type } = action;

    switch (type) {

        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }

        default:
            return state;
    }
}