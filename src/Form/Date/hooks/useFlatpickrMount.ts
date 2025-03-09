import {useEffect, useRef, useState} from 'react';
//@ts-ignore
import mountFlatpickr from "../utils/mountFlatpickr";

export const useFlatpickrMount = () => {
    const [componentsLoaded, setComponentsLoaded] = useState(false);
    const [DateInputComponent, setDateInputComponent] = useState(null);
    const flatpickrInstance = useRef(null);

    useEffect(() => {
        const cleanup = mountFlatpickr(setComponentsLoaded, setDateInputComponent);
        return () => {
            cleanup();
            if (flatpickrInstance.current) {
                //@ts-ignore
                flatpickrInstance.current?.destroy();
            }
        };
    }, []);

    return { componentsLoaded, DateInputComponent, flatpickrInstance };
};