import { Form, FormGroup, Label, Input } from 'reactstrap';

const FilterCheckBoxes = (props) => {
  return (
    <Form>
      <FormGroup check inline>
        <Label check>
          <Input type="checkbox" /> Teaching
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" /> Hackathon
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
           <Input type="checkbox" /> Project
        </Label>
      </FormGroup>
    </Form>
  );
}

export default FilterCheckBoxes;