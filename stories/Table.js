/* eslint-disable import/no-exTRaneous-dependencies */
import React, { useState, useReducer } from 'react';
import { storiesOf } from '@storybook/react';
import { Table, THead, TBody, TH, TD, TR } from '../lib';

const StoryTHead = ({
  onClickSelect = () => {},
  onClickAddress = () => {},
  isSelected = false,
  addressSort,
}) => (
  <THead>
    <TH><input type="checkbox" onClick={onClickSelect} checked={isSelected}/></TH>
    <TH onClick={onClickAddress} sorting={addressSort}>Address</TH>
    <TH>Type</TH>
    <TH>Updated</TH>
    <TH>Status</TH>
  </THead>
)

const StoryTR = ({ data, isSelected = false, onClick }) => (
  <TR
    className={isSelected ? 'selected' : ''}
    onClick={onClick}
    focusable={!!onClick}
    variant={isSelected ? TR.variant.SELECTED : TR.variant.BORDERED}
  >
    {onClick && <TD><input type="checkbox" checked={isSelected} readOnly={true}/></TD>}
    <TD>{data.address}</TD>
    <TD>{data.type}</TD>
    <TD>{data.updated}</TD>
    <TD>{data.status}</TD>
  </TR>
)

const Inactive = () => <span style={{ fontWeight: 'bold', color: 'red' }}>Inactive</span>

const data = [
  {address: '01.02.03.04.05', type: 'IP', updated: '2019-07-02', status: <Inactive /> },
  {address: '01.02.03.04', type: 'IP', updated: '2019-07-01', status: <Inactive /> },
  {address: '01.02.03.04.05 - 01.02.03.04.05', type: 'IP Range', updated: '2019-07-04', status: <Inactive /> },
  {address: '01.02.03.04.05 / 40', type: 'CIDR block', updated: '2019-07-03', status: <Inactive /> },
]

const makeLookup = (set, key, valueFn = x => x) => {
  const lookup = {}
  set.forEach(element => {
    const name = element[key]
    lookup[name] = valueFn(element)
  })
  return lookup
} 

const selectedLookup = makeLookup(data, 'address', () => false)

const actionTypes = {
  TOGGLE: 'TOGGLE',
  ALL_ON: 'ALL_ON',
  ALL_OFF: 'ALL_OFF',
}

const toggleSelectedReducer = (state, action) => {
  const newState = { ...state }
  switch(action.type) {
    case actionTypes.TOGGLE: newState[action.address] = !newState[action.address]; return newState;
    case actionTypes.ALL_ON: return makeLookup(data, 'address', () => true);
    case actionTypes.ALL_OFF: return makeLookup(data, 'address', () => false);
    default: throw new Error();
  }
}

const createActions = dispatch => ({
  toggle: address => dispatch({ type: actionTypes.TOGGLE, address }),
  allOn: () => dispatch({ type: actionTypes.ALL_ON }),
  allOff: () => dispatch({ type: actionTypes.ALL_OFF }),
})

const { SORT_OFF, SORT_ASC, SORT_DESC } = TH.sortDirection
const sortOrder = {
  [SORT_OFF]: SORT_ASC,
  [SORT_DESC]: SORT_OFF,
  [SORT_ASC]: SORT_DESC,
}

storiesOf('Table', module).lokiSkip('basic', () => (
    <Table>
      <THead>
        <TH>Address</TH>
        <TH>Type</TH>
        <TH>Updated</TH>
        <TH>Status</TH>
      </THead>
      <TBody>
        {data.map((d, i) => (
          <StoryTR key={i} data={d} />
        ))}
      </TBody>
    </Table>
  )
).lokiSkip('sort + select', () => {
  const [selectedState, dispatch] = useReducer(toggleSelectedReducer, selectedLookup)
  const [sortDirection, setSortDirection] = useState(TH.sortDirection.SORT_OFF)
  const actions = createActions(dispatch)
  const isAllSelected = Object.values(selectedState).every(isTrue => isTrue)
  const changeSort = () => setSortDirection(sortOrder[sortDirection])
  const sortedData = [...data]
  
  if (sortDirection === SORT_ASC) {
    sortedData.sort((d1, d2) => d1.address < d2.address ? -1 : 1)
  } else if (sortDirection === SORT_DESC) {
    sortedData.sort((d1, d2) => d1.address > d2.address ? -1 : 1)
  }
  
  return (
    <Table>
      <StoryTHead
        isSelected={isAllSelected}
        onClickSelect={isAllSelected ? actions.allOff : actions.allOn}
        addressSort={sortDirection}
        onClickAddress={changeSort}
      />
      <TBody>
        {sortedData.map(d => (
          <StoryTR 
            key={d.address} 
            data={d}
            isSelected={selectedState[d.address]} 
            onClick={() => actions.toggle(d.address)}
          />
        ))}
      </TBody>
    </Table>
  )
});
