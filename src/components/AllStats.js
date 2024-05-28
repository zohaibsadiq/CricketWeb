import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';
import StatsCard from './StatsCard';
// Import necessary data
import { bowlersData, moreData, playersData } from './data';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AllStats() {
  const [value, setValue] = useState(0);
  const [season, setSeason] = useState(2024); // Default to the latest season

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
    // You can add logic here to fetch or filter data based on the selected season
  };

  return (
    <Box sx={{ width: '100%', marginTop: '10px', padding: '0px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : '',
          alignItems: 'center',
          padding: '0 16px',
          flexWrap: 'wrap-reverse',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered
          TabIndicatorProps={{ style: { height: 0 } }} // Set height of tab indicator to 0
          sx={{
            width: isMobile ? '100%' : 'auto',
            order: isMobile ? 1 : 2, // Ensure tabs are above the select on mobile
            flexGrow: 1,
            transform: 'skew(-30deg)',
            color: 'white !important',
            marginLeft: isMobile ? 0 : 12,
            marginTop: 4,
            '& .Mui-selected': {
              backgroundColor: '#111827',
              color: 'white !important', // Set background color for the selected tab
              border: '1px solid black',
              transform: 'none', // Remove skew transformation for the selected tab
              padding: '0px 0px',
            },
            '& .MuiTab-root': {
              transform: 'skew(20deg)', // Skew text back to normal inside skewed tab
              border: '1px solid black',
              padding: '0px 0px',
            },
          }}
        >
          <Tab
            label='Batting'
            {...a11yProps(0)}
            sx={{
              color: 'black',
              fontStyle: 'italic',
              border: '1px solid black',
              fontFamily: 'MontserratBold',
              textTransform: 'none',
              marginRight: 1,
            }}
          />
          <Tab
            label='Bowling'
            {...a11yProps(1)}
            sx={{
              color: 'black',
              fontStyle: 'italic',
              border: '1px solid black',
              fontFamily: 'MontserratBold',
              textTransform: 'none',
              marginRight: 1,
            }}
          />
          <Tab
            label='More'
            {...a11yProps(2)}
            sx={{
              color: 'black',
              fontStyle: 'italic',
              border: '1px solid black',
              fontFamily: 'MontserratBold',
              textTransform: 'none',
            }}
          />
        </Tabs>

        <Box
          sx={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            alignItems: 'center',
            width: isMobile ? '100%' : 'auto',
            order: isMobile ? 1 : 2, // Ensure select is below the tabs on mobile
            marginTop: isMobile ? '10px' : '0',
            marginBottom: isMobile ? '0px' : '0',
            marginTop: 4,
            marginRight: isMobile ? 0 : 11,
          }}
        >
          <Select
            value={season}
            onChange={handleSeasonChange}
            displayEmpty
            sx={{
              width: '100px',
              color: 'black',
              border: '1px solid black',
              borderColor: 'black',
              backgroundColor: 'white',
              fontFamily: 'MontserratBold',
              marginLeft: '1px',
              padding: '0px 2px', // Custom padding
              transform: 'skew(-12deg)',
              '& .MuiSelect-select': {
                padding: '6px 6px', // Ensure the dropdown text has the same padding
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white', // Maintain border color
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove border when focused
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'none    ', // Remove border in normal state
                },
                '&:hover fieldset': {
                  borderColor: 'none', // Remove border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'noce', // Remove border when focused
                },
              },
              '& .MuiSvgIcon-root': {
                color: 'black', // Change the color of the dropdown arrow to white
              },
            }}
          >
            <MenuItem value={2000}>2000</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024} disabled>
              Select
            </MenuItem>
            {/* Add more seasons as needed */}
          </Select>
        </Box>
      </Box>
      <Box sx={{ padding: '0px !important' }}>
        {/* Render different StatsCard based on selected tab */}
        <CustomTabPanel value={value} index={0}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <StatsCard
              category='Most Runs'
              data={playersData.mostRuns}
              number='1'
            />
            <StatsCard
              category='Most Boundaries'
              data={playersData.mostBoundaries}
              number='2'
            />
            <StatsCard
              category='Most Fifties'
              data={playersData.mostFifties}
              number='3'
            />
            <StatsCard
              category='Most Hundreds'
              data={playersData.mostHundreds}
              number='4'
            />
            <StatsCard
              category='Most Fours'
              data={playersData.mostFours}
              number='5'
            />
            <StatsCard
              category='Most Sixes'
              data={playersData.mostSixes}
              number='6'
            />
            <StatsCard
              category='Fastest Fifties'
              data={playersData.fastestFifties}
              number='7'
            />
            <StatsCard
              category='Fastest Hundreds'
              data={playersData.fastestHundreds}
              number='8'
            />
            {/* Add more categories here */}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <StatsCard
              category='Highest Wickets'
              data={bowlersData.highestWickets}
              number='1'
            />
            <StatsCard
              category='Most 5-Wicket Hauls'
              data={bowlersData.most5WicketHauls}
              number='2'
            />
            <StatsCard
              category='Fastest 50 Wickets'
              data={bowlersData.fastest50Wickets}
              number='3'
            />
            <StatsCard
              category='Best Bowling Figures'
              data={bowlersData.bestSpell}
              number='4'
            />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <StatsCard
              category='Best All-Rounder'
              data={moreData.bestAllRounder}
              number='1'
            />
            <StatsCard
              category='Most Catches'
              data={moreData.mostCatches}
              number='2'
            />
            <StatsCard
              category='Most Run Outs'
              data={moreData.mostRunOuts}
              number='3'
            />
            <StatsCard
              category='Player of the Season'
              data={moreData.playerOfTheSeason}
              number='4'
            />
            <StatsCard
              category='Most Ducks'
              data={moreData.mostDucks}
              number='5'
            />
          </div>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
