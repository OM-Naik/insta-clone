import { getfeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {

    const context = useContext(PostContext);

    const { loading, setLoading, post, setPost, feed, setFeed } = context

    const handleGetFeed = async () => {
        setLoading(true);
        const data = await getfeed();
        setFeed(data.posts.reverse())
        setLoading(false);
    }

    return { loading, post, feed, handleGetFeed }
}