import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FirstFold from "../components/FirstFold4";
import { useNavigate } from "react-router-dom";
import SearchBox1 from "../components/SearchBox1";
import Footer from "../components/Footer1";

const LogIn = () => {
  const navigate = useNavigate();

  const onNoAccountClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[55px] leading-[normal] tracking-[normal] mq750:gap-[27px]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[98px] box-border max-w-full text-left text-[21px] text-black font-poppins mq1050:pb-16 mq1050:box-border mq450:pb-[42px] mq450:box-border">
        <FirstFold iconsxCircle="/iconsxcircle1.svg" />
        <div className="w-[1393px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-616px]">
          <div className="w-[539px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start pt-[34px] pb-[52px] pr-[43px] pl-11 box-border gap-[38px] max-w-full z-[6] mq750:gap-[19px] mq750:pt-[636px] mq750:pb-[34px] mq750:pr-[21px] mq750:pl-[22px] mq750:box-border">
            <div className="w-[539px] h-[634px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[11px]">
                    <div className="relative z-[7] mq450:text-[17px]">
                      <span>{`Welcome to `}</span>
                      <span className="text-orangered">Satsang Seva</span>
                    </div>
                    <h1 className="m-0 relative text-21xl font-medium font-inherit inline-block min-w-[118px] whitespace-nowrap z-[7] mq1050:text-13xl mq450:text-5xl">
                      Log in
                    </h1>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-smi text-gray-200">
                    <div
                      className="relative cursor-pointer z-[7]"
                      onClick={onNoAccountClick}
                    >
                      <p className="m-0">No Account ?</p>
                      <p className="m-0 text-cornflowerblue">Sign up</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px]">
                  <Button
                    className="h-[55px] flex-1 min-w-[194px] z-[7]"
                    startIcon={
                      <img width="26px" height="26px" src="/google.svg" />
                    }
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "16",
                      background: "#e9f1ff",
                      borderRadius: "9px",
                      "&:hover": { background: "#e9f1ff" },
                      height: 55,
                    }}
                  >
                    Sign in with Google
                  </Button>
                  <div className="flex flex-row items-start justify-start gap-[13px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-[60px] h-[55px] relative z-[7]"
                        loading="lazy"
                        alt=""
                        src="/group-521.svg"
                      />
                    </div>
                    <img
                      className="h-[55px] w-[60px] relative min-h-[55px] z-[7]"
                      loading="lazy"
                      alt=""
                      src="/group-511.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[7] text-base">
                <div className="mt-[-37px] relative shrink-0">
                  Enter your Phone no. or email address
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[57px] relative shrink-0"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#2c9cf0" },
                    "& .MuiInputBase-root": {
                      height: "57px",
                      backgroundColor: "#fff",
                      borderRadius: "9px",
                    },
                  }}
                />
                <div className="w-[302px] absolute !m-[0] bottom-[19px] left-[25px] text-sm font-light text-gray-300 inline-block z-[1]">
                  Phone no. or email address
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[12px] text-base">
              <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[7]">
                <div className="mt-[-37px] relative shrink-0">
                  Enter your Password
                </div>
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-[57px] relative shrink-0"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#adadad" },
                    "& .MuiInputBase-root": {
                      height: "57px",
                      backgroundColor: "#fff",
                      borderRadius: "9px",
                    },
                  }}
                />
                <div className="w-[302px] absolute !m-[0] bottom-[19px] left-[25px] text-sm font-light text-gray-300 inline-block z-[1]">
                  Password
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end text-smi text-cornflowerblue">
                <div className="relative inline-block min-w-[108px] z-[7]">
                  Forgot Password
                </div>
              </div>
            </div>
            <Button
              className="self-stretch h-[54px] shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] cursor-pointer z-[7] mq450:pl-5 mq450:pr-5 mq450:box-border"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#ff5f17",
                borderRadius: "10px",
                "&:hover": { background: "#ff5f17" },
                height: 54,
              }}
              onClick={onGroupButtonClick}
            >
              Log in
            </Button>
          </div>
        </div>
      </section>
      <SearchBox1 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[9px] box-border max-w-full text-left text-21xl text-goldenrod font-montserrat">
        <div className="w-[1086px] flex flex-col items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
              Upcoming Events
            </h1>
            <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                  <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                  <div className="relative font-medium inline-block min-w-[68px] z-[1]">
                    Weekdays
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                    <img
                      className="w-2.5 h-[5px] relative z-[2]"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                  <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                  <div className="relative font-medium inline-block min-w-[74px] z-[1]">
                    Event Type
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                    <img
                      className="w-2.5 h-[5px] relative z-[2]"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
                <div className="rounded-31xl bg-bisque flex flex-row items-start justify-start py-3.5 px-[25px] gap-[17px]">
                  <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                  <div className="relative font-medium inline-block min-w-[91px] z-[1]">
                    Any Category
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                    <img
                      className="w-2.5 h-[5px] relative z-[2]"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.5px_26.5px] min-h-[698px] max-w-full">
              <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
                <img
                  className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-1@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.7px]">
                  <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="w-[26.6px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                        <b className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[1]">
                          APR
                        </b>
                      </div>
                      <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                        <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[1] mq450:text-4xl">
                          14
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                    <b className="self-stretch relative leading-[150%] shrink-0 z-[1]">
                      Wonder Girls 2010 Wonder Girls World Tour San Francisco
                    </b>
                    <div className="self-stretch relative text-sm leading-[150%] shrink-0 z-[1]">
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full text-left">
                <img
                  className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-2@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[12.5px] mq450:flex-wrap">
                  <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
                        <b className="relative inline-block min-w-[25px] shrink-0 z-[1]">
                          AUG
                        </b>
                      </div>
                      <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-9xl-4 text-black">
                        <b className="mt-[-3.8px] relative inline-block min-w-[37px] shrink-0 z-[1] mq450:text-4xl">
                          20
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-base text-black">
                    <b className="self-stretch relative leading-[150%] shrink-0 z-[1]">
                      JYJ 2011 JYJ Worldwide Concert Barcelona
                    </b>
                    <div className="self-stretch relative text-sm leading-[150%] shrink-0 z-[1]">
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
                <img
                  className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-3@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.8px]">
                  <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="w-[26.5px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="w-[25.6px] relative inline-block shrink-0 z-[1]">
                        SEP
                      </b>
                      <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                        <b className="mt-[-3.8px] relative inline-block min-w-[25.2px] shrink-0 z-[1] mq450:text-4xl">
                          18
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                    <b className="self-stretch relative leading-[150%] shrink-0 z-[1]">
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className="self-stretch relative text-sm leading-[150%] shrink-0 z-[1]">
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
                <img
                  className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-4@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.7px]">
                  <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="w-[26.6px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                        <b className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[1]">
                          APR
                        </b>
                      </div>
                      <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                        <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[1] mq450:text-4xl">
                          14
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                    <b className="self-stretch relative leading-[150%] z-[1]">
                      Wonder Girls 2010 Wonder Girls World Tour San Francisco
                    </b>
                    <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                      We’ll get you directly seated and inside for you to enjoy
                      the show.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full text-left">
                <img
                  className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-5@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[12.5px] mq450:flex-wrap">
                  <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
                        <b className="relative inline-block min-w-[25px] shrink-0 z-[1]">
                          AUG
                        </b>
                      </div>
                      <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-9xl-4 text-black">
                        <b className="mt-[-3.8px] relative inline-block min-w-[37px] shrink-0 z-[1] mq450:text-4xl">
                          20
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-base text-black">
                    <b className="self-stretch relative leading-[150%] z-[1]">
                      JYJ 2011 JYJ Worldwide Concert Barcelona
                    </b>
                    <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[334.5px] w-[343px] flex flex-col items-start justify-start min-w-[326px] max-w-full">
                <img
                  className="self-stretch flex-1 relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-12-6@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] px-[22px] pb-[22.7px] relative gap-[22.8px]">
                  <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="w-[26.5px] flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="w-[25.6px] relative inline-block shrink-0 z-[1]">
                        SEP
                      </b>
                      <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                        <b className="mt-[-3.8px] relative inline-block min-w-[25.2px] shrink-0 z-[1] mq450:text-4xl">
                          18
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="w-[241.6px] flex flex-col items-start justify-start gap-[7px] text-left text-base text-black">
                    <b className="self-stretch relative leading-[150%] z-[1]">
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className="self-stretch relative text-sm leading-[150%] z-[1]">
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1038px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <Button
                className="self-stretch w-[182px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)]"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#ff5f17",
                  fontSize: "18",
                  borderColor: "#ff5f17",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#ff5f17" },
                  width: 182,
                }}
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[77px] box-border max-w-full text-left text-15xl text-black font-dm-sans">
        <div className="flex-1 bg-peachpuff flex flex-col items-start justify-start py-[35px] pr-5 pl-[762px] box-border relative gap-[11px] max-w-full lg:pl-[381px] lg:box-border mq750:pl-[190px] mq750:box-border mq450:pl-5 mq450:box-border">
          <div className="w-[1440px] h-[252px] relative bg-peachpuff hidden max-w-full z-[0]" />
          <h1 className="m-0 w-[417.2px] relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq1050:text-8xl mq450:text-xl">{`Make your own Event `}</h1>
          <div className="w-[382px] flex flex-col items-start justify-start gap-[21px] max-w-full text-lg text-gray-400">
            <div className="self-stretch relative z-[1]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            <Button
              className="w-[302px] h-[60px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#fe9509",
                borderRadius: "50px",
                "&:hover": { background: "#fe9509" },
                width: 302,
                height: 60,
              }}
            >
              Create Events
            </Button>
          </div>
          <img
            className="w-[344px] h-[337px] absolute !m-[0] bottom-[-48px] left-[288px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/untitled-design-3-1@2x.png"
          />
        </div>
      </section>
      <section className="w-[1411px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-darkorange-200 font-montserrat">
        <div className="w-[1115px] flex flex-col items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
          <div className="w-[1087px] flex flex-row items-start justify-center pt-0 px-5 pb-[9px] box-border max-w-full">
            <div className="w-[613px] flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[69px] mq450:pl-[34px] mq450:box-border">
                <h1 className="m-0 relative text-inherit font-bold font-inherit mq1050:text-13xl mq450:text-5xl">
                  Join these brands
                </h1>
              </div>
              <div className="self-stretch relative text-lg font-dm-sans text-dimgray text-center">
                We've had the pleasure of working with industry-defining brands.
                These are just some of them.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-0 pl-[13px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-center gap-[36px] max-w-full mq750:gap-[18px] mq1050:flex-wrap">
              <div className="h-[271px] w-[458px] relative min-w-[458px] max-w-full mq750:min-w-full mq1050:flex-1">
                <img
                  className="absolute top-[155px] left-[0px] w-[178px] h-[85px] object-cover"
                  alt=""
                  src="/sheimaro-1@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[26px] w-[152px] h-[70px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/divyaremovebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[70px] left-[113px] w-[211px] h-24 object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/bhakti2removebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[25px] left-[349px] w-[104px] h-[69px] object-cover"
                  alt=""
                  src="/astharemovebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[166px] left-[274px] w-[184px] h-[105px] object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/prem-1@2x.png"
                />
              </div>
              <div className="h-[271px] flex-1 relative min-w-[395px] max-w-full mq750:min-w-full">
                <img
                  className="absolute top-[176px] left-[414px] w-[178px] h-[85px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/sheimaro-1@2x.png"
                />
                <img
                  className="absolute top-[70px] left-[0px] w-[178px] h-[75px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/bhaktiremovebgpreview-2@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[178px] w-[152px] h-[108px] object-cover z-[1]"
                  alt=""
                  src="/devotional-1@2x.png"
                />
                <img
                  className="absolute top-[100px] left-[303px] w-[141px] h-[111px] object-cover z-[2]"
                  alt=""
                  src="/channel-1@2x.png"
                />
                <img
                  className="absolute top-[25px] left-[399px] w-[209px] h-[61px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/harekrishanremovebgpreview-1@2x.png"
                />
                <img
                  className="absolute top-[187px] left-[55px] w-[173px] h-[84px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/shastick-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[1088px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[464px] flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[31px]">
                <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[97px] mq1050:text-13xl mq450:text-5xl">
                  Blog
                </h1>
              </div>
              <div className="relative text-lg leading-[150%] font-dm-sans text-dimgray">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
          </div>
          <div className="w-[1086px] grid flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border gap-[28.5px] max-w-full grid-cols-[repeat(3,_minmax(257px,_1fr))] text-xl font-dm-sans mq750:grid-cols-[minmax(257px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(257px,_446px))]">
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch rounded-xl bg-orange flex flex-row items-start justify-start max-w-full">
                <div className="self-stretch w-[343px] relative rounded-xl bg-orange hidden max-w-full" />
                <img
                  className="h-[210px] flex-1 relative rounded-mini max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-43@2x.png"
                />
              </div>
              <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                6 Strategies to Find Your Inner Peace and get Enlightenment for
                Your Life
              </b>
              <div className="self-stretch relative text-base leading-[150%] text-black">
                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-darkgray-200">
                12 Mar - Jhon Doe
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch rounded-xl bg-orange flex flex-row items-start justify-start max-w-full">
                <div className="self-stretch w-[343px] relative rounded-xl bg-orange hidden max-w-full" />
                <img
                  className="h-[210px] flex-1 relative rounded-mini max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-43-1@2x.png"
                />
              </div>
              <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                Connecting with God inside us and Asking Ways for better living
                of Life Values
              </b>
              <div className="self-stretch relative text-base leading-[150%] text-black">
                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-darkgray-200">
                12 Mar - Jhon Doe
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
              <img
                className="self-stretch h-[210px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-14@2x.png"
              />
              <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                Introducing Workspaces: Work smarter, not harder with new
                navigation
              </b>
              <div className="self-stretch relative text-base leading-[150%] text-black">
                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-darkgray-200">
                12 Mar - Jhon Doe
              </div>
            </div>
          </div>
          <div className="w-[1086px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <Button
              className="self-stretch w-[182px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)]"
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#ff5f17",
                fontSize: "18",
                borderColor: "#ff5f17",
                borderRadius: "50px",
                "&:hover": { borderColor: "#ff5f17" },
                width: 182,
              }}
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-700 z-[5]" />
      <Footer
        group="/group1.svg"
        facebook="/facebook.svg"
        twitter="/twitter.svg"
        linkedin="/linkedin.svg"
        group1="/group1.svg"
      />
    </div>
  );
};

export default LogIn;
