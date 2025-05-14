// src/styles/TabSliderStyled.ts
import styled from '@emotion/styled';

export const TabSliderStyled = styled.div`
  display: flex;
  gap: 20px;
  min-width: 500px;
  overflow-x: auto;
  padding: 10px 0;
  background: #fff;

  .slider-item {
    flex: 0 0 auto;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;
    color: #555;
    transition: background 0.2s, color 0.2s;
    user-select: none;
  }
  .slider-item.active {
    background: #2a9461;
    color: #fff;
  }
`;
