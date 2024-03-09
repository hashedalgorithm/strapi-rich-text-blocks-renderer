import { id } from '@/lib/util';
import '@/styles/blocks/quote-block.css';
import { TQuoteBlock } from '@/types';
import React from 'react';
import { ChildrenNodeManager } from '../nodes';

type QuoteBlockProps = {
  nodes: TQuoteBlock['children'];
};

const QuoteBlock = ({ nodes }: QuoteBlockProps) => {
  return (
    <article className="quoteblock">
      <div className="quoteblock_strip"></div>
      <div className="quoteblock_content">
        <ChildrenNodeManager
          key={`richtextjson.quoteblock.${id()}`}
          nodes={nodes}
        />
      </div>
    </article>
  );
};

export { QuoteBlock, QuoteBlockProps };
