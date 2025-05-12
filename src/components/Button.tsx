import React, { ReactElement } from 'react'

interface Props {
  text: string
  icon?: ReactElement
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ text, icon, onClick, className, variant = 'primary' }: Props) => {
  const baseClasses = 'py-3 px-8 font-bold cursor-pointer flex gap-2 justify-center items-center rounded-md border';
  
  const variantClasses =
    variant === 'secondary'
      ? 'bg-gray-200 text-black hover:bg-gray-300 border-gray-400'
      : 'bg-[#2980f8] text-white hover:bg-slate-900 hover:shadow-md hover:shadow-blue-900 border-blue-400';

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className || ''}`} 
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
