import { styled } from '@egoist/vue-emotion';

export const ButtonCustom = styled('button')`
  font-size: 15px;
  background-color: ${(props) => props.color};
  &:active {
    transform: scale(0.8);
  }
`;
