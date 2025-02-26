import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="absolute z-0 flex w-[1512px] items-center gap-[40px_100px] justify-between flex-wrap pt-10 pb-6 px-10 right-0 top-[84px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex items-center gap-1 text-sm text-black font-medium whitespace-nowrap leading-[1.2] my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/9a4aa9dd15bfae65a6321da0d8ab3cedf6acd386c81b7924eacddd1c51da89d7?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch flex items-center my-auto">
          <div className="self-stretch my-auto">EN</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/790489e4141e10b0690f3bad92c052222940beadebf96f34294786f1ab5dc946?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/6b082253f84b40609aeeecd76aef226f4bf1158813b62e7f8ee03e6d4d4f6502?placeholderIfAbsent=true"
        className="aspect-[2.03] object-contain w-[122px] self-stretch shrink-0 my-auto"
      />
      <button className="self-stretch w-10 my-auto">
        <div className="rounded bg-black flex min-h-[3px] w-full" />
        <div className="rounded bg-black flex min-h-[3px] w-full mt-1.5" />
      </button>
    </header>
  );
};
