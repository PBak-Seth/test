import { createSlice } from '@reduxjs/toolkit';

import { usersApi } from '../../api/users';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    deleteUser: (state, { payload }) => {
      state.users.splice(
        state.users.findIndex((user) => user.id === payload),
        1
      );
    },
    editUser: (state, { payload }) => {
      const { id, ...restProps } = payload;
      state.users = state.users.map((user) =>
        user.id === id ? { ...user, ...restProps } : user
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        state.users = payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, editUser, setUsers } = usersSlice.actions;

export default usersSlice.reducer;
