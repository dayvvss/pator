import React, { useState } from 'react';
import { Button, Typography, Box, IconButton } from '@mui/material';
import CloudUploadIcon from 'mdi-material-ui/CloudUpload';
import CloseIcon from 'mdi-material-ui/Close';
import { BoxShadow } from 'mdi-material-ui';

function FileUploader({ onFileUpload, onFileRemove }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFileType(getFileType(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const getFileType = (file) => {
    if (file.type.startsWith('image/')) {
      return 'image';
    } else if (file.type.startsWith('video/')) {
      return 'video';
    }
    return null;
  };

  const handleRemoveFile = () => {
    setPreviewUrl(null);
    setFileType(null);
    onFileRemove();
  };

  return (
    <Box sx={{ mt: 6, px: 3 }}>
      {!previewUrl && (
        <>
          <input
            accept="image/*,video/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
              fullWidth
            >
              Upload File
            </Button>
          </label>
        </>
      )}
      
      {previewUrl && (
        <Box sx={{ position: 'relative', mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', boxShadow:4, p:4 }}>
          <IconButton
            onClick={handleRemoveFile}
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'background.paper' },
            }}
          >
            <CloseIcon />
          </IconButton>
          {fileType === 'image' ? (
            <img src={previewUrl}  alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'  }} />
          ) : (
            <video src={previewUrl} controls style={{ maxWidth: '100%', maxHeight: '100%' }} />
          )}
        </Box>
      )}
    </Box>
  );
}

export default FileUploader;