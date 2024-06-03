import { Box, Grid } from '@mui/material';
import React from 'react';
import Batsman from '../images/Batsman.png';
import Bowler from '../images/Bowler.png';
import Banner_Bg_Pic from '../images/StatsBanner.png'; // Ensure the correct path to your banner image
import BannerTabs from './BannerTabs';
import Stats from './StatsBannerContent'; // Ensure the correct path to your Stats component
const batsmanData = [
  { value: 28, label: 'Matches', backgroundColor: 'red' },
  { value: 150, label: 'Runs', backgroundColor: 'red' },
  { value: 57.45, label: 'Average', backgroundColor: 'red' },
  { value: 149.05, label: 'Strike Rate', backgroundColor: 'blue' },
  { value: 116, label: 'Hs.Score', backgroundColor: 'red' },
];

const bowlerData = [
  { value: 28, label: 'Matches', backgroundColor: 'green' },
  { value: 45, label: 'Wickets', backgroundColor: 'green' },
  { value: 22.5, label: 'Average', backgroundColor: 'green' },
  { value: 6.5, label: 'Economy', backgroundColor: 'green' },
  { value: 4, label: 'Best Figures', backgroundColor: 'green' },
];

const playerDetails = [
  { name: 'Virat Kohli', number: 12, image: Batsman },
  { name: 'Jasprit Bumrah', number: 93, image: Bowler },
];

const statsData = [batsmanData, bowlerData];

const StatsBanner = () => {
  const playersData = playerDetails.map((details, index) => ({
    ...details,
    data: statsData[index],
  }));

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${Banner_Bg_Pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          color: 'white',
          padding: '10px 0px 30px 0px',
        }}
      >
        <Grid container spacing={2} sx={{ flexWrap: 'wrap' }}>
          {playersData.map((player, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Stats
                data={player.data}
                name={player.name}
                number={player.number}
                image={player.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <BannerTabs />
    </Box>
  );
};

export default StatsBanner;
