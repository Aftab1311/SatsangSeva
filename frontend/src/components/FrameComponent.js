import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  onCategoriesTextClick,
  onListYourEventClick,
}) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/landing-design-a-2");
  }, [navigate]);

  const onUpcomingEventsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='upcomingEventsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCategoriesTextClick1 = useCallback(() => {
    navigate("/categories-page");
  }, [navigate]);

  return (
    <header
      className={`self-stretch h-[71px] flex flex-row items-center justify-between pt-[10px] px-[99px] box-border fixed top-0 left-0 right-0 z-[99] max-w-full text-left text-14xl-6 text-white font-sacramento lg:pl-[49px] lg:pr-[49px] lg:box-border mq750:pl-6 mq750:pr-6 mq750:box-border ${className}`}
      style={{
        backgroundColor: scrolled ? '#F58021' : 'transparent',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
      <div className="flex flex-row items-center">
        <div
          className="w-[224.9px] flex-1 flex flex-row items-center justify-start gap-[4px] cursor-pointer z-[4]"
          onClick={onGroupContainerClick}
        >
          <img
            className="h-[33.9px] w-[50px] relative"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <a className="[text-decoration:none] h-[37.8px] flex-1 relative text-[inherit] inline-block whitespace-nowrap"
            style={{ position: 'relative', top: '-5px' }} // Adjusted the vertical position
          >
            SatsangSeva
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[20px] ml-[auto]"> {/* Increased gap between New Delhi and upcoming events */}
        <img
          className="w-[18px] h-5 relative overflow-hidden shrink-0 z-[3]"
          loading="lazy"
          alt=""
          src="/iconsmappin.svg"
        />
        
      </div>
      <nav className="flex flex-row items-center gap-[40px] max-w-full text-left text-base text-white font-dm-sans lg:hidden"> {/* Increased gap */}
      <a
          className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap cursor-pointer z-[3]"
          onClick={onUpcomingEventsTextClick}
        >
          New Delhi 
        </a>
         <a
          className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap cursor-pointer z-[3]"
          onClick={onUpcomingEventsTextClick}
        >
          Upcoming Events
        </a>
        <a
          className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[111px] whitespace-nowrap z-[3]"
          onClick={onListYourEventClick}
        >
          List Your Event
        </a>
        <a
          className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[84px] cursor-pointer z-[3]"
          onClick={onCategoriesTextClick}
        >
          Categories
        </a>
      </nav>
      <Button
        className="h-[41px] w-[123.5px] z-[3] ml-[40px]" // Increased margin-left to shift button further right
        disableElevation
        variant="outlined"
        sx={{
          textTransform: "none",
          color: 'white',
          fontSize: "16px",
          borderColor: 'white',
          borderRadius: "50px",
          "&:hover": { borderColor: 'white' },
          width: 123.5,
          height: 41,
          transition: 'color 0.3s ease, border-color 0.3s ease',
        }}
        onClick={onListYourEventClick}
      >
        Login
      </Button>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onCategoriesTextClick: PropTypes.func,
  onListYourEventClick: PropTypes.func,
};

export default FrameComponent;







