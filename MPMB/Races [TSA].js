
var iFileName = "Terloyt.js";
RequiredSheetVersion(13.1);

SourceList["The Second Age"] = {
	name : "The Second Age",
	abbreviation : "TSA",
	group : "The Second Age",
	url : "https://lake-storm-507.notion.site/9bb19ae621184938acf919c491bbb46d",
	date : "2023/11/24"
};

// >>>>>>>>>>>>>>>> //
// >>> Terloyt  >>> //
// >>>>>>>>>>>>>>>> //

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
          "Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity).",
          "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey.",
          "Naive and timid: You have disadvantage on saving throws against being charmed and frightened.",
          "Gift of the Avenger of Grace (see notes page).",
          "Terloytian Adaptations (see notes page)."
    ].join("\n"),
      skills : ["Survival"],
      features : {
          "Gift of the Avenger of Grace" : {
              name : "Gift of the Avenger of Grace",
              usages : "Proficiency bonus per ",
              recovery : "long rest",
              usagescalc : "event.value = Number(How('Proficiency Bonus'));"
          }
      },
    toNotesPage : [{
        name : "Gift of the Avenger of Grace",
        note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n   \u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.   \n\u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.   \n\u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
        page3notes : true
    },
    {
        name : "Terloytian Adaptations",
        note : "\nYour long and prehensile tail allows you to move with unprecedented agility. You gain a climbing speed equal to your movement speed, and you cannot be slowed by non-magical difficult terrain.",
        page3notes : true
    }],
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
		"Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity).",
        "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey.",
        "Naive and timid: You have disadvantage on saving throws against being charmed and frightened.",
        "Gift of the Avenger of Grace (see notes page).",
        "Terloytian Adaptations (see notes page)."
	].join("\n"),
    skills : ["Survival"],
    features : {
        "Gift of the Avenger of Grace" : {
            name : "Gift of the Avenger of Grace",
            usages : "Proficiency bonus per ",
            recovery : "long rest",
            usagescalc : "event.value = Number(How('Proficiency Bonus'));"
        }
    },
    toNotesPage : [{
        name : "Gift of the Avenger of Grace",
        note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n   \u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
        page3notes : true
    },
    {
        name : "Terloytian Adaptations",
        note : "\nTo hunt or avoid creatures buried in the sand, the Avenger of Grace has given you a vibration-sensitive tail. You gain a tremor sense over a 15-foot radius. Also, you are adapted to hot climates.",
        page3notes : true
    }],
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
		"Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity).",
        "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey.",
        "Naive and timid: You have disadvantage on saving throws against being charmed and frightened.",
        "Gift of the Avenger of Grace (see notes page).",
        "Terloytian Adaptations (see notes page)."
	].join("\n"),
    skills : ["Survival"],
    features : {
        "Gift of the Avenger of Grace" : {
            name : "Gift of the Avenger of Grace",
            usages : "Proficiency bonus per ",
            recovery : "long rest",
            usagescalc : "event.value = Number(How('Proficiency Bonus'));"
        }
    },
    toNotesPage : [{
        name : "Gift of the Avenger of Grace",
        note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n   \u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
        page3notes : true
    },
    {
        name : "Terloytian Adaptations",
        note : "\nYou can use your big, fluffy tail to cover your tracks. You and your group (if you go last) cannot be tracked by footprints on the ground. You are also covered in thick white fur, which makes you adapted to cold climates.",
        page3notes : true
    }],
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
		"Terloyt (+2 to any ability score and +1 to any ability score, one must be Dexterity).",
        "You are a humanoid. You also count as a fey for any prerequisite or effect that requires you to be a fey.",
        "Naive and timid: You have disadvantage on saving throws against being charmed and frightened.",
        "Gift of the Avenger of Grace (see notes page).",
        "Terloytian Adaptations (see notes page)."
	].join("\n"),
    skills : ["Survival"],
    features : {
        "Gift of the Avenger of Grace" : {
            name : "Gift of the Avenger of Grace",
            usages : "Proficiency bonus per ",
            recovery : "long rest",
            usagescalc : "event.value = Number(How('Proficiency Bonus'));"
        }
    },
    toNotesPage : [{
        name : "Gift of the Avenger of Grace",
        note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n   \u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
        page3notes : true
    },
    {
        name : "Terloytian Adaptations",
        note : "\nYou instinctively hold your breath when in danger and can hold it for 1 hour. Your strong tail with seal-like fins gives you a swimming speed of 40 feet.",
        page3notes : true
    }],
	variants : []
};

// >>>>>>>>>>>>>>>> //
// >>> Hinammet >>> //
// >>>>>>>>>>>>>>>> //

RaceList["hinammet"] = {
	regExpSearch : /^(?=.*(hinammet))$/i,
	name : "Hinammet",
	source : [["TSA", 0]],
	plural : "Hinammet",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sun"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Hinammet (+2 to any ability score and +1 to any ability score, one must be Strength)\n\nCelestial Legacy:\n   I know the Light cantrip.\n   Once I reach 3rd level, I can cast the Lesser Restoration spell once per long rest.\n   Once I reach 5th level, I can cast the Daylight spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Celestial Legacy (level 1)",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"lesser restoration" : {
			name : "Celestial Legacy (level 3)",
			limfeaname : "Lesser Restoration",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Celestial Legacy (level 3)",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : 'oncelr'
			}
		},
		"daylight" : {
			name : "Celestial Legacy (level 5)",
			limfeaname : "Daylight",
			usages : 1,
			minlevel : 5,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Celestial Legacy (level 5)",
				spells : ["daylight"],
				selection : ["daylight"],
				firstCol : 'oncelr'
			}
		}
	}
};

RaceList["fallen hinammet"] = {
	regExpSearch : /^(?=.*(hinammet))(?=.*\bfallen?\b).*$/i,
	name : "Fallen Hinammet",
	source : [["TSA", 0]],
	plural : "Fallen Hinammet",
	sortname : "Hinammet, Fallen",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sun"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Fallen Hinammet (+2 to any ability score and +1 to any ability score, one must be Strength)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nNecrotic Shroud: Once per long rest when I'm 3rd level, I can use an action to transform, causing all within 10 ft of me to make a Cha" + (typePF ? "" : "risma") + " saving throw (DC 8 + Cha mod + Prof Bonus) or be frightened of me until the end of my next turn. This lasts for 1 minute or until I end it as a bonus action. Once on my turn I can have one of my attacks or spells deals my level in extra necrotic damage to one target.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"necrotic shroud" : {
			name : "Necrotic Shroud",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
};
RaceList["protector hinammet"] = {
	regExpSearch : /^(?=.*(hinammet))(?=.*\bprotector?\b).*$/i,
	name : "Protector Hinammet",
	source : [["TSA", 0]],
	plural : "Protector Hinammet",
	sortname : "Hinammet, Protector",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sun"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Protector Hinammet (+2 to any ability score and +1 to any ability score, one must be Strength)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Soul: Once per long rest when I'm 3rd level, I can use an action to transform, gaining glimmer in my eyes and two incorporeal wings. For 1 minute or until I end it as a bonus action, I have 30 feet fly speed; once on my turn I can have one of my attacks or spells deal my level in extra radiant damage to one target.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"radiant soul" : {
			name : "Radiant Soul",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
};
RaceList["scourge hinammet"] = {
	regExpSearch : /^(?=.*(hinammet))(?=.*\bscourge?\b).*$/i,
	name : "Scourge Hinammet",
	source : [["TSA", 0]],
	plural : "Scourge Hinammet",
	sortname : "Hinammet, Scourge",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sun"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Scourge Hinammet (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Consumption: Once per long rest when I'm 3rd level, I can use an action to radiate bright light in 10-ft radius and dim light for another 10-ft, for 1 minute or until I end it as a bonus action. Once on my turn my attack or spell deals my level in extra radiant damage to one target, and at the end of my turns all creatures within 10 ft of me, including myself, take half my level in radiant damage.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"radiant consumption" : {
			name : "Radiant Consumption",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 3) return ""
				return Math.ceil(n/2) + "/" + n + " damage";
			}),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
};