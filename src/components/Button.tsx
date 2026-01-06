import React, { ReactElement } from 'react'

interface Props {
  text: string
  icon?: ReactElement
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({ text, icon, onClick, className, variant = 'primary' }: Props) => {
  const baseClasses = 'py-2 px-4 cursor-pointer flex gap-2 justify-center items-center rounded-sm';
  
  const variantClasses =
    variant === 'secondary'
      ? 'bg-gray-200 text-black hover:bg-gray-300 border-gray-400'
      : 'bg-[#273F4F] text-white hover:bg-slate-900';

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
