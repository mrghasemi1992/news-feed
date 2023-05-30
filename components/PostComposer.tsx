'use client';

import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PostComposer = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    toast.success('Post was successfully created.');
  };

  return (
    <div className="relative">
      <textarea
        placeholder="Share your knowledge..."
        rows={5}
        className="w-full bg-gray-100 rounded-lg resize-none outline-none p-4 text-sm"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div
        className={`absolute right-4 bottom-4 ${
          text ? 'bg-indigo-500' : 'bg-gray-300'
        } rounded-full p-2 inline-flex items-center justify-center cursor-pointer`}
        onClick={handleSubmit}
      >
        <PaperAirplaneIcon className="text-white w-4 h-4" />
      </div>
      <Toaster />
    </div>
  );
};

export default PostComposer;
