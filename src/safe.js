import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
  } from '@mui/material';
  import React from 'react';
  
  const cellStyles = {
    padding: '8px',
    fontSize: '15px',
    color: 'white',
    textAlign: 'center',
    border: 'none',
    lineHeight: '0.8',
    fontWeight: 'bold',
    border: '1px solid white',
    fontFamily: 'montserratLight',
  };
  
  const Stats = ({ data, name, number, image }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={image} alt='poster' width={250} height={'100%'} />
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ maxWidth: '20vw' }}>
              <Typography
                variant='h4'
                sx={{ margin: '6px 0px 4px', textTransform: 'uppercase' }}
                component={'p'}
              ></Typography>
              <Typography
                variant='h5'
                sx={{ lineHeight: '1', textTransform: 'capitalize' }}
                fontFamily={'btBrik'}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                  margin: 'auto',
                }}
                fontFamily={'montserratExtraBold'}
              >
                {number}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            marginTop: '-1px',
          }}
        >
          <Box sx={{ fontSize: '12px' }}>
            <Table>
              <TableBody sx={{ margin: 'auto' }}>
                <TableRow
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  {data.map((item, index) => {
                    return (
                      <TableCell
                        key={index}
                        sx={{
                          ...cellStyles,
                        }}
                      >
                        {item.value}
                        <br />
                        <Typography
                          component='span'
                          sx={{ fontSize: '15px' }}
                          fontFamily={'montserratLight'}
                        >
                          {item.label}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Stats;
  