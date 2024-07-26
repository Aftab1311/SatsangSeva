import { Button } from "@mui/material";
import FirstFold from "../components/FirstFold4";
import FrameComponent8 from "../components/FrameComponent8";
import SearchBox from "../components/SearchBox";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import LoginForm from "../components/LoginForm";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer1";

const SignIn = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[22px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FirstFold
          iconsxCircle="/iconsxcircle.svg"
          rectangleIconAlignSelf="stretch"
          rectangleIconFlex="unset"
        />
        <FrameComponent8 />
      </section>
      <SearchBox />
      <FrameComponent7 />
      <FrameComponent6 />
      <section className="w-[1411px] flex flex-row items-start justify-center pt-0 px-5 pb-[33px] box-border max-w-full text-left text-21xl text-darkorange-200 font-montserrat">
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
              <LoginForm />
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
            <BlogList
              postImage="/rectangle-43-1@2x.png"
              strategiesToFindYourInner="Connecting with God inside us and Asking Ways for better living of Life Values"
            />
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
        footerAlignSelf="stretch"
        footerWidth="unset"
      />
    </div>
  );
};

export default SignIn;
