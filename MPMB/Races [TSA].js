
var iFileName = "Races [TSA].js";
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
	trait : "Scourge Hinammet (+2 to any ability score and +1 to any ability score, one must be Strength)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Consumption: Once per long rest when I'm 3rd level, I can use an action to radiate bright light in 10-ft radius and dim light for another 10-ft, for 1 minute or until I end it as a bonus action. Once on my turn my attack or spell deals my level in extra radiant damage to one target, and at the end of my turns all creatures within 10 ft of me, including myself, take half my level in radiant damage.",
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

// >>>>>>>>>>>>>>>> //
// >>>> Lingre >>>> //
// >>>>>>>>>>>>>>>> //

SpellsList["life siphon"] = {
	name : "Sapping Sting (Lingre)",
	regExpSearch : /sapping sting \(lingre\)/i,
	source: ["TSA", 0],
	classes : [],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft.",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 creature that I can see save or 1d6 Necrotic dmg and fall prone; heal for dmg or add dmg to next atk roll or check; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 creature I can see save save or `CD`d6 Necro dmg; heal for dmg or add dmg to next atk roll or check",
	descriptionFull : "You drain the life force of one visible creature within range. The target must succeed on a Constitution saving throw or take 1d6 necrotic damage and fall prone.\nWhen you attack with this cantrip and the target is a creature that is not a Construct or Undead of Medium size or larger, you can empower yourself in one of the following ways of your choice:\n\u2022You regain hit points equal to the damage you dealt with the cantrip. If the target creature dies from this damage, then you're satiated for the day.\n\u2022You gain a bonus to the next ability check or attack roll you make. The bonus is equal to the damage you dealt with the spell. The bonus lasts until the next use of this ability.\nYou can empower yourself with this cantrip a number of times equal to your proficiency bonus, and you regain all spent uses when you finish a long rest.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
}

RaceList["lingre"] = {
	regExpSearch : /lingre/i,
	name : "Lingre",
	source : [["TSA", 0]],
	plural : "Lingres",
	size : [3, 4],
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Ordlag"],
	skillstxt: "Choose any two skills",
	scoresGeneric : true,
	trait : "Lingre" + (typePF ? "\n " : "\t") +
	"\u2022 Lingre (+2 to any ability score and +1 to any ability score, one must be Intelligence)" +
	"\n \u2022 Deathless Nature: I don't need to breathe." +
	"\n \u2022 Spider Climb: Climbing speed equal to walking speed. At 3rd level, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free." +
	"\n \u2022 Life Siphon (see notes page)" +
	"\n \u2022 Energy Eater: Only the restoration of hit points from using the Life Siphon feature, or healing gems, can saturate you.",
	features : {
		"spider climb" : { // So it doesn't interfere with inherited speeds by useFromPreviousRace
			name : "Spider Climb",
			minlevel : 1,
			speed : { climb : { spd : "walk", enc : "walk" } }
		}
	},
	toNotesPage : [{
        name : "Life Siphon",
        note : "\nYou know the Sapping Sting cantrip. The basic spellcasting ability for it is Intelligence. For you, this cantrip has the following qualities: \n   \u2022Casting time: 1 action\n   \u2022Range: 30 ft.\n   \u2022Components: V,S\n   \u2022Duration: Instantaneous\nYou drain the life force of one visible creature within range. The target must succeed on a Constitution saving throw or take 1d6 necrotic damage and fall prone.\nWhen you attack with this cantrip and the target is a creature that is not a Construct or Undead of Medium size or larger, you can empower yourself in one of the following ways of your choice:\n   \u2022You regain hit points equal to the damage you dealt with the cantrip. If the target creature dies from this damage, then you're satiated for the day.\n   \u2022You gain a bonus to the next ability check or attack roll you make. The bonus is equal to the damage you dealt with the spell. The bonus lasts until the next use of this ability.\nYou can empower yourself with this cantrip a number of times equal to your proficiency bonus, and you regain all spent uses when you finish a long rest.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
        page3notes : true
    }],
	vision : [["Darkvision", 60]],
	extraLimitedFeatures : [{
		name : "Life Siphon",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery: "long rest"
	}],
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Life Siphon",
		spells : ["life siphon"],
		selection : ["life siphon"],
		firstCol : 'atwill'
	}
};

