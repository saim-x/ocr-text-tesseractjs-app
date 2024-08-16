import { createWorker } from 'tesseract.js';
const convertor = async (img: string) => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize(img);
    //console.log(ret.data.text);
    await worker.terminate();
    return ret.data.text;
}

export default convertor;