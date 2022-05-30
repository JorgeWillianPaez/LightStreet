const users = [];

const accountsReducer = (state = users, action) => {
    switch (action.type) {
        case "ADD_EMAIL":
            const { email } = action;
            return users.push(email);
        default:
            return state;
    }
}

export default accountsReducer;