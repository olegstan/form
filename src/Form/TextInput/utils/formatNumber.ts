
export const getDecimal = (decimalCount: number, amount: number) => {
    // Преобразуем decimalCount в абсолютное значение
    decimalCount = Math.abs(decimalCount);

    // Если decimalCount не является числом, используем значение по умолчанию (0)
    decimalCount = isNaN(decimalCount) ? 0 : decimalCount;

    // Определяем знак числа
    const negativeSign = amount < 0 ? "-" : "";

    // Возвращаем объект с результатами
    return { decimalCount, negativeSign };
};

export const formatForInput = (amount: any, decimalCount = 2, decimalSign = ".", thousands = " ")=>
{
    try
    {
        if (amount === '')
        {
            return '';
        }

        const __ret = getDecimal(decimalCount, amount);
        decimalCount = __ret.decimalCount;
        const negativeSign = __ret.negativeSign;

        let amountInt = parseInt(amount = Math.abs(Number(amount)).toFixed(decimalCount));
        let amountFloat = Math.abs(amount - amountInt);
        let amountIntString = amountInt.toString()

        let j = (amountIntString.length > 3) ? amountIntString.length % 3 : 0;

        return (negativeSign + (j ? amountIntString.substr(0, j) + thousands : '') + amountIntString.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimalSign + amountFloat.toFixed(decimalCount).slice(2) : ""));
    } catch (e)
    {
        console.error(e)
        return '';
    }
}