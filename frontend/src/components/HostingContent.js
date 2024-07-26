import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HostingContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/search-bar");
  }, [navigate]);

  return (
    <div
      className={`w-[1238px] flex flex-col items-start justify-start gap-[98px] max-w-full text-left text-45xl text-gray-500 font-poppins mq450:gap-[24px] mq750:gap-[49px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-19xl mq1050:text-32xl">
            What You Can Host ?
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[33px] pr-[41px] pl-10 box-border max-w-full text-center text-5xl text-black">
          <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </h2>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[74px_52.7px] min-h-[810px] mq750:gap-[26px]">
          <div
            className="h-[368px] w-[269px] relative cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-13611@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Satsang
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-1361-1@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Bhajan
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-1361-2@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Samaroh
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-1361-3@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Langar
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-13611@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Satsang
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-1361-1@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Bhajan
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-1361-2@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Samaroh
              </Button>
            </div>
          </div>
          <div className="h-[368px] w-[269px] relative">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[269px] h-[345px] object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-1361-3@2x.png"
            />
            <div className="absolute top-[320px] left-[40px] rounded-31xl bg-white w-[188px] flex flex-row items-start justify-start py-[5px] px-1 box-border z-[1]">
              <div className="h-12 w-[188px] relative rounded-31xl bg-white hidden" />
              <Button
                className="h-[38px] flex-1 z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff5f17" },
                  height: 38,
                }}
              >
                Langar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-center">
        <div className="flex-1 flex flex-col items-start justify-start gap-[53px] max-w-full mq750:gap-[26px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-400" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
              <h1 className="m-0 self-stretch relative text-inherit font-semibold font-inherit mq450:text-19xl mq1050:text-32xl">{`Sit back and enjoy your event `}</h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-5xl text-black">
                <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi">
                  Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.t
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HostingContent.propTypes = {
  className: PropTypes.string,
};

export default HostingContent;
