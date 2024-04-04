
import * as dotenv from 'dotenv'

dotenv.config()

export const embedding = async (query: string): Promise<number[]> => {

    const url = "https://api.jina.ai/v1/embeddings";

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.JINA_API_KEY}`,
    };

    const data = {
        input: [query],
        model: 'jina-embeddings-v2-base-en',
    };

    const res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
    })


    if (!res.ok) {
        return [];
    }

    const resData = await res.json();

    return resData.data[0].embedding;
}
