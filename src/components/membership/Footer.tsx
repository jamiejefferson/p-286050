import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[rgba(25,25,25,1)] z-0 w-full max-md:max-w-full">
      <div className="flex w-full items-stretch gap-[40px_100px] justify-between flex-wrap pt-[72px] pb-24 px-20 max-md:max-w-full max-md:px-5">
        <div className="w-[216px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/77c73ceb474f061a087cfdafd1814d2962a35ef0b28bea36364914ca2f0429de?placeholderIfAbsent=true"
            className="aspect-[2.05] object-contain w-[150px] max-w-full"
          />
          <div className="flex w-full items-center gap-6 mt-[165px] max-md:mt-10">
            <div className="self-stretch flex min-h-6 flex-col overflow-hidden items-center justify-center w-6 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/9e36fd05a433fe6bf5e0f83a92068e15188fb5307f07947ed20aee00a9f63ccb?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/3e448e83a4f65d6f2b16e7b1102d37c14e8c9719c7d85bd54c8a301991a65a79?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/3a1445daea335c8ae8778317c56eefb7bc8f2940b7d9ce3a88b58ca962e74504?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/adbf4702fd3d0106b83a1f58a8e50084d77b586980c6be8b2e5af6a2fb9104c6?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/022e5005c333c42fb67be5bf4b492c774b3bae23083d7b56463673994a5fbcb2?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <div className="flex min-w-60 gap-[40px_100px] text-base text-white font-normal leading-none justify-between flex-wrap w-[936px] pt-2.5 max-md:max-w-full">
          <div className="w-[121px]">
            <div className="font-bold uppercase">Company</div>
            <div className="mt-6">Contact us</div>
            <div className="mt-6">Members FAQs</div>
            <div className="mt-6">Careers</div>
            <div className="mt-6">Work as a PT</div>
            <div className="mt-6">Active Blog</div>
          </div>
          <div className="w-[157px]">
            <div className="font-bold uppercase">RED HOT</div>
            <div className="mt-6">Swimming Lessons</div>
            <div className="mt-6">Workplace wellness</div>
            <div className="mt-6">Club-V Kids Gym</div>
            <div className="mt-6">Memberships</div>
            <div className="mt-6">Personal Trainers</div>
          </div>
          <div className="w-[175px]">
            <div className="font-bold uppercase">APP & Rewards</div>
            <div className="mt-6">Virgin Active Rewards</div>
            <div className="mt-6">Virgin Active Rewards</div>
            <div className="mt-6">Rewards Partners</div>
          </div>
          <div className="font-bold whitespace-nowrap uppercase w-[120px]">
            <div>Download</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/4044235e1ce51c8637fad27cd06a4b462e75e252bfab9374f0f3521d3b7f96cf?placeholderIfAbsent=true"
              className="aspect-[3] object-contain w-[120px] max-w-full mt-4"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/33a4856f831eb01cf3825b235782c44cdacb47da032312279915e6e4413f48b7?placeholderIfAbsent=true"
              className="aspect-[3] object-contain w-[120px] max-w-full mt-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-[rgba(50,50,50,1)] flex w-full items-center gap-[40px_100px] text-sm text-white font-normal leading-none justify-between flex-wrap px-20 py-6 max-md:max-w-full max-md:px-5">
        <div>© Copyright 2025 Virgin Active. All rights reserved.</div>
        <div className="self-stretch flex min-w-60 items-center gap-10 flex-wrap my-auto max-md:max-w-full">
          <div>Club Rules</div>
          <div>Legal Stuff</div>
          <div>Cookie Settings</div>
          <div>Policy Information</div>
        </div>
      </div>
    </footer>
  );
};
