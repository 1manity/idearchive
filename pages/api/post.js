import { promises as fs } from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

import markdownItPrism from 'markdown-it-prism';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typography: true,
    highlight: function (str, lang) {
        if (lang && Prism.languages[lang]) {
            try {
                return Prism.highlight(str, Prism.languages[lang], lang);
            } catch (__) {}
        }
        return ''; // 使用外部默认转义
    },
}).use(markdownItPrism);

export default async (req, res) => {
    // 获取查询参数中的路径
    const { path: queryPath } = req.query;

    if (!queryPath.endsWith('.md')) {
        res.status(400).json({ message: 'Invalid file path' });
        return;
    }

    try {
        const filePath = path.join(process.cwd(),'posts', queryPath);
        const fileContents = await fs.readFile(filePath, 'utf8');

        // 使用 markdown-it 将 markdown 文本转换为 HTML
        const contentHtml = md.render(fileContents);

        res.status(200).json({ content: contentHtml });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error reading file' });
    }
};
