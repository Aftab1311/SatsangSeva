import { useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CreateEvents = ({
  className = "",
  listYourOwnEvent,
  propFlex,
  propAlignSelf,
}) => {
  const createEventsStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <div
      className={`flex-1 bg-peachpuff flex flex-row items-start justify-end py-[35px] px-[260px] box-border relative max-w-full text-left text-15xl text-black font-dm-sans mq750:pl-[65px] mq750:pr-[65px] mq750:box-border mq1050:pl-[130px] mq1050:pr-[130px] mq1050:box-border ${className}`}
      style={createEventsStyle}
    >
      <div className="h-[252px] w-[1440px] relative bg-peachpuff hidden max-w-full z-[0]" />
      <div
        className="w-[417.2px] flex flex-col items-start justify-start gap-[21px] max-w-full cursor-pointer z-[1]"
        onClick={onGroupContainerClick}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq1050:text-8xl mq450:text-xl">
            {listYourOwnEvent}
          </h1>
          <div className="w-[382px] relative text-lg text-gray-400 inline-block max-w-full">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}
          </div>
        </div>
        <Button
          className="w-[302px] h-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border"
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
            boxShadow: 'none', // Remove box shadow
          }}
        >
          Create Events
        </Button>
      </div>
      <img
        className="h-[337px] w-[344px] absolute !m-[0] bottom-[-48px] left-[288px] object-cover z-[2]"
        loading="lazy"
        alt=""
        src="/untitled-design-3-1@2x.png"
      />
    </div>
  );
};

CreateEvents.propTypes = {
  className: PropTypes.string,
  listYourOwnEvent: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default CreateEvents;
