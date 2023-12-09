import React from "react";

const IndexPage = () => {
  const pageStyle = {
    backgroundColor: "#000", // Black background color
    color: "#fff",
  };

  const headerStyle = {
    backgroundColor: "#000", // Black background color
    color: "#00ff00", // Neon green text color
    padding: "1rem",
    textAlign: "left",
  };

  const sectionContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1rem",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "right",
    padding: "0.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#00ff00", // Neon green button color
    color: "#000", // Black text color
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const sectionStyle = {
    margin: "2rem 0",
    padding: "1rem",
    textAlign: "Center",

    textAlign: "center",
    borderRadius: "7px", // Rounded corners
    padding: "2rem",
    flex: 1, // Takes up the available space
    margin: "0 0.2rem", // Add some spacing between sections
  };

  const neonGreenGradientStyle = {
    background: "linear-gradient(to bottom, #00ff00, #007700)", // Neon green gradient
    color: "#fff", // White text color
  };

  const imageStyle = {
    maxWidth: "100%", // Ensure the image does not exceed its container width
    marginTop: "1rem", // Add some spacing between the text and the image
  };

  const h1 = {
    textAlign: "Center",
  };

  const statContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2rem",
  };

  const statBoxStyle = {
    textAlign: "center",
  };

  const neonTextStyle = {
    color: "#00ff00", // Neon green text color
  };

  const neonGreenStyle = {
    color: "#00ff00", // Neon green text color
  };

  const section1Style = {
    ...sectionStyle,
    ...neonGreenGradientStyle,
  };

  const section2Style = {
    ...sectionStyle,
    background: "linear-gradient(to bottom, #001100, #007700)", // Neon green gradient
    color: "#fff", // White text color
  };

  const sublineStyle = {
    fontSize: "14px",
    color: "#888", // Subline text color
  };

  const footerStyle = {
    marginTop: "2rem",
    textAlign: "center",
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Density</h1>

        <nav style={navStyle}>
          <a href="#career">Career</a>
          <a href="#blogs">Blogs</a>
          <a href="#leaderboard">Leaderboard</a>
          <a href="#fees">Fees</a>
          <button style={buttonStyle}>Get Started</button>
        </nav>
      </header>

      <section style={sectionStyle}>
        <h1>It’s time to trade, </h1>
        <h1>
          the <span style={neonGreenStyle}>future.</span>
        </h1>
        <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fbackgrounds%2Fcolors%2Fgradient&psig=AOvVaw1Al809t69QTqYHqAjZoe4D&ust=1702113481284000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODDjbrB_4IDFQAAAAAdAAAAABAI" // Replace with the actual URL or path to your image
          alt="About Us Image"
          style={imageStyle}
        />
      </section>
      <div style={statContainerStyle}>
        <div style={statBoxStyle}>
          <div style={neonTextStyle}>00%</div>
          <p style={sublineStyle}>Conversion Fee</p>
        </div>
        <div style={statBoxStyle}>
          <div style={neonTextStyle}>500 Mn+</div>
          <p style={sublineStyle}>Lifetime Volume Traded</p>
        </div>
        <div style={statBoxStyle}>
          <div style={neonTextStyle}>250+</div>
          <p style={sublineStyle}>Total Tradable Pairs</p>
        </div>
        <div style={statBoxStyle}>
          <div style={neonTextStyle}>15,000+</div>
          <p style={sublineStyle}>Traders</p>
        </div>
      </div>
      <section style={sectionStyle}>
        <h1>
          Trade more. <span style={neonGreenStyle}>Pay Less.</span>
        </h1>
      </section>
      <div style={sectionContainerStyle}>
        <div style={section2Style}>
          <h2>Density</h2>
          <p style={neonTextStyle}>0.02</p>
          <p>Maker Fees</p>
          <p style={neonTextStyle}>0.04</p>
          <p>Taker Fees</p>
        </div>
        <div style={section1Style}>
          <h2>Coin DCX</h2>
          <p style={neonTextStyle}>0.025</p>
          <p>Maker Fees</p>
          <p style={neonTextStyle}>0.07</p>
          <p>Taker Fees</p>
        </div>
        <div style={section2Style}>
          <h2>Density</h2>
          <p style={neonTextStyle}>0.02</p>
          <p>Maker Fees</p>
          <p style={neonTextStyle}>0.04</p>
          <p>Taker Fees</p>
        </div>
      </div>
      <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>

      <section style={sectionStyle}>
        <h2>Contact Us</h2>
        <p>Reach out to us at: your@email.com</p>
      </section>
      <footer style={footerStyle}>
        <p>Copyright © 2023 Your n Company</p>
      </footer>
    </div>
  );
};

export default IndexPage;
