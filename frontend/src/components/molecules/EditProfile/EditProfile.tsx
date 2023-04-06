import styled from 'styled-components';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/function-component-definition
const EditProfile = () => {
  const EditMain = styled.div`
    margin: auto 10%;
  `;

  const labels: { [index: string]: string } = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
    5.5: '5.5',
    6: '6',
    6.5: '6.5',
    7: '7',
    7.5: '7.5',
    8: '8',
    8.5: '8.5',
    9: '9',
    9.5: '9.5',
    10: '10',
  };

  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  const [value, setValue] = React.useState<number | null>(5);
  const [hover, setHover] = React.useState(-1);

  return (
    <EditMain>
      <Box
        sx={{
          margin: '30px 0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 150,
              height: 150,
              margin: 'auto',
              backgroundColor: '#CC0033'
            },
          }}
        >
          <Paper elevation={5}>
            <Box
              sx={{
                margin: '20px 0',
                color: '#FFD700',
              }}
            >
              <Typography variant="h1" align='center' gutterBottom>
                21
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            margin: '10px auto',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            パウロ・ディバラ
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: 100,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          // eslint-disable-next-line react/jsx-no-bind
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          max={10}
          defaultValue={5}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          marginTop: '10px',
          backgroundColor: '#FFF',
          borderRadius: '5px',
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="comment"
          fullWidth
          multiline
          rows={5}
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          textAlign: 'center',
          paddingTop: '25px',
        }}
      >
        <Button variant="contained" color="success" size='large'>Save</Button>
      </Box>
    </EditMain>
  )
}

export default EditProfile;
