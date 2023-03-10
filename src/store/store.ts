import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './modals/reducer';

export const setupStore = () => {
	return configureStore({
		reducer: {
			modals: modalSlice.reducer,
		}
	});
}
export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];