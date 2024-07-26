import WatchLiveInnerWrapper from "./WatchLiveInnerWrapper";
import PropTypes from "prop-types";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[19px] max-w-full text-left text-5xl text-chocolate font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
        <WatchLiveInnerWrapper
          watchLiveSatsang="Watch Live Satsang"
          theSatsangChannel="Aug 16 • Wed • 3hr • (11:00am-3:00pm)"
          propWidth="573px"
          propMinWidth="573px"
        />
        <div className="w-[338px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[338px] max-w-full mq450:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[37px] mq450:gap-[18px]">
            <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-0 pr-1.5 pl-0 gap-[8px] border-[1px] border-solid border-chocolate mq450:flex-wrap mq450:pl-1.5 mq450:pt-1.5 mq450:pb-1.5 mq450:box-border">
              <div className="h-[46px] w-[47px] rounded-3xs box-border flex flex-row items-center justify-center py-[5px] px-[7px] border-[1px] border-solid border-chocolate">
                <img
                  className="h-[30px] w-[30px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[179px]">
                <h2 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi">
                  569 Already Interested
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[98px] max-w-full text-xl text-black lg:gap-[49px] mq750:gap-[24px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[25px] min-w-[372px] max-w-full mq450:min-w-full">
          <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-base">
            <p className="m-0">
              <span className="text-black">
                123, shyam nagar , sodala , jaipur [
              </span>
              <span className="text-mediumblue">location link</span>
              <span>]</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0"> 
              Nunc vulputate libero et velit interdum, ac aliquet odio
              mattis.Corem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et velit interdum, ac aliquet odio
              mattis.Corem ipsum dolor sit amet.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Corem ipsum dolor sit amet.
            </p>
          </h3>
          <h3 className="m-0 w-[559px] relative text-inherit inline-block max-w-full font-inherit mq450:text-base">
            <p className="m-0">
              <span className="font-semibold font-poppins">Host Name</span>
              <span> : Rahul Sharma (also can be organization)</span>
            </p>
            <p className="m-0">
              <span className="font-semibold font-poppins">Sponsor Name</span>
              <span> : by Default Host Name</span>
            </p>
            <p className="m-0">
              <span className="font-semibold font-poppins">Guest Name</span>
              <span>{` : Sham Sharma `}</span>
            </p>
            <p className="m-0">
              <span className="font-semibold font-poppins">
                Contact Details
              </span>
              <span> : +91 9783682902</span>
            </p>
            <p className="m-0">
              <span className="font-semibold font-poppins">Email</span>
              <span> : sample@gmail.com</span>
            </p>
            <p className="m-0">
              <span className="font-semibold font-poppins">Language</span>
              <span> : Hindi/English</span>
            </p>
            <p className="m-0">&nbsp;</p>
          </h3>
        </div>
      </div>
    </div>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
