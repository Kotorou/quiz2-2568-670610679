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

  return {
    <Modal opened={toggle} toggle={toggle} title="Add Expense">
    
   </Modal>
    <Button>
    </Button>
    /* Type additional text here. */

  };
}
