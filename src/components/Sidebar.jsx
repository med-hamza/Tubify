import { Stack } from '@mui/material'
import { categories } from '../utils/constants'




const Sidebar = ( {selectedCategory, setselectedCatgroy} ) =>  (
   

   <Stack
   direction="row"
   sx={{
    overflowY:"auto",
      flexDirection : {md: 'row'}
   }}
   >
    {categories.map((categorie)=>(
        <button className="category-btn"
        onClick={()=> setselectedCatgroy(categorie.name)}
        style={{
            background: categorie.name === selectedCategory && "#FC1503",
            color:'white'
            
        }}
        key={categorie.name}
        >
            <span style={{color: categorie.name=== selectedCategory ? 'white' : 'red', marginRight:'15px' }} > {categorie.icon} </span>
            <span style={{opacity: categorie.name=== selectedCategory ? '1' : '0.8'    }} > {categorie.name} </span>
        </button>
    ))

    }
 

   </Stack>

  )


export default Sidebar