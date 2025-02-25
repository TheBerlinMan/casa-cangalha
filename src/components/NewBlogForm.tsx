"use client"
import { useState, FormEvent } from 'react';
import { BlogFormData } from '@/types/blog';

interface Props {
  onCancel: () => void;
}

export default function NewBlogForm({ onCancel }: Props) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    body: '',
    images: [],
    isPublished: false,
  });

  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog post');
      }

      // Clear form after successful submission
      setFormData({
        title: '',
        body: '',
        images: [],
        isPublished: false,
      });
      setImageUrl('');

      // Return to list view
      onCancel();
    } catch (error) {
      console.error('Error creating blog post:', error);
      // Handle error (show error message to user)
    }
  };

  const addImage = () => {
    if (imageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, imageUrl.trim()]
      });
      setImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...formData.images];
    updatedImages.splice(index, 1);
    setFormData({
      ...formData,
      images: updatedImages
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="body" className="block">Content</label>
        <textarea
          id="body"
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          required
          className="w-full border rounded p-2 min-h-[200px]"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block">Add Image URL</label>
        <div className="flex gap-2">
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 border rounded p-2"
            placeholder="Enter image URL"
          />
          <button
            type="button"
            onClick={addImage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>

      {formData.images.length > 0 && (
        <div>
          <label className="block mb-2">Images</label>
          <div className="space-y-2">
            {formData.images.map((img, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex-1 border rounded p-2 truncate">{img}</div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="text-red-600 hover:text-red-900"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.isPublished}
            onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
            className="mr-2"
          />
          Publish Blog Post
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Blog Post
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
} 