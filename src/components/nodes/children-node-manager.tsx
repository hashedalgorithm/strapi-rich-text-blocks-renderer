import { id } from '@/lib/util';
import { TChildrenNodes } from '@/types';
import React from 'react';
import { LinkNode } from './link-node';
import { TextNode } from './text-node';

type ChildrenNodeManagerProps = {
  nodes: TChildrenNodes;
};
const ChildrenNodeManager = ({ nodes }: ChildrenNodeManagerProps) => {
  return nodes.map(node => {
    switch (node.type) {
      case 'text':
        return (
          <TextNode
            key={`richtext.childrennodemanager.${node.text}.${id()}`}
            {...node}
          />
        );
      case 'link':
        return node.type === 'link' ? (
          <LinkNode
            key={`richtext.childrennodemanager.${node.url}.${id()}`}
            nodes={node.children}
            type={node.type}
            url={node.url}
          />
        ) : (
          <></>
        );
      default:
        return <p>Unknown children type!</p>;
    }
  });
};

export { ChildrenNodeManager, ChildrenNodeManagerProps };
