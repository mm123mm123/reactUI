function scopedClassMaker(prefix: string) {
    return (suffixes: string[], classFromProp?: string, DYNClass?: string) => {
        const compClass = suffixes.length && suffixes.map((suffix) => [prefix, suffix].filter(Boolean).join('-')) || [prefix]
        return [...compClass, classFromProp, DYNClass].filter(Boolean).join(' ')
    }
}

function classes(...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ');
}

export {classes};
export default scopedClassMaker