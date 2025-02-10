export interface PostType {
  id: number;
  title: string;
  mealTime: string;
  location: string;
  menuName: string;
  author: {
    nickname: string;
    age: number;
  };
  createdAt: string;
}
