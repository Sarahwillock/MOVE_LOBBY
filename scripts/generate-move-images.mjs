import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const imagesDirectory = path.join(
  root,
  'public',
  'images'
);

const outputFile = path.join(
  root,
  'src',
  'move',
  'moveImages.ts'
);

const allowedExtensions = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.avif'
]);

function getImages(directory, baseDirectory = directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true
  });

  const images = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      images.push(
        ...getImages(fullPath, baseDirectory)
      );

      continue;
    }

    const extension = path
      .extname(entry.name)
      .toLowerCase();

    if (!allowedExtensions.has(extension)) {
      continue;
    }

    const relativePath = path
      .relative(baseDirectory, fullPath)
      .split(path.sep)
      .join('/');

    images.push(`/images/${relativePath}`);
  }

  return images;
}

const images = getImages(imagesDirectory).sort();

const content = `
// ARQUIVO GERADO AUTOMATICAMENTE.
// NÃO EDITE MANUALMENTE.

export const moveImages = ${JSON.stringify(
  images,
  null,
  2
)} as const;
`;

fs.mkdirSync(path.dirname(outputFile), {
  recursive: true
});

fs.writeFileSync(
  outputFile,
  content.trimStart(),
  'utf8'
);

console.log(
  \`MOVE: ${images.length} imagens encontradas.\`
);
