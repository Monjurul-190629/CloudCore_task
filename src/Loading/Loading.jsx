import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
