import { id } from '@/lib/util';
import { TLinkNode } from '@/types';
import React from 'react';
import { ChildrenNodeManager } from './children-node-manager';

type LinkNodeProps = Omit<TLinkNode, 'children'> & {
  nodes: TLinkNode['children'];
};
const LinkNode = ({ nodes, url }: LinkNodeProps) => {
  return (
    <a href={url}>
      <ChildrenNodeManager
        key={`richtext.linknodes.${url}.${id()}`}
        nodes={nodes}
      />
    </a>
  );
};

export { LinkNode, LinkNodeProps };
