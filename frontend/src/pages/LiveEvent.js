import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import WatchLiveWrapper from "../components/WatchLiveWrapper";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer1";

const LiveEvent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[25px] leading-[normal] tracking-[normal]">
      <FrameComponent5 />
      <FrameComponent4 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <div className="w-[1199px] flex flex-col items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
          <WatchLiveWrapper />
          <FrameComponent2 />
        </div>
      </section>
      <Footer
        group="/group1.svg"
        facebook="/facebook.svg"
        twitter="/twitter.svg"
        linkedin="/linkedin.svg"
        group1="/group1.svg"
        footerAlignSelf="stretch"
        footerWidth="unset"
      />
    </div>
  );
};

export default LiveEvent;
