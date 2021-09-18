import {
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
	SIGNOUT_SUCCESS,
} from "../config/type";

const initState = {
	user: null
};

const auth = (state = initState, action) => {
	switch (action.type) {
		case "toggleAuth":
			return {
				...state,
				user: action.payload,
			};

		default:
			return state;
	}
};

export default auth;
