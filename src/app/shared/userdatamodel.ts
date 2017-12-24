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

export const allAvatars = [
  {value: 'adult1.png', image: 'adult1.png'},
  {value: 'adult2.png', image: 'adult2.png'},
  {value: 'adult3.png', image: 'adult3.png'},
  {value: 'adult4.png', image: 'adult4.png'},
  {value: 'kid1.png', image: 'kid1.png'},
  {value: 'kid2.png', image: 'kid2.png'},
  {value: 'kid3.png', image: 'kid3.png'},
  {value: 'kid4.png', image: 'kid4.png'},
];

export const adultAvatars = [
  {value: 'adult1.png', image: 'adult1.png'},
  {value: 'adult2.png', image: 'adult2.png'},
  {value: 'adult3.png', image: 'adult3.png'},
  {value: 'adult4.png', image: 'adult4.png'}
];

export const kidAvatars = [
  {value: 'kid1.png', image: 'kid1.png'},
  {value: 'kid2.png', image: 'kid2.png'},
  {value: 'kid3.png', image: 'kid3.png'},
  {value: 'kid4.png', image: 'kid4.png'}
];
