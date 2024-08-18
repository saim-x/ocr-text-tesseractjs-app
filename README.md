

```markdown
# resuAI

resuAI is a web application designed to help users analyze and improve their resumes. It uses Tesseract OCR to extract text from resume images and Google AI Gemini for intelligent feedback and analysis.

## Live Demo

Check out the live demo at [resuAI](https://resuai.vercel.app/).

## Features

- **OCR Integration**: Extract text from resume images using Tesseract OCR.
- **AI Analysis**: Analyze resume content with Google AI Gemini.
- **Feedback Generation**: Get detailed feedback on resume content, structure, and more.

## Technologies Used

- **Next.js**: Framework for building the web application.
- **TypeScript**: Ensures type safety and reduces runtime errors.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Tesseract OCR**: Open-source OCR engine for text extraction from images.
- **Google AI Gemini**: Text model for analyzing and providing feedback on resume content.
- **Vercel**: Hosting platform for deployment.

## Setup

To run the project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/saim-x/ocr-text-tesseractjs-app.git
   cd ocr-text-tesseractjs-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   TESSERACT_LANGUAGES=eng
   GOOGLE_AI_API_KEY=your-google-ai-api-key
   ```

   Replace `your-google-ai-api-key` with your actual API key.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Navigate to `http://localhost:3000` to view the application.

## Usage

1. **Upload Resume**: Choose a resume image or PDF to upload.
2. **Text Extraction**: The application will use Tesseract to extract text from the uploaded file.
3. **Analyze Resume**: The extracted text is sent to Google AI Gemini for analysis.
4. **Receive Feedback**: View feedback and suggestions to improve your resume.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tesseract OCR](https://github.com/tesseract-ocr/tesseract)
- [Google AI Gemini](https://cloud.google.com/natural-language)
```
