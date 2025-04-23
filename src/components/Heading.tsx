import React from "react";

interface Props {
  title: string
  description?: string
  className? : string
}

const Heading = (props: Props) => {
  return (
    <div className={`flex justify-center items-end flex-col ${props.className}`}>
      <h1 className="uppercase text-slate-200 font-extrabold text-5xl ">
        {props.title}
      </h1>
      <p className="mt-4 italic text-xs text-blue-300">
        {props.description}
      </p>
    </div>
  );
};

export default Heading;
