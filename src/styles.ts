import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 20px;
  background-color: #3179ba;
  padding: 20px;
`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  padding: 8px;
`
export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`

export const CardContainer = styled.div`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0 1px 0 0;
`