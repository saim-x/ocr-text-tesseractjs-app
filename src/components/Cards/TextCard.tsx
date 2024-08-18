//WORKING COMPONENT
// import React, { useState } from 'react';
// import { Button } from '../ui/button';
// import MarkdownRenderer from '../MarkdownRenderer'; // Import MarkdownRenderer component

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
//             <div className="mt-8 bg-[#1e1e1e] p-5 rounded-xl">
//                 <MarkdownRenderer markdownText={t} />
//             </div>
//         </div>
//     );
// };

// export default TextCard;


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

//SECTIONS THING BUT FAILED
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import MarkdownRenderer from "@/components/MarkdownRenderer"; // Assuming you have a MarkdownRenderer component

// const TextCard = ({ t, i }: { t: string, i: number }) => {
//     const [buttonText, setButtonText] = useState("Copy");

//     const copyToClipBoard = (txt: string) => {
//         navigator.clipboard.writeText(txt);
//         setButtonText("Copied!");
//         setTimeout(() => setButtonText("Copy"), 2000); // Reset to "Copy" after 2 seconds
//     };

//     // Parsing the AI response into sections
//     const parseResponse = (text: string) => {
//         const sections = {
//             score: "",
//             strengths: "",
//             improvement: "",
//             recommendations: "",
//         };

//         // Match overall score
//         const scoreMatch = text.match(/Overall Score:\s*(\d+\/\d+)/);
//         if (scoreMatch) sections.score = scoreMatch[1].trim();
//         console.log("Score Match:", scoreMatch);

//         // Match strengths section
//         const strengthsMatch = text.match(/Strengths:\s*([\s\S]*?)(Areas of Improvement|Specific Recommendations|$)/);
//         if (strengthsMatch) sections.strengths = strengthsMatch[1].trim().replace(/\*\*/g, '').trim();
//         console.log("Strengths Match:", strengthsMatch);

//         // Match areas of improvement section
//         const improvementMatch = text.match(/Areas of Improvement:\s*([\s\S]*?)(Specific Recommendations|$)/);
//         if (improvementMatch) sections.improvement = improvementMatch[1].trim().replace(/\*\*/g, '').trim();
//         console.log("Improvement Match:", improvementMatch);

//         // Match specific recommendations section
//         const recommendationsMatch = text.match(/Specific Recommendations:\s*([\s\S]*)/);
//         if (recommendationsMatch) sections.recommendations = recommendationsMatch[1].trim().replace(/\*\*/g, '').trim();
//         console.log("Recommendations Match:", recommendationsMatch);

//         return sections;
//     };





//     const { score, strengths, improvement, recommendations } = parseResponse(t);

//     return (
//         <div className="my-5 p-5 bg-[#1e1e1e] rounded-xl shadow-lg">
//             <div className="flex w-full items-center justify-between mb-5 px-5">
//                 <p className="text-xl font-[600]">{`${i + 1}. `}{new Date().toUTCString()}</p>
//                 <Button onClick={() => copyToClipBoard(t)}>{buttonText}</Button>
//             </div>

//             {/* Score Container */}
//             {score && (
//                 <div className="p-5 mb-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg text-white text-2xl font-bold text-center">
//                     Overall Score: {score}
//                 </div>
//             )}

//             {/* Strengths Section */}
//             {strengths && (
//                 <div className="mb-5">
//                     <h2 className="text-xl font-bold text-green-300">Strengths:</h2>
//                     <div className="p-4 mt-2 bg-[#2a2a2a] rounded-lg">
//                         <MarkdownRenderer markdownText={strengths} />
//                     </div>
//                 </div>
//             )}

//             {/* Areas of Improvement Section */}
//             {improvement && (
//                 <div className="mb-5">
//                     <h2 className="text-xl font-bold text-yellow-300">Areas of Improvement:</h2>
//                     <div className="p-4 mt-2 bg-[#2a2a2a] rounded-lg">
//                         <MarkdownRenderer markdownText={improvement} />
//                     </div>
//                 </div>
//             )}

//             {/* Specific Recommendations Section */}
//             {recommendations && (
//                 <div>
//                     <h2 className="text-xl font-bold text-red-300">Specific Recommendations:</h2>
//                     <div className="p-4 mt-2 bg-[#2a2a2a] rounded-lg">
//                         <MarkdownRenderer markdownText={recommendations} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TextCard;


import React, { useState } from 'react';
import { Button } from '../ui/button';
import MarkdownRenderer from '../MarkdownRenderer';

const TextCard = ({ t, i }: { t: string, i: number }) => {
    const [buttonText, setButtonText] = useState('Copy');

    const copyToClipBoard = (txt: string) => {
        navigator.clipboard.writeText(txt);
        setButtonText('Copied!');
        setTimeout(() => setButtonText('Copy'), 2000); // Reset to "Copy" after 2 seconds
    };




    const extractScoreAndText = (text: string) => {
        // Regular expression to match **Overall Score:**, **Score:**, or ## Overall Score: and capture the score
        const scoreRegex = /(?:\*\*|##)\s*(Overall Score:|Score:)\s*(\d+\/10)\s*/;

        // Match the score
        const match = text.match(scoreRegex);

        if (match) {
            // Extracted score and the remaining text
            const score = match[2].trim();
            return score;
        }

        // Return a debug message if no score is found
        return { score: "Debug - No Score Found", updatedText: text };
    };



    const score = extractScoreAndText(t);


    const getBackgroundColor = (score: string | null) => {
        if (!score) return '#2c2c2c'; // Default color if no score or invalid format

        const parts = score.split('/');
        if (parts.length !== 2) return '#2c2c2c'; // Default color if the score format is invalid

        const numerator = parseFloat(parts[0].trim());
        const denominator = parseFloat(parts[1].trim());

        if (isNaN(numerator) || isNaN(denominator) || denominator === 0) return '#2c2c2c'; // Default color if numbers are invalid

        const scoreValue = numerator / denominator;

        if (scoreValue >= 0.8) return '#4CAF50'; // Green for high scores
        if (scoreValue >= 0.5) return '#FFC107'; // Yellow for medium scores
        return '#F44336'; // Red for low scores
    };

    console.log('Debug - Score Data:', score); // Debug statement

    const extractAndRemoveStrengths = (text: string) => {
        // Regular expression to match **Strengths:** or ## Strengths and capture its content until the next section
        const strengthsRegex = /(?:\*\*|##)\s*Strengths\s*([\s\S]*?)(?=(?:\*\*|##)\s*(Areas of Improvement|Recommendations)|\n(?:\*\*|##))/;

        // Match the content
        const match = text.match(strengthsRegex);

        // Extracted content and remaining text
        const strengthsContent = match ? match[1].trim() : null;
        const updatedText = strengthsContent ? text.replace(strengthsRegex, '').trim() : text;

        return {
            strengthsContent,
            updatedText
        };
    };

    const result = extractAndRemoveStrengths(t);
    // console.log("Orignal: ",t);
    // console.log('Strengths Content:', result.strengthsContent);
    // console.log('Updated Text:', result.updatedText);

    const extractAndRemoveAreasOfImprovement = (text: string) => {
        // Regular expression to match **Areas of Improvement:** or ## Areas of Improvement and capture its content until **Recommendations:** or next section
        const areasOfImprovementRegex = /(?:\*\*|##)\s*Areas of Improvement\s*([\s\S]*?)(?=(?:\*\*|##)\s*Recommendations|(?:\*\*|##)\s*Other Section|\n(?:\*\*|##))/;

        // Match the content
        const match = text.match(areasOfImprovementRegex);

        // Extracted content and remaining text
        const areasOfImprovementContent = match ? match[1].trim() : null;
        const updatedText = areasOfImprovementContent ? text.replace(areasOfImprovementRegex, '').trim() : text;

        return {
            areasOfImprovementContent,
            updatedText
        };
    };

    const result2 = extractAndRemoveAreasOfImprovement(result.updatedText);
    console.log('Orignal: ', t);
    // console.log('Areas of Improvement Content:', result2.areasOfImprovementContent);
    // console.log('Updated Text:', result2.updatedText);


    const extractAndRemoveRecommendations = (text: string) => {
        // Regular expression to match ## Recommendations and capture its content until the next header or end of text
        const recommendationsRegex = /(?:\*\*|##)\s*Recommendations?\s*([\s\S]*?)(?=(?:\n##|\n\*\*|$))/;

        // Match the content
        const match = text.match(recommendationsRegex);

        if (match) {
            // Extracted content and remaining text
            const recommendationsContent = match[1].trim();
            // Remove the recommendations section from the original text
            const updatedText = text.replace(recommendationsRegex, '').trim();

            return {
                recommendationsContent,
                updatedText
            };
        }

        // If no recommendations section is found
        return {
            recommendationsContent: "Debug - No Recommendations Found",
            updatedText: text
        };
    };



    const result3 = extractAndRemoveRecommendations(result2.updatedText);
    console.log('Recommendations Content:', result3.recommendationsContent);
    console.log('Updated Text:', result3.updatedText);



    // return (
    //     <div className="">
    //         <div className="flex w-full items-center justify-between mb-5 px-5">
    //             <p className="text-xl font-[600]">{`${i + 1}. `}{new Date().toUTCString()}</p>
    //             <Button onClick={() => copyToClipBoard(t)}>
    //                 {buttonText}
    //             </Button>
    //         </div>

    //         {/* Score Container */}
    //         {score && (
    //             <div
    //                 className="flex items-center justify-center mb-5 rounded-lg text-white text-center font-bold bg-[#1e1e1e] p-4"
    //                 style={{
    //                     width: 'min(80vw, 300px)',  // Responsive width, max width 300px
    //                     height: 'min(40vw, 150px)', // Responsive height, max height 150px
    //                 }}
    //             >
    //                 <span className="text-4xl sm:text-4xl">{`Score: ${score}`}</span>
    //             </div>
    //         )}
    //         {/* strenth container */}
    //         {result.strengthsContent && (
    //             <div className="mb-5">
    //                 <h2 className="text-xl font-bold text-green-300">Strengths:</h2>
    //                 <div className="p-4 mt-2 bg-[#2a2a2a] rounded-lg">
    //                     <MarkdownRenderer markdownText={result.strengthsContent} />
    //                 </div>
    //             </div>
    //         )}

    //          {/* Areas of Improvement Section */}
    //         {result2.areasOfImprovementContent && (
    //             <div className="mb-5">
    //                 <h2 className="text-xl font-bold text-yellow-300">Areas of Improvement:</h2>
    //                 <div className="p-4 mt-2 bg-[#2a2a2a] rounded-lg">
    //                     <MarkdownRenderer markdownText={result2.areasOfImprovementContent} />
    //                 </div>
    //             </div>
    //         )}


    //         {/* Recommendations Section */}
    //         {result3.recommendationsContent && (
    //             <div>
    //                 <h2 className="text-xl font-bold text-red-300">Recommendations:</h2>
    //                 <div className="p-4 mt-2 bg-[#2a2a2a] rounded-lg">
    //                     <MarkdownRenderer markdownText={result3.recommendationsContent} />
    //                 </div>
    //             </div>
    //         )}



    //         {/* Markdown Renderer for text after the score */}
    //         {/* <div className="mt-8 bg-[#1e1e1e] p-5 rounded-xl">
    //             <MarkdownRenderer markdownText={result3.updatedText} />
    //         </div> */}
    //     </div>
    // );
    return (
        <div className="p-5">
            {/* Header Section */}
            <div className="flex w-full items-center justify-between mb-5 px-5 py-3 bg-[#1e1e1e] rounded-lg shadow-md">
                <p className="text-xl font-semibold text-white">{`${i + 1}. `}{new Date().toUTCString()}</p>
                <Button onClick={() => copyToClipBoard(t)} className="bg-blue-500 text-white hover:bg-blue-600">
                    {buttonText}
                </Button>
            </div>

            {/* Score Container */}
            {score && (
                <div
                    className="flex items-center justify-center mb-5 rounded-lg text-white text-center font-bold bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-lg"
                    style={{
                        width: 'min(80vw, 300px)',  // Responsive width, max width 300px
                        height: 'min(40vw, 150px)', // Responsive height, max height 150px
                    }}
                >
                    <span className="text-4xl">{`Score: ${score}`}</span>
                </div>
            )}

            {/* Strengths Container */}
            {result.strengthsContent && (
                <div className="mb-5 bg-[#1e1e1e] p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-green-400 mb-2">Strengths:</h2>
                    <div className="text-white">
                        <MarkdownRenderer markdownText={result.strengthsContent} />
                    </div>
                </div>
            )}

            {/* Areas of Improvement Container */}
            {result2.areasOfImprovementContent && (
                <div className="mb-5 bg-[#1e1e1e] p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-yellow-400 mb-2">Areas of Improvement:</h2>
                    <div className="text-white">
                        <MarkdownRenderer markdownText={result2.areasOfImprovementContent} />
                    </div>
                </div>
            )}

            {/* Recommendations Container */}
            {result3.recommendationsContent && (
                <div className="bg-[#1e1e1e] p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-red-400 mb-2">Recommendations:</h2>
                    <div className="text-white">
                        <MarkdownRenderer markdownText={result3.recommendationsContent} />
                    </div>
                </div>
            )}
        </div>
    );

};

export default TextCard;
