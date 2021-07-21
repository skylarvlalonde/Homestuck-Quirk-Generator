import Category from "quirks/Category";
import Daraya from "quirks/database/hiveswap/Daraya";
import Stelsa from "quirks/database/hiveswap/Stelsa";
import Kuprum from "quirks/database/hiveswap/Kuprum";
import Baizli from "quirks/database/hiveswap/Baizli";
import Remele from "quirks/database/hiveswap/Remele";
import Bronya from "quirks/database/hiveswap/Bronya";
import Karako from "quirks/database/hiveswap/Karako";
import Polypa from "quirks/database/hiveswap/Polypa";
import Tirona from "quirks/database/hiveswap/Tirona";
import Amisia from "quirks/database/hiveswap/Amisia";
import Lanque from "quirks/database/hiveswap/Lanque";
import Barzum from "quirks/database/hiveswap/Barzum";
import Xefros from "quirks/database/hiveswap/Xefros";
import Folykl from "quirks/database/hiveswap/Folykl";
import Ardata from "quirks/database/hiveswap/Ardata";
import Marsti from "quirks/database/hiveswap/Marsti";
import Azdaja from "quirks/database/hiveswap/Azdaja";
import Zebede from "quirks/database/hiveswap/Zebede";
import Fozzer from "quirks/database/hiveswap/Fozzer";
import Lynera from "quirks/database/hiveswap/Lynera";
import Boldir from "quirks/database/hiveswap/Boldir";
import Vikare from "quirks/database/hiveswap/Vikare";
import Nihkee from "quirks/database/hiveswap/Nihkee";
import Chixie from "quirks/database/hiveswap/Chixie";
import Chahut from "quirks/database/hiveswap/Chahut";
import Wanshi from "quirks/database/hiveswap/Wanshi";
import Mallek from "quirks/database/hiveswap/Mallek";
import Diemen from "quirks/database/hiveswap/Diemen";
import Trizza from "quirks/database/hiveswap/Trizza";
import Tagora from "quirks/database/hiveswap/Tagora";
import Tegiri from "quirks/database/hiveswap/Tegiri";
import Skylla from "quirks/database/hiveswap/Skylla";
import Zebruh from "quirks/database/hiveswap/Zebruh";
import Elwurd from "quirks/database/hiveswap/Elwurd";
import Tyzias from "quirks/database/hiveswap/Tyzias";
import Cirava from "quirks/database/hiveswap/Cirava";
import Marvus from "quirks/database/hiveswap/Marvus";

export default class Hiveswap extends Category {
    public constructor() {
        super("Hiveswap");

        this.addQuirk(new Xefros());
        this.addQuirk(new Trizza());
        this.addQuirk(new Diemen());
        this.addQuirk(new Ardata());
        this.addQuirk(new Cirava());
        this.addQuirk(new Amisia());
        this.addQuirk(new Skylla());
        this.addQuirk(new Bronya());
        this.addQuirk(new Tagora());
        this.addQuirk(new Vikare());
        this.addQuirk(new Polypa());
        this.addQuirk(new Zebruh());
        this.addQuirk(new Elwurd());
        this.addQuirk(new Kuprum());
        this.addQuirk(new Folykl());
        this.addQuirk(new Remele());
        this.addQuirk(new Tyzias());
        this.addQuirk(new Chixie());
        this.addQuirk(new Azdaja());
        this.addQuirk(new Chahut());
        this.addQuirk(new Zebede());
        this.addQuirk(new Tegiri());
        this.addQuirk(new Mallek());
        this.addQuirk(new Lynera());
        this.addQuirk(new Tirona());
        this.addQuirk(new Boldir());
        this.addQuirk(new Stelsa());
        this.addQuirk(new Marsti());
        this.addQuirk(new Karako());
        this.addQuirk(new Wanshi());
        this.addQuirk(new Fozzer());
        this.addQuirk(new Marvus());
        this.addQuirk(new Daraya());
        this.addQuirk(new Nihkee());
        this.addQuirk(new Lanque());
        this.addQuirk(new Barzum());
        this.addQuirk(new Baizli());
    }
}