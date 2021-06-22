function scopedClassMaker(prefix: string) {
    return (suffix: string[], classFromProp?: string) => {
        console.log(suffix);
        const compClass = [prefix, ...suffix].filter(Boolean).join('-');
        return classFromProp ? [compClass, classFromProp].filter(Boolean).join(' ') : compClass
    }
}

export default scopedClassMaker