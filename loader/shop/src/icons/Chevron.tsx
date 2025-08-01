import React from 'react';

export const Chevron:React.FC<{rotate:boolean}> = ({rotate = false}) => {
  
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${rotate ? 'rotate-chevron':'back-chevron'}`}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
  )
}
