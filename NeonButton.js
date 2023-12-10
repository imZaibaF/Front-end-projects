// src/components/NeonButton.js
import styled from "styled-components";

const NeonButton = styled.button`
  background-color: #00ff00; /* Neon Green */
  color: #000;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  textAlign: "center",
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); /* Neon Green Box Shadow */

  &:hover {
    background-color: #00cc00; /* Slightly darker green on hover */
  }
`;

export default NeonButton;
