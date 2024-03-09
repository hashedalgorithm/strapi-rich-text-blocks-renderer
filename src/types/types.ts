export type TBlockNodes = "heading" | "paragraph" | "list" | "quote" | "image";

export type TImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
};
export type TImage = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  caption: string;
  formats: TImageFormats;
  provider: string;
  createdAt: string;
  updatedAt: string;
  previewUrl: null | string;
  alternativeText: string;
  provider_metadata: null | any;
};
export type TImageFormats = {
  large?: TImageFormat;
  small?: TImageFormat;
  medium?: TImageFormat;
  thumbnail?: TImageFormat;
};

export type TImageBlock = {
  type: "image";
  image: TImage;
  children: TTextNode[];
};

export type TParagraphBlock = {
  type: "paragraph";
  children: TChildrenNodes;
};
export type THeadingBlock = {
  type: "heading";
  children: TChildrenNodes;
  level: number;
};
export type TQuoteBlock = {
  type: "quote";
  children: TChildrenNodes;
};
export type TListBlockFormat = "unordered" | "ordered";
export type TListBlock = {
  type: "list";
  children: TListItemNode[];
  format: TListBlockFormat;
};

// children nodes
export type TChildrenNodes = Array<TTextNode | TLinkNode>;
export type TTextNode = {
  type: "text";
  text: string;
  bold?: boolean;
  underline?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

export type TLinkNode = {
  type: "link";
  url: string;
  children: TTextNode[];
};

export type TListItemNode = {
  type: "list-item";
  children: TChildrenNodes;
};

export type TRichTextJSON = Array<
  TParagraphBlock | THeadingBlock | TListBlock | TImageBlock | TQuoteBlock
>;
