import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Box, Typography, Stack } from '@mui/material'
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from './';
import { fetchFormAPI } from "../utils/fetchdataApi";

const VideoDetail = () => {


  const [videodetails, setvideosdetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  console.log({ id })

  useEffect(() => {
    fetchFormAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setvideosdetails(data.items[0]))
      fetchFormAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id])

  console.log("videodetails", videodetails)

  if(!videodetails?.snippet) return 'Loading...';

  const{ snippet : {title, channelId ,channelTitle }, statistics: {viewCount, likeCount} } = videodetails
  return (
    <Box minHeight="95vh">
       <Stack direction={{xs:'column', md:'row'}}>
       <Box flex={1}>
        <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls  />
          <Typography variant="h5" color="#fff">
         {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" s={{color:'#fff'}} py={1} px={2}  >
          <Link to={`/channel/${channelId}`}>
            <Typography variant={{ sm: 'subtitle1', md:'h6' }} color="#fff" >
              {channelTitle}
              <CheckCircle sx={{fontSize:14, color:'gray',ml: '5px'}} />
            </Typography>
          </Link>
          <Stack direction="row" gap="20px" alignItems="center" >
          <Typography variant="body1" sx={{opacity:0.7}} color="#fff" >
          {parseInt(viewCount).toLocaleString()} views
           </Typography>
           <Typography variant="body1" sx={{opacity:0.7}} color="#fff" >
          {parseInt(likeCount).toLocaleString()} likes
           </Typography>
          </Stack>
          </Stack>
         
          </Box> 
       </Box>
       <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
       <Videos videos={videos} direction="column"  />
       </Box>
       </Stack>
    </Box>
  )
}

export default VideoDetail