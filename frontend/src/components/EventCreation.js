import CreateEvents from "./CreateEvents";
import PropTypes from "prop-types";

const EventCreation = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full shrink-0 text-left text-15xl text-black font-dm-sans ${className}`}
    >
      <CreateEvents listYourOwnEvent="List your own Event " />
    </section>
  );
};

EventCreation.propTypes = {
  className: PropTypes.string,
};

export default EventCreation;
