import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import {Box} from '@mui/material'

import {Videos, Channelcard}  from './';
import { fetchFormAPI } from "../utils/fetchdataApi";



const ChannelDetail = () => {

  const [channedetail, setchanneldetail] = useState(null)
  const  [videos, setVideos] = useState([])

  const {id} = useParams();
  console.log({id})
 
    useEffect(()=> {
      fetchFormAPI(`channels?part="snippet&id=${id}`)
      .then((data)=>setchanneldetail(data?.items[0]))

      fetchFormAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items))
    }, [id])



return(

<Box minHeight="95vh">
<Box>
  <div  style={{
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,70,1) 35%, rgba(0,212,255,1) 100%)',
    zIndex:10,
    height:'300px'
  }}
  />

  <Channelcard   channelDetail={channedetail}  marginTop="-50px"/>
  <Box display="flex"  p="2">
    <Box sx={{mr: {sm : '100px'}}} />
      <Videos videos={videos} />
  </Box>
</Box>

</Box>

)
 
}


export default ChannelDetail