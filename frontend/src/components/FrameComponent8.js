import { useCallback } from "react";
import { Button } from "@mui/material";
import GroupComponent3 from "./GroupComponent3";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/event-listing");
  }, [navigate]);

  return (
    <div
      className={`w-[1416px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-646px] text-left text-base text-black font-poppins ${className}`}
    >
      <div className="w-[496px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start pt-[24.3px] pb-[46.1px] pr-5 pl-[33px] box-border gap-[44.8px] max-w-full z-[6] mq750:gap-[22px] mq1050:pt-[666px] mq1050:pb-[30px] mq1050:box-border mq450:pb-5 mq450:box-border">
        <div className="w-[496px] h-[795px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13.9px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.4px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10.3px] min-w-[165px] shrink-0">
                <div className="self-stretch h-[29.5px] relative inline-block shrink-0 z-[7]">
                  <span>{`Welcome to `}</span>
                  <span className="text-orangered">Satsang Seva</span>
                </div>
                <h1 className="m-0 relative text-17xl font-medium font-inherit shrink-0 z-[7] mq1050:text-10xl mq450:text-3xl">
                  Host Sign up
                </h1>
              </div>
              <div className="h-[36.9px] w-[152.6px] relative text-smi inline-block shrink-0 z-[7] text-gray-200">
                <p className="m-0">Already have a account ?</p>
                <p className="m-0 text-cornflowerblue">Log In</p>
              </div>
            </div>
            <div className="w-[414.6px] flex flex-row flex-wrap items-end justify-start gap-[18.3px] max-w-full">
              <Button
                className="h-[50.7px] flex-1 min-w-[178px] z-[7]"
                startIcon={
                  <img width="23.9px" height="24px" src="/google.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#4285f4",
                  fontSize: "14",
                  background: "#e9f1ff",
                  borderRadius: "9px",
                  "&:hover": { background: "#e9f1ff" },
                  height: 50.7,
                }}
              >
                Sign in with Google
              </Button>
              <div className="flex flex-row items-start justify-start gap-[11.9px]">
                <img
                  className="h-[50.7px] w-[55.2px] relative min-h-[51px] z-[7]"
                  loading="lazy"
                  alt=""
                  src="/group-52.svg"
                />
                <img
                  className="h-[50.7px] w-[55.2px] relative min-h-[51px] z-[7]"
                  loading="lazy"
                  alt=""
                  src="/group-51.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[429.7px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[28.6px] max-w-full">
            <GroupComponent3
              enterYourUsernameOrEmailA="Enter your email address"
              usernameOrEmailAddress="Email address"
            />
            <GroupComponent3
              enterYourUsernameOrEmailA="Enter your contact number"
              usernameOrEmailAddress="+91 | Contact number"
              propAlignSelf="stretch"
              propFlex="unset"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <div className="h-[84.8px] flex-1 flex flex-col items-start justify-start pt-[49.8px] px-0 pb-3.5 box-border relative gap-[27.6px] max-w-full z-[7]">
                <div className="mt-[-51.6px] relative">Enter your Password</div>
                <div className="w-full h-[52.5px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] rounded-4xs bg-white box-border border-[1px] border-solid border-darkgray-100" />
                <div className="w-[323.7px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-sm text-gray-300">
                  <div className="flex-1 relative font-light z-[1]">
                    Password
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
              <GroupComponent3
                enterYourUsernameOrEmailA="Re-enter your Password"
                usernameOrEmailAddress="Password"
                propAlignSelf="unset"
                propFlex="1"
              />
            </div>
          </div>
        </div>
        <Button
          className="w-[414.7px] h-[49.8px] shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] max-w-full cursor-pointer z-[7] mq450:pl-5 mq450:pr-5 mq450:box-border"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#ff5f17",
            borderRadius: "10px",
            "&:hover": { background: "#ff5f17" },
            width: 414.7,
            height: 49.8,
          }}
          onClick={onGroupButtonClick}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
