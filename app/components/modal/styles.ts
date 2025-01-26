import styled from "styled-components/native";

export const Container = styled.View`
  postion: absolute;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  justify-content: center;
  width: 40%;
  gap: 10px;
  border-radius: 15px;
  z-index: 100;
`;

export const Wrapper = styled.View`
  padding: 15px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #eee;
  width: 100%;
  text-align: center;
`;

export const Wrapper2 = styled.View`
  padding: 15px;
  text-align: center;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Text = styled.Text`
  color: #a6a6a6;
  font-size: 14px;
  font-weight: 400;
`;
