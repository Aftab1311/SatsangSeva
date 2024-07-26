import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[47px] pr-5 pl-[21px] box-border max-w-full mq750:pb-[31px] mq750:box-border ${className}`}
    >
      <div className="w-[1199px] flex flex-col items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
        <div className="w-[255px] flex flex-row items-start justify-start gap-[23px]">
          <Button
            className="h-[33px] flex-1"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#d26600",
              fontSize: "14",
              borderColor: "#d26600",
              borderRadius: "50px",
              "&:hover": { borderColor: "#d26600" },
              height: 33,
            }}
          >
            Home
          </Button>
          <Button
            className="h-[33px] flex-1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#d26600",
              border: "#f5f5f5 solid 1px",
              borderRadius: "50px",
              "&:hover": { background: "#d26600" },
              height: 33,
            }}
          >
            Events
          </Button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[460px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover"
            alt=""
            src="/rectangle-1369@2x.png"
          />
          <img
            className="h-[91px] w-[95px] absolute !m-[0] bottom-[184px] left-[calc(50%_-_47.5px)] rounded-55xl object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/droppedimage-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
