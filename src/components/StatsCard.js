import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import '../index.css';

const Header = styled(Box)(({ categoryColor }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: categoryColor || '#6a1b9a', // Default color or specific color for category
  color: 'white',
  padding: '8px 10px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  height: 100,
  // fontFamily:'MontserratExtraBold',
}));

const PlayerAvatar = styled(Avatar)({
  width: 60,
  height: 60,
  marginRight: 12,
});

const StatsCard = ({ category, data, number }) => {
  // Mapping of categories to colors
  const categoryColors = [
    '#38044v', // Dark Purple
    '#087f83', // Dark Green
    '#8a0193', // Dark Red
    '#0c3c92', // Dark Blue
    '#a23c00', // Dark Orange
    '#660066', // Dark Violet
    '#4b3d2a', // Dark Brown
    '#3f4f5b', // Dark Slate Gray
    '#720039', // Dark Magenta
    '#aa7800', // Dark Gold
  ];

  // State to track whether to show additional fields or not
  const [showMore, setShowMore] = useState(false);

  return (
    <Box
      sx={{
        flex: '1 1 400px',
        minWidth: 0,
        maxWidth: 400,
        marginBottom: 2,
        margin: '0 10px',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          display: 'inline-block', // Ensure the background color is only applied to the text section
          padding: '2px',
          fontWeight: 'bold',
          borderRadius: '8px', // Add border radius
          marginTop: '25px', // Add margin bottom
          marginBottom: '2px', // Add margin bottom
          color: 'black', // Change text color
          fontFamily: 'MontserratExtraBold',
          letterSpacing: '-0.5px', // Add letter spacing
        }}
      >
        {category}
      </Typography>

      <Card sx={{ maxWidth: 350, boxShadow: '3px 5px 5px rgba(0, 0, 0, 0.5)' }}>
        <Header categoryColor={categoryColors[number]}>
          <PlayerAvatar src={data[0].avatar} />
          <Box>
            <Typography
              variant='h6'
              fontWeight=''
              fontFamily={'MontserratLight'}
              letterSpacing={'-0.5px'}
            >
              {data[0].name}
            </Typography>
            <Typography
              variant='body1'
              fontSize={'15px'}
              fontFamily={'MontserratLight'}
            >
              {data[0].team}
            </Typography>
          </Box>
          <Typography
            variant='h4'
            // fontWeight='bold'
            mt={1}
            sx={{ marginLeft: 'auto' }}
            fontFamily={'MontserratLight'}
          >
            {data[0].runs ||
              data[0].boundaries ||
              data[0].fifties ||
              data[0].hundreds ||
              data[0].fours ||
              data[0].sixes ||
              data[0].time ||
              data[0].catches ||
              data[0].runOuts ||
              data[0].ducks ||
              data[0].wickets ||
              data[0].hauls ||
              data[0].season}
          </Typography>
        </Header>
        <CardContent sx={{ padding: '0px 6px' }}>
          <List>
            {data.slice(1, showMore ? data.length : 7).map((player, index) => (
              <React.Fragment key={index}>
                <ListItem sx={{ padding: '0px 0px' }}>
                  <ListItemAvatar>
                    <Avatar
                      src={player.avatar}
                      sx={{ width: 40, height: 40 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        fontFamily={'MontserratBold'}
                        letterSpacing={'-0.5px'}
                      >
                        {player.rank} {player.name}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        fontSize={'15px'}
                        fontFamily={'MontserratLight'}
                      >
                        {player.team}
                      </Typography>
                    }
                  />
                  <Typography variant='body1' fontFamily={'MontserratLight'}>
                    {player.runs ||
                      player.boundaries ||
                      player.fifties ||
                      player.hundreds ||
                      player.fours ||
                      player.sixes ||
                      player.time ||
                      player.catches ||
                      player.runOuts ||
                      player.ducks ||
                      player.wickets ||
                      player.hauls ||
                      player.season}
                  </Typography>
                </ListItem>
                {index < (showMore ? data.length : 7) - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          {data.length > 7 && (
            <Button
              variant='text'
              onClick={() => setShowMore(!showMore)}
              sx={{
                backgroundColor: '#111827',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#111827', // Remove hover background color
                },
              }}
            >
              {showMore ? 'View Less' : 'View More'}
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatsCard;
