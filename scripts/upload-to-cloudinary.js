const fs = require('fs');
const path = require('path');
const { v2: cloudinary } = require('cloudinary');
const dotenv = require('dotenv');

// Load environment variables from .env.local
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.error("Error: .env.local file not found!");
  process.exit(1);
}

// Configure Cloudinary
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("Error: Missing Cloudinary credentials in .env.local!");
  console.error("Please ensure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET are set.");
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true
});

console.log(`Configured Cloudinary for cloud: ${cloudName}`);

const rootDir = path.resolve(__dirname, '..');
const assetsImagesDir = path.join(rootDir, 'assets', 'images');
const assetsIconsDir = path.join(rootDir, 'assets', 'icons');

// Helper to recursively get all image/icon files
function getFiles(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, list);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'].includes(ext)) {
        list.push(name);
      }
    }
  }
  return list;
}

const allFiles = [
  ...getFiles(assetsImagesDir),
  ...getFiles(assetsIconsDir)
];

console.log(`Found ${allFiles.length} files to upload.`);

async function uploadFiles() {
  const uploadResults = [];
  const rootFolderName = "pointab-assets";

  for (let i = 0; i < allFiles.length; i++) {
    const filePath = allFiles[i];
    const relativePath = path.relative(rootDir, filePath);
    const normalizedPath = relativePath.replace(/\\/g, '/'); // Normalize windows path
    
    const ext = path.extname(filePath);
    const relativeDir = path.dirname(normalizedPath); // e.g. "assets/images/home"
    const baseName = path.basename(normalizedPath, ext); // e.g. "landing1"
    
    // Match the folder structure under pointab-assets
    // public_id: e.g. "assets/images/home/landing1"
    const publicId = `${relativeDir}/${baseName}`;
    
    console.log(`[${i + 1}/${allFiles.length}] Uploading ${normalizedPath} as "${rootFolderName}/${publicId}"...`);
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: rootFolderName,
        public_id: publicId,
        resource_type: "auto",
        overwrite: true,
        invalidate: true
      });
      console.log(`   Success: ${result.secure_url}`);
      uploadResults.push({
        localPath: normalizedPath,
        cloudinaryUrl: result.secure_url,
        publicId: result.public_id
      });
    } catch (err) {
      console.error(`   Failed to upload ${normalizedPath}:`, err.message);
    }
  }
  
  console.log("\n--- Upload Complete ---");
}

uploadFiles();
