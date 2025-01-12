export interface Post {
  posts: [
    {
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
  ];
  totalPages: number;
  currentPage: number;
}
