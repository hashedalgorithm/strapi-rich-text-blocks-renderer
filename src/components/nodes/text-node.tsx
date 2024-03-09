import { id } from '@/lib/util';
import '@/styles/nodes/text-node.css';
import { TTextNode } from '@/types';
import React, { useMemo } from 'react';

type TextNodeProps = TTextNode;
const TextNode = ({
  text,
  bold,
  code,
  italic,
  strikethrough,
  underline,
}: TextNodeProps) => {
  const className = useMemo(
    () =>
      `${bold ? 'bold' : ''} ${underline ? 'underline' : ''} ${
        strikethrough ? 'strikethrough' : ''
      } ${italic ? 'italic' : ''} ${code ? 'code' : ''}`,
    [bold, code, italic, strikethrough, underline]
  );
  return text ? (
    <p key={`richtext.textnode.${id()}`} className={className}>
      {text}
    </p>
  ) : (
    <div className="empty" />
  );
};

export { TextNode, TextNodeProps };
