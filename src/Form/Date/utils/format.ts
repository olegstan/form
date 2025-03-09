export const formatDate = (dateObj: Date|null|undefined) => {
    if (!(dateObj instanceof Date)) return '';
    // @ts-ignore
    const day = String(dateObj.getDate()).padStart(2, '0');
    // @ts-ignore
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}.${month}.${year}`;
};

export const formatDateTime = (dateObj: Date|null|undefined) => {
    if (!(dateObj instanceof Date)) return '';
    // @ts-ignore
    let day = String(dateObj.getDate()).padStart(2, '0');
    // @ts-ignore
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let year = dateObj.getFullYear().toString();
    // @ts-ignore
    let hour = String(dateObj.getHours()).padStart(2, '0');
    // @ts-ignore
    let minute = String(dateObj.getMinutes()).padStart(2, '0');
    // @ts-ignore
    let second = String(dateObj.getSeconds()).padStart(2, '0');
    return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
};
