class StatsImage {
    static ALL = 'all';
    static KBM = 'keyboardMouse';
    static GAMEPAD = 'gamepad';
    static TOUCH = 'touch';
    static NONE = 'none';

    static all() { return this.ALL; }
    static keyboardMouse() { return this.KBM; }
    static gamepad() { return this.GAMEPAD; }
    static touch() { return this.TOUCH; }
    static none() { return this.NONE; }
}

export default StatsImage;
