
import React from "react";

interface DurationCardProps {
  title: string;
  description: string;
}

const DurationCard: React.FC<DurationCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="rounded flex flex-col w-60 p-8 max-md:px-5 bg-white text-[#E10A0A] border-[rgba(222,221,220,1)] border-solid border-2">
      <div className="text-xl font-medium leading-[0.8] uppercase">{title}</div>
      <div className="text-lg font-normal leading-6 mt-4">{description}</div>
    </div>
  );
};

export const DurationOptions: React.FC = () => {
  return (
    <div className="flex w-full gap-2 text-center mt-16 px-[200px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="bg-white flex min-w-60 flex-col justify-center px-14 py-12 rounded-[45px_45px_6px_45px] max-md:max-w-full max-md:px-5">
        <div className="flex items-stretch gap-6 flex-wrap max-md:max-w-full">
          <DurationCard
            title="12 months"
            description="12 months minimum commitment"
          />
          <DurationCard
            title="12 weeks"
            description="Only 12 weeks minimum commitment"
          />
        </div>
      </div>
    </div>
  );
};
