import React from 'react';
import TextField from '../components/TextField';

const Page2 = () => {
  return (
    <div>
      <TextField label="Workspace name" hint="Eden" />
      <TextField
        label="Workspace name"
        hint="Eden"
        linkText="www.eden.com/"
        optionalText="optional"
      />
    </div>
  );
};

export default Page2;
