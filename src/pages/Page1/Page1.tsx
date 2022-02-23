import SummaryText from '../../components/SummaryText/SummaryText';
import TextField from '../../components/TextField/TextField';

const Page1 = () => {
  const temp = (t: any) => {
    console.log(t.target.value);
  };
  return (
    <div>
      <SummaryText
        heading="Welcome! First things first..."
        subheading="You can always change them later."
      />
      <div className="form-group">
        <TextField label="Full name" hint="Steve Jobs" onChange={temp} />
        <TextField label="Display name" hint="Steve" onChange={temp} />
      </div>
    </div>
  );
};

export default Page1;
