import styled from 'styled-components';
import { color } from 'styled-system';
import { Button } from 'rebass/styled-components';

export const CustomButton = styled(Button)`
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const HoverTrigger = styled.div`
  ${CustomButton} {
    transition: background-color 0.25s, color 0.25s;
  }

  ${CustomButton}:hover {
    ${color};
    transition: background-color 0.25s, color 0.25s;
  }
`;

export default HoverTrigger;
