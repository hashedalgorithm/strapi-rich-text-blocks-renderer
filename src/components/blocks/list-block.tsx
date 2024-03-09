import { id } from '@/lib/util';
import { TListBlock } from '@/types';
import React from 'react';
import { ListItemNode } from '../nodes';

type ListBlockProps = Omit<TListBlock, 'children'> & {
  nodes: TListBlock['children'];
};
const ListBlock = ({ format, nodes, type }: ListBlockProps) => {
  switch (format) {
    case 'ordered':
      return (
        <ol>
          {nodes.map((item, index) => (
            <li key={`richtext.listnode.${format}.${type}.${index}.${id()}`}>
              <ListItemNode nodes={item.children} />
            </li>
          ))}
        </ol>
      );
    case 'unordered':
      return (
        <ul>
          {nodes.map((item, index) => (
            <li key={`richtext.listnode.${format}.${type}.${index}.${id()}`}>
              <ListItemNode nodes={item.children} />
            </li>
          ))}
        </ul>
      );
    default:
      return <p>Unknown format!</p>;
  }
};

export { ListBlock, ListBlockProps };
