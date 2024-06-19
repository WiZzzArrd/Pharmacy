import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
    return (
     <>
            <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                variant="rectangular"
                width={210}
                height={118}
            />     <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                variant="rectangular"
                width={210}
                height={118}
            />     <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                variant="rectangular"
                width={210}
                height={118}
            />  <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                variant="rectangular"
                width={210}
                height={118}
            />  <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                variant="rectangular"
                width={210}
                height={118}
            />  <Skeleton
                sx={{ bgcolor: 'grey.300' }}
                variant="rectangular"
                width={210}
                height={118}
            />
     </>
    );
}