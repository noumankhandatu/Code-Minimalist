import React from "react";
type TextAreaProps = {
  title: string;
};
const TextArea = ({ title }: TextAreaProps) => {
  return (
    <div className="lg:pl-20 pl-2 lg:pr-20 pr-2">
      <label className="block mb-2 text-[16px] font-medium text-[#2A2A2A]">
        {title}
      </label>
      <textarea
        id="message"
        className="block p-2.5 w-full bg-blue-50 border border-[#B8C8CF] outline-0  pl-1 pr-1 rounded "
        placeholder="Your message..."
      ></textarea>
    </div>
  );
};

export default TextArea;
