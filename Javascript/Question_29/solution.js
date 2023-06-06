function getFileExtension(filename) {
    const parts = filename.split('.');
    
    return parts[parts.length - 1];
  }
  
  const filename = prompt('Enter the filename:');
  const extension = getFileExtension(filename);
  console.log(`The file extension is: ${extension}`);
  