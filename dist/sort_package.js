export function sort(width, height, length, mass) {
    const volume = width * height * length;
    const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;
    if (isBulky && isHeavy)
        return "REJECTED";
    if (isBulky || isHeavy)
        return "SPECIAL";
    return "STANDARD";
}
//# sourceMappingURL=sort_package.js.map