import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react';
import '../index.css';

const playerData = [
  {
    name: 'Virat Kohli',
    team: 'RCB',
    batting: {
      matches: 15,
      runs: 741,
      avg: 61.75,
      sr: 154.69,
      hundreds: 1,
      fifties: 5,
      fours: 62,
      sixes: 38,
      hs: '113*',
    },
    bowling: {
      matches: 5,
      wickets: 4,
      econ: 6.32,
      avg: 25.0,
      sr: 18.5,
      fiveWickets: 0,
      fourWickets: 0,
      maidens: 0,
      hattricks: 0,
    },
    img: 'path/to/virat-kohli.jpg',
  },
  {
    name: 'Ruturaj Gaikwad',
    team: 'CSK',
    batting: {
      matches: 14,
      runs: 583,
      avg: 53.0,
      sr: 141.16,
      hundreds: 1,
      fifties: 4,
      fours: 58,
      sixes: 18,
      hs: '108*',
    },
    bowling: {
      matches: 8,
      wickets: 3,
      econ: 7.89,
      avg: 28.33,
      sr: 21.0,
      fiveWickets: 0,
      fourWickets: 0,
      maidens: 0,
      hattricks: 0,
    },
    img: 'path/to/ruturaj-gaikwad.jpg',
  },
  {
    name: 'Riyan Parag',
    team: 'RR',
    batting: {
      matches: 16,
      runs: 573,
      avg: 52.09,
      sr: 149.21,
      hundreds: 0,
      fifties: 4,
      fours: 40,
      sixes: 33,
      hs: '84*',
    },
    bowling: {
      matches: 12,
      wickets: 6,
      econ: 8.14,
      avg: 36.0,
      sr: 26.0,
      fiveWickets: 0,
      fourWickets: 0,
      maidens: 0,
      hattricks: 0,
    },
    img: 'path/to/riyan-parag.jpg',
  },
  {
    name: 'Travis Head',
    team: 'SRH',
    batting: {
      matches: 15,
      runs: 567,
      avg: 40.5,
      sr: 191.55,
      hundreds: 1,
      fifties: 4,
      fours: 64,
      sixes: 32,
      hs: '102',
    },
    bowling: {
      matches: 10,
      wickets: 8,
      econ: 7.85,
      avg: 29.12,
      sr: 22.0,
      fiveWickets: 0,
      fourWickets: 0,
      maidens: 0,
      hattricks: 0,
    },
    img: 'path/to/travis-head.jpg',
  },
  {
    name: 'Sanju Samson',
    team: 'RR',
    batting: {
      matches: 16,
      runs: 531,
      avg: 48.27,
      sr: 153.46,
      hundreds: 0,
      fifties: 5,
      fours: 48,
      sixes: 24,
      hs: '86',
    },
    bowling: {
      matches: 14,
      wickets: 9,
      econ: 9.23,
      avg: 37.11,
      sr: 24.0,
      fiveWickets: 0,
      fourWickets: 0,
      maidens: 0,
      hattricks: 0,
    },
    img: 'path/to/sanju-samson.jpg',
  },
  // Add more player data here...
];

const TableCellComponent = ({ data, isHeader, colspan, styles }) => (
  <TableCell
    align='center'
    colSpan={colspan || 1}
    sx={{ color: isHeader ? 'white' : 'inherit', minWidth: 0, ...styles }}
  >
    {data}
  </TableCell>
);

const PlayerStats = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState(playerData);
  const [season, setSeason] = useState(2024); // Default to the latest season

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
    // You can add logic here to fetch or filter data based on the selected season
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    const filtered = playerData.filter(
      (player) =>
        player.name.toLowerCase().includes(value) ||
        player.team.toLowerCase().includes(value)
    );
    setFilteredPlayers(filtered);
  };

  const battingHeaders = [
    'M',
    'Runs',
    'Ave',
    'S/Rate',
    '100s',
    '50s',
    '4s',
    '6s',
    'H.Score',
  ];
  const bowlingHeaders = [
    'M',
    'W',
    'Eco',
    'Ave',
    'S/Rate',
    '5W',
    '4W',
    'Maidens',
    'Hattricks',
  ];

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextField
          label='Search'
          variant='outlined'
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            sx: {
              marginLeft: '20px',
              marginTop: '15px',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              padding: '0px',
            },
            '& .MuiInputBase-input': {
              padding: '10px',
            },
            '& .MuiInputLabel-root': {
              top: '10px',
              left: '20px',
            },
          }}
        />

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
            marginRight: '20px',
            marginTop: '15px',
            padding: '0px', // Custom padding
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          flexDirection: 'column',
          overflowX: 'auto',
        }}
      >
        <TableContainer component={Paper} sx={{ width: '100%' }}>
          <Table aria-label='player stats table'>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#0f1626' }}>
                <TableCellComponent
                  data='Batting'
                  isHeader={true}
                  colspan={10}
                  styles={{ fontFamily: 'MontserratBold', fontSize: '17px' }}
                />
                <TableCellComponent
                  data='Bowling'
                  isHeader={true}
                  colspan={10}
                  styles={{ fontFamily: 'MontserratBold', fontSize: '17px' }}
                />
              </TableRow>
              <TableRow sx={{ backgroundColor: '#0f1626' }}>
                <TableCellComponent
                  data='Player'
                  isHeader={true}
                  styles={{ minWidth: 200 }}
                />
                {battingHeaders.map((header, index) => (
                  <TableCellComponent
                    key={index}
                    data={header}
                    isHeader={true}
                    styles={{
                      fontSize: '13px',
                      borderLeft: index === 0 ? '1px solid white' : '',
                    }}
                  />
                ))}
                {bowlingHeaders.map((header, index) => (
                  <TableCellComponent
                    key={index}
                    data={header}
                    isHeader={true}
                    styles={{
                      fontSize: '13px',
                      borderLeft: index === 0 ? '1px solid white' : '',
                    }}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPlayers.map((player, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:nth-of-type(even)': { backgroundColor: '#f2f2f2' },
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        alt={player.name}
                        src={player.img}
                        sx={{ marginRight: 1 }}
                      />
                      <div>
                        <Typography variant='body1'>{player.name}</Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {player.team}
                        </Typography>
                      </div>
                    </Box>
                  </TableCell>
                  {[
                    player.batting.matches,
                    player.batting.runs,
                    player.batting.avg,
                    player.batting.sr,
                    player.batting.hundreds,
                    player.batting.fifties,
                    player.batting.fours,
                    player.batting.sixes,
                    player.batting.hs,
                  ].map((stat, i) => (
                    <TableCellComponent
                      key={i}
                      data={stat}
                      styles={{ borderLeft: i === 0 ? '1px solid gray' : '' }}
                    />
                  ))}
                  {[
                    player.bowling.matches,
                    player.bowling.wickets,
                    player.bowling.econ,
                    player.bowling.avg,
                    player.bowling.sr,
                    player.bowling.fiveWickets,
                    player.bowling.fourWickets,
                    player.bowling.maidens,
                    player.bowling.hattricks,
                  ].map((stat, i) => (
                    <TableCellComponent
                      key={i}
                      data={stat}
                      styles={{ borderLeft: i === 0 ? '1px solid gray' : '' }}
                    />
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PlayerStats;
