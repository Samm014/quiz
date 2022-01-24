export function embaralhar(numbers: any[]): any[]{
    return numbers.map(number => ({number, aleatorio: Math.random()}))
    .sort((obj1,obj2) => obj1.aleatorio - obj2.aleatorio)
    .map(obj => obj.number) 
}