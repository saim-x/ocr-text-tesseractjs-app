// src/components/MarkdownRenderer.tsx

import React from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
    markdownText: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownText }) => {
    const htmlContent = marked.parse(markdownText);

    return (
        <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
};

export default MarkdownRenderer;
