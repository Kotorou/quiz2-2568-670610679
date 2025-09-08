import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';

const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      Expensename: (value: string | any[]) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      amount: (value: number) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      Category: (value: string) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};







export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);
   const [opened, {toggle }] = useDisclosure(false);
  const handleSubmit = () => {



  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
 // let val_number: number = Number("500.0");
//  console.log(val_number + 100); // 600.0

  return (
    <><Modal opened={opened} onClose={toggle} title="Add Expense">
      <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      </form>
    </Modal>
    <Button>
      </Button>
</>
    /* Type additional text here. */

  );
}
