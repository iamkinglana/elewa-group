import React from 'react'
import "./sharedButton.css";

const Button: React.FC = () => {
  return (
    <div className="shared-button">
    <div className="text">Unlock your potential</div>
    <button className="button-container"></button>
  </div>
  )
}

export default Button
