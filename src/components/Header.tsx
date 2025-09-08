import {
  Burger,
  Text,
  useMantineColorScheme,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { IconCurrencyDollar } from '@tabler/icons-react';

interface HeaderComponentProps {
  opened: boolean;
  toggle: () => void;
}

export default function HeaderComponent({
  opened,
  toggle,
}: HeaderComponentProps) {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  const isDark = colorScheme === "dark";
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <Group p="md" justify="space-between">
      <Group>
        {isMobile && (
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        )}
       
        <ActionIcon
          variant="filled"
          color={isDark ? "yellow" : "blue"}
          onClick={toggleColorScheme}
          size="lg"
        >
          {isDark ? <IconCurrencyDollar size={20} /> : <IconCurrencyDollar size={20} />}
        </ActionIcon>
         <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "red", to: "blue", deg: 90 }}
        >
          TRACKER-APP
        
        </Text>
      </Group>
      <Group gap={5}>
        <ActionIcon
          variant="filled"
          color={isDark ? "yellow" : "blue"}
          onClick={toggleColorScheme}
          size="lg"
          aria-label={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
        </ActionIcon>
      </Group>
    </Group>
  );
}
