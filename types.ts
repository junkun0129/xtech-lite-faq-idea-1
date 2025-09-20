
export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
  imageUrl?: string;
  isDraft?: boolean;
}

export interface Answer {
  id: number;
  author: RankedUser;
  content: string;
  isBestAnswer: boolean;
}

export interface Question {
  id: number;
  title: string;
  content: string;
  tags: string[];
  answers: Answer[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface RankedUser {
  id: string;
  name: string;
  avatar: string;
  tags: string[];
  answers: number;
  solved: number;
  bestAnswers: number;
  badges: Badge[];
}

export interface MapQuestion extends Question {
  position: {
    x: number;
    y: number;
  };
}

export interface CategoryRegion {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    borderColor: string;
}