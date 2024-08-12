import React from 'react';
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
      <div className="flex items-center text-gray-600 mb-4">
        <ArrowUpCircle className="w-5 h-5 mr-1" />
        <span>{story.points} points</span>
      </div>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        Read more
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default StoryCard;