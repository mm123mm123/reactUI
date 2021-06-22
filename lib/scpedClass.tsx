function scopedClassMaker(prefix: string) {
    return (suffix: string[], classFromProp?: string) => {
        const compClass = [prefix, ...suffix].filter(Boolean).join('-');
        return classFromProp ? [compClass, classFromProp].filter(Boolean).join(' ') : compClass
    }
}

export default scopedClassMaker