import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography } from '@mui/material';

function Dropzone({ onFileAccepted }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => onFileAccepted(acceptedFiles[0]),
  });

  return (
    <Box {...getRootProps()} sx={{ border: '2px dashed #1976d2', p: 2, textAlign: 'center', mb: 2 }}>
      <input {...getInputProps()} />
      <Typography>
        {isDragActive ? 'Drop the file here...' : 'Drag & drop a file here, or click to select'}
      </Typography>
    </Box>
  );
}

export default Dropzone;
