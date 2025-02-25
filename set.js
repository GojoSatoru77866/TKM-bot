const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBT8l3rFHuUioBEdsSCgiNoo3jfmoYACSi6FUCjY4b9voN0x/bAz28tTRUHlycrMc3gHGcElslADhu8gL/AFUtQuaZMjMARqFQSoAB3gQwrBEKCZnen9CZ/01ajsaYxb3I7Sgu2ulTy08UmxmdN6dyS5wuqv4N4BeeUm2PsDoHXQfC+tBzl94zb+SPMWq6M1JiiMzaXdLFHUbHczQff8UHkF9xYR4gJnoZ5HKEUFTCzU2BAX36O/sReWtAyXO48pw8kkiRczR+ElFqYCbXy5tsvum0Vv4sAwv0d/cBL8noaZOB1XSJ5vxlbP3rnxbkmgA6PxQkEDxRJOkG02T/olDjPkmz7KKKbNt3WH2nRAzqpcMzN+zEapxJF+c+HyXgJHW2rJ5aKrr05RsI+97xGfac2A1/mSMFOpGfVioknKjhnfhP1B9gziLePyjV8fC24vfyVuF59Zif+P7sxijKbetnSUuSVocnfMEWbUF6rrBYrd1UA2R1A10u6buT98j/5yNdoZXSodd1fHNKeZGF5ufsqopk0WM/dtLez1eWJii6m/6A5pVfyJ5XUen+bOPoh4PjYrgz/MstWbMbdZRy9PW8Zx7dSqxBtR1L3emIQaYo9ECbvqbqvFOjwNiqIOFoaVkHh5Oer69mLTQglfHzeKUWP6YMjeO6BAIS5pASkmWbvHCx0A/YuDvALRh7rA6fr92JoEZpCbbHQ4JNl8RfbHJeayDbse3xjMugwL5URZvoIOyAviobJE/gSXlBTNHJUlDFEJhn//7IAM1fTp26Ma2wEBLkq6yao8IdD/NPXzJfQ8UmXUaTJv1C5QAYa9X9uIUpyFZStjlcHCi/AFjSJISzAMYFKiewf46II91OIBdsVyWhbJzmH3st9ru+Ai4TRsKUcke37CSf2ADwT2RfYH4ovQ56WXgcu6L7wk+/IAiuKA80AH4I+Wac/81kGtdg2zPjR6ilzjnN/GporYzQ7upvHDhaf0qEA+GNKiQh3gQi+u8jWJUfYH3Il3WfvTKjNvBb0JmSjPzdqeYrYy5l9wn5aC4fuvMTUifovnzNaccJQt0AHpI4G4vflAlCRJFkWZ6/NDXv6r/HFthYR5/iNDtMX9EL094SMKcVKCIRjN98zZCJdnr8tfloeDOlIUS1HaIHya9Bn2Z5pybG3sc+Y26/OCpHWhMMRBo7W7LCfNysJT2bekQ46q5Hr9NxAwBGmjWJqlYS1l9kk/HW9sG6rbZrwJtcjhJMufNX2JO5FN93Ap8/PJKdNiur007j4Wb5sxjWp+t6sXvXrK8sVkroVqM1GV17baMyxfi40Ph22pMoGhL7r6whqoVpokic9dfJuRfa+eoRrFlqmpRF9I9SYLd4I08/qzke/ueft6tuWNYdPYgKTr1Ck/7lprTf1ow8cYSD7GL350yPtHtAKMHtMsg61F/2XO15T37p0vGB/z8TdJUuEBJ5qYc3IsnuC0hFf7rGdhzPVmqhw7BAcTp+KsfZF7c3C//+yAPIE0IEXa/gUyvyDYBx2QwJIqvxp1jVNUUpjmYMhKQk8YyLLEdlrb8tyhkH72N1Dax05ycP8H9LxN5foHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Cod3Uchiha",
    NUMERO_OWNER : process.env.OWNER_NUM || "967778668253",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'TKM bot',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/e07a3d933fb4cad0b3791.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    TZ : process.env.TIME_ZONE || 'Etc/GMT',
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    BOOM_MESSAGE_LIMIT : process.env.BOOM_MESSAGE_LIMIT || 100,
    PORT : process.env.PORT || 8000,
    LINK : process.env.LINK || '',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa" : "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
