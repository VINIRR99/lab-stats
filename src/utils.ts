export const dateStringToDate = (date: string): Date => {
    const dateArray = date.split('/').map((number: string): number => Number(number));
    const year = dateArray[2];
    const month = dateArray[1];
    const day = dateArray[0];

    return new Date(year, month, day);
};