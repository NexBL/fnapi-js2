import CosmeticType from '../enums/CosmeticType.js';
import Language from '../enums/Language.js';
import RequestFlags from '../enums/RequestFlags.js';
import MatchMethod from '../enums/MatchMethod.js';
import AccountType from '../enums/AccountType.js';
import StatsImage from '../enums/StatsImage.js';
import TimeWindow from '../enums/TimeWindow.js';

class Enums {
    static get cosmeticType() {
        return CosmeticType;
    }

    static get requestFlags() {
        return RequestFlags;
    }

    static get language() {
        return Language;
    }

    static get matchMethod() {
        return MatchMethod;
    }

    static get accountType() {
        return AccountType;
    }

    static get statsImage() {
        return StatsImage;
    }

    static get timeWindow() {
        return TimeWindow;
    }
}

export default Enums;
