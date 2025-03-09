import {useEffect, useRef} from 'react';

export default function useOnceWhen(condition, effect) {
    const didRun = useRef(false);

    useEffect(() => {
        if (condition && !didRun.current) {
            effect();
            didRun.current = true;
        }
    }, [condition, effect]);
}
