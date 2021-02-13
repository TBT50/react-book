import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`
export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  flex: 1;
  border-radius: 3px;
  padding: 10px;
`

export const ColumnTitle = styled.h2`
  font-weight: bold;
`

export const CardContainer = styled.li`
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0.5rem;
  box-shadow: #091e4240 0 1px 0 0;
`

interface AddItemsButtonProps {
  dark: boolean
}

export const addItemButton = styled.button<AddItemsButtonProps>`

`