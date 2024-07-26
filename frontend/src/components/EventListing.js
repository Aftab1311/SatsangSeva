import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Importing the arrow icon
import GroupComponent2 from "./GroupComponent2";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const EventListing = ({ className = "" }) => {
  const [searchTopAnchorEl, setSearchTopAnchorEl] = useState(null);
  const [showDays, setShowDays] = useState(false); // State to toggle days display
  const searchTopOpen = Boolean(searchTopAnchorEl);

  const handleSearchTopClick = (event) => {
    setSearchTopAnchorEl(event.currentTarget);
    setShowDays(!showDays); // Toggle days display
  };

  const handleSearchTopClose = () => {
    setSearchTopAnchorEl(null);
    setShowDays(false); // Close days display
  };

  return (
    <section
      className={`w-full flex flex-col items-center py-0 px-5 box-border max-w-full shrink-0 text-left text-21xl text-goldenrod font-montserrat ${className}`}
      style={{
        marginTop: "-200px" // Slightly less negative value to move the section down a bit
      }}
    >
      <div
        className="w-full max-w-[1086px] flex flex-col items-center justify-start gap-[80px] lg:gap-[40px] mq750:gap-[20px]"
        data-scroll-to="upcomingEventsContainer"
      >
        <div className="w-full flex flex-row items-center justify-center max-w-full gap-[20px] mq1050:flex-wrap">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block text-center max-w-full mq1050:text-13xl mq450:text-5xl">
            Upcoming Events
          </h1>
          <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="h-[46px] flex-1 min-w-[109px]">
                <Button
                  aria-controls="menu-undefined"
                  aria-haspopup="true"
                  aria-expanded={searchTopOpen ? "true" : undefined}
                  onClick={handleSearchTopClick}
                  color="primary"
                  sx={{
                    width: "100%",
                    height: "46px",
                    backgroundColor: "#ffe6c5",
                    borderRadius: "50px",
                    boxShadow: "none",
                    transition: "box-shadow 0.2s ease, transform 0.2s ease", // Added transition for shadow and transform
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center", // Center align text and icon
                    textAlign: "center", // Center align text
                    color: "#ff5f17", // Match the color with "Event Type"
                    fontFamily: "'Montserrat', sans-serif", // Match the font family
                    fontWeight: "normal", // Set font weight to normal
                    fontSize: "16px", // Match font size with "Event Type"
                    lineHeight: "46px", // Adjust line height for vertical alignment
                    textTransform: "none", // Ensure text is not in uppercase
                  }}
                >
                  {showDays ? 'All Days' : 'Weekdays'}
                  <ExpandMoreIcon sx={{ marginLeft: "8px" }} /> {/* Arrow icon with margin */}
                </Button>
                <Menu
                  anchorEl={searchTopAnchorEl}
                  open={searchTopOpen}
                  onClose={handleSearchTopClose}
                >
                  {showDays && (
                    <>
                      <MenuItem onClick={handleSearchTopClose}>Monday</MenuItem>
                      <MenuItem onClick={handleSearchTopClose}>Tuesday</MenuItem>
                      <MenuItem onClick={handleSearchTopClose}>Wednesday</MenuItem>
                      <MenuItem onClick={handleSearchTopClose}>Thursday</MenuItem>
                      <MenuItem onClick={handleSearchTopClose}>Friday</MenuItem>
                      <MenuItem onClick={handleSearchTopClose}>Saturday</MenuItem>
                      <MenuItem onClick={handleSearchTopClose}>Sunday</MenuItem>
                    </>
                  )}
                </Menu>
              </div>
              <div className="rounded-[20px] bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px] shadow-lg hover:scale-95 transition-transform">
                <div className="h-[46px] w-[168px] relative rounded-[20px] bg-bisque hidden" />
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
              <div className="rounded-[20px] bg-bisque flex flex-row items-start justify-start py-3.5 px-[25px] gap-[17px] shadow-lg hover:scale-95 transition-transform">
                <div className="h-[46px] w-[168px] relative rounded-[20px] bg-bisque hidden" />
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
        <div className="w-full flex flex-col items-center justify-center gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
          <div className="w-full flex flex-wrap items-center justify-center gap-[28.5px] max-w-[1086px] mx-auto">
            {/* Flexbox container to handle 3 items per row */}
            <div className="flex flex-wrap w-full gap-[28.5px] justify-center">
              <div className="flex w-[calc(33.333%-28.5px)] min-w-[326px]">
                <GroupComponent2
                  eventCardImage="/rectangle-12-1@2x.png"
                  aPR="APR"
                  emptyMonth="14"
                  className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                />
              </div>
              <div className="flex w-[calc(33.333%-28.5px)] min-w-[326px]">
                <GroupComponent2
                  eventCardImage="/rectangle-12-2@2x.png"
                  aPR="AUG"
                  emptyMonth="20"
                  propHeight="unset"
                  propMinWidth="326px"
                  propWidth="343px"
                  className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                />
              </div>
              <div className="flex w-[calc(33.333%-28.5px)] min-w-[326px]">
                <GroupComponent1
                  rectangle12="/rectangle-12-3@2x.png"
                  className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                />
              </div>
              <div className="flex w-[calc(33.333%-28.5px)] min-w-[326px]">
                <GroupComponent
                  rectangle12="/rectangle-12-4@2x.png"
                  aPR="APR"
                  emptyMonthTwo="14"
                  className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                />
              </div>
              <div className="flex w-[calc(33.333%-28.5px)] min-w-[326px]">
                <GroupComponent
                  rectangle12="/rectangle-12-5@2x.png"
                  aPR="AUG"
                  emptyMonthTwo="20"
                  propHeight="unset"
                  propMinWidth="326px"
                  propPadding="unset"
                  propWidth="343px"
                  propFlex="unset"
                  className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                />
              </div>
              <div className="flex w-[calc(33.333%-28.5px)] min-w-[326px]">
                <GroupComponent1
                  rectangle12="/rectangle-12-6@2x.png"
                  propMinWidth="326px"
                  propWidth="343px"
                  className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                />
              </div>
            </div>
          </div>
          <div className="w-[1038px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <Button
              className="self-stretch w-[182px]" // Removed shadow class
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#ff5f17",
                fontSize: "18px",
                borderColor: "#ff5f17",
                borderRadius: "50px",
                "&:hover": {
                  borderColor: "#ff5f17",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Shadow effect on hover
                },
                "&:active": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Shadow effect on click
                  transform: "scale(0.95)", // Zoom-out effect on click
                },
                width: 182,
                boxShadow: "none", // Removed shadow
                transition: "box-shadow 0.2s ease, transform 0.2s ease", // Added transition for shadow and transform
              }}
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

EventListing.propTypes = {
  className: PropTypes.string,
};

export default EventListing;
