export type Member = {
  name: string;
  role: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  info : string;
  genre: string;
   image: string;
  members: Member[];
};