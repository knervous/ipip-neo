import React from "react";

const LoadingSpinnerDisplay = props => {
  let { className, loadingText } = props;
  return (
    <div className={className}>
      <div className="loading__content">
        <p>{loadingText}</p>
        <img src="/assets/gif/spinner.gif" alt="spinner" />
      </div>
    </div>
  );
};

export default LoadingSpinnerDisplay;
