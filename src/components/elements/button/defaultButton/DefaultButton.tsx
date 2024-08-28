import React from 'react';

export interface DefaultButtonProps {
  id?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'small' | 'default';
  targetBlank?: boolean;
  className?: string;
}

function DefaultButton({
  id,
  href,
  onClick = () => {},
  children,
  size = 'default',
  targetBlank = false,
  className = '',
}: DefaultButtonProps) {
  return (
    <a
      id={id}
      href={href}
      onClick={onClick}
      className={`btn text-28 text-white rounded-full h-auto w-full ${size === 'small' ? 'p-16' : 'p-20'} ${className}`}
      target={targetBlank ? '_blank' : undefined}
      rel={targetBlank ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
}

export default DefaultButton;
