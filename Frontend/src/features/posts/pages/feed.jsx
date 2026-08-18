import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../components/Post'
import { usePost } from '../hook/usePost'

const Feed = () => {

    const { feed, handleGetFeed,loading, handleLike, handleUnLike} = usePost();

    useEffect(() => {
        handleGetFeed()
    }, [])

    if (loading || !feed)
        return (<div>Loading...</div>);



    return (
        <main className='feed-page'>
            <div className='feed'>
                <div className="posts">
                    {feed.map(post => {
                        return <Post key={post._id} user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike} />
                    })}
                </div>
            </div>
        </main>
    )
}


export default Feed