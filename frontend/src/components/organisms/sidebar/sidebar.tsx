/* eslint-disable react/button-has-type */
import Sidebar from 'react-sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

const playerValue = [
  {
    team: 'Roma',
    playerList: {
      startingLineup:[
        {
          number: 1,
          name: 'ルイ・パトリシオ',
        },
        {
          number: 23,
          name: 'ジャンルカ・マンチーニ',
        },
        {
          number: 6,
          name: 'クリス・スモーリング',
        },
        {
          number: 3,
          name: 'ロジェール・イバニェス',
        },
        {
          number: 19,
          name: 'メーメト・ゼキ・チェリク',
        },
        {
          number: 4,
          name: 'ブライアン・クリスタンテ',
        },
        {
          number: 8,
          name: 'ネマニャ・マティッチ',
        },
        {
          number: 59,
          name: 'ニコラ・ザレフスキ',
        },
        {
          number: 21,
          name: 'パウロ・ディバラ',
        },
        {
          number: 7,
          name: 'ロレンツォ・ペッレグリーニ',
        },
        {
          number: 11,
          name: 'アンドレア・ベロッティ',
        },
      ],
      subMember:[
        {
          number: 99,
          name: 'ミル・スヴィラール',
        },
        {
          number: 14,
          name: 'ディエゴ・ジョレンテ',
        },
        {
          number: 2,
          name: 'リック・カルスドルプ',
        },
        {
          number: 37,
          name: 'レオナルド・スピナッツォーラ',
        },
        {
          number: 68,
          name: 'ベンヤミン・タヒロヴィッチ',
        },
        {
          number: 20,
          name: 'モハメド・マディ・カマラ',
        },
        {
          number: 52,
          name: 'エドアルド・ボーヴェ',
        },
        {
          number: 25,
          name: 'ジョルジニオ・ワイナルドゥム',
        },
        {
          number: 62,
          name: 'クリスティアン・ヴォルパート',
        },
        {
          number: 92,
          name: 'ステファン・エル・シャーラウィ',
        },
        {
          number: 18,
          name: 'オラ・ソルバッケン',
        },
        {
          number: 9,
          name: 'タミー・アブラハム',
        },
      ],
    }
  },
]

// eslint-disable-next-line react/function-component-definition
const SidebarMenu = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
  <Sidebar
    sidebar={
      <Box style={{marginTop: '70px', textAlign: 'center'}}>
        { playerValue.map((value) =>
          <Box>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClick}>
                <Box style={{color: '#FFF', marginBottom: '7px', fontSize: '30px', fontWeight: 'bold'}}>{value.team}</Box>
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Box>
                    <Box style={{marginBottom: '7px', fontSize: '15px'}}>
                      <Typography style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} variant="subtitle1" align='center' gutterBottom>startingLineup</Typography>
                    </Box>
                    { value.playerList.startingLineup.map((player) =>
                      <Box style={{marginBottom: '7px', fontSize: '12px'}}>
                        <a style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} href='home'>{player.number}&emsp;{player.name}</a>
                      </Box>
                    )}
                    <Box style={{marginBottom: '7px', fontSize: '15px'}}>
                      <Typography style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} variant="subtitle1" align='center' gutterBottom>subMember</Typography>
                    </Box>
                    { value.playerList.subMember.map((player) =>
                      <Box style={{marginBottom: '7px', fontSize: '12px'}}>
                        <a style={{color: '#FFF', textDecoration: 'none', fontWeight: 'bold'}} href='home'>{player.number}&emsp;{player.name}</a>
                      </Box>
                    )}
                  </Box>
                  <ListItemText/>
                </List>
              </Collapse>
            </List>
          </Box>
        )}
      </Box>
    }
    open
    docked
    styles={{ sidebar: { background: "#FFD700", minWidth: '15%'} }}
  />
  )
}

export default SidebarMenu;