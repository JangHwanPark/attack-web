import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";

const handlerGameData = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        // Connect MongoDB
        const client = (await connectDB);
        const db = client.db('GameScore');

        const gameCollection = await db.collection('Game');
        const gameData = await gameCollection.find({}).toArray();
        res.status(200).json({
            success: true,
            data: gameData
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export default handlerGameData;