// import PropTypes from "prop-types";

function AdviceSlip({ advice, handleClick, handleClickSave }) {
  return (
    <>
      <h3>Some Advice</h3>
      {/* <p>{advice.advice}</p> */}
      <p>{advice ? advice.advice : "Loading..."}</p>
      <button onClick={handleClick}>Get More Advice</button>
      <button onClick={handleClickSave}>Save to Favourties</button>
    </>
  );
}

export default AdviceSlip;

// AdviceSlip.propTypes = {
//     handleClickGetMoreAdvice: PropTypes.func,
//   };
  
