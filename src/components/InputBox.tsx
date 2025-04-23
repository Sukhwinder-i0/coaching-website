interface InputProps {
  placeholder: string,
  type:string, 
  label?: string
  onInput?: (value: string) => void | any
}

const InputBox = (props: InputProps) => {
  return (
    <div className="w-full font-bold text-black mt-4">
        <label>{props.label}</label>
        <input className="w-full font-medium border-2 border-gray-600 text-black rounded-lg p-2 mt-1" 
          type={props.type} 
          placeholder={props.placeholder} 
          onInput={(e) => props.onInput?.(e.currentTarget.value)} 
        />
    </div>
  )
}

export default InputBox