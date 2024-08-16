import React, { useState } from 'react';
import { Button } from '../ui/button';
import MarkdownRenderer from '../MarkdownRenderer'; // Import MarkdownRenderer component

const TextCard = ({ t, i }: { t: string, i: number }) => {
    const [buttonText, setButtonText] = useState('Copy');

    const copyToClipBoard = (txt: string) => {
        navigator.clipboard.writeText(txt);
        setButtonText('Copied!');
        setTimeout(() => setButtonText('Copy'), 2000); // Reset to "Copy" after 2 seconds
    };

    return (
        <div className="">
            <div className="flex w-full items-center justify-between mb-5 px-5">
                <p className="text-xl font-[600]"> {`${i + 1}. `}{new Date().toUTCString()} </p>
                <Button onClick={() => copyToClipBoard(t)}>
                    {buttonText}
                </Button>
            </div>
            <div className="mt-8 bg-[#1e1e1e] p-5 rounded-xl">
                <MarkdownRenderer markdownText={t} />
            </div>
        </div>
    );
};

export default TextCard;


//without markdown, text area approach
// import React, { useState } from 'react';
// import { Button } from '../ui/button';

// const TextCard = ({ t, i }: { t: string, i: number }) => {
//     const [buttonText, setButtonText] = useState('Copy');

//     const copyToClipBoard = (txt: string) => {
//         navigator.clipboard.writeText(txt);
//         setButtonText('Copied!');
//         setTimeout(() => setButtonText('Copy'), 2000); // Reset to "Copy" after 2 seconds
//     };

//     return (
//         <div className="">
//             <div className="flex w-full items-center justify-between mb-5 px-5">
//                 <p className="text-xl font-[600]"> {`${i + 1}. `}{new Date().toUTCString()} </p>
//                 <Button onClick={() => copyToClipBoard(t)}>
//                     {buttonText}
//                 </Button>
//             </div>
//             <textarea
//                 className="w-full p-5 min-h-[70vh] mt-8 bg-[#2c2c2c] rounded-xl"
//                 defaultValue={t}
//             />
//         </div>
//     );
// };

// export default TextCard;
