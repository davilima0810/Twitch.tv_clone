import React from 'react';

import { Container, Avatar, OnlineStatus, RightSide, Button , AvatarContainer} from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';
import Perfil from '../../images/category_csgo.jpg'

const Header: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={Perfil} />
        <OnlineStatus />
      </AvatarContainer>

      <RightSide>
        <Button>
          <MaterialCommunityIcons 
            name="bell-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons 
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather 
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
