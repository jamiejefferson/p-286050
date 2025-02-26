import React from "react";

interface MembershipCardProps {
  title: string;
  description: string;
  isSelected?: boolean;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  description,
  isSelected = false,
}) => {
  const baseClasses = "rounded flex flex-col w-60 p-8 max-md:px-5";
  const selectedClasses = isSelected
    ? "bg-[rgba(25,25,25,1)] text-white border-[rgba(25,25,25,1)] border-solid border-[6px]"
    : "bg-white text-[#E10A0A] border-[rgba(222,221,220,1)] border-solid border-2";

  return (
    <div className={`${baseClasses} ${selectedClasses}`}>
      <div className="text-xl font-medium leading-[0.8] uppercase">{title}</div>
      <div className="text-lg font-normal leading-6 mt-4">{description}</div>
    </div>
  );
};

export const MembershipOptions: React.FC = () => {
  return (
    <div className="flex w-full gap-2 text-[#E10A0A] text-center mt-16 px-[200px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="bg-white flex min-w-60 flex-col justify-center px-14 py-12 rounded-[45px_45px_6px_45px] max-md:max-w-full max-md:px-5">
        <div className="flex items-stretch gap-6 flex-wrap max-md:max-w-full">
          <MembershipCard
            title="COLLECTION"
            description="Full access to all luxury wellness clubs, local or abroad."
            isSelected={true}
          />
          <MembershipCard
            title="PREMIER"
            description="Train at any club, anytime. (excl. Collection Clubs)."
          />
          <MembershipCard
            title="CLUB"
            description="Full access to the whole club and services"
          />
        </div>
      </div>
    </div>
  );
};
