import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from '../components/card/Post'
import Message from '../components/message/Message'
import Loader from '../components/loader/Loader'
import Box from '@material-ui/core/Box'
import {listPosts} from '../actions/postActions'

const Posts = () => {
  const dispatch = useDispatch()

  const postList = useSelector(state => state.postList)
  const {loading, error, posts} = postList

  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])

  return (
    <>
    {loading ? <Loader /> : error ? <Message severity="error">{error}</Message> : 
    <Box display='flex' flexWrap='wrap' justifyContent='center' m={8} p={1}>
      {posts.map((card, index) => (
        <Post key={index} card={card} />
      ))}
    </Box>
    }
   
    </>
  )
}

export default Posts
