import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(216, 205, 147, 0.19);
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 4; /* Android의 그림자 효과 */
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  text-align: left;
  text-decoration: underline; /* 가능한 대체 속성 */
`;
