export function clean(title) {
    return title.replaceAll(/[^A-Za-z0-9!@#$%^&*() ]/gmi, " ").replaceAll(/(th|rd|nd|st) (Season|season)/gmi, "").replaceAll(/\([^\(]*\)$/gmi, "").trimEnd();
}

export function removeSpecialChars(title) {
    return title.replaceAll(/[^A-Za-z0-9!@#$%^&*()\-= ]/gmi, " ").replaceAll(/[^A-Za-z0-9\-= ]/gmi, "").replaceAll("  ", " ");
}

export function transformSpecificVariations(title) {
    return title.replaceAll("yuu", "yu").replaceAll(" ou", " oh");
}