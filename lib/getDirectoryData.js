import fs from 'fs';
import path from 'path';

export async function getDirectoryData(directoryPath) {
  const items = await fs.promises.readdir(directoryPath);

  const directoryData = await Promise.all(items.map(async (item) => {
    const itemPath = path.join(directoryPath, item);
    const isDirectory = (await fs.promises.lstat(itemPath)).isDirectory();

    if (isDirectory) {
      const children = await getDirectoryData(itemPath);

      return {
        id: item.replace(/\.md$/, ''),
        name: item,
        children,
      };
    } else if (path.extname(itemPath) === '.md') {
      return {
        id: item.replace(/\.md$/, ''),
        name: item,
        children: [],
      };
    }

    return null;
  }));

  return directoryData.filter(Boolean);
}
