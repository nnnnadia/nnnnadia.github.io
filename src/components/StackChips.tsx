import { Chip, Stack } from '@mui/material';
import React, { useState } from 'react';

export default function StackChips() {
  const [myStacks, setMyStacks] = useState(['JavaScript', 'TypeScript', 'React', 'Docker', 'MySQL', 'Sequelize', 'Redux'])
  return (
    <Stack direction="row" spacing={1}>
      {myStacks.map((stack) => <Chip key={stack} label={stack} color="primary" />)}
    </Stack>
  );
}
