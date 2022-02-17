interface Warrior {
    class: "Warrior";
    primaryStat: "Strength";
}

interface Bowman {
    class: "Bowman";
    primaryStat: "Dexterity";
}

interface Magician {
    class: "Magician ";
    primaryStat: "Intelligence";
}
interface Thief {
    class: "Thief";
    primaryStat: "Luck";
}
export type { Bowman, Magician, Thief, Warrior };
