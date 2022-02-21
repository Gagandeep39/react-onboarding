import React from 'react';

interface SummaryTextProps {
  heading: string;
  subheading: string;
}
const SummaryText = (props: SummaryTextProps) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      <p>{props.subheading}</p>
    </div>
  );
};

export default SummaryText;
