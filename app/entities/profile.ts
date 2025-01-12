export interface Profile {
  nickname: string;
  birthDate: string;
  introduction: string;
  favoriteMenus: string[];
  mealHistory: [
    {
      date: string;
      content: string;
      menuName: string;
    }
  ];
}
