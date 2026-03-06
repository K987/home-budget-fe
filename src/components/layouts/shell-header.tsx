import { useLingui } from '@lingui/react/macro';
import {
  ActionIcon,
  Flex,
  Group,
  Image,
  Menu,
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { GrLanguage } from 'react-icons/gr';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { dynamicActivate, locales } from '@/utils/i18n.ts';

const ShellHeader = () => {
  const { toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const currentColorScheme = useComputedColorScheme('light');

  const { t } = useLingui();

  return (
    <Flex
      gap="xl"
      justify="space-between"
      style={{ height: '100%', margin: '0 24px' }}
      align="center"
      direction="row"
      wrap="nowrap"
    >
      <div>Logo</div>
      <div />
      {/* Empty spacer */}
      <Group gap="md">
        <Menu transitionProps={{ transition: 'fade-up', duration: 150 }}>
          <Menu.Target>
            <ActionIcon
              autoContrast
              size="sm"
              radius="md"
              variant="default"
              aria-label={t`select language`}
            >
              <GrLanguage />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {Object.entries(locales).map(([key, value]) => (
              <Menu.Item
                key={key}
                onClick={() => dynamicActivate(key)}
                aria-label={value.name}
                leftSection={
                  <Image
                    src={value.icon}
                    alt={value.name}
                    width={16}
                    height={16}
                  />
                }
              >
                {value.name}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Switch
          onClick={() => toggleColorScheme()}
          checked={currentColorScheme === 'dark'}
          size="md"
          color="dark.4"
          aria-label={t`toggle color scheme`}
          onLabel={<MdDarkMode size={16} />}
          offLabel={<MdLightMode size={16} />}
        />
      </Group>
    </Flex>
  );
};

export default ShellHeader;
