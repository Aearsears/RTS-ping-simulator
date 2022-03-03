import darkKnightPic from "../public/classes/warrior/Dark_Knight.png";
import heroPic from "../public/classes/warrior/Hero.png";
import paladinPic from "../public/classes/warrior/Paladin.png";
import bowmasterPic from "../public/classes/bowman/Bowmaster.png";
import marksmanPic from "../public/classes/bowman/Marksman.png";
import pathfinderPic from "../public/classes/bowman/Pathfinder.png";
import pathfinderAnim from "../public/classes/bowman/Pathfinder.gif";
import fpMagePic from "../public/classes/magician/FP_Mage.png";
import ilMagePic from "../public/classes/magician/IL_Mage.png";
import bishopPic from "../public/classes/magician/Bishop.png";
import shadowerPic from "../public/classes/thief/Shadower.png";
import dualBladePic from "../public/classes/thief/Dual_Blade.png";
import dualBladeAnim from "../public/classes/thief/Dual_Blade.gif";
import nightLordPic from "../public/classes/thief/Night_Lord.png";
class Base {}
class Warrior extends Base {
    readonly class: string = "Warrior";
    readonly primaryStat: string = "Strength";
}
class Hero extends Warrior {
    imgSrc: StaticImageData = heroPic;
    readonly subclass: string = "Hero";
    constructor() {
        super();
    }
}
class Paladin extends Warrior {
    imgSrc: StaticImageData = paladinPic;
    readonly subclass: string = "Paladin";
    constructor() {
        super();
    }
}
class DarkKnight extends Warrior {
    imgSrc: StaticImageData = darkKnightPic;
    readonly subclass: string = "Dark Knight";
    constructor() {
        super();
    }
}

class Bowman extends Base {
    readonly class: string = "Bowman";
    readonly primaryStat: string = "Dexterity";
}
class Bowmaster extends Bowman {
    imgSrc: StaticImageData = bowmasterPic;
    readonly subclass: string = "Bowmaster";
    constructor() {
        super();
    }
}
class Marksman extends Bowman {
    imgSrc: StaticImageData = marksmanPic;
    readonly subclass: string = "Marksman";
    constructor() {
        super();
    }
}
class Pathfinder extends Bowman {
    imgSrc: StaticImageData = pathfinderPic;
    animSrc: StaticImageData = pathfinderAnim;
    readonly subclass: string = "Pathfinder";
    constructor() {
        super();
    }
}

class Magician extends Base {
    readonly class: string = "Magician";
    readonly primaryStat: string = "Intelligence";
}
class FP_Mage extends Magician {
    imgSrc: StaticImageData = fpMagePic;
    readonly subclass: string = "Fire Poison Magician";
    constructor() {
        super();
    }
}
class IL_Mage extends Magician {
    imgSrc: StaticImageData = ilMagePic;
    readonly subclass: string = "Ice Lightning Magician";
    constructor() {
        super();
    }
}
class Bishop extends Magician {
    imgSrc: StaticImageData = bishopPic;
    readonly subclass: string = "Bishop";
    constructor() {
        super();
    }
}

class Thief extends Base {
    readonly class: string = "Thief";
    readonly primaryStat: string = "Luck";
}
class Night_Lord extends Thief {
    imgSrc: StaticImageData = nightLordPic;
    readonly subclass: string = "Night Lord";
    constructor() {
        super();
    }
}
class Dual_Blade extends Thief {
    imgSrc: StaticImageData = dualBladePic;
    animSrc: StaticImageData = dualBladeAnim;
    readonly subclass: string = "Dual Blade";
    constructor() {
        super();
    }
}
class Shadower extends Thief {
    imgSrc: StaticImageData = shadowerPic;
    readonly subclass: string = "Shadower";
    constructor() {
        super();
    }
}
const allClasses = [
    new Hero(),
    new DarkKnight(),
    new Paladin(),
    new Bowmaster(),
    new Bishop(),
    new Dual_Blade(),
    new FP_Mage(),
    new IL_Mage(),
    new Marksman(),
    new Night_Lord(),
    new Pathfinder(),
    new Shadower(),
];
const heroMap = {
    Hero: Hero,
    DarkKnight: DarkKnight,
    Paladin: Paladin,
    Bowmaster: Bowmaster,
    Bishop: Bishop,
    Dual_Blade: Dual_Blade,
    FP_Mage: FP_Mage,
    IL_Mage: IL_Mage,
    Marksman: Marksman,
    Night_Lord: Night_Lord,
    Pathfinder: Pathfinder,
    Shadower: Shadower,
};
export type Keys = keyof typeof heroMap;
type heroTypes = typeof heroMap[Keys];
type ExtractInstanceType<T> = T extends new () => infer R ? R : never;

export class heroFactory {
    static getHero(k: Keys): ExtractInstanceType<heroTypes> {
        return new heroMap[k]();
    }
}

export { allClasses };
