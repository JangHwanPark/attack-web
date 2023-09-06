import {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "@/utils/mongoDb";

const handlerGameData = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        // Connect MongoDB
        const db = (await connectDB).db('GameScore');
        console.log('DB 연결')

        const gameCollection = await db.collection('Game');
        const gameData = await gameCollection.find({}).toArray();
        res.status(200).json({
            success: true,
            data: gameData
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error', err
        })
    }
}

export default handlerGameData;