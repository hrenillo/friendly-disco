export function oneView() {
    const action = {
        type: 'USER_VIEW',
    };
    return action;
}

export function oneRemove() {
    const action = {
        type: 'USER_REMOVE',
    };
    return action;
}

export function oneAdd(trollPoints) {
    const action = {
        type: 'USER_ADD',
        trollPoints: trollPoints
    };
    return action;
}

export function allView() {
    const action = {
        type: 'USERS_VIEW',
    };
    return action;
}

export function allReset() {
    const action = {
        type: 'USERS_RESET',
        trollPoints: []
    };
    return action;
}
