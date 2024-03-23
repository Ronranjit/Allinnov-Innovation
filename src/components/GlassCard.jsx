import React from "react";
import back from "../assets/images/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg";

const GlassCard = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-[30rem] h-[30rem] glass">
        <div className="stack">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            className="rounded"
          />
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            className="rounded"
          />
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
