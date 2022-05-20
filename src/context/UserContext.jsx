import createDataContext from "./createDataContext";

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER': {
            return { ...state, user: action.payload };
        }
        default:
            return state;
    }
};

const setUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

const setCurrentUserFromFirebase = (dispatch) => {
    return (user) => {
        dispatch(setUser(user));
    };
};

export const { Context, Provider } = createDataContext(
    userReducer,
    {
        setCurrentUserFromFirebase,
    },
    {
        user: null,
    }
);