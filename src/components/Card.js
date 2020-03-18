import styled from '@emotion/styled';

const Card = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  color: ${props => props.theme.colors.textPrimary};
`;

export default Card;
