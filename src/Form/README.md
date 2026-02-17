# Документация по компонентам формы

Пакет для управления инпутами с поддержкой валидации и отображения ошибок в попапе.

## Содержание

- [Основные концепции](#основные-концепции)
- [InputContainer](#inputcontainer)
- [Компоненты](#компоненты)
  - [Текстовые инпуты](#текстовые-инпуты)
    - [Input](#input)
    - [TextArea](#textarea)
    - [NumberInput](#numberinput)
    - [MaskedInput](#maskedinput)
  - [Выпадающие списки](#выпадающие-списки)
    - [Select](#select)
    - [MultiSelect](#multiselect)
  - [Поиск](#поиск)
    - [Search](#search)
    - [MultipleSearch](#multiplesearch)
  - [Группированные списки](#группированные-списки)
    - [GroupSelect](#groupselect)
    - [GroupSearch](#groupsearch)
    - [GroupSelectWithSearch](#groupselectwithsearch)
  - [Дата и время](#дата-и-время)
    - [DateInput](#dateinput)
    - [DateTimeInput](#datetimeinput)
  - [Файлы](#файлы)
    - [FileInput](#fileinput)
  - [Чекбоксы](#чекбоксы)
    - [Checkbox](#checkbox)
    - [RoundCheckbox](#roundcheckbox)
- [Обработка ошибок](#обработка-ошибок)

## Основные концепции

Все компоненты формы должны быть обернуты в `InputContainer`, который обеспечивает:
- Отображение placeholder'а
- Визуальное оформление состояния фокуса
- Отображение ошибок в попапе при наведении на иконку ошибки
- Иконки и дополнительные элементы управления

### Структура использования

```tsx
import { InputContainer, Input } from './Form';

<InputContainer error={errorMessage}>
  <Input
    id="field-id"
    placeholder="Введите значение"
    value={value}
    onChange={setValue}
  />
</InputContainer>
```

## InputContainer

Основной контейнер для всех инпутов. Обеспечивает единообразное оформление и обработку ошибок.

### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `children` | `React.ReactNode` | - | Единственный дочерний компонент (Input, Select, TextArea и т.д.) |
| `className` | `string` | `''` | Дополнительные CSS классы |
| `style` | `React.CSSProperties` | `{}` | Инлайн стили |
| `error` | `string \| null` | `null` | **Текст ошибки для отображения в попапе** |

**Важно:** `error` должен быть **строкой** (не массивом) для корректного отображения в попапе. При наведении на иконку ошибки появляется попап с текстом ошибки.

## Компоненты

### Текстовые инпуты

<details>
<summary><b>Input</b> — базовый текстовый инпут</summary>

#### Input

```tsx
import { InputContainer, Input } from './Form';

const [value, setValue] = useState('');
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <Input
    id="username"
    placeholder="Имя пользователя"
    value={value}
    onChange={setValue}
  />
</InputContainer>
```
</details>

<details>
<summary><b>TextArea</b> — многострочный текстовый инпут</summary>

#### TextArea

```tsx
import { InputContainer, TextArea } from './Form';

const [value, setValue] = useState('');
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <TextArea
    id="description"
    placeholder="Описание"
    value={value}
    onChange={setValue}
    rows={5}
    autoResize={true}
  />
</InputContainer>
```

**Дополнительные props:** `rows` (по умолчанию 3), `autoResize` (по умолчанию true), `disableResize`
</details>

<details>
<summary><b>NumberInput</b> — инпут для числовых значений</summary>

#### NumberInput

```tsx
import { InputContainer, NumberInput } from './Form';

const [value, setValue] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <NumberInput
    id="amount"
    placeholder="Сумма"
    value={value}
    onChange={setValue}
    min={0}
    max={1000000}
  />
</InputContainer>
```
</details>

<details>
<summary><b>MaskedInput</b> — инпут с маской ввода</summary>

#### MaskedInput

```tsx
import { InputContainer, MaskedInput } from './Form';

const [value, setValue] = useState('');
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <MaskedInput
    id="phone"
    placeholder="Телефон"
    value={value}
    onChange={setValue}
    mask="+7 (999) 999-99-99"
  />
</InputContainer>
```
</details>

### Выпадающие списки

<details>
<summary><b>Select</b> — одиночный выбор</summary>

#### Select

```tsx
import { InputContainer, Select } from './Form';

interface Option {
  id: string | number;
  name: string;
}

const options: Option[] = [
  { id: 1, name: 'Опция 1' },
  { id: 2, name: 'Опция 2' },
];

const [value, setValue] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <Select
    id="category"
    placeholder="Выберите категорию"
    value={value}
    onChange={(option) => setValue(option?.id || null)}
    options={options}
  />
</InputContainer>
```

**Важно:** `onChange` получает объект `Option` целиком, а не только значение.
</details>

<details>
<summary><b>MultiSelect</b> — множественный выбор</summary>

#### MultiSelect

```tsx
import { InputContainer, MultiSelect } from './Form';

const options: Option[] = [
  { id: 1, name: 'Опция 1' },
  { id: 2, name: 'Опция 2' },
];

const [values, setValues] = useState<number[]>([]);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <MultiSelect
    id="tags"
    placeholder="Выберите теги"
    values={values}
    onChange={(option) => {
      setValues(prev => 
        prev.includes(option.id) 
          ? prev.filter(id => id !== option.id)
          : [...prev, option.id]
      );
    }}
    onChangeAll={(selectAll) => {
      setValues(selectAll ? options.map(o => o.id) : []);
    }}
    options={options}
  />
</InputContainer>
```
</details>

### Поиск

<details>
<summary><b>Search</b> — поиск с одиночным выбором</summary>

#### Search

```tsx
import { InputContainer, Search } from './Form';

const [search, setSearch] = useState('');
const [value, setValue] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <Search
    id="user-search"
    placeholder="Поиск пользователя"
    value={value}
    search={search}
    onChange={(option) => {
      setValue(option?.id || null);
      setSearch(option?.name || '');
    }}
    onSearch={setSearch}
    options={filteredOptions}
  />
</InputContainer>
```
</details>

<details>
<summary><b>MultipleSearch</b> — поиск с множественным выбором</summary>

#### MultipleSearch

```tsx
import { InputContainer, MultipleSearch } from './Form';

const [search, setSearch] = useState('');
const [values, setValues] = useState<number[]>([]);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <MultipleSearch
    id="users-search"
    placeholder="Поиск пользователей"
    values={values}
    search={search}
    onChange={(option) => {
      setValues(prev => 
        prev.includes(option.id) 
          ? prev.filter(id => id !== option.id)
          : [...prev, option.id]
      );
    }}
    onSearch={setSearch}
    options={filteredOptions}
  />
</InputContainer>
```
</details>

### Группированные списки

<details>
<summary><b>GroupSelect</b> — выпадающий список с группировкой</summary>

#### GroupSelect

```tsx
import { InputContainer, GroupSelect } from './Form';

interface GroupOption {
  id: string | number;
  name: string;
  items: Option[];
}

const groupOptions: GroupOption[] = [
  {
    id: 'group1',
    name: 'Группа 1',
    items: [
      { id: 1, name: 'Опция 1.1' },
      { id: 2, name: 'Опция 1.2' },
    ]
  },
];

const [value, setValue] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <GroupSelect
    id="grouped-select"
    placeholder="Выберите из группы"
    value={value}
    onChange={(option) => setValue(option?.id || null)}
    options={groupOptions}
  />
</InputContainer>
```
</details>

<details>
<summary><b>GroupSearch</b> — поиск с группировкой</summary>

#### GroupSearch

```tsx
import { InputContainer, GroupSearch } from './Form';

const [search, setSearch] = useState('');
const [value, setValue] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <GroupSearch
    id="grouped-search"
    placeholder="Поиск в группах"
    value={value}
    search={search}
    onChange={(option) => {
      setValue(option?.id || null);
      setSearch(option?.name || '');
    }}
    onSearch={setSearch}
    options={groupOptions}
  />
</InputContainer>
```
</details>

<details>
<summary><b>GroupSelectWithSearch</b> — список с группировкой и поиском</summary>

#### GroupSelectWithSearch

```tsx
import { InputContainer, GroupSelectWithSearch } from './Form';

const [search, setSearch] = useState('');
const [value, setValue] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <GroupSelectWithSearch
    id="grouped-select-search"
    placeholder="Выберите с поиском"
    value={value}
    search={search}
    onChange={(option) => {
      setValue(option?.id || null);
      setSearch(option?.name || '');
    }}
    onSearch={setSearch}
    options={groupOptions}
  />
</InputContainer>
```
</details>

### Дата и время

<details>
<summary><b>DateInput</b> — выбор даты</summary>

#### DateInput

```tsx
import { InputContainer, DateInput } from './Form';

const [value, setValue] = useState<Date | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <DateInput
    id="birthdate"
    placeholder="Дата рождения"
    value={value}
    onChange={setValue}
  />
</InputContainer>
```
</details>

<details>
<summary><b>DateTimeInput</b> — выбор даты и времени</summary>

#### DateTimeInput

```tsx
import { InputContainer, DateTimeInput } from './Form';

const [value, setValue] = useState<Date | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <DateTimeInput
    id="datetime"
    placeholder="Дата и время"
    value={value}
    onChange={setValue}
  />
</InputContainer>
```
</details>

### Файлы

<details>
<summary><b>FileInput</b> — загрузка файлов</summary>

#### FileInput

```tsx
import { InputContainer, FileInput } from './Form';

const [file, setFile] = useState<File | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <FileInput
    id="document"
    placeholder="Выберите файл"
    value={file}
    onChange={setFile}
    accept=".pdf,.doc,.docx"
  />
</InputContainer>
```
</details>

### Чекбоксы

<details>
<summary><b>Checkbox</b> — чекбокс</summary>

#### Checkbox

```tsx
import { Checkbox } from './Form';

const [checked, setChecked] = useState(false);

<Checkbox
  id="agree"
  checked={checked}
  onChange={setChecked}
  label="Я согласен с условиями"
/>
```
</details>

<details>
<summary><b>RoundCheckbox</b> — круглый чекбокс</summary>

#### RoundCheckbox

```tsx
import { RoundCheckbox } from './Form';

const [checked, setChecked] = useState(false);

<RoundCheckbox
  id="option"
  checked={checked}
  onChange={setChecked}
/>
```
</details>

## Обработка ошибок

**Важно:** Для корректного отображения ошибки в попапе необходимо передать **строку** в проп `error` компонента `InputContainer`. При наведении на иконку ошибки появляется попап с текстом ошибки.

### Пример 1: Простая валидация

```tsx
import { InputContainer, Input } from './Form';
import { useState } from 'react';

function MyForm() {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!value.trim()) {
      setError('Поле обязательно для заполнения');
      return;
    }
    
    if (value.length < 3) {
      setError('Минимальная длина 3 символа');
      return;
    }
    
    setError(null);
    // Отправка формы
  };

  return (
    <InputContainer error={error}>
      <Input
        id="field"
        placeholder="Введите значение"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          // Очищаем ошибку при изменении значения
          if (error) setError(null);
        }}
      />
    </InputContainer>
  );
}
```

### Пример 2: Работа с массивом ошибок

Если валидация возвращает массив ошибок, используйте первую ошибку или объедините их:

```tsx
import { InputContainer, Input } from './Form';
import { useState } from 'react';

function MyForm() {
  const [value, setValue] = useState('');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Использовать первую ошибку
  const errorMessage = validationErrors.length > 0 
    ? validationErrors[0] 
    : null;

  return (
    <InputContainer error={errorMessage}>
      <Input
        id="field"
        placeholder="Введите значение"
        value={value}
        onChange={setValue}
      />
    </InputContainer>
  );
}
```

## Примечания

- Все инпуты должны быть обернуты в `InputContainer` для корректной работы
- `InputContainer` принимает только один дочерний элемент
- Для отображения ошибки в попапе передавайте строку в проп `error` компонента `InputContainer`
- Ошибка автоматически скрывается при передаче `null` или пустой строки