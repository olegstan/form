import React from 'react';
import Item from './Item';
import ItemWithCheckbox from './ItemWithCheckbox';
import {OptionsWrapper} from "./styles";

const ResultsWithCheckbox = ({id, values, options, handleClick, handleClickAll, className, idPrefix, active}) => (
    <OptionsWrapper active={active} id={id ? `${id}-select` : undefined}>
        {options.length === 0 ? (<Item
                key={'none'}
                item={{id: null, name: 'Нет элементов'}}
                className={className}
                id={`${idPrefix}-none`}
            />)
            :
            <>
                {/*итем для выбора всех или снятия всех, будет идти перед всеми вариантами сверху*/}
                {handleClickAll && <ItemWithCheckbox
                    item={values?.length === options?.length ? {id: 'all', name: 'Снять выбор'} : {id: 'all', name: 'Выбрать все'}}
                    checked={values?.length === options?.length}
                    onClick={handleClickAll}
                    className={className}
                />}
                {options.map((option) => (
                    <ItemWithCheckbox
                        key={option.id}
                        item={option}
                        checked={values.includes(option.id)}
                        onClick={(e) => handleClick(e, option)}
                        className={className}
                        id={`${idPrefix}-${option.id}`}
                    />
                ))}
            </>}
    </OptionsWrapper>
);

export default ResultsWithCheckbox;
