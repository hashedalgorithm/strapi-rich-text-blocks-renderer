import { id } from '@/lib/util';
import { THeadingBlock } from '@/types';
import React from 'react';
import { ChildrenNodeManager } from '../nodes';

type HeadingBlockProps = Pick<THeadingBlock, 'level'> & {
  nodes: THeadingBlock['children'];
};
const HeadingBlock = ({ nodes, level }: HeadingBlockProps) => {
  switch (level) {
    case 1:
      return (
        <h1>
          <ChildrenNodeManager
            key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
            nodes={nodes}
          />
        </h1>
      );
    case 2:
      return (
        <h2>
          <ChildrenNodeManager
            key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
            nodes={nodes}
          />
        </h2>
      );
    case 3:
      return (
        <h3>
          <ChildrenNodeManager
            key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
            nodes={nodes}
          />
        </h3>
      );
    case 4:
      return (
        <h4>
          <ChildrenNodeManager
            key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
            nodes={nodes}
          />
        </h4>
      );
    case 5:
      return (
        <h5>
          <ChildrenNodeManager
            key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
            nodes={nodes}
          />
        </h5>
      );
    case 6:
      return (
        <h6>
          <ChildrenNodeManager
            key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
            nodes={nodes}
          />
        </h6>
      );
    default:
      return (
        <ChildrenNodeManager
          key={`richtextjson.headingblock.childrennodemanager.${level}.${id()}`}
          nodes={nodes}
        />
      );
  }
};

export { HeadingBlock, HeadingBlockProps };
