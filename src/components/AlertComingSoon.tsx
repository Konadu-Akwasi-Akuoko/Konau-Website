import React, { useEffect, useState } from "react";

function AlertComingSoon() {
  const [isAlertOn, setIsAlertOn] = useState(true);
  const [canRemove, setCanRemove] = useState(false);

  useEffect(() => {
    if (!isAlertOn) {
      setTimeout(() => {
        setCanRemove(true);
      }, 500);
    }
  }, [isAlertOn]);

  return (
    <div
      className={
        // eslint-disable-next-line prefer-template
        (isAlertOn ? " " : " alert-remove ") +
        (canRemove ? " alert-hidden " : "") +
        "body__padding-horizontal alert"
      }
    >
      <p>Our website is almost ready, but not yet ready 😊</p>
      <p>Believe me I&apos;m preparing something special just for you 🤗</p>
      <button
        type="button"
        onClick={() => {
          setIsAlertOn(false);
        }}
      >
        Remove this message
      </button>
    </div>
  );
}

export default AlertComingSoon;
