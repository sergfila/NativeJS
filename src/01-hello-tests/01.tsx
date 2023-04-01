export function sum(a: number, b: number) {
    return a + b
}

export function mul(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentence: string) {
    return (
        sentence
            .toLocaleLowerCase()
            .split(' ')
            .filter(w => w !== '' && w !== '-')
            .map(w => w
            .replace('!','')
            .replace('.', '')
            .replace(',',''))
    )
}