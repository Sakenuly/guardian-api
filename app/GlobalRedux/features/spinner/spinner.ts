import { createSlice } from '@reduxjs/toolkit';

interface ISpinnerAction {
	payload: boolean;
}

const spinnerSlice = createSlice({
	name: 'spinnerSLice',
	initialState: false,
	reducers: {
		spinnerIsActive: (_state, { payload }: ISpinnerAction) => payload,
	},
});

const { spinnerIsActive } = spinnerSlice.actions;

export { spinnerSlice, spinnerIsActive };
