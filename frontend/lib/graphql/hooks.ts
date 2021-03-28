import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  getAllPermissions: Array<Scalars['String']>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  person?: Maybe<Person>;
  personCollection?: Maybe<PersonCollection>;
  report?: Maybe<FeedbackBase>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};

export type QueryBlogPostArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogPostFilter>;
  order?: Maybe<Array<Maybe<BlogPostOrder>>>;
};

export type QueryPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageFilter>;
  order?: Maybe<Array<Maybe<PageOrder>>>;
};

export type QueryPersonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type QueryPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PersonFilter>;
  order?: Maybe<Array<Maybe<PersonOrder>>>;
};

export type QueryReportArgs = {
  reportUid: Scalars['String'];
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  personCollection?: Maybe<PersonCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsPersonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type PersonCollection = {
  __typename?: 'PersonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Person>>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type Person = Entry & {
  __typename?: 'Person';
  sys: Sys;
  linkedFrom?: Maybe<PersonLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  shortBio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonNameArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonCompanyArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonShortBioArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonEmailArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonPhoneArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonFacebookArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonTwitterArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonGithubArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/person) */
export type PersonImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PersonLinkingCollections = {
  __typename?: 'PersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type PersonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type BlogPostCollection = {
  __typename?: 'BlogPostCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<BlogPost>>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: 'BlogPost';
  sys: Sys;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  description?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  author?: Maybe<Entry>;
  publishDate?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostBodyArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostAuthorArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostPublishDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/blogPost) */
export type BlogPostTagsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type BlogPostLinkingCollections = {
  __typename?: 'BlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

/** Standalone pages like privacy policy, etc. [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  sys: Sys;
  linkedFrom?: Maybe<PageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

/** Standalone pages like privacy policy, etc. [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Standalone pages like privacy policy, etc. [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/page) */
export type PageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** Standalone pages like privacy policy, etc. [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/page) */
export type PageUidArgs = {
  locale?: Maybe<Scalars['String']>;
};

/** Standalone pages like privacy policy, etc. [See type definition](https://app.contentful.com/spaces/uadfovbjsxa2/content_types/page) */
export type PageContentArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type PageFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  uid_exists?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
  uid_not?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_contains?: Maybe<Scalars['String']>;
  uid_not_contains?: Maybe<Scalars['String']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<PageFilter>>>;
  AND?: Maybe<Array<Maybe<PageFilter>>>;
};

export enum PageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type PageCollection = {
  __typename?: 'PageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Page>>;
};

export type PersonFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  company_exists?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['String']>;
  company_not?: Maybe<Scalars['String']>;
  company_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  company_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  company_contains?: Maybe<Scalars['String']>;
  company_not_contains?: Maybe<Scalars['String']>;
  shortBio_exists?: Maybe<Scalars['Boolean']>;
  shortBio?: Maybe<Scalars['String']>;
  shortBio_not?: Maybe<Scalars['String']>;
  shortBio_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortBio_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortBio_contains?: Maybe<Scalars['String']>;
  shortBio_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  phone_exists?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  facebook?: Maybe<Scalars['String']>;
  facebook_not?: Maybe<Scalars['String']>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_contains?: Maybe<Scalars['String']>;
  facebook_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  github_exists?: Maybe<Scalars['Boolean']>;
  github?: Maybe<Scalars['String']>;
  github_not?: Maybe<Scalars['String']>;
  github_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  github_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  github_contains?: Maybe<Scalars['String']>;
  github_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PersonFilter>>>;
  AND?: Maybe<Array<Maybe<PersonFilter>>>;
};

export enum PersonOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type BlogPostFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  body_exists?: Maybe<Scalars['Boolean']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  author_exists?: Maybe<Scalars['Boolean']>;
  publishDate_exists?: Maybe<Scalars['Boolean']>;
  publishDate?: Maybe<Scalars['DateTime']>;
  publishDate_not?: Maybe<Scalars['DateTime']>;
  publishDate_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishDate_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishDate_gt?: Maybe<Scalars['DateTime']>;
  publishDate_gte?: Maybe<Scalars['DateTime']>;
  publishDate_lt?: Maybe<Scalars['DateTime']>;
  publishDate_lte?: Maybe<Scalars['DateTime']>;
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<BlogPostFilter>>>;
  AND?: Maybe<Array<Maybe<BlogPostFilter>>>;
};

export enum BlogPostOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GenerateLink = {
  email: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type SaveFeedback = {
  feedbackUid: Scalars['String'];
  rating: Scalars['Int'];
  items: Array<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type FeedbackResponse = {
  __typename?: 'FeedbackResponse';
  id: Scalars['String'];
  rating: Scalars['Int'];
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  comment?: Maybe<Scalars['String']>;
  feedbackBase?: Maybe<FeedbackBase>;
  feedbackBaseId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FeedbackBase = {
  __typename?: 'FeedbackBase';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  feedbackUid: Scalars['String'];
  reportUid: Scalars['String'];
  feedbackLink: Scalars['String'];
  reportLink: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  feedbackResponses: Array<FeedbackResponse>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  forgotPassword?: Maybe<AuthResult>;
  generateLink?: Maybe<Response>;
  login?: Maybe<AuthResult>;
  register?: Maybe<AuthResult>;
  resetPassword?: Maybe<AuthResult>;
  saveFeedback?: Maybe<Response>;
  updateUser?: Maybe<User>;
  validateSocialLogin?: Maybe<AuthResult>;
};

export type MutationCreateUserArgs = {
  user: UserInput;
};

export type MutationForgotPasswordArgs = {
  credentials: EmailInput;
};

export type MutationGenerateLinkArgs = {
  data: GenerateLink;
};

export type MutationLoginArgs = {
  credentials: CredentialsInput;
};

export type MutationRegisterArgs = {
  user: UserInput;
};

export type MutationResetPasswordArgs = {
  credentials: NewPasswordInput;
};

export type MutationSaveFeedbackArgs = {
  data: SaveFeedback;
};

export type MutationUpdateUserArgs = {
  user: AdminUserInput;
};

export type MutationValidateSocialLoginArgs = {
  credentials: SocialLoginInput;
};

export type UserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type AdminUserInput = {
  id: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['String']>>;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type NewPasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export enum AuthServices {
  Google = 'GOOGLE',
}

export type SocialLoginInput = {
  service: AuthServices;
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthResult = {
  __typename?: 'AuthResult';
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type GetReportQueryVariables = Exact<{
  reportUid: Scalars['String'];
}>;

export type GetReportQuery = { __typename?: 'Query' } & {
  report?: Maybe<
    { __typename?: 'FeedbackBase' } & Pick<
      FeedbackBase,
      'id' | 'title' | 'feedbackLink' | 'createdAt' | 'updatedAt'
    > & {
        feedbackResponses: Array<
          { __typename?: 'FeedbackResponse' } & Pick<
            FeedbackResponse,
            'id' | 'rating' | 'items' | 'comment'
          >
        >;
      }
  >;
};

export type GenerateLinkMutationVariables = Exact<{
  data: GenerateLink;
}>;

export type GenerateLinkMutation = { __typename?: 'Mutation' } & {
  generateLink?: Maybe<
    { __typename?: 'Response' } & Pick<Response, 'success' | 'message'>
  >;
};

export type SaveFeedbackMutationVariables = Exact<{
  data: SaveFeedback;
}>;

export type SaveFeedbackMutation = { __typename?: 'Mutation' } & {
  saveFeedback?: Maybe<
    { __typename?: 'Response' } & Pick<Response, 'success' | 'message'>
  >;
};

export type BlogPostBySlugQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;

export type BlogPostBySlugQuery = { __typename?: 'Query' } & {
  blogPostCollection?: Maybe<
    { __typename?: 'BlogPostCollection' } & {
      items: Array<
        Maybe<
          { __typename?: 'BlogPost' } & Pick<
            BlogPost,
            'title' | 'body' | 'description' | 'publishDate' | 'tags'
          >
        >
      >;
    }
  >;
};

export type PrivacyPageQueryVariables = Exact<{ [key: string]: never }>;

export type PrivacyPageQuery = { __typename?: 'Query' } & {
  pageCollection?: Maybe<
    { __typename?: 'PageCollection' } & {
      items: Array<Maybe<{ __typename?: 'Page' } & Pick<Page, 'content'>>>;
    }
  >;
};

export const GetReportDocument = gql`
  query getReport($reportUid: String!) {
    report(reportUid: $reportUid) {
      id
      title
      feedbackLink
      createdAt
      updatedAt
      feedbackResponses {
        id
        rating
        items
        comment
      }
    }
  }
`;

/**
 * __useGetReportQuery__
 *
 * To run a query within a React component, call `useGetReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportQuery({
 *   variables: {
 *      reportUid: // value for 'reportUid'
 *   },
 * });
 */
export function useGetReportQuery(
  baseOptions: Apollo.QueryHookOptions<GetReportQuery, GetReportQueryVariables>,
) {
  return Apollo.useQuery<GetReportQuery, GetReportQueryVariables>(
    GetReportDocument,
    baseOptions,
  );
}
export function useGetReportLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetReportQuery, GetReportQueryVariables>,
) {
  return Apollo.useLazyQuery<GetReportQuery, GetReportQueryVariables>(
    GetReportDocument,
    baseOptions,
  );
}
export type GetReportQueryHookResult = ReturnType<typeof useGetReportQuery>;
export type GetReportLazyQueryHookResult = ReturnType<typeof useGetReportLazyQuery>;
export type GetReportQueryResult = Apollo.QueryResult<
  GetReportQuery,
  GetReportQueryVariables
>;
export const GenerateLinkDocument = gql`
  mutation generateLink($data: GenerateLink!) {
    generateLink(data: $data) {
      success
      message
    }
  }
`;
export type GenerateLinkMutationFn = Apollo.MutationFunction<
  GenerateLinkMutation,
  GenerateLinkMutationVariables
>;

/**
 * __useGenerateLinkMutation__
 *
 * To run a mutation, you first call `useGenerateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateLinkMutation, { data, loading, error }] = useGenerateLinkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGenerateLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateLinkMutation,
    GenerateLinkMutationVariables
  >,
) {
  return Apollo.useMutation<GenerateLinkMutation, GenerateLinkMutationVariables>(
    GenerateLinkDocument,
    baseOptions,
  );
}
export type GenerateLinkMutationHookResult = ReturnType<typeof useGenerateLinkMutation>;
export type GenerateLinkMutationResult = Apollo.MutationResult<GenerateLinkMutation>;
export type GenerateLinkMutationOptions = Apollo.BaseMutationOptions<
  GenerateLinkMutation,
  GenerateLinkMutationVariables
>;
export const SaveFeedbackDocument = gql`
  mutation saveFeedback($data: SaveFeedback!) {
    saveFeedback(data: $data) {
      success
      message
    }
  }
`;
export type SaveFeedbackMutationFn = Apollo.MutationFunction<
  SaveFeedbackMutation,
  SaveFeedbackMutationVariables
>;

/**
 * __useSaveFeedbackMutation__
 *
 * To run a mutation, you first call `useSaveFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFeedbackMutation, { data, loading, error }] = useSaveFeedbackMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveFeedbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SaveFeedbackMutation,
    SaveFeedbackMutationVariables
  >,
) {
  return Apollo.useMutation<SaveFeedbackMutation, SaveFeedbackMutationVariables>(
    SaveFeedbackDocument,
    baseOptions,
  );
}
export type SaveFeedbackMutationHookResult = ReturnType<typeof useSaveFeedbackMutation>;
export type SaveFeedbackMutationResult = Apollo.MutationResult<SaveFeedbackMutation>;
export type SaveFeedbackMutationOptions = Apollo.BaseMutationOptions<
  SaveFeedbackMutation,
  SaveFeedbackMutationVariables
>;
export const BlogPostBySlugDocument = gql`
  query blogPostBySlug($slug: String) {
    blogPostCollection(where: { slug: $slug }) {
      items {
        title
        body
        description
        publishDate
        tags
      }
    }
  }
`;

/**
 * __useBlogPostBySlugQuery__
 *
 * To run a query within a React component, call `useBlogPostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogPostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogPostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogPostBySlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >,
) {
  return Apollo.useQuery<BlogPostBySlugQuery, BlogPostBySlugQueryVariables>(
    BlogPostBySlugDocument,
    baseOptions,
  );
}
export function useBlogPostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlogPostBySlugQuery,
    BlogPostBySlugQueryVariables
  >,
) {
  return Apollo.useLazyQuery<BlogPostBySlugQuery, BlogPostBySlugQueryVariables>(
    BlogPostBySlugDocument,
    baseOptions,
  );
}
export type BlogPostBySlugQueryHookResult = ReturnType<typeof useBlogPostBySlugQuery>;
export type BlogPostBySlugLazyQueryHookResult = ReturnType<
  typeof useBlogPostBySlugLazyQuery
>;
export type BlogPostBySlugQueryResult = Apollo.QueryResult<
  BlogPostBySlugQuery,
  BlogPostBySlugQueryVariables
>;
export const PrivacyPageDocument = gql`
  query privacyPage {
    pageCollection(where: { uid: "privacy" }) {
      items {
        content
      }
    }
  }
`;

/**
 * __usePrivacyPageQuery__
 *
 * To run a query within a React component, call `usePrivacyPageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrivacyPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrivacyPageQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrivacyPageQuery(
  baseOptions?: Apollo.QueryHookOptions<PrivacyPageQuery, PrivacyPageQueryVariables>,
) {
  return Apollo.useQuery<PrivacyPageQuery, PrivacyPageQueryVariables>(
    PrivacyPageDocument,
    baseOptions,
  );
}
export function usePrivacyPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PrivacyPageQuery, PrivacyPageQueryVariables>,
) {
  return Apollo.useLazyQuery<PrivacyPageQuery, PrivacyPageQueryVariables>(
    PrivacyPageDocument,
    baseOptions,
  );
}
export type PrivacyPageQueryHookResult = ReturnType<typeof usePrivacyPageQuery>;
export type PrivacyPageLazyQueryHookResult = ReturnType<typeof usePrivacyPageLazyQuery>;
export type PrivacyPageQueryResult = Apollo.QueryResult<
  PrivacyPageQuery,
  PrivacyPageQueryVariables
>;
