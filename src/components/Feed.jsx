
import { useState, useEffect  } from "react"
import {Box , Stack, Typography} from "@mui/material"
import {Sidebar , Videos} from "./"

import { fetchFormAPI } from "../utils/fetchdataApi"

const Feed = () => {

   const [selectedCategory, 
    setselectedCatgroy]= useState('New')
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        fetchFormAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>setVideos(data.items))
    },[selectedCategory]);

    console.log("categroie", videos)

  return (
  
   <Stack sx={{ flexDirection: {sx: "column", md:"column" }}}>
    <Box sx={{ display:"flex",justifyContent:"center",
      borderRight:'1px solid #3d3d3d',
      px:{sx:0, md:2}
      }}>
        <Sidebar
        selectedCategory={selectedCategory}
        setselectedCatgroy={setselectedCatgroy}
        />
        {/* <Typography className="copyright"
        variant="body2"  sx={{mt:1.5,color:'#fff'}}>
          Copyright 2023 Tubify
        </Typography> */}
    </Box>

    <Box p={2} sx={{overflow:'auto', height:'90vh', flex:2 }}>
      <Typography variant="h4"
      fontWeight="bold" mb={2} sx={{color:'white'}}>
        {selectedCategory}
        <span style={{color: '#F31503'}}> Videos </span>
      </Typography>


    <Videos videos={videos} />
    </Box>
   
   </Stack>

  )
}

export default Feed 