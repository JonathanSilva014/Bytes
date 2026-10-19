function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } 
    return value.toString();
}

console.log(formatValue("ts"));
console.log(formatValue(42));
