import React from 'react'

export default function FancyText() {
    const FancyText = () => {
    const textArray = [
        "South Delhi",
        'Chattarpur',
        'Mandi',
        // Add more fancy texts as needed
      ];
  return (
    
    
    {textArray:map((text, index) => (
        <span key={index}>
          {text}
        </span>
      ))}
)}}
