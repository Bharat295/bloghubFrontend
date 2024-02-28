
import { Box, styled  } from '@mui/material';
 
const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

 
 
const About = () => {

    return (
        <Box>
             <Banner/>
            
            Welcome To About Section
       
        </Box>
    )
}

export default About;