export class UserDataModel {
  _id: string;
  username: string;
  email: string;
  password: string;
  displayName: string;
  avatar: string;
  isTutor: boolean;
  isAdmin: boolean;
  parentId: string;
  setsPurchased: object;
}

export const setsPurchasedOptions = [
  {value: [], label: 'none'},
  {value: [1], label: 'Set 1'},
  {value: [2], label: 'Set 2'},
  {value: [3], label: 'Set 3'},
  {value: [1, 2], label: 'Sets 1 & 2'},
  {value: [1, 3], label: 'Sets 1 & 3'},
  {value: [1, 2, 3], label: 'Sets 1, 2 & 3'},
  {value: [2, 3], label: 'Sets 2 & 3'}
];

