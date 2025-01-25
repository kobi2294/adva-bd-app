import { StepTask } from "../models/step-task";
import { QUESTIONS } from "./questions";

export const STEPS: StepTask[] = [
    {
        type: 'Image', 
        url: 'images/ronni-1.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question', 
        done: false, 
        ...QUESTIONS[0], 
        theme: '#00ff6a'
    }, 
    {
        type: 'Image', 
        url: 'images/ronni-2.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[1], 
        theme: '#00b0ff'
    }, 
    {
        type: 'Image', 
        url: 'images/ronni-3.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[2], 
        theme: '#00ff6a'
    }, 
    {
        type: 'Bless', 
        who: 'Ronni', 
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Gift', 
        text: [
            'בחדר של רוני, בין מדף ומדפיים', 
            'מחכה לך מתנה, ללקק את השפתיים', 
            `זה לא קראנצ'י נגט וגם לא ביג מאק`, 
            'זה מתוק מאד בפה למרות שלא ממתק '
        ],
        done: true, 
        theme: '#00b0ff'
    },
    {
        type: 'Image', 
        url: 'images/elad-1.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[3], 
        theme: '#00ff6a'
    },
    {
        type: 'Image', 
        url: 'images/elad-2.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[4], 
        theme: '#00b0ff'
    },
    {
        type: 'Image', 
        url: 'images/elad-3.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[5], 
        theme: '#00ff6a'
    },
    {
        type: 'Bless', 
        who: 'Elad', 
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Gift', 
        text: [
            'הזמן קצר, ומתארגנים ליציאה', 
            'לאיפור כבר דאגנו והפאן כבר שעה', 
            `ועכשיו כשסיימת להראות מהמם`, 
            'בארון של אלעד ממתין לך המב...'
        ],
        done: true, 
        theme: '#00b0ff'
    },
    {
        type: 'Image', 
        url: 'images/kobi-1.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[6], 
        theme: '#00ff6a'
    },
    {
        type: 'Image', 
        url: 'images/kobi-2.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[7], 
        theme: '#00b0ff'
    },
    {
        type: 'Image', 
        url: 'images/kobi-3.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[8], 
        theme: '#00ff6a'
    },
    {
        type: 'Image', 
        url: 'images/kobi-4.jpg',
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Question',
        done: false,
        ...QUESTIONS[9], 
        theme: '#00b0ff'
    },
    {
        type: 'Bless', 
        who: 'Kobi', 
        done: true, 
        theme: '#a600ff'
    }, 
    {
        type: 'Gift', 
        text: [
            'נכון, הצעתי לך מתנה כזאת', 
            'ואמרת "לא צריך"', 
            `אבל גם הלפטופ היה "מיותר" `, 
            'ועכשיו הוא "חתיך"', 
            `אז לקחתי סיכון עם מתנה מפורטת`,
            `בתיק הלפטופ מחכה לך מתנה ממגנטת`
        ],
        done: true, 
        theme: '#00b0ff'
    },
    {
        type: 'Gift', 
        text: [
            'רק שיש בעיה של מחסור בתאימות', 
            'כי ליד המיטה מחכה לך החוט', 
            `וצפוף ומלא ומקום לא זמין`, 
            'את כל המיכשור יחדיו להטעין', 
        ],
        done: true, 
        theme: '#00ff6a'
    },
    {
        type: 'Gift', 
        text: [
            'אך אבוי, יש פער, לא הכל מתחבר',
            'העיגול והמלבן לא יכולים להסתדר', 
            'ויודע היטב כי הקשבתי רוב קשב', 
            'שיש חלק אחרון שמגיע לרכב', 
        ],
        done: true, 
        theme: '#00b0ff'
    },
    {
        type: 'Bless', 
        who: 'Together', 
        done: true, 
        theme: '#a600ff'
    }
]