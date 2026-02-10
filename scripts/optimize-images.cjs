const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  'arjun-bishnoi-profile.png',
  'favicon.png'
];

async function optimize(filename) {
  const inputPath = path.join(__dirname, '../public', filename);
  const tempPath = path.join(__dirname, '../public', `optimized-${filename}`);

  if (!fs.existsSync(inputPath)) {
    console.log(`File not found: ${inputPath}`);
    return;
  }

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing ${filename}: ${metadata.width}x${metadata.height}, size: ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`);

    // Resize if larger than 800px width
    if (metadata.width > 800) {
      console.log(`Resizing to 800px width...`);
      await sharp(inputPath)
        .resize(800)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tempPath);
      
      const newSize = fs.statSync(tempPath).size;
      console.log(`New size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
      
      fs.renameSync(tempPath, inputPath);
      console.log(`Optimized ${filename} successfully.`);
    } else {
      console.log(`${filename} is already small enough.`);
    }
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error);
  }
}

async function main() {
  for (const img of imagesToOptimize) {
    await optimize(img);
  }
}

main();
