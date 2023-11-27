
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
    regExpSearch : /^(?=.*(terloyt))(?=.*\bforest?\b).*$/i,
    name : "Terloyt, Forest/Mountain",
    sortname : "Terloyt, Forest/Mountain",
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
              usagescalc : "event.value = Number(How('Proficiency Bonus'));",
			  toNotesPage : [{
				name : "Gift of the Avenger of Grace",
				note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n\u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.   \n\u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.   \n\u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
				page3notes : true
			}]
          },
		  "Terloytian Adaptations (forest)" : {
			name : "Terloytian Adaptations",
			toNotesPage : [{
				name : "Terloytian Adaptations",
				note : "\nYour long and prehensile tail allows you to move with unprecedented agility. You gain a climbing speed equal to your movement speed, and you cannot be slowed by non-magical difficult terrain.",
				page3notes : true
			}],
			speed : {climb : { spd : 30, enc : 0 }}
      }
	}
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
            usagescalc : "event.value = Number(How('Proficiency Bonus'));",
			toNotesPage : [{
				name : "Gift of the Avenger of Grace",
				note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n\u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
				page3notes : true
			}]
        },
		"Terloytian Adaptations" : {
			name : "Terloytian Adaptations",
			toNotesPage : [{
				name : "Terloytian Adaptations",
				note : "\nTo hunt or avoid creatures buried in the sand, the Avenger of Grace has given you a vibration-sensitive tail. You gain a tremor sense over a 15-foot radius. Also, you are adapted to hot climates.",
				page3notes : true
			}]
    	},
	}
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
            usagescalc : "event.value = Number(How('Proficiency Bonus'));",
			toNotesPage : [{
				name : "Gift of the Avenger of Grace",
				note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n\u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
				page3notes : true
			}]
        },
		"Terloytian Adaptations" : {
			name : "Terloytian Adaptations",
			toNotesPage : [{
				name : "Terloytian Adaptations",
				note : "\nYou can use your big, fluffy tail to cover your tracks. You and your group (if you go last) cannot be tracked by footprints on the ground. You are also covered in thick white fur, which makes you adapted to cold climates.",
				page3notes : true
			}]
    	}
	}
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
            usagescalc : "event.value = Number(How('Proficiency Bonus'));",
			toNotesPage : [{
				name : "Gift of the Avenger of Grace",
				note : "\nYou are transformed by the fickle force of nature. Your color and shape depend on the light level\n\u2022In the light:\n      Vengeance of the Day: Once per turn, when you deal damage to one creature, you can reroll all damage dice. You must use the second damage roll. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Clear Eyes: You have advantage on Wisdom (Perception) rolls that rely on sight.\n   \u2022In the dark:\n      Grace of the Night: darkness changes your form, helping you hide after an attack. When you make a melee attack, ranged attack, or spell attack, you can immediately take the Disengage or Hide action as part of that attack. You can use this trait a number of times equal to your proficiency bonus before finishing a long rest.\n      Sensitive Ears: You have advantage on Wisdom (Perception) rolls that rely on hearing.\n   \u2022In dim light:\n      You can choose any of the shapes. To change form during combat, you must move at least 10 feet toward a shadow or source of light.",
				page3notes : true
			}]
        },
		"Terloytian Adaptations" : {
			name : "Terloytian Adaptations",
			toNotesPage : [{
				name : "Terloytian Adaptations",
				note : "\nYou instinctively hold your breath when in danger and can hold it for 1 hour. Your strong tail with seal-like fins gives you a swimming speed of 40 feet.",
				page3notes : true,
			}],
			speed : { swim : { spd : "40", enc : "20" } }
		}
    }
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
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Strength",
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
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Strength",
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
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Strength",
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
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Strength",
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
	vision : [["Darkvision", 60]],
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Ordlag"],
	skillstxt: "Choose any two skills",
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Intelligence",
	trait : "Lingre" + (typePF ? "\n " : "\t") +
	"\u2022 Lingre (+2 to any ability score and +1 to any ability score, one must be Intelligence)" +
	"\n \u2022 Deathless Nature: I don't need to breathe." +
	"\n \u2022 Spider Climb: Climbing speed equal to walking speed. At 3rd level, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free." +
	"\n \u2022 Life Siphon (see notes page)" +
	"\n \u2022 Energy Eater: Only the restoration of hit points from using the Life Siphon feature, or healing gems, can saturate you.",
	features : {
		"spider climb" : {
			name : "Spider Climb",
			speed : { climb : { spd : "walk", enc : "walk" } }
		},
		"life siphon" : {
			name : "Life Siphon",
			toNotesPage : [{
				name : "Life Siphon",
				note : "\nYou know the Sapping Sting cantrip. The basic spellcasting ability for it is Intelligence. For you, this cantrip has the following qualities: \n   \u2022Casting time: 1 action\n   \u2022Range: 30 ft.\n   \u2022Components: V,S\n   \u2022Duration: Instantaneous\nYou drain the life force of one visible creature within range. The target must succeed on a Constitution saving throw or take 1d6 necrotic damage and fall prone.\nWhen you attack with this cantrip and the target is a creature that is not a Construct or Undead of Medium size or larger, you can empower yourself in one of the following ways of your choice:\n   You regain hit points equal to the damage you dealt with the cantrip. If the target creature dies from this damage, then you're satiated for the day.\n   You gain a bonus to the next ability check or attack roll you make. The bonus is equal to the damage you dealt with the spell. The bonus lasts until the next use of this ability.\nYou can empower yourself with this cantrip a number of times equal to your proficiency bonus, and you regain all spent uses when you finish a long rest.\nThis spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
				page3notes : true
			}]
		}
	},
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

// >>>>>>>>>>>>>>>> //
// >>>> Human >>>>> //
// >>>>>>>>>>>>>>>> //

AddRacialVariant("human", "second age", {
	regExpSearch : /second age/i,
	source : [["TSA", 0]],
	skillstxt : "Choose any one skill",
	scorestxt : "+2/+1 to two different ability scores of my choice",
	scores : [0, 0, 0, 0, -1, 0],
	trait : "Human (+2/+1 to two different ability scores of my choice)\n\nSkills: I gain proficiency in one skill of my choice.\n\nFeat: I gain one feat of my choice.\n\nConsuming Ambition: The gods have given you an insatiable desire for something more. Spiritual values are the first thing you sacrifice on the way to your ambition. Your Wisdom is reduced by 1.",
	eval : function() { AddString('Feat Note 1', 'Human bonus feat', '; '); },
	removeeval : function() { RemoveString('Feat Note 1', 'Human bonus feat'); }
});

// >>>>>>>>>>>>>>>> //
// >>>> Pokrov >>>> //
// >>>>>>>>>>>>>>>> //

RaceList["pokrov"] = {
	regExpSearch : /pokrov/i,
	name : "Pokrov",
	source : [["TSA", 0]],
	plural : "Pokrovy",
	age : "Pokrovy have no age, but usually they last no longer than 10 years, or until they complete the task of the Death Sacrificer.",
	size : [3],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	languageProfs : ["Common", "Dead", 1],
	scores : [0, 0, 0, 0, 0, 0],
    scorestxt : "+2 to any ability score and +1 to any ability score, one must be Wisdom",
	trait : "Pokrov" + (typePF ? "\n " : "\t") +
	"\u2022 Pokrov (+2 to any ability score and +1 to any ability score, one must be Wisdom)" +
	"\n \u2022 Undead Nature: You are undead. You don't need to eat, drink, breathe or sleep. You have resistance to necrotic and poison damage. You have advantage on saving throws against poison." +
	"\n \u2022 Blessed Silence: You can only speak in whispers. Your speech cannot be heard more than 15 feet away." +
	"\n \u2022 Death's Will (see notes)" +
	"\n \u2022 Eldritch Acolyte (see notes)",
	dmgres : ["Poison", "Necrotic"],
	savetxt : {adv_vs : ["poisoned"]},
	features : {
		"Death's Will" : { 
			name : "Death's Will",
			toNotesPage : [{
				name : "Death's Will",
				note : "\nYou emit an aura over a 30-foot radius. It disappears when you die. When any humanoid or creature larger than Small dies within the aura's area of effect or as a result of your attack or spell, roll 1d20. If the roll is 10 or more, the creature is stabilized. You can regain one hit die. If the roll is less than 10, the creature dies. You can spend your hit die + mod. Constitution and restore this number of hit points.\nThe undead always die, but you can choose the effect yourself. You can only regain or spend a hit die once per round.\nThis trait can only affect a creature once every 24 hours. It also does not affect Constructs.\nThe number of hit dice affected by this trait increases by 1 when you reach 5th level (2 dice), 11th level (3 dice), and 17th level (4 dice).\n",
				page3notes : true
			}]
		},
		"Eldritch Acolyte" : { 
			name : "Eldritch Acolyte",
			toNotesPage : [{
				name : "Eldritch Acolyte",
				note : "\nYou know the Ceremony spell and always remember it. It does not require any material components for you. You cannot create holy water with this spell. You regain hit dice in an amount determined by your Death's Will ability.\n",
				page3notes : true
			}]
		},
	},
	spellcastingBonus : {
		name : "Ceremony",
		spells : ["ceremony"],
		selection : ["ceremony"],
		firstCol : 'checkedbox'
	}
};

// >>>>>>>>>>>>>>>> //
// >>>> Weaver >>>> //
// >>>>>>>>>>>>>>>> //

RaceList["weaver"] = {
	regExpSearch : /weaver/i,
	name : "Weaver",
	source : [["TSA", 0]],
	plural : "Weavers",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Deception, Intimidation, Insight, and Persuasion",
	languageProfs : ["Common", "Weaver Sign Language", 1],
	scorestxt : "+2/+1 to two different ability scores of my choice",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Weaver (+2/+1 to two different ability scores of my choice)\nShapechanger: As an action, I can change my appearance and voice to or from a humanoid-shaped form I have seen, not changing my equipment. I determine the specifics of the form like hair length, eye color, and sex. I can adjust my height and weight, but not so much that my size changes. I revert back when I die. I can make myself appear as a member of another race, though none of my game statistics change.\nLucky: If you roll a 1 on an attack roll, ability check, or saving throw, you may reroll the die and must use the new result, even if it is a 1.",
	action : [["action", "Shapechanger"]]
};

// >>>>>>>>>>>>>>>> //
// >>>> Allote >>>> //
// >>>>>>>>>>>>>>>> //

RaceList["beasthide allote"] = {
	regExpSearch : /^.*(?=.*allote)(?=.*beast)(?=.*hide).*$/i,
	name : "Beasthide allote",
	sortname : "Allote, Beasthide",
	source : [["TSA", 0]],
	plural : "Beasthide allote",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Moon"],
	vision : [["Darkvision", 60]],
	skills : ["Athletics"],
	dmgres : [["Bludgeoning", "Bludgeon. (shifted)"], ["Slashing", "Slash. (shifted)"], ["Piercing", "Piercing. (shifted)"]],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Constitution",
	trait : "Beasthide Shifter (+2 to any ability score and +1 to any ability score, one must be Constitution)\nShifting (see notes) ",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return "1d6 + " + n + " + Con mod temp HP"; }),
			toNotesPage : [{
				name : "Shifting",
				note : "\nAs a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to 1d6 + my level + my Constitution modifier (minimum 1 temporary hit point) and gain resistances to bludgeoning, piercing, slashing damage from non-magical attacks, except those inflicted by silver-plated weapons.\nWhile transformed like this, I have a +1 bonus to AC.",
				page3notes : true
			}]
		}
	}
};
RaceList["longtooth allote"] = {
	regExpSearch : /^.*(?=.*allote)(?=.*long)(?=.*tooth).*$/i,
	name : "Longtooth allote",
	sortname : "Allote, Longtooth",
	source : [["TSA", 0]],
	plural : "Longtooth allote",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Moon"],
	dmgres : [["Bludgeoning", "Bludgeon. (shifted)"], ["Slashing", "Slash. (shifted)"], ["Piercing", "Piercing. (shifted)"]],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["E:RLW", 34]],
		damage : [1, 6, "piercing"],
		description : "Only shifted; One attack as bonus action"
	},
	weaponsAdd : ["Longtooth Fangs"],
	vision : [["Darkvision", 60]],
	skills : ["Intimidation"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Constitution",
	trait : "Longtooth Shifter (+2 to any ability score and +1 to any ability score, one must be Constitution)\nShifting (see notes)",
	action : [['bonus action', 'Longtooth Fangs attack (shifted)']],
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return n + " + Con mod temp HP"; }),
			toNotesPage : [{
				name : "Shifting",
				note : "\nAs a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point) and gain resistances to bludgeoning, piercing, slashing damage from non-magical attacks, except those inflicted by silver-plated weapons.\nWhile transformed like this, I use my elongated fangs to make unarmed strikes, dealing 1d6 piercing damage. As a bonus action, I can make one attack with my fangs.",
				page3notes : true
			}]
		}
	}
};
RaceList["swiftstride allote"] = {
	regExpSearch : /^.*(?=.*allote)(?=.*swift)(?=.*stride).*$/i,
	name : "Swiftstride allote",
	sortname : "Allote, Swiftstride",
	source : [["TSA", 0]],
	plural : "Swiftstride allote",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Moon"],
	dmgres : [["Bludgeoning", "Bludgeon. (shifted)"], ["Slashing", "Slash. (shifted)"], ["Piercing", "Piercing. (shifted)"]],
	vision : [["Darkvision", 60]],
	skills : ["Acrobatics"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Constitution",
	trait : "Swiftstride Shifter (+2 to any ability score and +1 to any ability score, one must be Constitution)\nShifting (see notes)",
	action : [['reaction', 'Stride (shifted)']],
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return n + " + Con mod temp HP"; }),
			toNotesPage : [{
				name : "Shifting",
				note : "\nAs a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ") and gain resistances to bludgeoning, piercing, slashing damage from non-magical attacks, except those inflicted by silver-plated weapons.\nWhile transformed like this, my walking speed increases with 10 ft.\nAs a reaction when an enemy ends its turn within 5 ft of me while I'm shifted, I can move 10 ft without provoking opportunity attacks.",
				page3notes : true
			}]
		}
	}
};
RaceList["wildhunt allote"] = {
	regExpSearch : /^.*(?=.*allote)(?=.*wild)(?=.*hunt).*$/i,
	name : "Wildhunt allote",
	sortname : "Allote, Wildhunt",
	source : [["TSA", 0]],
	plural : "Wildhunt allote",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Moon"],
	dmgres : [["Bludgeoning", "Bludgeon. (shifted)"], ["Slashing", "Slash. (shifted)"], ["Piercing", "Piercing. (shifted)"]],
	vision : [["Darkvision", 60]],
	skills : ["Survival"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Wildhunt Shifter (+2 to any ability score and +1 to any ability score, one must be Constitution)\nShifting (see notes)",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return n + " + Con mod temp HP"; }),
			toNotesPage : [{
				name : "Shifting",
				note : "\nAs a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point) and gain resistances to bludgeoning, piercing, slashing damage from non-magical attacks, except those inflicted by silver-plated weapons.\nWhile transformed like this, I have advantage on Wisdom checks and no creature within 30 ft can make an attack roll with advantage against me, unless I'm incapacitated.",
				page3notes : true
			}]
		}
	}
};

// >>>>>>>>>>>>>>> //
// >>>> Viyah >>>> //
// >>>>>>>>>>>>>>> //

RaceList["sinamsi viyah"] = {
	regExpSearch : /^.*(?=.*viyah)(?=.*sinamsi).*$/i,
	name : "Sinamsi viyah",
	sortname : "Viyah, Sinamsi",
	source : [["TSA", 0]],
	plural : "Sinamsi viyah",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Viyah", 1],
	skillstxt : "Choose two from Arcana, Investigation, Religion, Insight. You gain expertise in one of these skills.",
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Charisma",
	trait : "Sinamsi viyah (+2 to any ability score and +1 to any ability score, one must be Charisma)\nMystic Step (see notes)",
	action : [['bonus action', 'Mystic Step']],
	features : {
		"mystic step" : {
			name : "Mystic Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			toNotesPage : [{
				name : "Mystic Step",
				note : "\nAs a bonus action, you can magically teleport to an unoccupied space you can see within 30 feet. You can use it once before finishing a long or short rest.\nUpon reaching 3rd level, your Mystic Step gains an additional effect:\nOnce you complete a teleportation with Mystic Step, you create a white, flat, opaque square wall of force field with an edge length of 5 feet within 5 feet of you. The wall can be positioned anywhere in space and cannot cause damage. The wall disappears at the end of your next turn.",
				page3notes : true
			}]
		}
	}
};

RaceList["irmah viyah"] = {
	regExpSearch : /^.*(?=.*viyah)(?=.*irmah).*$/i,
	name : "Irmah viyah",
	sortname : "Viyah, Irmah",
	source : [["TSA", 0]],
	plural : "Irmah viyah",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	skillstxt : "Choose one from Athletics, Acrobatics, Stealth, Performance, Intimidation. You gain expertise in the chosen skill.",
	toolProfs : ["Сalligrapher's or Painter's supplies)", 1],
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Charisma",
	trait : "Irmah viyah (+2 to any ability score and +1 to any ability score, one must be Charisma)\nMystic Step (see notes)",
	action : [['bonus action', 'Mystic Step']],
	features : {
		"mystic step" : {
			name : "Mystic Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			toNotesPage : [{
				name : "Mystic Step",
				note : "\nAs a bonus action, you can magically teleport to an unoccupied space you can see within 30 feet. You can use it once before finishing a long or short rest.\nUpon reaching 3rd level, your Mystic Step gains an additional effect:\nAfter you complete a teleport with Mystic Step, you gain advantage on your next attack.",
				page3notes : true
			}]
		}
	}
};

RaceList["anhri viyah"] = {
	regExpSearch : /^.*(?=.*viyah)(?=.*anhri).*$/i,
	name : "Anhri viyah",
	sortname : "Viyah, Anhri",
	source : [["TSA", 0]],
	plural : "Anhri viyah",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1], 
	skillstxt : "Choose one from Persuasion, Deception, Sleight Of Hand, Medicine.",
	toolProfs : ["Any artisan tool (with expertise)", 1],
	scores : [0, 0, 0, 0, 0, 0],
	scorestxt : "+2 to any ability score and +1 to any ability score, one must be Charisma",
	trait : "Anhri viyah (+2 to any ability score and +1 to any ability score, one must be Charisma)\nMystic Step (see notes)",
	action : [['bonus action', 'Mystic Step']],
	features : {
		"mystic step" : {
			name : "Mystic Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			toNotesPage : [{
				name : "Mystic Step",
				note : "\nAs a bonus action, you can magically teleport to an unoccupied space you can see within 30 feet. You can use it once before finishing a long or short rest.\nUpon reaching 3rd level, your Mystic Step gains an additional effect:\nWhen you use Mysterious Step, you can touch one willing creature within 5 feet of you. The creature then moves instead of you, to an unoccupied space of your choice that you can see within 30 feet of you.",
				page3notes : true
			}]
		}
	}
};