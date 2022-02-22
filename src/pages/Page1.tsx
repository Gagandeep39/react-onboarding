import TextField from '../components/TextField';

const Page1 = () => {
  const temp = (t: any) => {
    console.log(t.target.value);
  };
  return (
    <div>
      <TextField label="Full name" hint="Steve Jobs" onChange={temp} />
      <TextField label="Display name" hint="Steve" onChange={temp} />
    </div>
  );
};

export default Page1;
