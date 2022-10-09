import { useState, useEffect } from "react";
const Alert = ({ message, success }) => {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, [6000]);
  }, []);
  return (
    <>
      <style jsx>
        {`
          .mainAlert {
            color: white;
            background: ${success ? "limegreen" : "red"};
            height: 50px;
            width: min(400px, 100vw);
            position: absolute;
            z-index: 9999;
            bottom: 10px;
            right: 10px;
            text-align: center;
            justify-content: space-between;
            display: flex;
            align-items: center;
            padding-inline: 1em;
            border-radius: 5px;
            animation: show 5s ease-in-out forwards;
            transform: translateX(450px);
            overflow: hidden;
          }
          @keyframes show {
            0%,
            100% {
              transform: translateX(450px);
            }
            10% {
              transform: translateX(-10px);
            }
            15% {
              transform: translateX(10px);
            }
            20%,
            80% {
              transform: translateX(0);
            }
          }
          .message {
            font-size: 1.3rem;
            position: relative;
            width: 100%;
          }
          .message::after {
            content: "";
            position: absolute;
            width: 110%;
            height: 2px;
            background: black;
            bottom: -12px;
            left: -10px;
            animation: load 4s ease-in-out forwards reverse;
          }
          @keyframes load {
            from {
              width: 0%;
            }
            to {
              width: 110%;
            }
          }
          span.X {
            font-weight: bold;
            font-size: 1.3rem;
            cursor: pointer;
          }
        `}
      </style>
      {Show && (
        <div className="mainAlert">
          <div className="message">{message}</div>
          <span
            className="X"
            onClick={() => {
              setShow(false);
            }}
          >
            X
          </span>
        </div>
      )}
    </>
  );
};

export default Alert;
