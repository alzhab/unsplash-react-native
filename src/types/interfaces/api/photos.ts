export interface IPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  urls: IUrls;
  links: Links;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface IUrls {
  raw: Urls.raw;
  full: Urls.full;
  regular: Urls.regular;
  small: Urls.small;
  thumb: Urls.thumb;
}

export enum Urls {
  raw = 'raw',
  full = 'full',
  regular = 'regular',
  small = 'small',
  thumb = 'thumb',
}
