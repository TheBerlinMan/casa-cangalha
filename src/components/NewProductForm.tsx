"use client"
import { useState, FormEvent } from 'react';
import { ProductFormData } from '@/types/product';

interface Props {
  onCancel: () => void;
}

export default function NewProductForm({ onCancel }: Props) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    description: '',
    images: [],
    artist: '',
    price: 0,
    isPublished: false,
  });

  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      // Clear form after successful submission
      setFormData({
        title: '',
        description: '',
        images: [],
        artist: '',
        price: 0,
        isPublished: false,
      });
      setImageUrl('');

      // Return to list view
      onCancel();
    } catch (error) {
      console.error('Error creating product:', error);
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
        <label htmlFor="description" className="block">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          className="w-full border rounded p-2 min-h-[150px]"
        />
      </div>

      <div>
        <label htmlFor="artist" className="block">Artist</label>
        <input
          type="text"
          id="artist"
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label htmlFor="price" className="block">Price ($)</label>
        <input
          type="number"
          id="price"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
          required
          className="w-full border rounded p-2"
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
          Publish Product
        </label>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Product
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