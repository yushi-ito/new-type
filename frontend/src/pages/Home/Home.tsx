import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import ground from '../../image/ground.png';

// eslint-disable-next-line react/function-component-definition
const Home = () => {

    const AppMain = styled.div`
      margin: auto 5%;
      position: relative;
    `;

    const ImgBox = styled.div`
      height: 95%;
      width: 100%;
      object-fit: cover;
    `;

    const playerValue = [
      {
        top: '1%',
        left: '50%',
        uniformNumber: 11,
        score: 9.5,
      },
      {
        top: '15%',
        left: '25%',
        uniformNumber: 7,
        score: 7,
      },
      {
        top: '15%',
        left: '75%',
        uniformNumber: 21,
        score: 9.5,
      },
      {
        top: '35%',
        left: '10%',
        uniformNumber: 59,
        score: 7.5,
      },
      {
        top: '40%',
        left: '35%',
        uniformNumber: 8,
        score: 7.5,
      },
      {
        top: '40%',
        left: '65%',
        uniformNumber: 4,
        score: 8,
      },
      {
        top: '35%',
        left: '90%',
        uniformNumber: 19,
        score: 8,
      },
      {
        top: '65%',
        left: '20%',
        uniformNumber: 3,
        score: 8.5,
      },
      {
        top: '65%',
        left: '50%',
        uniformNumber: 6,
        score: 9.5,
      },
      {
        top: '65%',
        left: '80%',
        uniformNumber: 23,
        score: 7.5,
      },
      {
        top: '84%',
        left: '50%',
        uniformNumber: 1,
        score: 8.5,
      },
    ]

    return (
      <AppMain>
        { playerValue.map((value, key) =>
          <Box
            sx={{
              position: 'absolute',
              flexWrap: 'wrap',
              top: `${value.top}`,
              left: `${value.left}`,
              transform: 'translateX(-50%)',
              // WebkitTransform: 'translate(-50%, -50%)',
              // msTransform: 'translate(-50%, -50%);',
            }}
          >
            <Box
              sx={{
                '& > :not(style)': {
                  m: 1,
                  width: 65,
                  height: 65,
                  margin: 0,
                  backgroundColor: key === 10 ? '#000000' : '#CC0033'
                },
              }}
            >
              <Paper elevation={5}>
                <Box
                  sx={{
                    color: '#FFD700',
                    paddingTop: '12px',
                  }}
                >
                  <Typography variant="h4" align='center' gutterBottom>
                    {value.uniformNumber}
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Box>
              <StarIcon fontSize="large" sx={{ color: '#faaf00' }}/>
              <Box
                sx={{
                  float: 'right',
                  paddingTop: '4px',
                  paddingRight: '10px',
                }}
              >
                <Typography variant="h6">{value.score}</Typography>
              </Box>
            </Box>
          </Box>
        )}
        <ImgBox>
          <img src={ground} alt="ground" className={ImgBox} style={{height: '100%', width: '100%'}}/>
        </ImgBox>
      </AppMain>
    )
}

export default Home;
