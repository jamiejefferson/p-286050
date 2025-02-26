import React from "react";

interface BrowserFrameProps {
  children: React.ReactNode;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ children }) => {
  return (
    <div className="relative z-0 w-full text-[#797979] whitespace-nowrap max-md:max-w-full">
      <div className="bg-blend-hard-light shadow-[0px_1px_3px_0px_rgba(255,255,255,0.50)_inset] backdrop-blur-[40.774227142333984px] bg-[rgba(245,245,245,0.80)] w-full rounded-[11px_11px_0px_0px] max-md:max-w-full">
        <div className="bg-blend-hard-light shadow-[0px_1px_3px_0px_rgba(255,255,255,0.50)_inset] backdrop-blur-[40.774227142333984px] bg-[rgba(245,245,245,0.4)] flex w-full gap-5 justify-between px-[19px] py-[13px] rounded-[11px_11px_0px_0px] max-md:max-w-full max-md:pl-5">
          <div className="flex items-stretch gap-[18px] text-base font-medium text-center leading-none">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/e7259ec002ee76b2900b59efa7406290969d7c15ae1981cd97ef9b46887bafcb?placeholderIfAbsent=true"
              className="aspect-[4.33] object-contain w-[52px] shrink-0 my-auto"
            />
            <div className="flex items-stretch gap-[5px]">
              <button className="mix-blend-luminosity self-stretch rounded gap-2.5 px-1.5 py-1">
                􀏚
              </button>
              <button className="mix-blend-luminosity self-stretch rounded gap-2.5 px-1.5 py-1">
                􀆉
              </button>
              <button className="mix-blend-luminosity self-stretch rounded gap-2.5 px-1.5 py-1">
                􀆊
              </button>
            </div>
          </div>
          <div className="self-stretch flex items-stretch gap-1.5 flex-wrap max-md:max-w-full">
            <button className="mix-blend-luminosity rounded gap-2.5 text-base font-medium text-center leading-none px-1.5 py-1">
              􀙨
            </button>
            <div className="rounded bg-[rgba(0,0,0,0.05)] flex items-stretch gap-[40px_100px] flex-wrap grow shrink basis-auto pl-20 pr-px py-px max-md:max-w-full max-md:pl-5">
              <div className="flex items-center gap-2 text-[13px] font-normal leading-none my-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/80dc2d13d4c548fa6054ec5bf96b9b64618dec5cd11eab8d2726c063fe1dfcc1?placeholderIfAbsent=true"
                  className="aspect-[0.71] object-contain w-2.5 self-stretch shrink-0 my-auto"
                />
                <div className="mix-blend-luminosity self-stretch my-auto">
                  www.virginactive.com
                </div>
              </div>
              <button className="mix-blend-luminosity self-stretch rounded bg-blend-luminosity gap-2.5 text-base font-medium text-center leading-none px-1.5 py-1">
                􀅈
              </button>
            </div>
          </div>
          <div className="flex items-stretch gap-1.5 text-base font-medium text-center leading-none">
            <button className="mix-blend-luminosity self-stretch rounded gap-2.5 px-1.5 py-1">
              􀈂
            </button>
            <div className="flex items-stretch gap-[3px]">
              <button className="mix-blend-luminosity self-stretch rounded bg-blend-luminosity gap-2.5 px-1.5 py-1">
                􀅼
              </button>
              <button className="mix-blend-luminosity self-stretch rounded bg-blend-luminosity gap-2.5 px-1.5 py-1">
                􀐅
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
