import { createSelector } from 'reselect';

export const getUser = state => state.user;

export const isUser = createSelector(getUser, user => !!user?.data?.id);

export const getUserData = createSelector(getUser, user => user.data);
