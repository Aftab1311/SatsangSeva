import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const SearchAndFilters = ({ className = "" }) => {
  return (
    <section
      className={`w-[1415px] flex flex-row items-start justify-center pt-0 px-5 pb-2.5 box-border max-w-full ${className}`}
    >
      <form className="m-0 w-[1221px] flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
        <div className="w-[1198px] flex flex-row items-start justify-start py-0 px-14 box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
          <div className="flex-1 shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 flex flex-row flex-wrap items-start justify-start py-[30px] px-12 box-border gap-[60px] min-h-[140px] max-w-full lg:gap-[30px] lg:pl-6 lg:pr-6 lg:box-border mq750:gap-[15px]">
            <div className="h-[140px] w-[1086px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[97px] z-[1]">
                Search Event
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  className="w-[126px] [border:none] [outline:none] inline-block font-dm-sans text-3xl bg-[transparent] h-[29px] relative font-bold text-white text-left p-0 z-[1] mq450:text-lg"
                  placeholder="Konser Jazz"
                  type="text"
                />
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[40px] z-[1]">
                Place
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <b className="relative text-3xl inline-block font-dm-sans text-white text-left min-w-[105px] z-[1] mq450:text-lg">
                  Indonesia
                </b>
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[37px] z-[1]">
                Time
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <FormControl
                  className="self-stretch h-[29px] font-dm-sans font-bold text-3xl text-white w-auto"
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "99.6551724137931%",
                    height: "29px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "29px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "29px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "29px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "29px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      fontSize: 22,
                      fontWeight: "Bold",
                      fontFamily: "DM Sans",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="10px"
                        height="5px"
                        src="/search-date-dropdown-icon.svg"
                        style={{}}
                      />
                    )}
                  >
                    <MenuItem>Any date</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px]">
          <div className="w-[255px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border mq1050:w-0">
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px] mq1050:hidden">
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
          </div>
          <div className="w-[544px] flex flex-row items-start justify-start gap-[20px] max-w-full">
            <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] gap-[20px]">
              <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
              <div className="relative text-sm font-medium font-dm-sans text-darkorange-200 text-left inline-block min-w-[68px] z-[1]">
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
            <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] gap-[20px]">
              <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
              <div className="relative text-sm font-medium font-dm-sans text-darkorange-200 text-left inline-block min-w-[74px] whitespace-nowrap z-[1]">
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
              <div className="relative text-sm font-medium font-dm-sans text-darkorange-200 text-left inline-block min-w-[91px] whitespace-nowrap z-[1]">
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
      </form>
    </section>
  );
};

SearchAndFilters.propTypes = {
  className: PropTypes.string,
};

export default SearchAndFilters;
