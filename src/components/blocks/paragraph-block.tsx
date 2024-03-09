import { id } from '@/lib/util';
import { TParagraphBlock } from '@/types';
import React, { useMemo } from 'react';
import { ChildrenNodeManager } from '../nodes';

type ParagraphBlockProps = {
  nodes: TParagraphBlock['children'];
};

const ParagraphBlock = ({ nodes }: ParagraphBlockProps) => {
  const nodess = useMemo(() => {
    let indeces: Array<number | null> = [];
    nodes.forEach((node, index) => {
      if (
        node &&
        node.type === 'link' &&
        nodes?.at(index + 1)?.type === 'text'
      ) {
        indeces.push(index + 1);
      }
    });
    return nodes.filter((node, index) => !indeces.includes(index));
  }, [nodes]);

  return (
    <ChildrenNodeManager
      key={`richtext.paragraphblock.childrennodemanager.${id()}`}
      nodes={nodess}
    />
  );
};

export { ParagraphBlock, ParagraphBlockProps };
