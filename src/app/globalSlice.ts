import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Payload } from 'types';

interface GlobalState {
  loading: boolean;
}

const initialState: GlobalState = {
  loading: true
};

const { actions, reducer } = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState(state, { payload }: PayloadAction<Payload>) {

    }
  }
});

export const { setGlobalState } = actions;
export default reducer;

