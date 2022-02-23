import SummaryText from '../components/SummaryText';
import TextField from '../components/TextField';

const Page2 = () => {
  return (
    <div>
      <SummaryText
        heading="Let's set up a home for all your work"
        subheading="You can always create another workspace later."
      />
      <div className="form-group">
        <TextField label="Workspace name" hint="Eden" />
        <TextField
          label="Workspace name"
          hint="Eden"
          linkText="www.eden.com/"
          optionalText="optional"
        />
      </div>
    </div>
  );
};

export default Page2;
