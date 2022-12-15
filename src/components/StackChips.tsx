import { Chip, Stack } from '@mui/material';
import React, { useState } from 'react';
import stackService from '../service/stacksService';

export default function StackChips() {
  const [myStacks, setMyStacks] = useState(stackService.getAll());

  return (
    <Stack direction="row" spacing={1}>
      {myStacks.map((stack) => <Chip key={stack} label={stack} color="primary" />)}
    </Stack>
  );
}
