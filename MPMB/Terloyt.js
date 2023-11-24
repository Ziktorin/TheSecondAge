
var iFileName = "Terloyt.js";
RequiredSheetVersion(13.1);

SourceList["The Second Age"] = {
	name : "The Second Age",
	abbreviation : "TSA",
	group : "The Second Age",
	url : "https://lake-storm-507.notion.site/9bb19ae621184938acf919c491bbb46d",
	date : "2023/11/24"
};

RaceList["forest terloyt"] = {
    regExpSearch : /^(?=.*(terloyt))(?=.*\b(forest)?\b).*$/i,
    name : "Terloyt, Forest",
    sortname : "Terloyt, Forest/Mountain",
    source : [["TSA", 0]],
    plural : "Terloyts",
      age : "Children who get lost in nature sometimes become terloyts. You maintain this physical age throughout your life. The lifespan of terloyts is unknown.",
    size : 4,
    speed : {
      walk : { spd : 30, enc : 20 },
      climb : { spd : 30, enc : 0 }
    },
    languageProfs : ["Common", "Nature"],
    vision : [["Darkvision", 60]],
    savetxt : {
          text: ["Disadv. on saves vs. being charmed, frightened"]
      },
    scores : [0, 0, 0, 0, 0, 0],
      scorestxt : "+2 to any ability score and +1 to any ability score, one must be Dexterity",
    trait : [
      "Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity)",
          "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey",
          "Naive and timid: You have disadvantage on saving throws against being charmed and frightened",
          "Terloytian Adaptations: Your long and prehensile tail allows you to move with unprecedented agility. You gain a climbing speed equal to your movement speed, and you cannot be slowed by non-magical difficult terrain.",
          "Gift of the Avenger of Grace: You are transformed by the fickle force of nature. Your color and shape depend on the light level.\n   \u2022In the light:\n      \u2219 Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      \u2219 Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      \u2219 Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      \u2219 Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light."
    ].join("\n\u25c6 "),
      skills : ["Survival"],
      features : {
          "Gift of the Avenger of Grace" : {
              name : "Gift of the Avenger of Grace",
              usages : "Proficiency bonus per ",
              recovery : "long rest",
              usagescalc : "event.value = Number(How('Proficiency Bonus'));"
          }
      },
    variants : []
  };

RaceList["desert terloyt"] = {
	regExpSearch : /^(?=.*(terloyt))(?=.*\bdesert?\b).*$/i,
	name : "Terloyt, Desert",
	sortname : "Terloyt, Desert",
	source : [["TSA", 0]],
	plural : "Terloyts",
    age : "Children who get lost in nature sometimes become terloyts. You maintain this physical age throughout your life. The lifespan of terloyts is unknown.",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Nature"],
	vision : [["Darkvision", 60], ["Tremor Sense", 15]],
	savetxt : {
        text: ["Disadv. on saves vs. being charmed, frightened"]
    },
	scores : [0, 0, 0, 0, 0, 0],
    scorestxt : "+2 to any ability score and +1 to any ability score, one must be Dexterity",
	trait : [
		"Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity)",
        "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey",
        "Naive and timid: You have disadvantage on saving throws against being charmed and frightened",
        "Terloytian Adaptations: To hunt or avoid creatures buried in the sand, the Avenger of Grace has given you a vibration-sensitive tail. You gain a tremor sense over a 15-foot radius. Also, you are adapted to hot climates.",
        "Gift of the Avenger of Grace: You are transformed by the fickle force of nature. Your color and shape depend on the light level.\n   \u2022In the light:\n      \u2219 Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      \u2219 Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      \u2219 Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      \u2219 Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light."
	].join("\n\u25c6 "),
    skills : ["Survival"],
    features : {
        "Gift of the Avenger of Grace" : {
            name : "Gift of the Avenger of Grace",
            usages : "Proficiency bonus per ",
            recovery : "long rest",
            usagescalc : "event.value = Number(How('Proficiency Bonus'));"
        }
    },
	variants : []
};


RaceList["tundra terloyt"] = {
	regExpSearch : /^(?=.*(terloyt))(?=.*\btundra?\b).*$/i,
	name : "Terloyt, Tundra",
	sortname : "Terloyt, Tundra",
	source : [["TSA", 0]],
	plural : "Terloyts",
    age : "Children who get lost in nature sometimes become terloyts. You maintain this physical age throughout your life. The lifespan of terloyts is unknown.",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Nature"],
	vision : [["Darkvision", 60]],
	savetxt : {
        text: ["Disadv. on saves vs. being charmed, frightened"]
    },
	scores : [0, 0, 0, 0, 0, 0],
    scorestxt : "+2 to any ability score and +1 to any ability score, one must be Dexterity",
	trait : [
		"Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity)",
        "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey",
        "Naive and timid: You have disadvantage on saving throws against being charmed and frightened",
        "Terloytian Adaptations: You can use your big, fluffy tail to cover your tracks. You and your group (if you go last) cannot be tracked by footprints on the ground. You are also covered in thick white fur, which makes you adapted to cold climates."
	].join("\n\u25c6 "),
    skills : ["Survival"],
    features : {
        "Gift of the Avenger of Grace" : {
            name : "Gift of the Avenger of Grace",
            usages : "Proficiency bonus per ",
            recovery : "long rest",
            usagescalc : "event.value = Number(How('Proficiency Bonus'));"
        }
    },
	variants : []
};

RaceList["shore terloyt"] = {
	regExpSearch : /^(?=.*(terloyt))(?=.*\bshore?\b).*$/i,
	name : "Terloyt, Shore",
	sortname : "Terloyt, Shore",
	source : [["TSA", 0]],
	plural : "Terloyts",
    age : "Children who get lost in nature sometimes become terloyts. You maintain this physical age throughout your life. The lifespan of terloyts is unknown.",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 40, enc : 0 }
	},
	languageProfs : ["Common", "Nature"],
	vision : [["Darkvision", 60]],
	savetxt : {
        text: ["Disadv. on saves vs. being charmed, frightened"]
    },
	scores : [0, 0, 0, 0, 0, 0],
    scorestxt : "+2 to any ability score and +1 to any ability score, one must be Dexterity",
	trait : [
		"Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity)",
        "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey",
        "Naive and timid: You have disadvantage on saving throws against being charmed and frightened",
        "Terloytian Adaptations: You instinctively hold your breath when in danger and can hold it for 1 hour. Your strong tail with seal-like fins gives you a swimming speed of 40 feet."
	].join("\n\u25c6 "),
    skills : ["Survival"],
    features : {
        "Gift of the Avenger of Grace" : {
            name : "Gift of the Avenger of Grace",
            usages : "Proficiency bonus per ",
            recovery : "long rest",
            usagescalc : "event.value = Number(How('Proficiency Bonus'));"
        }
    },
	variants : []
};

