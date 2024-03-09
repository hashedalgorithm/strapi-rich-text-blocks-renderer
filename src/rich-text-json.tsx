import { TRichTextJSON } from './types';
import { id } from './lib/util';
import React from 'react';
import {
  HeadingBlock,
  ParagraphBlock,
  QuoteBlock,
  ImageBlock,
  ListBlock,
  UnknownNode,
} from './components';

type RichTextJsonProps = {
  content: TRichTextJSON;
};
const RichTextJSON = ({ content }: RichTextJsonProps) => {
  return content.map(block => {
    switch (block.type) {
      case 'heading':
        return (
          <HeadingBlock
            key={`richtext.${id()}`}
            level={block?.level || 0}
            nodes={block.children}
          />
        );
      case 'paragraph':
        return (
          <ParagraphBlock key={`richtext.${id()}`} nodes={block.children} />
        );
      case 'quote':
        return <QuoteBlock key={`richtext.${id()}`} nodes={block.children} />;
      case 'image':
        return (
          <ImageBlock
            key={`richtext.${id()}`}
            image={block.image}
            type={block.type}
          />
        );
      case 'list':
        return (
          <ListBlock
            key={`richtext.${id()}`}
            nodes={block.children}
            format={block.format}
            type={block.type}
          />
        );
      default:
        return <UnknownNode key={`richtext.${id()}`} type={'unknown_node'} />;
    }
  });
};

export { RichTextJSON, RichTextJsonProps };
