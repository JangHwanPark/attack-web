import {connectDB} from "@/utils/mongoDb";
import {NextApiRequest, NextApiResponse} from "next";
import getAllPostsFromForum from "@/utils/getPostsFromForum";


const handler = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
    try {
        /* page : 페이지 번호 (기본값: 1)
         * limit : 페이지당 아이템 수 (기본값: 10) */
        const page = Number(request.query.page) || 1;
        const limit = Number(request.query.limit) || 10;
        const posts = await getAllPostsFromForum('admin_user','notice', page, limit);


        /* 전체 게시물 수를 계산. */
        const db = (await connectDB).db("admin_user");
        const totalPosts = await db.collection('notice').countDocuments();
        response.status(200).json({posts, totalPosts});

    } catch (error) {
        response.status(500).json({ error: '오류가 발생했습니다.' });
    }
}

export default handler;