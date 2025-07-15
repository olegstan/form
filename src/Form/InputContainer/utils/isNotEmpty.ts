export function isNotEmpty(value: any) {
    if (value === null || value === undefined) return false;
    if (typeof value === 'number') return value.toString().length > 0;
    return value.length > 0; // для строки (или массивов, если что-то такое)
}