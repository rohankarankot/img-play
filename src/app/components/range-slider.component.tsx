// src/components/RangeSlider.tsx
import React, { useState } from "react"

const RangeSlider = ({ value, onChange }: any) => {
  return (
    <div className="w-3/4 mx-auto my-4">
      <p className="text-center mb-2">{value ?? 0}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full h-5 bg-gray-700 appearance-none cursor-pointer rounded-xl"
      />
    </div>
  )
}

export default RangeSlider
