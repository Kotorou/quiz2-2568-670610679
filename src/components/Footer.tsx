import { Text, Group } from "@mantine/core";
import  {type FooterProps } from "../libs/Footer";
export default function Footer( {courseName,
  year,
  fullName,
  studentId}: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {courseName}-{year} {fullName} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
}
