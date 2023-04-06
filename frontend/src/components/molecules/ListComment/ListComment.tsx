import styled from 'styled-components';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

// eslint-disable-next-line react/function-component-definition
const ListComment = () => {
  const ListMain = styled.div`
    margin: auto 10%;
  `;

  const scoreValues = [
    {
      userName: 'ローマ',
      score: 9.5,
      comment: 'とにかく良かった。',
    },
    {
      userName: 'ローマ',
      score: 2.5,
      comment: '良くなかった。全然ダメ。スタメンで出てきた時から良くなかった。',
    },
    {
      userName: 'ローマ',
      score: 6.5,
      comment: '普通だが、フル出場した点だけは評価できる。',
    },
    {
      userName: 'ローマ',
      score: 5.0,
      comment: '可もなく不可もなく',
    },
    {
      userName: 'ローマ',
      score: 2.5,
      comment: '良くなかった。全然ダメ。スタメンで出てきた時から良くなかった。',
    },
    {
      userName: 'ローマ',
      score: 2.5,
      comment: '良くなかった。全然ダメ。スタメンで出てきた時から良くなかった。',
    },
  ]

  return (
    <ListMain>
      { scoreValues.map((scoreValue) =>
        <Box
          sx={{
            margin: '30px 0',
          }}
        >
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box>
                  <Typography
                    sx={{ display: 'flex' }}
                    variant="subtitle1"
                    color="text.primary"
                  >
                    {scoreValue.userName}
                  </Typography>
                </Box>
                }
                secondary={
                  <Box>
                    <StarIcon sx={{ float: 'left', color: '#faaf00' }}/>
                    <Box
                      sx={{
                        float: 'left',
                      }}
                    >
                      <Typography variant="subtitle1">{scoreValue.score}</Typography>
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Box>
                  <Typography
                    sx={{ display: 'flex' }}
                    variant="subtitle2"
                    color="text.primary"
                  >
                    {scoreValue.comment}
                  </Typography>
                </Box>
                }
              />
            </ListItem>
          </List>
        </Box>
        )
      }
    </ListMain>
  )
}

export default ListComment;
