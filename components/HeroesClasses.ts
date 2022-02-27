import darkKnightPic from "../public/classes/warrior/Dark_Knight.png";
import heroPic from "../public/classes/warrior/Hero.png";
import paladinPic from "../public/classes/warrior/Paladin.png";
import bowmasterPic from "../public/classes/bowman/Bowmaster.png";
import marksmanPic from "../public/classes/bowman/Marksman.png";
import pathfinderPic from "../public/classes/bowman/Pathfinder.png";
import fpMagePic from "../public/classes/magician/FP_Mage.png";
import ilMagePic from "../public/classes/magician/IL_Mage.png";
import bishopPic from "../public/classes/magician/Bishop.png";
import shadowerPic from "../public/classes/thief/Shadower.png";
import dualBladePic from "../public/classes/thief/Dual_Blade.png";
import nightLordPic from "../public/classes/thief/Night_Lord.png";

class Warrior {
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

class Bowman {
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
    readonly subclass: string = "Pathfinder";
    constructor() {
        super();
    }
}

class Magician {
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

class Thief {
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

export { allClasses };
