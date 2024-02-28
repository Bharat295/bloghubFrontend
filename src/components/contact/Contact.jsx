
import { Box, styled } from '@mui/material';
 
const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

 

const Contact = () => {
    return (
        <Box>
            <Banner />
  
           Welcome to Contact Section.
        </Box>
    );
}

export default Contact;