export interface Image {
  file_path: string;
}

export interface ImagesResponse {
  id: string;
  backdrops: Array<Image>;
}