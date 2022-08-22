import React from 'react';
import { Flex } from '..';
import NavbarContainer from './NavbarContainer';

export const Navbar = () => {
  return (
    <Flex className='header' justifyContent='center'>
      <NavbarContainer></NavbarContainer>
    </Flex>
  );
};
