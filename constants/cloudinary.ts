import type { StaticImageData } from 'next/image';

export const mapToCloudinary = (staticImage: StaticImageData, relativePath: string) => {
  if (!staticImage) return staticImage;

  let optimization = 'f_auto,q_auto/';
  let optimizedPath = relativePath;

  if (relativePath.endsWith('.svg')) {
    if (
      relativePath.includes('assets/images/howitworks/') ||
      relativePath.includes('assets/images/merchant/')
    ) {
      optimizedPath = relativePath.slice(0, -4) + '.png';
      optimization = 'f_auto,q_auto,w_2000/';
    } else {
      optimization = '';
    }
  }

  let hash = '';
  if (staticImage.src) {
    const cleanSrc = staticImage.src.split('?')[0];
    const filename = cleanSrc.substring(cleanSrc.lastIndexOf('/') + 1);
    const baseFilename = relativePath.substring(relativePath.lastIndexOf('/') + 1);
    const dotIndex = baseFilename.lastIndexOf('.');
    if (dotIndex !== -1) {
      const prefix = baseFilename.substring(0, dotIndex);
      const ext = baseFilename.substring(dotIndex);
      if (filename.startsWith(prefix + '.') && filename.endsWith(ext)) {
        hash = filename.substring(prefix.length + 1, filename.length - ext.length);
      }
    }
  }

  const query = hash ? `?v=${hash}` : '';
  return {
    ...staticImage,
    src: `https://res.cloudinary.com/dzyenrmzb/image/upload/${optimization}pointab-assets/${optimizedPath}${query}`,
  };
};
