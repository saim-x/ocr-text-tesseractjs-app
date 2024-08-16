'use client';
import Image from "next/image";
import { Images } from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import { useRef, useState } from "react";
import convertor from "@/lib/convertor";
export default function Home() {
  const imgInputRef: any = useRef(null);
  const [processing, setProcessing] = useState<boolean>(false);

  const openBrowse = () => {
    imgInputRef.current?.click();
  }
  const convert = async (url: string) => {
    if (url) {
      setProcessing(true);
      await convertor(url).then((txt) => {
        if (txt) {
          console.log(txt);
        }
      });
      setProcessing(false);
    }
  }
  return (
    <div>
      <h1 className="text-white text-4xl md:text-6xl text-center px-5 pt-5 font-[800] ">
        Text OCR by{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Tesseract Js{" "}
        </span>
      </h1>
      <input type="file" required ref={imgInputRef} hidden onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
          const url: string = URL.createObjectURL(e.target.files[0]);
          convert(url);
        }

      }} />
      <div onClick={openBrowse} className="w-full md:p-20 p-5 flex items-center justify-center">
        <div className="min-h-[50vh] cursor-pointer  bg-[#2c2c2c] rounded-xl w-full md:p-20 p-5 flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-center text-2xl font-bold text-[#777777]">
              {processing ? "Processing..." : "Click to Browse Image"}
            </p>
            <span className="text-[150px] text-[#777777] ">
              {/* <CiImageOn /> className="h-16 w-16" /> */}
              <CiImageOn className={processing ? "animate-pulse" : ""} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
