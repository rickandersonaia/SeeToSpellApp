export class WordDataModel {
  name: string;
  image: string;
  sentence: string;
  audio: string;
  cardset: number;
  isfree: boolean;
}

export const cardSetOptions = [
  {value: 1, label: 'Set 1'},
  {value: 2, label: 'Set 2'},
  {value: 3, label: 'Set 3'}
  ];
