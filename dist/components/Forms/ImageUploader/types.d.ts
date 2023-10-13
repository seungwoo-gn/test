import React, { SetStateAction } from "react";
interface ImageUploaderProps {
    selectedImage: File | null;
    setSelectedImage: React.Dispatch<SetStateAction<File | null>>;
    body?: React.ReactNode;
    width?: number;
    height?: number;
    handleUpload?: () => void;
    handleCancel?: () => void;
    isProgress?: boolean;
    progressPercent?: number;
}
export type { ImageUploaderProps };
