
import React, { useState, useEffect } from "react";
import { Header } from "@/components/membership/Header";
import { MessageBubble } from "@/components/membership/MessageBubble";
import { SelectField } from "@/components/membership/SelectField";
import { MembershipOptions } from "@/components/membership/MembershipOptions";
import { DurationOptions } from "@/components/membership/DurationOptions";
import { Footer } from "@/components/membership/Footer";
import { NavigationBar } from "@/components/membership/NavigationBar";
import { WelcomeModal } from "@/components/membership/WelcomeModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [titleLoaded, setTitleLoaded] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Wait a short delay before showing the title animation
    const titleTimer = setTimeout(() => {
      setTitleLoaded(true);
    }, 500);

    // Show modal after a delay
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleAccept = () => {
    setShowModal(false);
    toast({
      title: "Offer accepted",
      description: "Thanks for your interest!",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col overflow-hidden relative min-h-[3657px] pt-8">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/69592d0036a7475dbb0be3839bbc4638/b19662975b086f0e2108837824afdf86e6f5252fd472c80be87e553a39c196a3?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
      />

      <NavigationBar />
      
      <Header />

      <main className="relative z-0 flex w-full flex-col text-center uppercase leading-[0.8] pt-60 pb-[120px] px-20 max-md:max-w-full max-md:px-5 max-md:pt-20 max-md:pb-[60px]">
        <h1 className="text-[rgba(50,50,50,1)] text-base font-normal max-md:max-w-full animate-fade-in">
          START YOUR NEW WELLNESS ERA
        </h1>
        <h2 
          className={`font-poppins font-extrabold text-[#1E1E1E] text-[64px] tracking-[-2.56px] mt-4 max-md:max-w-full max-md:text-[40px] transition-all duration-1000 transform ${
            titleLoaded 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-20 scale-90"
          }`}
        >
          MEMBERSHIP ENQUIRY
        </h2>
      </main>

      <section 
        className="relative z-0 w-full pb-[150px] max-md:max-w-full max-md:pb-[100px] [&>*]:animate-fade-in [&>*]:opacity-0 [&>*]:animate-delay-[var(--delay)]" 
        style={{ "--delay": "0.2s" } as React.CSSProperties}
      >
        <MessageBubble>
          Hello 👋 <br />
          Welcome to Virgin Active Qatar,hope you are well today.
        </MessageBubble>

        <MessageBubble>
          Let's have a look at what best suits you for your membership
        </MessageBubble>

        <MessageBubble>
          Please pick your age group from the list below
        </MessageBubble>

        <div className="flex w-full gap-2 text-xl mt-16 px-[200px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="bg-white flex min-w-60 w-[851px] flex-col items-stretch px-14 py-12 rounded-[45px_45px_6px_45px] max-md:px-5">
            <div className="text-[rgba(30,30,30,1)] font-normal leading-6 max-md:max-w-full">
              Please select the number of members you would like to add.
            </div>
            <div className="flex w-full items-center gap-6 flex-wrap mt-6">
              <SelectField label="Adult" />
              <SelectField label="Youth" />
              <SelectField label="Child" />
            </div>
          </div>
        </div>

        <MessageBubble>What type of memberships would you like?</MessageBubble>

        <MembershipOptions />

        <MessageBubble>Great!</MessageBubble>

        <MessageBubble>Now please select your membership length</MessageBubble>

        <DurationOptions />

        <div className="self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-5xl text-[#1E1E1E] font-medium whitespace-nowrap uppercase leading-[0.8] mt-16 px-[200px] py-2 max-md:max-w-full max-md:text-[40px] max-md:mt-10 max-md:px-5">
          <span className="inline-flex">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
          </span>
        </div>
      </section>

      <Footer />

      {showModal && <WelcomeModal onAccept={handleAccept} />}
    </div>
  );
};

export default Index;
