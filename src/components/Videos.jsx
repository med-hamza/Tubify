import { Stack , Box} from '@mui/material'

import { VideoCard, Channelcard  } from'./';
const Videos = ({videos , direction}) => {

  if(!videos?.length) return 'Loading...';
 
  return (
    <Stack direction={  direction ||"row"} flexWrap="wrap" justifyContent="center" gap={1}>
    {videos.map((item,idx)=> (
     <Box key={idx}>
         {item.id.videoId  && <VideoCard  video={item} /> }
         {item.id.channelId  && <Channelcard   channelDetail={item} /> }
     </Box>
    ))}
    </Stack>
   
  )
}

export default Videos