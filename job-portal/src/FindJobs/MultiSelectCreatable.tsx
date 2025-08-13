import {
  Checkbox,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from '@mantine/core';
import { IconSearch, IconSelector } from '@tabler/icons-react';
import { useEffect, useState } from 'react';



export function MaxInput(props:any) {{
  useEffect(()=>{
    setData(props.options);
  }, [])
}
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item.toLowerCase() === search.toLowerCase());

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value
    .slice(0, 1)
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  // Filter options based on search text
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const options = filteredData.map((item) => (
    <Combobox.Option value={item} key={item}>
      <Group gap="sm">
        <Checkbox
          size="sm"
          color="brightSun.4"
          checked={value.includes(item)}
          onChange={() => {}}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput
          rightSection={<IconSelector />}
          leftSection={
            <div className="text-bright-sun-400 p-1 bg-mine-shaft-950 rounded-full mr-1">
              <props.icon/>
            </div>
          }
          onClick={() => combobox.toggleDropdown()}
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && <Pill>+{value.length - 1} more</Pill>}
              </>
            ) : (
              <Input.Placeholder className='!text-mine-shaft-200'>{props.title}</Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        {/* Search box inside dropdown */}
        <Combobox.Search
  value={search}
  onChange={(event) => setSearch(event.currentTarget.value)}
  placeholder="Search groceries"
  className="text-mine-shaft-300"
/>

        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {filteredData.length === 0 && (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default MaxInput;
