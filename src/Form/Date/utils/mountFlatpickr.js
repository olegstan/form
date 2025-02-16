import {Url} from "finhelper";
import {sharedInputStyle} from "../../styles";
import styled from "styled-components";

export default function initFlatpickr(setComponentsLoaded, setFlatpickrComponent) {
    let isMounted = true;

    Promise.all([
        import('flatpickr'),
        import('react-flatpickr'),
        import('flatpickr/dist/l10n/ru.js'),
        import('flatpickr/dist/flatpickr.css')
    ])
        .then(([flatpickrModule, reactFlatpickrModule, ruLocaleModule]) => {
            if (!isMounted) return;

            // Используем экспорт по умолчанию, если он есть
            const Flatpickr = flatpickrModule.default || flatpickrModule;
            const ReactFlatpickr = reactFlatpickrModule.default || reactFlatpickrModule;
            const { Russian } = ruLocaleModule;

            // Определяем, нужно ли локализовать в русский язык
            const currentUrl = Url.getCurrentUrl();
            const languageId = localStorage.getItem('language_id');
            const shouldLocalizeToRussian = currentUrl.includes('/ru/') || parseInt(languageId, 10) === 1 || languageId === null;

            if (shouldLocalizeToRussian) {
                try {
                    Flatpickr.localize(Russian);
                } catch (error) {
                    console.error("Ошибка при локализации Flatpickr:", error);
                }
            }

            // Создаём стилизованный компонент на базе ReactFlatpickr
            const StyledFlatpickr = styled(ReactFlatpickr)`
                ${sharedInputStyle}
              `;

            // Передаём компонент в состояние
            setFlatpickrComponent(() => StyledFlatpickr);
            setComponentsLoaded(true);
        })
        .catch((error) => {
            console.error("Не удалось загрузить модули Flatpickr:", error);
        });

    return () => {
        isMounted = false;
    };
}
