import { Chip, FormControlLabel, Stack, Switch } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import stackService from '../service/stacksService';

export default function StackChips() {
  const { stacksSelected, setStacksSelected } = useContext(Context);

  const [myStacks, setMyStacks] = useState(stackService.getAll());
  const [allChecked, setAllChecked] = useState(true);

  const isStackSelected = (stackId: number) => stacksSelected.includes(stackId);

  const whichChipVariant = (stackId: number): 'filled' | 'outlined' => {
    if (isStackSelected(stackId)) return 'filled';
    return 'outlined';
  }

  const handleAllChecked = () => {
    if (!allChecked) { // se NÃO estiverem todas selecionadas
      setStacksSelected(stackService.getEveryStackId());
    } else {
      setStacksSelected([]);
    }
    setAllChecked(!allChecked); // agora estarão
  };

  const handleStackSelection = (stackId: number) => {
    if (isStackSelected(stackId)) {
      setStacksSelected(stacksSelected.filter((stack) => stack !== stackId));
    } else {
      setStacksSelected([...stacksSelected, stackId]);
    }
  };

  useEffect(() => {
    if (stacksSelected.length === myStacks.length) setAllChecked(true);
    if (stacksSelected.length === 0) setAllChecked(false);
  }, [stacksSelected, myStacks.length])

  return (
    <>
      <Stack direction="row" spacing={1}>
        {myStacks.map((stack) => (<Chip
          key={stack.id}
          label={stack.name}
          color={"primary"}
          variant={whichChipVariant(stack.id)}
          onClick={() => handleStackSelection(stack.id)}
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
