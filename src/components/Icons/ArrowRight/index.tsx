"use client";

const ArrowRight: React.FC<{ color: string; }> = (props): React.ReactElement => {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M8.25 4.5L15.75 12L8.25 19.5" 
        stroke={props.color ? props.color : "black"}
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};

export default ArrowRight;