import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

function getDirectoryData(directoryPath, basePath = "") {
    const result = [];
    const entities = fs.readdirSync(directoryPath, { withFileTypes: true });

    entities.forEach((entity) => {
        const entityPath = path.join(directoryPath, entity.name);
        const relativeEntityPath = basePath + '/' + entity.name;

        if (entity.isDirectory()) {
            const children = getDirectoryData(entityPath, relativeEntityPath);
            result.push({
                id: relativeEntityPath,
                title: entity.name,
                category: "dictionary",
                children: children,
            });
        } else if (entity.isFile() && entity.name.endsWith('.md')) {
            const fileContents = fs.readFileSync(entityPath, 'utf8');
            const { data } = grayMatter(fileContents);
            result.push({
                id: relativeEntityPath,
                title: entity.name.replace('.md', ''),
                category: "md",
                children: [],
            });
        }
    });
    return result;
}

export default function handler(req, res) {
    const pagesDir = path.join(process.cwd(), 'posts');
    const directoryData = getDirectoryData(pagesDir);
    res.status(200).json(directoryData);
}
