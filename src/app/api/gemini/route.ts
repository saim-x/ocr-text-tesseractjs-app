import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
    const { text } = await request.json(); // Extract the text from the request body

    if (!text) {
        return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API_KEY is not defined");
        }

        const prePrompt =
            "This is a resume. Evaluate it and provide a score under heading named Overall Score in whole number out of 10(Like 6/10), a dedicated section of strengths with heading named Strengths, a dedicated section of areas of improvement with heading named Areas of Improvement and a dedicated section of recommendations with heading named Recommendations. Focus only on the textual content and ignore graphical aspects such as formatting, visual appeal, and layout. ";

        const prompt = prePrompt + text;

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt); // Pass the extracted text as a prompt
        const response = await result.response;
        const generatedText = await response.text();

        return NextResponse.json({ generatedText });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to call Gemini AI" }, { status: 500 });
    }
}
