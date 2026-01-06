import React from "react";

interface Props {
  title: string
  description?: string
  className? : string
}

const Heading = (props: Props) => {
  return (
    <div className={`flex justify-center items-start flex-col ${props.className}`}>
      <h1 className="uppercase text-gray-800 font-bold text-xl lg:text-3xl ">
        {props.title}
      </h1>
      <p className="mt-4 italic text-xs text-blue-800">
        {props.description}
      </p>
    </div>
  );
};

export default Heading;
