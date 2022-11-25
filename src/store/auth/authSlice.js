import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	accessToken: JSON.parse(localStorage.getItem('accessToken') || '{}'),
	displayName: 'Guest',
	email: '',
	uid: '',
};

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.accessToken = action.payload.accessToken;
			state.displayName = action.payload.displayName;
			state.email = action.payload.email;
			state.uid = action.payload.id;
			localStorage.setItem('accessToken', JSON.stringify(state.accessToken));
		},
		logout: (state) => {
			localStorage.removeItem('accessToken');
			state = initialState;
		},
	},
});

export const { login, logout } = auth.actions;
export default auth.reducer;
