export class StudentDataModel {
  _id: string;
  displayName: string;
  avatar: string;
  parentId: string;
  learningPathId: string;
  progress: [{words: [{
      wordId: String,
      preMastery: Object, // dates of success
      mastery: Object, // dates of mastery
      hasMastered: Boolean  // based on rules of mastery
    }]
  }];
}

export const studentAvatars = [
  {value: 'kid1.png', image: 'kid1.png'},
  {value: 'kid2.png', image: 'kid2.png'},
  {value: 'kid3.png', image: 'kid3.png'},
  {value: 'kid4.png', image: 'kid4.png'}
];
