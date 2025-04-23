import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="flex items-center justify-center min-h-[40vh] px-4">
      <div className="flex items-center gap-3 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 border border-red-300 dark:border-red-700 px-6 py-4 rounded-xl shadow-md">
        <AlertTriangle className="w-6 h-6" />
        <span className="text-base font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Error;
