export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContentSanityProps = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type PoetryProps = {
  _id: string;
  _type: "poetry";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  date?: string;
  category?: string;
  content?: BlockContentSanityProps;
};

export type WritingProps = {
  _id: string;
  _type: "writing";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  date?: string;
  readMinutes?: string;
  url?: string;
  imgSrc?: string;
};

export type WorksProps = {
  _id: string;
  _type: "works";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  imgSrc?: string;
  year?: string;
  name?: string;
  desc?: string;
  categories?: Array<string>;
  url?: string;
};

export type ThingProps = {
  _id: string;
  _type: "thing";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  imgSrc?: string;
  category?: string;
};

export type SocialProps = {
  _id: string;
  _type: "social";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  socials?: SocialArrayType[];
};

export type SocialArrayType = {
  name?: string;
  imgSrc?: string;
  link?: string;
  href?: string;
  _type: "socialLink";
  _key: string;
};

export type MomentProps = {
  _id: string;
  _type: "moment";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  imgSrc?: string;
};

export type ArchiveProps = {
  _id: string;
  _type: "archive";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  imgSrc?: string;
  url?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Slug
  | BlockContentSanityProps
  | PoetryProps
  | WritingProps
  | WorksProps
  | ThingProps
  | SocialProps
  | MomentProps
  | ArchiveProps
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
