interface InputProps {
  placeholder: string;
  type: string;
  label?: string;
  value: string;
  onInput?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = (props: InputProps) => {
  return (
    <div className="w-full font-bold text-black mt-4">
      {props.label && <label>{props.label}</label>}
      <input
        className="w-full font-medium border border-gray-400 text-slate-200 rounded-sm p-2 mt-1"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onInput={(e) => props.onInput?.(e.currentTarget.value)}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputBox;
