import React from 'react';
import HackerNewsList from '../components/HackerNewsList';
import SearchBar from '../components/SearchBar';
import { useHackerNewsStories } from '../hooks/useHackerNewsStories';

const Index = () => {
  const { stories, isLoading, searchStories } = useHackerNewsStories();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Hacker News Top 100</h1>
        <SearchBar onSearch={searchStories} />
        <HackerNewsList stories={stories} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Index;