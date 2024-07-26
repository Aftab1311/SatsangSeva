import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FirstFold1 from "../components/FirstFold1";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer1";

const EventListing1 = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[50px] leading-[normal] tracking-[normal] mq750:gap-[25px]">
        <FirstFold1 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-base text-black font-poppins">
          <div className="w-[1239px] flex flex-col items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[34px] pr-5 pl-[23px] box-border max-w-full text-21xl">
              <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    <span>{`List Your `}</span>
                    <span className="text-tomato">Event</span>
                  </h1>
                </div>
                <div className="relative text-base leading-[24px]">
                  Host your religious event and reach a wider audience
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[34px] box-border max-w-full text-left">
              <div className="flex-1 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.2)] rounded-xl bg-gainsboro-300 flex flex-col items-center justify-start pt-[66px] pb-[65px] pr-5 pl-[21px] box-border gap-[35px] max-w-full mq450:gap-[17px] mq450:pt-[43px] mq450:pb-[42px] mq450:box-border">
                <div className="w-[1239px] h-[460px] relative rounded-xl bg-gainsboro-300 hidden max-w-full" />
                <img
                  className="w-[270px] h-[270px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/add-image@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 px-10">
                  <div className="relative z-[1]">
                    <span>{`(Add At least 1 image) `}</span>
                    <span className="text-red">*</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[54px] pb-5 box-border max-w-full text-left text-sm font-roboto lg:pl-[27px] lg:pr-[27px] lg:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="w-[474px] flex flex-col items-start justify-start gap-[4px] max-w-full">
                    <div className="self-stretch relative leading-[20px] font-medium">
                      <span>{`Event Name `}</span>
                      <span className="text-red">*</span>
                    </div>
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                      placeholder="Enter Event Name"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                        "& .MuiInputBase-root": {
                          height: "36px",
                          backgroundColor: "#fff",
                          borderRadius: "6px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": {
                          color: "rgba(0, 0, 0, 0.5)",
                        },
                      }}
                    />
                  </div>
                  <div className="w-[474px] flex flex-col items-start justify-start gap-[4px] max-w-full">
                    <div className="self-stretch relative leading-[20px] font-medium">
                      <span>{`Event Links `}</span>
                      <span className="text-red">*</span>
                    </div>
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                      placeholder="Enter Event URL"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                        "& .MuiInputBase-root": {
                          height: "36px",
                          backgroundColor: "#fff",
                          borderRadius: "6px",
                          fontSize: "14px",
                        },
                        "& .MuiInputBase-input": {
                          color: "rgba(0, 0, 0, 0.5)",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[182px] max-w-full lg:gap-[91px] mq450:gap-[23px] mq750:gap-[45px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[308px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span className="whitespace-pre-wrap">{`Event Category  `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Event Category"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                          <div className="w-[215px] h-[60px] flex flex-col items-start justify-start gap-[4px]">
                            <div className="self-stretch relative leading-[20px] font-medium">
                              <span>{`Event Language `}</span>
                              <span className="text-red">*</span>
                            </div>
                            <div className="self-stretch flex-1 rounded-md bg-white flex flex-row items-start justify-start py-2 pr-2.5 pl-3 text-gray-700 border-[1px] border-solid border-gray-600">
                              <div className="self-stretch flex-1 relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                                Select Event Language
                              </div>
                              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 ml-[-10.5px]">
                                <img
                                  className="w-2.5 h-[4.6px] relative z-[1]"
                                  alt=""
                                  src="/group-111.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch relative leading-[20px] font-medium">
                            <span>{`Event Performer Name `}</span>
                            <span className="text-red">*</span>
                          </div>
                        </div>
                        <div className="w-[215px] flex flex-col items-start justify-start gap-[4px] ml-[-215.5px]">
                          <div className="self-stretch relative leading-[20px] font-medium">
                            <span>{`Expected Attendees `}</span>
                            <span className="text-red">*</span>
                          </div>
                          <div className="rounded-md bg-white flex flex-row items-start justify-start py-[3px] pr-[3px] pl-[11px] text-gray-700 border-[1px] border-solid border-gray-600">
                            <div className="h-[23px] w-[179px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                              <div className="w-[191px] h-5 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">{`Number of Attendees `}</div>
                            </div>
                            <img
                              className="self-stretch w-5 relative max-h-full min-h-[26px] z-[1]"
                              alt=""
                              src="/group-239.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Performer Name"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Add Performer Sponsor `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-gainsboro-400 box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full text-center border-[1px] border-solid border-gray-600">
                        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{`Add `}</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Host Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-white box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full border-[1px] border-solid border-gray-600">
                        <input
                          className="w-full [border:none] [outline:none] font-roboto text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-gray-700 text-left inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[250px] max-w-full p-0"
                          placeholder="Enter Host Name (Pre Filled)"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Host Contact Number (Whatsapp) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Host Contact no."
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Sponsor Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Sponsor Name"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Add Sponsor `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-gainsboro-400 box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full text-center border-[1px] border-solid border-gray-600">
                        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">{`Add `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[308px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Location (Google Map URL) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter google map URL"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Address (Line 1) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Event Location"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Address (Line 2)/Landmark `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Event State"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`State `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Event City"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`City `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-9 font-roboto text-sm text-gray-700"
                        placeholder="Enter Location Pin code"
                        variant="outlined"
                        sx={{
                          "& fieldset": { borderColor: "rgba(0, 0, 0, 0.1)" },
                          "& .MuiInputBase-root": {
                            height: "36px",
                            backgroundColor: "#fff",
                            borderRadius: "6px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                          },
                        }}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Pin Code `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <FormControl
                        className="self-stretch h-9 font-roboto text-sm text-gray-700"
                        variant="standard"
                        sx={{
                          borderColor: "#000",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "#fff",
                          borderRadius: "6px",
                          width: "100%",
                          height: "36px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "36px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.5)",
                            fontSize: 14,
                            fontWeight: "Regular",
                            fontFamily: "Roboto",
                            textAlign: "left",
                            p: "0 !important",
                            justifyContent: "center",
                          },
                        }}
                      >
                        <InputLabel color="secondary" />
                        <Select
                          color="secondary"
                          disableUnderline
                          displayEmpty
                          IconComponent="null"
                        >
                          <MenuItem>Select Event Starting Date</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="self-stretch h-[60px]">
                      <DatePicker
                        value={frameDateTimePickerValue}
                        onChange={(newValue) => {
                          setFrameDateTimePickerValue(newValue);
                        }}
                        sx={{
                          fieldset: {
                            borderColor: "transparent",
                            borderTopWidth: 0,
                            borderRightWidth: 0,
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                          },
                          "&:hover": {
                            fieldset: { borderColor: "transparent" },
                            ".MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                          },
                          "& input::placeholder": { fontSize: 14 },
                          input: {
                            fontSize: 14,
                            textAlign: "left",
                            fontWeight: "500",
                          },
                          "& .MuiInputBase-root": {
                            height: 60,
                            gap: "8px",
                            flexDirection: { flexDirection: "row" },
                          },
                        }}
                        slotProps={{
                          textField: {
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            helperText: "Start Time *",
                            placeholder: "Start Time *",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img
                                width="11.3px"
                                height="14.2px"
                                src="/group-2.svg"
                              />
                            ),
                          },
                        }}
                        label="Start Date *"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[43.5px] mq750:flex-wrap mq750:gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[140px]">
                        <div className="self-stretch relative leading-[20px] font-medium">
                          <span>{`End Date `}</span>
                          <span className="text-red">*</span>
                        </div>
                        <div className="self-stretch h-9 rounded-md bg-white box-border flex flex-row items-start justify-start py-2 pr-2.5 pl-3 text-gray-700 border-[1px] border-solid border-gray-600">
                          <div className="self-stretch flex-1 relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                            Select Ending Date
                          </div>
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-11.5px]">
                            <img
                              className="w-[11.3px] h-[14.2px] relative z-[1]"
                              alt=""
                              src="/group-3.svg"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[140px]">
                        <div className="self-stretch relative leading-[20px] font-medium">
                          <span>{`End Time `}</span>
                          <span className="text-red">*</span>
                        </div>
                        <div className="self-stretch rounded-md bg-white flex flex-row items-start justify-start py-[3px] pr-[3px] pl-[11px] text-gray-700 border-[1px] border-solid border-gray-600">
                          <div className="h-[23px] w-[179px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                            <div className="w-[191px] h-5 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">{`Select Ending time `}</div>
                          </div>
                          <img
                            className="self-stretch w-5 relative max-h-full min-h-[26px] z-[1]"
                            alt=""
                            src="/group-239.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[34px] box-border max-w-full text-left text-darkorange-200 font-roboto">
              <div className="w-[426px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="relative leading-[24px] font-medium">
                    48 hours long event
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-start justify-start max-w-full cursor-pointer text-white"
                  onClick={onButtonContainerClick}
                >
                  <div className="flex-1 rounded-lg bg-tomato flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap max-w-full">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                      List Event
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[209px] relative text-45xl text-gray-500">
              <div className="absolute top-[0px] left-[0px] box-border w-[1237px] h-px border-t-[1px] border-solid border-gainsboro-400" />
              <h1 className="m-0 absolute top-[17px] left-[39px] text-inherit font-semibold font-inherit inline-block w-[1152px] mq450:text-19xl mq1050:text-32xl">{`Sit back and watch your event come to life `}</h1>
              <img
                className="absolute top-[0px] left-[609px] w-[15px] h-[17px] overflow-hidden z-[1]"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-[43px] box-border max-w-full text-5xl lg:pl-[21px] lg:box-border">
              <div className="flex-1 flex flex-col items-end justify-start min-h-[105px] max-w-full">
                <h2 className="m-0 self-stretch h-[105px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-lgi">
                  Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.t
                </h2>
                <div className="w-[1038px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-80px] text-left text-xs text-white">
                  <div className="flex flex-row items-start justify-start gap-[2px] z-[1]">
                    <div className="relative leading-[20px] inline-block min-w-[112px]">
                      Change Language
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      loading="lazy"
                      alt=""
                      src="/down.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    </LocalizationProvider>
  );
};

export default EventListing1;