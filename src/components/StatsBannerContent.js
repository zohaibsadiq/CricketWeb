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
  padding: '8px 16px',
  fontSize: '15px',
  color: 'white',
  textAlign: 'center',
  lineHeight: '1.2',
  fontWeight: 'bold',
  fontFamily: 'montserratLight',
  borderBottom: 'none',
};

const Stats = ({ data, name, number, image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '20px',
        borderRadius: '10px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
          marginBottom: '-20px', // Remove the gap between image and text
          flexWrap: 'wrap',
          textAlign: 'center', // Center content on small screens
        }}
      >
        <Box
          component='img'
          src={image}
          alt='poster'
          sx={{
            width: '250px',
            height: 'auto',
            zIndex: 2,
            borderRadius: '50%', // Make the image circular
            border: '10px solid rgba(255, 255, 255, 0.2)', // Add the circular ring effect
          }}
        />
        <Box sx={{ marginLeft: '2px', width: '300px' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Box sx={{ maxWidth: '25vw',marginTop:2 }}>
            <Typography
              variant='h5'
              sx={{ lineHeight: '1', textTransform: 'capitalize', color: '#d9ddce' }}
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
                color: '#d9ddce',
              }}
              fontFamily={'montserratExtraBold'}
            >
              {number}
            </Typography>
            <Box sx={{ marginTop: '15px', textAlign: 'center',display:'flex', justifyContent:'center', alignItems:'center' }}>
              <Table sx={{ minWidth: 300 }}>
                <TableBody sx={{ display: 'flex', justifyContent: 'center' }}>
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
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            margin: '4px',
                            borderRadius: '8px',
                          }}
                        >
                          {item.value}
                          <br />
                          <Typography
                            component='span'
                            sx={{ fontSize: '13px', fontWeight: 'normal', color: 'rgba(255, 255, 255, 0.9)' }}
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
      </Box>
    </Box>
  );
};

export default Stats;
