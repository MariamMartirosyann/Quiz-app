import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface NameState {
  name: string;
}

const initialState: NameState = {
  name: " ",
};

export const nameSlice = createSlice({
  name: 'nameInfo',
  initialState,
  reducers: {
    addName: (state,action: PayloadAction<string>) => {
      state.name = action.payload;
    },  
  },
}
)

export const { addName } = nameSlice.actions;

export default nameSlice.reducer;

