import React from "react";

interface SelectFieldProps {
  label: string;
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder = "Please select",
}) => {
  return (
    <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
      <div className="text-[#1E1E1E] font-medium leading-[0.8] uppercase">
        {label}
      </div>
      <div className="rounded bg-white border flex w-full items-center gap-10 text-[rgba(50,50,50,1)] font-normal leading-[1.2] mt-4 pl-4 pr-2 py-4 border-[rgba(222,221,220,1)] border-solid">
        <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
          {placeholder}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/ee8e93d51931e05158cb8353529f803f091037566dab90d8ac7a8dca56556a69?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
      </div>
    </div>
  );
};
