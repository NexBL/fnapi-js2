class MatchMethod {
    static FULL = 'full';
    static CONTAINS = 'contains';
    static STARTS = 'starts';
    static ENDS = 'ends';

    static full() { return this.FULL; }
    static exact() { return this.FULL; }
    static contains() { return this.CONTAINS; }
    static starts() { return this.STARTS; }
    static ends() { return this.ENDS; }
}

export default MatchMethod;
