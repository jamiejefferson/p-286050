
import React from "react";

interface MessageBubbleProps {
  children: React.ReactNode;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ children }) => {
  return (
    <div className="flex w-full items-center gap-2 text-[32px] text-[rgba(30,30,30,1)] font-normal leading-[38px] px-[200px] mt-5 max-md:max-w-full max-md:px-5">
      <div className="self-stretch bg-white min-w-60 w-[710px] gap-2 my-auto px-16 py-14 rounded-[45px_45px_45px_6px] max-md:max-w-full max-md:px-5">
        {children}
      </div>
    </div>
  );
};
