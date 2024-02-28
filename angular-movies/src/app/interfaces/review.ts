export interface Review {
  content: string;
  author: string;
}

export interface ReviewResponse {
  id: string;
  results: Array<Review>;
}