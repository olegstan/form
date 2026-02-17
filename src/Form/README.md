# Документация по компонентам формы

Пакет для управления инпутами с поддержкой валидации и отображения ошибок в попапе.

## Содержание

- [Установка и импорт](#установка-и-импорт)
- [Типы данных](#типы-данных)
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
- [Примеры полных форм](#примеры-полных-форм)
- [Особенности работы компонентов](#особенности-работы-компонентов)

## Установка и импорт

### Импорт компонентов

```tsx
import { 
  InputContainer,
  Input,
  TextArea,
  NumberInput,
  MaskedInput,
  Select,
  MultiSelect,
  Search,
  MultipleSearch,
  GroupSelect,
  GroupSearch,
  GroupSelectWithSearch,
  DateInput,
  DateTimeInput,
  FileInput,
  Checkbox,
  RoundCheckbox
} from 'finform';
```

**Важно:** Компоненты `Checkbox` и `RoundCheckbox` не требуют обертки в `InputContainer`.

## Типы данных

### Option

Интерфейс для опций в выпадающих списках и поиске:

```tsx
interface Option {
  id: string | number;  // Уникальный идентификатор опции
  name: string;          // Отображаемое название опции
}
```

### GroupOption

Интерфейс для группированных опций:

```tsx
interface GroupOption {
  id: string | number;   // Уникальный идентификатор группы
  name: string;          // Название группы
  items: Option[];       // Массив опций в группе
}
```

## Основные концепции

Все компоненты формы должны быть обернуты в `InputContainer`, который обеспечивает:
- Отображение placeholder'а
- Визуальное оформление состояния фокуса
- Отображение ошибок в попапе при наведении на иконку ошибки
- Иконки и дополнительные элементы управления

### Структура использования

```tsx
import { InputContainer, Input } from 'finform';

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
import { InputContainer, Input } from 'finform';

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

#### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `id` | `string` | - | Уникальный идентификатор поля |
| `name` | `string` | - | Имя поля для формы |
| `value` | `string \| number \| null` | - | Значение инпута |
| `onChange` | `(value: string) => void` | - | Обработчик изменения значения |
| `placeholder` | `string` | - | Текст placeholder'а |
| `disabled` | `boolean` | `false` | Отключение поля |
| `className` | `string` | `''` | Дополнительные CSS классы |
| `style` | `React.CSSProperties` | `{}` | Инлайн стили |
| `type` | `string` | `'text'` | Тип HTML инпута (`text`, `email`, `password` и т.д.) |
| `autoComplete` | `string` | `'off'` | Автозаполнение браузера |
| `icon` | `boolean` | `true` | Показывать ли иконку в InputContainer |
| `onKeyDown` | `(e: KeyboardEvent) => void` | - | Обработчик нажатия клавиш |
| `onBlur` | `(e: FocusEvent) => void` | - | Обработчик потери фокуса |
| `onClick` | `(e: MouseEvent) => void` | - | Обработчик клика |
| `required` | `boolean` | `false` | Обязательное поле |

**Примечание:** Пропсы `focused`, `setFocused`, `error` передаются автоматически через `InputContainer` и не должны указываться вручную.
</details>

<details>
<summary><b>TextArea</b> — многострочный текстовый инпут</summary>

#### TextArea

```tsx
import { InputContainer, TextArea } from 'finform';

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

#### Props

Все пропсы из `Input`, плюс:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `rows` | `number` | `3` | Количество строк |
| `autoResize` | `boolean` | `true` | Автоматическое изменение высоты при вводе |
| `disableResize` | `boolean` | `false` | Отключить возможность ручного изменения размера |

**Особенности:**
- При `autoResize={true}` высота автоматически подстраивается под содержимое
- При `disableResize={true}` отключается возможность ручного изменения размера через UI
</details>

<details>
<summary><b>NumberInput</b> — инпут для числовых значений</summary>

#### NumberInput

```tsx
import { InputContainer, NumberInput } from 'finform';

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
    decimals={2}
  />
</InputContainer>
```

#### Props

Все пропсы из `Input`, плюс:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `min` | `number \| false` | `false` | Минимальное значение |
| `max` | `number \| false` | `false` | Максимальное значение |
| `decimals` | `number \| false` | `false` | Количество знаков после запятой |
| `innerError` | `object \| null` | - | Внутренняя ошибка валидации (используется компонентом) |
| `setInnerError` | `(error: object \| null) => void` | - | Установка внутренней ошибки (используется компонентом) |

**Особенности:**
- Автоматическое форматирование чисел с пробелами для разделения тысяч (например: `1 000 000`)
- Поддержка отрицательных чисел
- Автоматическая валидация при вводе с отображением ошибок через `innerError`
- При превышении `max` или `min` автоматически показывается ошибка
- Поддержка как точки, так и запятой в качестве разделителя дробной части
</details>

<details>
<summary><b>MaskedInput</b> — инпут с маской ввода</summary>

#### MaskedInput

```tsx
import { InputContainer, MaskedInput } from 'finform';

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

#### Props

Все пропсы из `Input`, плюс:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `mask` | `string` | - | Маска ввода (символ `9` означает цифру) |

**Примеры масок:**
- `"+7 (999) 999-99-99"` — телефон
- `"99.99.9999"` — дата
- `"9999 9999 9999 9999"` — номер карты
</details>

### Выпадающие списки

<details>
<summary><b>Select</b> — одиночный выбор</summary>

#### Select

```tsx
import { InputContainer, Select } from 'finform';

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

#### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `id` | `string` | - | Уникальный идентификатор поля |
| `name` | `string` | - | Имя поля для формы |
| `value` | `string \| number \| null` | - | ID выбранной опции |
| `onChange` | `(option: Option \| null) => void` | - | Обработчик выбора опции (получает весь объект Option) |
| `options` | `Option[]` | `[]` | Массив опций для выбора |
| `placeholder` | `string` | - | Текст placeholder'а |
| `disabled` | `boolean` | `false` | Отключение поля |
| `className` | `string` | `''` | Дополнительные CSS классы |
| `style` | `React.CSSProperties` | `{}` | Инлайн стили |
| `icon` | `boolean` | `true` | Показывать ли иконку в InputContainer |
| `addButton` | `any` | `false` | Кнопка добавления новой опции (отображается в списке) |
</details>

<details>
<summary><b>MultiSelect</b> — множественный выбор</summary>

#### MultiSelect

```tsx
import { InputContainer, MultiSelect } from 'finform';

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

#### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `id` | `string` | - | Уникальный идентификатор поля |
| `name` | `string` | - | Имя поля для формы |
| `values` | `(string \| number)[]` | `[]` | Массив ID выбранных опций |
| `onChange` | `(option: Option) => void` | - | Обработчик выбора/снятия опции |
| `onChangeAll` | `(selectAll: boolean) => void` | - | Обработчик выбора всех/снятия всех опций |
| `options` | `Option[]` | `[]` | Массив опций для выбора |
| `placeholder` | `string` | - | Текст placeholder'а |
| `disabled` | `boolean` | `false` | Отключение поля |
| `className` | `string` | `''` | Дополнительные CSS классы |
| `style` | `React.CSSProperties` | `{}` | Инлайн стили |
| `icon` | `boolean` | `true` | Показывать ли иконку в InputContainer |

**Особенности:**
- `onChange` вызывается при клике на опцию — нужно самостоятельно управлять массивом `values`
- `onChangeAll` вызывается при клике на "Выбрать все" — передается `true` для выбора всех, `false` для снятия всех
</details>

### Поиск

<details>
<summary><b>Search</b> — поиск с одиночным выбором</summary>

#### Search

```tsx
import { InputContainer, Search } from 'finform';

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
    loading={isLoading}
    clearOnClickOutside={true}
  />
</InputContainer>
```

#### Props

Все пропсы из `Select`, плюс:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `search` | `string` | - | Текущее значение строки поиска |
| `onSearch` | `(text: string) => void` | - | Обработчик изменения текста поиска |
| `loading` | `boolean` | `false` | Индикатор загрузки данных |
| `clearOnClickOutside` | `boolean` | `true` | Очищать поле поиска при клике вне компонента, если опция не выбрана |

**Особенности:**
- При вводе текста в поле поиска вызывается `onSearch` — используйте это для фильтрации опций
- Если введенный текст совпадает с названием опции при клике вне компонента, опция автоматически выбирается
- При `loading={true}` отображается индикатор загрузки вместо иконки
</details>

<details>
<summary><b>MultipleSearch</b> — поиск с множественным выбором</summary>

#### MultipleSearch

```tsx
import { InputContainer, MultipleSearch } from 'finform';

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
    loading={isLoading}
  />
</InputContainer>
```

#### Props

Все пропсы из `Search`, но `onChange` работает как в `MultiSelect`:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `values` | `(string \| number)[]` | `[]` | Массив ID выбранных опций |
| `onChange` | `(option: Option) => void` | - | Обработчик выбора/снятия опции |

**Особенности:**
- Выбранные опции отображаются как теги внутри поля
- Работает аналогично `MultiSelect`, но с возможностью поиска
</details>

### Группированные списки

<details>
<summary><b>GroupSelect</b> — выпадающий список с группировкой</summary>

#### GroupSelect

```tsx
import { InputContainer, GroupSelect } from 'finform';

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

#### Props

Все пропсы из `Select`, но `options` имеет тип `GroupOption[]`:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `options` | `GroupOption[]` | `[]` | Массив группированных опций |

**Особенности:**
- Опции отображаются сгруппированными по группам
- Названия групп отображаются как заголовки
</details>

<details>
<summary><b>GroupSearch</b> — поиск с группировкой</summary>

#### GroupSearch

```tsx
import { InputContainer, GroupSearch } from 'finform';

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
    loading={isLoading}
  />
</InputContainer>
```

#### Props

Все пропсы из `GroupSelect`, плюс:

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `search` | `string` | - | Текущее значение строки поиска |
| `onSearch` | `(text: string) => void` | - | Обработчик изменения текста поиска |
| `loading` | `boolean` | `false` | Индикатор загрузки данных |

**Особенности:**
- Поиск работает по опциям внутри всех групп
- Группы остаются видимыми при поиске
</details>

<details>
<summary><b>GroupSelectWithSearch</b> — список с группировкой и поиском</summary>

#### GroupSelectWithSearch

```tsx
import { InputContainer, GroupSelectWithSearch } from 'finform';

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
    loading={isLoading}
  />
</InputContainer>
```

#### Props

Все пропсы из `GroupSearch` и `GroupSelect`.

**Особенности:**
- Комбинирует возможности группировки и поиска
- Поиск работает по всем опциям во всех группах
</details>

### Дата и время

<details>
<summary><b>DateInput</b> — выбор даты</summary>

#### DateInput

```tsx
import { InputContainer, DateInput } from 'finform';

const [value, setValue] = useState<Date | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <DateInput
    id="birthdate"
    placeholder="Дата рождения"
    value={value}
    onChange={setValue}
    defaultDate="2024-01-01"
  />
</InputContainer>
```

#### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `id` | `string` | - | Уникальный идентификатор поля |
| `name` | `string` | - | Имя поля для формы |
| `value` | `Date \| null` | - | Выбранная дата |
| `onChange` | `(date: Date \| null) => void` | - | Обработчик изменения даты |
| `placeholder` | `string` | - | Текст placeholder'а |
| `disabled` | `boolean` | `false` | Отключение поля |
| `className` | `string` | `''` | Дополнительные CSS классы |
| `style` | `React.CSSProperties` | `{}` | Инлайн стили |
| `defaultDate` | `string` | - | Дата по умолчанию в формате `YYYY-MM-DD` |
| `icon` | `boolean` | `true` | Показывать ли иконку в InputContainer |
| `innerError` | `object \| null` | - | Внутренняя ошибка валидации (используется компонентом) |
| `setInnerError` | `(error: object \| null) => void` | - | Установка внутренней ошибки (используется компонентом) |

**Особенности:**
- Использует библиотеку Flatpickr для выбора даты
- Поддерживает различные форматы даты
- При неверном формате ввода автоматически показывается ошибка через `innerError`
</details>

<details>
<summary><b>DateTimeInput</b> — выбор даты и времени</summary>

#### DateTimeInput

```tsx
import { InputContainer, DateTimeInput } from 'finform';

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

#### Props

Все пропсы из `DateInput`.

**Особенности:**
- Позволяет выбрать как дату, так и время
- Формат отображения включает время
</details>

### Файлы

<details>
<summary><b>FileInput</b> — загрузка файлов</summary>

#### FileInput

```tsx
import { InputContainer, FileInput } from 'finform';

const [file, setFile] = useState<File | null>(null);
const [error, setError] = useState<string | null>(null);

<InputContainer error={error}>
  <FileInput
    id="document"
    placeholder="Выберите файл"
    value={file}
    onChange={(fileData) => {
      // fileData содержит: { size, name, content }
      // content - это base64 строка
      setFile(fileData);
    }}
    valueText={file?.name || ''}
    accept=".pdf,.doc,.docx"
  />
</InputContainer>
```

#### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `id` | `string` | - | Уникальный идентификатор поля |
| `name` | `string` | - | Имя поля для формы |
| `value` | `object \| null` | - | Объект с данными файла (не используется напрямую) |
| `onChange` | `(fileData: { size: number, name: string, content: string }) => void` | - | Обработчик выбора файла |
| `valueText` | `string` | `''` | Текст для отображения имени файла |
| `placeholder` | `string` | - | Текст placeholder'а |
| `disabled` | `boolean` | `false` | Отключение поля |
| `className` | `string` | `''` | Дополнительные CSS классы |
| `style` | `React.CSSProperties` | `{}` | Инлайн стили |
| `accept` | `string` | - | Разрешенные типы файлов (например: `".pdf,.doc,.docx"` или `"image/*"`) |

**Особенности:**
- Файл автоматически конвертируется в base64 строку
- `onChange` получает объект с полями:
  - `size` — размер файла в байтах
  - `name` — имя файла
  - `content` — содержимое файла в формате base64 (data URL)
- Используйте `valueText` для отображения имени выбранного файла
- Placeholder всегда активен для `FileInput`
</details>

### Чекбоксы

<details>
<summary><b>Checkbox</b> — чекбокс</summary>

#### Checkbox

```tsx
import { Checkbox } from 'finform';

const [checked, setChecked] = useState(false);

<Checkbox
  id="agree"
  checked={checked}
  toggleCallback={(checked) => setChecked(checked)}
  text="Я согласен с условиями"
/>
```

#### Props

| Проп | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `id` | `string` | - | Уникальный идентификатор чекбокса |
| `name` | `string` | - | Имя для группировки чекбоксов |
| `value` | `string \| number` | - | Значение чекбокса (для форм) |
| `checked` | `boolean` | `false` | Состояние чекбокса |
| `toggleCallback` | `(checked: boolean, event: Event) => void` | - | Обработчик изменения состояния |
| `text` | `string` | - | Текст рядом с чекбоксом |
| `textStyle` | `React.CSSProperties` | `{}` | Стили для текста |
| `checkboxStyle` | `React.CSSProperties` | `{}` | Стили для самого чекбокса |
| `style` | `React.CSSProperties` | `{}` | Общий стиль контейнера |

**Особенности:**
- Не требует обертки в `InputContainer`
- Используйте `toggleCallback` вместо `onChange` для обработки изменений
- Для группировки чекбоксов используйте одинаковый `name` и разные `value`
</details>

<details>
<summary><b>RoundCheckbox</b> — круглый чекбокс</summary>

#### RoundCheckbox

```tsx
import { RoundCheckbox } from 'finform';

const [checked, setChecked] = useState(false);

<RoundCheckbox
  id="option"
  checked={checked}
  toggleCallback={(checked) => setChecked(checked)}
/>
```

#### Props

Все пропсы из `Checkbox`, но без `text`, `textStyle` (круглый чекбокс обычно используется без текста).

**Особенности:**
- Визуально отличается от обычного `Checkbox` — имеет круглую форму
- Обычно используется для выбора опций без текста рядом
</details>

## Обработка ошибок

**Важно:** Для корректного отображения ошибки в попапе необходимо передать **строку** в проп `error` компонента `InputContainer`. При наведении на иконку ошибки появляется попап с текстом ошибки.

### Пример 1: Простая валидация

```tsx
import { InputContainer, Input } from 'finform';
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
import { InputContainer, Input } from 'finform';
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

## Примеры полных форм

### Пример 1: Форма регистрации

```tsx
import { useState } from 'react';
import { 
  InputContainer, 
  Input, 
  Select, 
  DateInput, 
  Checkbox 
} from 'finform';

interface Option {
  id: number;
  name: string;
}

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState<string | null>(null);
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  
  const [country, setCountry] = useState<number | null>(null);
  const [countryError, setCountryError] = useState<string | null>(null);
  
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [birthdateError, setBirthdateError] = useState<string | null>(null);
  
  const [agreed, setAgreed] = useState(false);

  const countries: Option[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'Беларусь' },
    { id: 3, name: 'Казахстан' },
  ];

  const handleSubmit = () => {
    // Валидация
    if (!username.trim()) {
      setUsernameError('Имя пользователя обязательно');
      return;
    }
    
    if (!email.includes('@')) {
      setEmailError('Некорректный email');
      return;
    }
    
    if (!country) {
      setCountryError('Выберите страну');
      return;
    }
    
    if (!birthdate) {
      setBirthdateError('Укажите дату рождения');
      return;
    }
    
    if (!agreed) {
      alert('Необходимо согласие с условиями');
      return;
    }

    // Отправка формы
    console.log({ username, email, country, birthdate });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <InputContainer error={usernameError}>
        <Input
          id="username"
          placeholder="Имя пользователя"
          value={username}
          onChange={(value) => {
            setUsername(value);
            if (usernameError) setUsernameError(null);
          }}
        />
      </InputContainer>

      <InputContainer error={emailError}>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(value) => {
            setEmail(value);
            if (emailError) setEmailError(null);
          }}
        />
      </InputContainer>

      <InputContainer error={countryError}>
        <Select
          id="country"
          placeholder="Выберите страну"
          value={country}
          onChange={(option) => {
            setCountry(option?.id || null);
            if (countryError) setCountryError(null);
          }}
          options={countries}
        />
      </InputContainer>

      <InputContainer error={birthdateError}>
        <DateInput
          id="birthdate"
          placeholder="Дата рождения"
          value={birthdate}
          onChange={(date) => {
            setBirthdate(date);
            if (birthdateError) setBirthdateError(null);
          }}
        />
      </InputContainer>

      <Checkbox
        id="agree"
        checked={agreed}
        toggleCallback={setAgreed}
        text="Я согласен с условиями использования"
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
```

### Пример 2: Форма с поиском и множественным выбором

```tsx
import { useState, useMemo } from 'react';
import { InputContainer, Search, MultiSelect } from 'finform';

interface User {
  id: number;
  name: string;
}

function UserSelectionForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const allUsers: User[] = [
    { id: 1, name: 'Иван Иванов' },
    { id: 2, name: 'Петр Петров' },
    { id: 3, name: 'Мария Сидорова' },
  ];

  const tags = [
    { id: 1, name: 'Важное' },
    { id: 2, name: 'Срочное' },
    { id: 3, name: 'Проект А' },
    { id: 4, name: 'Проект Б' },
  ];

  // Фильтрация пользователей по поисковому запросу
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allUsers.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div>
      <InputContainer>
        <Search
          id="user-search"
          placeholder="Поиск пользователя"
          value={selectedUser}
          search={searchQuery}
          onChange={(option) => {
            setSelectedUser(option?.id || null);
            setSearchQuery(option?.name || '');
          }}
          onSearch={setSearchQuery}
          options={filteredUsers}
          loading={isLoading}
        />
      </InputContainer>

      <InputContainer>
        <MultiSelect
          id="tags"
          placeholder="Выберите теги"
          values={selectedTags}
          onChange={(option) => {
            setSelectedTags(prev => 
              prev.includes(option.id) 
                ? prev.filter(id => id !== option.id)
                : [...prev, option.id]
            );
          }}
          onChangeAll={(selectAll) => {
            setSelectedTags(selectAll ? tags.map(t => t.id) : []);
          }}
          options={tags}
        />
      </InputContainer>
    </div>
  );
}
```

## Особенности работы компонентов

### InputContainer

- **Обязательная обертка:** Все компоненты (кроме `Checkbox` и `RoundCheckbox`) должны быть обернуты в `InputContainer`
- **Единственный дочерний элемент:** `InputContainer` принимает только один дочерний компонент
- **Автоматическая передача пропсов:** `InputContainer` автоматически передает дочернему компоненту пропсы `focused`, `setFocused`, `error`, `innerError`, `setInnerError`
- **Управление placeholder:** Placeholder автоматически перемещается вверх при наличии значения или фокуса
- **Иконки:** Иконки отображаются автоматически, можно отключить через проп `icon={false}`

### NumberInput

- **Форматирование:** Автоматически форматирует числа с пробелами для разделения тысяч
- **Валидация:** Автоматически проверяет значения на соответствие `min` и `max`
- **Дробные числа:** Поддерживает дробные числа с ограничением количества знаков через `decimals`
- **Разделители:** Принимает как точку, так и запятую в качестве разделителя дробной части

### FileInput

- **Base64 конвертация:** Автоматически конвертирует файл в base64 строку
- **Возвращаемые данные:** `onChange` получает объект `{ size, name, content }`, где `content` — это data URL (base64)
- **Отображение имени:** Используйте `valueText` для отображения имени выбранного файла

### Search и MultipleSearch

- **Фильтрация:** Компоненты не фильтруют опции автоматически — нужно реализовать фильтрацию в `onSearch`
- **Автовыбор:** Если введенный текст точно совпадает с названием опции, она автоматически выбирается при клике вне компонента
- **Очистка:** При `clearOnClickOutside={true}` поле поиска очищается, если опция не была выбрана

### DateInput и DateTimeInput

- **Библиотека:** Используют Flatpickr для выбора даты
- **Валидация:** Автоматически валидируют формат ввода через `innerError`
- **Формат:** Принимают и возвращают объекты `Date`

### Checkbox и RoundCheckbox

- **Без InputContainer:** Эти компоненты не требуют обертки в `InputContainer`
- **Группировка:** Для группировки используйте одинаковый `name` и разные `value`
- **Обработчик:** Используйте `toggleCallback` вместо `onChange`

## Примечания

- Все инпуты должны быть обернуты в `InputContainer` для корректной работы (кроме `Checkbox` и `RoundCheckbox`)
- `InputContainer` принимает только один дочерний элемент
- Для отображения ошибки в попапе передавайте строку в проп `error` компонента `InputContainer`
- Ошибка автоматически скрывается при передаче `null` или пустой строки
- Компоненты автоматически управляют состоянием фокуса — не передавайте `focused` и `setFocused` вручную
- Для работы компонентов требуется настроенная тема styled-components (проверьте наличие `ThemeProvider`)