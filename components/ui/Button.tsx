import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string; 
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        px-10 py-4 rounded-full 
        text-[11px] font-bold cursor-pointer uppercase tracking-widest 
        transition-all active:scale-95
        disabled:opacity-50 disabled:pointer-events-none
        ${className} 
      `}
    >
      {children}
    </button>
  );
};


export default Button;
