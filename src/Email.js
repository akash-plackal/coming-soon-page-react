import React from "react";
import "./email.css";

export default function Email() {
  return (
    <div className="email">
      <form>
        <input type="email" name="email" placeholder="Email Address" />
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              // stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
