// "use client";

// import Image from "next/image";
// import { Images } from "lucide-react";
// import { CiImageOn } from "react-icons/ci";
// import { useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import convertor from "@/lib/convertor";
// import TextCard from "@/components/Cards/TextCard";
// import { MessageSquareShare } from 'lucide-react';
// import { Trash } from 'lucide-react';

// export default function Home() {
//   const imgInputRef: any = useRef(null);
//   const [processing, setProcessing] = useState<boolean>(false);
//   const [texts, setTexts] = useState<Array<string>>([]);
//   const [error, setError] = useState<string | null>(null);

//   const openBrowse = () => {
//     imgInputRef.current?.click();
//   };

//   const convert = async (url: string) => {
//     if (url) {
//       setProcessing(true);
//       setError(null); // Clear previous errors
//       try {
//         const txt = await convertor(url); // Get the extracted text
//         if (txt) {
//           const response = await fetch("/api/gemini", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ text: txt }), // Send the text to the API
//           });

//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }

//           const data = await response.json();
//           if (data.generatedText) {
//             setTexts((prev) => [...prev, data.generatedText]);
//           } else {
//             console.error("Failed to get a response from Gemini AI");
//           }
//         }
//       } catch (error) {
//         console.error("Conversion or API Error:", error);
//         setError("Conversion or API Error.");
//       } finally {
//         setProcessing(false);
//       }
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (file.type === "image/jpeg") {
//         const url: string = URL.createObjectURL(file);
//         convert(url);
//       } else {
//         setError("Unsupported file type. Please upload a JPG image.");
//       }
//     }
//   };

//   const handleDrop = (e: any) => {
//     e.preventDefault();
//     const file = e.dataTransfer.files?.[0];
//     if (file) {
//       if (file.type === "image/jpeg") {
//         const url = URL.createObjectURL(file);
//         convert(url);
//       } else {
//         setError("Unsupported file type. Please upload your resume in JPG format.");
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="py-4">
//         <h1 className="text-white text-4xl md:text-6xl text-center px-5 pt-5 font-[800] ">
//           <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
//             AI Resume
//           </span>{" "}
//           Analyzer
//         </h1>
//         <p className="text-center text-sm mt-4 flex justify-center ">
//           <a
//             href="https://github.com/saim-x"
//             target="_blank"
//             className="text-indigo-400 hover:underline"
//           >
//             Who am I? 🚀
//           </a>

//         </p>
//       </div>
//       <input
//         type="file"
//         required
//         ref={imgInputRef}
//         hidden
//         onChange={handleFileChange}
//       />

//       <div className="w-full md:p-20 p-5 flex items-center justify-center">
//         <div
//           onClick={openBrowse}
//           onDrop={handleDrop}
//           onDragOver={(e: any) => {
//             e.preventDefault();
//           }}
//           className="min-h-[50vh] cursor-pointer bg-[#2c2c2c] rounded-xl w-full md:p-20 p-5 flex items-center justify-center"
//         >
//           <div className="flex items-center justify-center flex-col gap-2">
//             <span className="text-[150px] text-[#777777] ">
//               <CiImageOn className={processing ? "animate-pulse" : ""} />
//             </span>
//             <p className="text-center text-2xl font-bold text-[#777777]">
//               {processing ? "Processing..." : "Click or drop your resume here"}
//             </p>

//           </div>
//         </div>
//       </div>

//       {error && (
//         <div className="text-center text-red-500 mt-4">
//           <p>{error}</p>
//         </div>
//       )}

//       <div className="my-10 md:px-20 px-5 space-y-10">
//         {texts.map((t, i) => {
//           return <TextCard key={i} i={i} t={t} />;
//         })}
//       </div>

//       <div className="flex items-center justify-center my-10 flex-col gap-8">
//         <Button
//           onClick={() => {
//             setTexts([]);
//             setError(null);
//           }}
//           variant="destructive"
//         >
//           <Trash className="mr-2 h-4 w-4" />
//           Clear All
//         </Button>
//         <Button
//           onClick={() => {
//             window.open("https://forms.gle/6A3KDhj6kmRkvLrC7", "_blank");
//           }}
//         >
//           <    MessageSquareShare className="mr-2 h-4 w-4" />Share your feedback
//         </Button>
//       </div>
//     </div>
//   );
// }



//REDESIGN
"use client";

import Image from "next/image";
import { Images } from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import convertor from "@/lib/convertor";
import TextCard from "@/components/Cards/TextCard";
import { MessageSquareShare } from 'lucide-react';
import { Trash } from 'lucide-react';

export default function Home() {
  const imgInputRef: any = useRef(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [texts, setTexts] = useState<Array<string>>([]);
  const [error, setError] = useState<string | null>(null);

  const openBrowse = () => {
    imgInputRef.current?.click();
  };

  const convert = async (url: string) => {
    if (url) {
      setProcessing(true);
      setError(null); // Clear previous errors
      try {
        const txt = await convertor(url); // Get the extracted text
        if (txt) {
          const response = await fetch("/api/gemini", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: txt }), // Send the text to the API
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          if (data.generatedText) {
            setTexts((prev) => [...prev, data.generatedText]);
          } else {
            console.error("Failed to get a response from Gemini AI");
          }
        }
      } catch (error) {
        console.error("Conversion or API Error:", error);
        setError("Conversion or API Error.");
      } finally {
        setProcessing(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "image/jpeg") {
        const url: string = URL.createObjectURL(file);
        convert(url);
      } else {
        setError("Unsupported file type. Please upload a JPG image.");
      }
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.type === "image/jpeg") {
        const url = URL.createObjectURL(file);
        convert(url);
      } else {
        setError("Unsupported file type. Please upload your resume in JPG format.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 md:px-20">
      <header className="w-full text-center py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          AI Resume Analyzer
        </h1>
        <p className="mt-4 text-gray-400">
          Analyze your resume using AI-powered tools.
          <a href="https://github.com/saim-x" target="_blank" className="text-indigo-400 hover:underline ml-2">
            Who am I? 🚀
          </a>
        </p>
      </header>

      <input
        type="file"
        ref={imgInputRef}
        hidden
        onChange={handleFileChange}
      />

      <div
        className="w-full max-w-2xl p-10 mt-10 bg-gray-800 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gray-700 transition-colors duration-300"
        onClick={openBrowse}
        onDrop={handleDrop}
        onDragOver={(e: any) => e.preventDefault()}
      >
        <CiImageOn
          className={`text-[150px] mx-auto ${processing ? "animate-complex-bounce" : "text-gray-500"}`}
        />
        <p className="text-xl font-semibold mt-4 text-gray-400">
          {processing ? "Processing..." : "Click to drop your resume here"}
        </p>
      </div>

      {error && (
        <div className="text-red-500 mt-4">
          <p>{error}</p>
        </div>
      )}

      <div className="mt-10 w-full space-y-8">
        {texts.map((t, i) => (
          <TextCard key={i} i={i} t={t} />
        ))}
      </div>

      <footer className="my-16 w-full text-center flex justify-center items-center space-x-4 ">
        <Button
          className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg transition-colors"
          onClick={() => {
            setTexts([]);
            setError(null);
          }}
        >
          <Trash className="mr-2 h-5 w-5" />
          Clear All
        </Button>
        <Button
          className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-6 rounded-lg shadow-lg transition-colors"
          onClick={() => window.open("https://forms.gle/6A3KDhj6kmRkvLrC7", "_blank")}
        >
          <MessageSquareShare className="mr-2 h-5 w-5" />
          Share your feedback
        </Button>
      </footer>

    </div>
  );
}
