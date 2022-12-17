import { Chip, FormControlLabel, Stack, Switch } from '@mui/material';
import React, { useContext, useState } from 'react';
import StacksContext from '../context/StacksContext';
import stackService from '../service/stacksService';

export default function StackChips() {
  const { stacksNotSelected, setStacksNotSelected } = useContext(StacksContext);

  const [myStacks, setMyStacks] = useState(stackService.getAll());
  const [allChecked, setAllChecked] = useState(true);

  const isStackSelected = (stackId: number) => !stacksNotSelected.includes(stackId);

  const whichChipVariant = (stackId: number): 'filled' | 'outlined' => {
    if (isStackSelected(stackId)) return 'filled';
    return 'outlined';
  }

  const handleAllChecked = () => {
    if (allChecked) {
      setStacksNotSelected(myStacks.map((stack) => stack.id));
    } else {
      setStacksNotSelected([]);
    }
    setAllChecked(!allChecked);
  };

  // const handleStackSelection = (stackId: number) => {

  // };

  return (
    <>
      <Stack direction="row" spacing={1}>
        {myStacks.map((stack) => (<Chip
          key={stack.id}
          label={stack.name}
          color={"primary"}
          variant={whichChipVariant(stack.id)}
          // onClick={}
        />))}
      </Stack>
      <FormControlLabel
        control={
          <Switch color='primary' checked={allChecked} onChange={handleAllChecked} />
        }
        label="Todos"
        labelPlacement="bottom"
      />
    </>
  );
}
