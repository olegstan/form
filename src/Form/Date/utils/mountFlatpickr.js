import {Url} from "finhelper";
import {sharedInputStyle} from "./../../newstyles";
import styled from 'styled-components';

export default function (setComponentsLoaded, setFlatpickrComponent)
{
  let isMounted = true;

  Promise.all([
    import('flatpickr'),
    import('react-flatpickr'),
    import('flatpickr/dist/l10n/ru.js'),
    import('flatpickr/dist/flatpickr.css')
  ])
    .then(([flatpickr, ReactFlatpickr, { Russian }]) => {
      if (!isMounted) return;

      // Локализация
      const url = Url.getCurrentUrl();
      const lang = localStorage.getItem('language_id');
      if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {
        try {
          flatpickr.default.localize(Russian);
        } catch (e) {
          console.error(e);
        }
      }

      // Создаём стилизованный компонент
      const DateTimeStyled = styled(ReactFlatpickr.default)`
        ${sharedInputStyle}
      `;
      setFlatpickrComponent(() => DateTimeStyled);
      setComponentsLoaded(true);
    })
    .catch((err) => {
      console.error('Failed to load flatpickr modules', err);
    });

  return () => {
    isMounted = false;
  };
}