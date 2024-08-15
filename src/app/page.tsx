import Image from "next/image";
import { Images } from "lucide-react";
export default function Home() {
  return (
    <div>
      <h1 className="text-white text-4xl md:text-6xl text-center px-5 pt-5 font-[800] ">
        Text OCR by{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          Tesseract Js{" "}
        </span>
      </h1>
      <div className="w-full md:p-20 p-5 flex items-center justify-center">
        <div className="min-h-[50vh] bg-[#2c2c2c] rounded-xl w-full md:p-20 p-5 flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-center ">
              Browse or drag and drop an image to extract text from it
            </p>
            <span className="text-[150px] ">
              <Images className="h-20 w-20" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
