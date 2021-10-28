import styled from '@emotion/styled';
import img from './image/phone3.jpg';

export const Thumb = styled.div`
   min-height: 'calc(100vh - 50px)';
   display: flex;
   /* align-items: center; */
   justify-content: center;
   margin-left: auto;
   margin-right: auto;
   background-image: linear-gradient(
    to right,
    rgba(253, 254, 255, 0.4),
    rgba(249, 249, 253, 0.4)),
    url(${img});

   /* background-image: url(${img}); */
   max-width: 800px;
   height: 600px;
   background-size: cover;
   background-repeat: no-repeat;
`;

export const Title = styled.h2`
   margin-top: 10px;
`;