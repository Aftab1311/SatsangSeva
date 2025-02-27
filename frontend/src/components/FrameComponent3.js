import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  group227,
  listYourEventInJustOneCli,
}) => {
  const navigate = useNavigate();

  // Define the click handler function
  const handleBookNowClick = useCallback(() => {
    navigate("/perticular-event-a"); // Update the path as needed
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[43px] box-border max-w-full text-left text-base text-black font-poppins mq750:pl-[21px] mq750:box-border ${className}`}
    >
      <div className="w-[425px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <Button
          className="self-stretch h-12 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] mq450:pl-5 mq450:pr-5 mq450:box-border"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "24",
            background: "#ff5f17",
            border: "#f5f5f5 solid 1px",
            borderRadius: "50px",
            "&:hover": { background: "#ff5f17" },
            height: 48,
          }}
          onClick={handleBookNowClick} // Attach the click handler
        >
          {group227}
        </Button>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
          <div className="relative">{listYourEventInJustOneCli}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  group227: PropTypes.string,
  listYourEventInJustOneCli: PropTypes.string,
};

export default FrameComponent3;
