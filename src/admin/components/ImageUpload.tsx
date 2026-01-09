import React, { useState, useRef } from "react";
import { BiX } from "react-icons/bi";
import { BsEye, BsUpload } from "react-icons/bs";
// import { Upload, X, Eye } from 'lucide-react';

interface ImageUploadProps {
  label: string;
  currentImage?: string;
  onImageChange: (file: File | null, preview: string | null) => void;
}

export function ImageUpload({
  label,
  currentImage,
  onImageChange,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageChange(file, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onImageChange(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="block text-white mb-2">{label}</label>

      {preview ? (
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden border border-gray-300 bg-gray-50">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setShowPreview(true)}
                className="bg-white text-gray-900 p-2 rounded-lg hover:bg-mold-yellow hover:text-white transition-colors"
              >
                <BsEye className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="bg-white text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                <BiX className="w-5 h-5" />
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mt-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            Replace image
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-deep-dark transition-all"
        >
          <BsUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <p className="text-muted-gray mb-1">Click to upload</p>
          <p className="text-shadow-muted-gray">PNG, JPG up to 10MB</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Preview Modal */}
      {showPreview && preview && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPreview(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <BiX className="w-8 h-8" />
            </button>
            <img
              src={preview}
              alt="Full preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
