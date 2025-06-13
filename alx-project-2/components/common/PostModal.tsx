import React, { useState } from 'react';
import { CardProps } from '../../interfaces';

interface PostModalProps {
  onClose: () => void;
  onSave: (newPost: CardProps) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium">Content</label>
            <textarea
              className="border p-2 w-full rounded"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
