
import { styled, Box, Typography } from '@mui/material';
import videoback from '../assets/backVideo1.mp4';


const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const video = styled(Box)`
    width: '100%';
    height:60vh;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {

    return (
        // <Image>
        //     <Heading>Blog Hub</Heading>
        // </Image>  
        <Box
            
            style={{
                backgroundColor: '#A8B7DB'
            }}
        
        >
           
            <video src={videoback} autoPlay loop muted
                style={{
                    height: '60vh', width: '100%', objectFit: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundColor: '#A8B7DB'
                }}
            />
            <div className="content">
                <h1 style={{
                    fontSize: '60px'
                    
                }}>Welcome</h1>
                
                <p style={{
                   fontSize: '30px'
                }}
                >To Blog Hub</p>
            </div>
        </Box>
    )
}

export default Banner;