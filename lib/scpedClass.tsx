function scopedClassMaker(prefix: string) {
    return (suffixes: string[], classFromProp?: string) => {
        const compClass = suffixes.length && suffixes.map((suffix) => [prefix, suffix].filter(Boolean).join('-')) || [prefix]
        return classFromProp ? [...compClass, classFromProp].filter(Boolean).join(' ') : compClass.filter(Boolean).join(' ')
    }
}

export default scopedClassMaker