import React, { useState } from "react";

interface Props {
  description: string;
  limit?: number;
}

const ReadMore: React.FC<Props> = ({ description, limit = 100 }) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!isExpanded);

  const shortDescription = description.substring(0, limit);
  const expandedDescription = description.substring(limit);

  return (
    <div className="font-XDPrime">
      {isExpanded ? (
        <p>
          {description}
          <button
            onClick={toggleExpanded}
            className="underline font-bold hover:text-prime-2 "
          >
            Read Less
          </button>
        </p>
      ) : (
        <p>
          {shortDescription}
          <button
            onClick={toggleExpanded}
            className="underline font-bold hover:text-prime-2 "
          >
            Read More
          </button>
        </p>
      )}
    </div>
  );
};

export default ReadMore;
