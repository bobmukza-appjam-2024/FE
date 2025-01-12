export interface Schedule {
  date: string; // YYYY-MM-00 HH-MM-SS
  mealTime: string; // "아침" | "점심" | "저녁"
  location: string;
  content: string; // 본문 내용
  menuName: string;
}
