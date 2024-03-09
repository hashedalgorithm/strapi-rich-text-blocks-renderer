import ExclamationTriangleIcon from '@/icons/exclamation-triangle-icon';
import { id } from '@/lib/util';
import React from 'react';
import '@/styles/nodes/unknown-node.css';

type UnknownNodeProps = {
  type: string;
};
const UnknownNode = ({ type }: UnknownNodeProps) => {
  return (
    <article key={id()} className="card">
      <div className="unknown">
        <ExclamationTriangleIcon className="icon" />
        <div className="unknown_text_container">
          <p className="unknown_text">Unknown Component!</p>
          <p>{`Cant find a component named : ${type}`}</p>
        </div>
      </div>
    </article>
  );
};

export { UnknownNode, UnknownNodeProps };
