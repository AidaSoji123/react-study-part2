const CheckNum = ({ num }) => {
  {
    num > 0 ? <h1>Positive</h1> : num < 0 ? <h1>Negative</h1> : <h1>Zero</h1>;
  }
};

export default CheckNum;
