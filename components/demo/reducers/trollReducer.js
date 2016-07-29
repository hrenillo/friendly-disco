const initialState = {
    trollPoints: []
}

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
    case 'USER_VIEW': {
        return Object.assign({}, state, {

        })
    }
    case 'USER_REMOVE': {
        return Object.assign({}, state, {

        })
    }
    case 'USER_ADD': {
        const { trollPoints } = action
        return Object.assign({}, state, {
            trollPoints
        })
    }
    case 'USERS_VIEW': {
        return Object.assign({}, state, {

        })
    }
    case 'USERS_RESET': {
        const { trollPoints } = action
        return Object.assign({}, state, {
            trollPoints
        })
    }
    default: {
        return state;
    }
    }
}
