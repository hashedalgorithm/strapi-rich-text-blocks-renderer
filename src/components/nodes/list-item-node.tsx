import { id } from '@/lib/util';
import { TListItemNode } from '@/types';
import React from 'react';
import { ChildrenNodeManager } from './children-node-manager';

type ListItemNodeProps = {
  nodes: TListItemNode['children'];
};
const ListItemNode = ({ nodes }: ListItemNodeProps) => {
  return (
    <ChildrenNodeManager
      key={`richtextjson.listitemnode.${id()}`}
      nodes={nodes}
    />
  );
};

export { ListItemNode, ListItemNodeProps };
