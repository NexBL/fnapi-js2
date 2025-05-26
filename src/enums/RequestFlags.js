class RequestFlags {
    static FLAGS = {
        NONE: 0,
        INCLUDE_PATHS: 1 << 0,        // 1
        INCLUDE_GAMEPLAY_TAGS: 1 << 1, // 2
        INCLUDE_SHOP_HISTORY: 1 << 2   // 4
    };


    static multiple(...flags) {
        const combined = flags.reduce((acc, flag) => acc | flag, 0);
        return `0x${combined.toString(16)}`;
    }


    static hasFlag(value, flag) {
        const numValue = typeof value === 'string' ? 
            parseInt(value.replace('0x', ''), 16) : value;
        return (numValue & flag) === flag;
    }

    static getSetFlags(value) {
        const numValue = typeof value === 'string' ? 
            parseInt(value.replace('0x', ''), 16) : value;
        return Object.entries(this.FLAGS)
            .filter(([key, flag]) => 
                flag !== 0 && this.hasFlag(numValue, flag)
            )
            .map(([key, flag]) => key);
    }

    static all() {
        return this.multiple(
            this.FLAGS.INCLUDE_PATHS,
            this.FLAGS.INCLUDE_GAMEPLAY_TAGS,
            this.FLAGS.INCLUDE_SHOP_HISTORY
        );
    }

    static paths() {
        return this.multiple(this.FLAGS.INCLUDE_PATHS);
    }

    static gameplayTags() {
        return this.multiple(this.FLAGS.INCLUDE_GAMEPLAY_TAGS);
    }

    static shopHistory() {
        return this.multiple(this.FLAGS.INCLUDE_SHOP_HISTORY);
    }

    static none() {
        return this.FLAGS.NONE;
    }

    static safeGet(obj, path, defaultValue = null) {
        return path.split('.')
            .reduce((acc, part) => acc && acc[part], obj) ?? defaultValue;
    }
}

export default RequestFlags;
