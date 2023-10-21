import React from 'react';

function Sign() {
  const labelStyle = {
    fontSize: '25px', // Adjust the size as needed
    fontWeight: 'bold', // You can adjust other styles as well
    marginBottom: '10px', // Add some spacing below the label
  };

  return (
    <div className="center">
      <form action="/" method="post">
        <label htmlFor="email" style={labelStyle}>SIGN UP FOR OUR DAILY INSIDER</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Sign;