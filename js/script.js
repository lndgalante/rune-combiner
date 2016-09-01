var runeword = [{
  name: 'Steel',
  combinationOrder: 'Tir El',
  requiredLevel: 13,
  requiredItems: 'Swords, Axes & Maces',
  properties: ['+25% Increased Attack Speed', '+20% Enhanced Damage', '+3 to Minimum Damage', '+3 to Maximum Damage', '+50 to Attack Rating', '50% Chance of Open Wounds', '+2 to Mana After Each Kill', '+1 to Light Radius']
}, {
  name: 'Nadir',
  combinationOrder: 'Nef Tir',
  requiredLevel: 13,
  requiredItems: 'Headgear (all types)',
  properties: ['+50% Enhanced Defense', '+10 Defense', '+30 Defense vs. Missile', '+5 to Strength', '+2 to Mana After Each Kill', '-33% Extra Gold from Monsters', '-3 to Light Radius', 'Level 13 Cloak of Shadows (9 charges)']
}, {
  name: 'Malice',
  combinationOrder: 'Ith El Eth',
  requiredLevel: 15,
  requiredItems: 'All Melee Weapons',
  properties: ['+33% Enhanced Damage', '+9 to Maximum Damage', '-25% Target Defense', '+50 to Attack Rating', '100% Chance of Open Wounds', 'Prevent Monster Heal', '-100 to Monster Defense Per Hit', 'Drain Life -5']
}, {
  name: 'Stealth',
  combinationOrder: 'Tal Eth',
  requiredLevel: 17,
  requiredItems: 'Armor',
  properties: ['+25% Faster Run/Walk', '+25% Faster Casting Rate', '25% Faster Hit Recovery', '+6 to Dexterity', 'Regenerate Mana 15%', '+15 Maximum Stamina', 'Poison Resist +30%', 'Magic Damage Reduced by 3']
}, {
  name: 'Leaf',
  combinationOrder: 'Tir Ral',
  requiredLevel: 19,
  requiredItems: 'Staves',
  properties: ['+3 to Fire Skills', 'Adds 5-30 Fire Damage', '+3 to Inferno (Sorceress Only)', '+3 to Warmth (Sorceress Only)', '+3 to Fire Bolt (Sorceress Only)', '+(2 * Character Level) Defense', 'Cold Resist +33%', '+2 to Mana After Each Kill']
}, {
  name: 'Ancients Pledge',
  combinationOrder: 'Ral Ort Tal',
  requiredLevel: 21,
  requiredItems: 'Shields',
  properties: ['+50% Enhanced Defense', 'Cold Resist +43%', 'Lightning Resist +48%', 'Fire Resist +48%', 'Poison Resist +48%', '10% Damage Taken Goes to Mana']
}]

var rune = [{
  name: 'El',
  image: 'img/stone.svg',
  requiredLevel: 11,
  properties: {
    weapon: '+50 To Attack Rating, +1 Light Radius',
    armorHelm: '+15 Defense, +1 To Light Radius',
    shield: '+15 Defense, +1 To Light Radius',
  }
}, {
  name: 'Eld',
  image: 'img/stone.svg',
  requiredLevel: 11,
  properties: {
    weapon: '+75% Damage To Undead, +50 Attack Rating Against Undead',
    armorHelm: '+15% Slower Stamina Drain',
    shield: '7% Increased Chance of Blocking',
  }
}, {
  name: 'Tir',
  image: 'img/stone.svg',
  requiredLevel: 13,
  properties: {
    weapon: '+2 To Mana After Each Kill',
    armorHelm: '+2 To Mana After Each Kill',
    shield: '+2 To Mana After Each Kill',
  }
}, {
  name: 'Nef',
  image: 'img/stone.svg',
  requiredLevel: 13,
  properties: {
    weapon: 'Knockback',
    armorHelm: '+30 Defense Vs. Missile',
    shield: '+30 Defense Vs. Missile',
  }
}, {
  name: 'Eth',
  image: 'img/stone.svg',
  requiredLevel: 15,
  properties: {
    weapon: '-25% To Target Defense',
    armorHelm: 'Regenerate Mana 15%',
    shield: 'Regenerate Mana 15%',
  }
}, {
  name: 'Ith',
  image: 'img/stone.svg',
  requiredLevel: 15,
  properties: {
    weapon: '+9 To Maximum Damage',
    armorHelm: '15% Damage Taken Goes To Mana',
    shield: '15% Damage Taken Goes To Mana',
  }
}, {
  name: 'Tal',
  image: 'img/stone.svg',
  requiredLevel: 17,
  properties: {
    weapon: '+75 Poison Damage Over 5 Seconds',
    armorHelm: 'Poison Resist 30%',
    shield: 'Poison Resist 35%',
  }
}, {
  name: 'Ral',
  image: 'img/stone.svg',
  requiredLevel: 19,
  properties: {
    weapon: 'Adds 5-30 Fire Damage',
    armorHelm: 'Fire Resist 30%',
    shield: 'Fire Resist 35%',
  }
}, {
  name: 'Ort',
  image: 'img/stone.svg',
  requiredLevel: 21,
  properties: {
    weapon: 'Adds 1-50 Lightning Damage',
    armorHelm: 'Lightning Resist 30%',
    shield: 'Lightning Resist 35%',
  }
}, {
  name: 'Thul',
  image: 'img/stone.svg',
  requiredLevel: 23,
  properties: {
    weapon: 'Adds 3-14 Cold Damage - 3 Second Duration',
    armorHelm: 'Cold Resist 30%',
    shield: 'Cold Resist 35%',
  }
}, {
  name: 'Amn',
  image: 'img/amn.svg',
  requiredLevel: 25,
  properties: {
    weapon: '7% Life Stolen Per Hit',
    armorHelm: 'Attacker Takes Damage of 14',
    shield: 'Attacker Takes Damage of 14',
  }
}, {
  name: 'Sol',
  image: 'img/stone.svg',
  requiredLevel: 27,
  properties: {
    weapon: '+9 To Minimum Damage',
    armorHelm: 'Damage Reduced by 7',
    shield: 'Damage Reduced by 7',
  }
}, {
  name: 'Shael',
  image: 'img/stone.svg',
  requiredLevel: 29,
  properties: {
    weapon: '20% Increased Attack Speed',
    armorHelm: '20% Faster Hit Recovery',
    shield: '20% Faster Block Rate',
  }
}, {
  name: 'Dol',
  image: 'img/stone.svg',
  requiredLevel: 31,
  properties: {
    weapon: 'Hit Causes Monster To Flee 25%',
    armorHelm: 'Replenish Life +7',
    shield: 'Replenish Life +7',
  }
}, {
  name: 'Hel',
  image: 'img/stone.svg',
  requiredLevel: 33,
  properties: {
    weapon: 'Requirements -20%',
    armorHelm: 'Requirements -15%',
    shield: 'Requirements -15%',
  }
}, {
  name: 'Io',
  image: 'img/stone.svg',
  requiredLevel: 35,
  properties: {
    weapon: '+10 To Vitality',
    armorHelm: '+10 To Vitality',
    shield: '+10 To Vitality',
  }
}, {
  name: 'Lum',
  image: 'img/stone.svg',
  requiredLevel: 37,
  properties: {
    weapon: '+10 To Energy',
    armorHelm: '+10 To Energy',
    shield: '+10 To Energy',
  }
}, {
  name: 'Ko',
  image: 'img/stone.svg',
  requiredLevel: 39,
  properties: {
    weapon: '+10 To Dexterity',
    armorHelm: '+10 To Dexterity',
    shield: '+10 To Dexterity',
  }
}, {
  name: 'Fal',
  image: 'img/stone.svg',
  requiredLevel: 41,
  properties: {
    weapon: '+10 To Strength',
    armorHelm: '+10 To Strength',
    shield: '+10 To Strength',
  }
}, {
  name: 'Lem',
  image: 'img/stone.svg',
  requiredLevel: 43,
  properties: {
    weapon: '75% Extra Gold From Monsters',
    armorHelm: '50% Extra Gold From Monsters',
    shield: '50% Extra Gold From Monsters',
  }
}, {
  name: 'Pul',
  image: 'img/stone.svg',
  requiredLevel: 45,
  properties: {
    weapon: '+75% Damage to Demons, +100 Attack Rating Against Demons',
    armorHelm: '+30% Enhanced Defense',
    shield: '+30% Enhanced Defense',
  }
}, {
  name: 'Um',
  image: 'img/stone.svg',
  requiredLevel: 47,
  properties: {
    weapon: '25% Chance of Open Wounds',
    armorHelm: 'All Resistances +15',
    shield: 'All Resistances +22',
  }
}, {
  name: 'Mal',
  image: 'img/stone.svg',
  requiredLevel: 49,
  properties: {
    weapon: 'Prevent Monster Heal',
    armorHelm: 'Magic Damage Reduced By 7',
    shield: 'Magic Damage Reduced By 7',
  }
}, {
  name: 'Ist',
  image: 'img/stone.svg',
  requiredLevel: 51,
  properties: {
    weapon: '30% Better Chance of Getting Magic Items',
    armorHelm: '25% Better Chance of Getting Magic Items',
    shield: '25% Better Chance of Getting Magic Items',
  }
}, {
  name: 'Gul',
  image: 'img/stone.svg',
  requiredLevel: 53,
  properties: {
    weapon: '20% Bonus To Attack Rating',
    armorHelm: '5% To Maximum Poison Resist',
    shield: '5% To Maximum Poison Resist',
  }
}, {
  name: 'Vex',
  image: 'img/stone.svg',
  requiredLevel: 55,
  properties: {
    weapon: '7% Mana Stolen Per Hit',
    armorHelm: '5% To Maximum Fire Resist',
    shield: '5% To Maximum Fire Resist',
  }
}, {
  name: 'Ohm',
  image: 'img/stone.svg',
  requiredLevel: 57,
  properties: {
    weapon: '+50% Enhanced Damage',
    armorHelm: '+5% To Maximum Cold Resist',
    shield: '+5% To Maximum Cold Resist',
  }
}, {
  name: 'Lo',
  image: 'img/stone.svg',
  requiredLevel: 59,
  properties: {
    weapon: '20% Deadly Strike',
    armorHelm: '5% To Maximum Lightning Resist',
    shield: '5% To Maximum Lightning Resist',
  }
}, {
  name: 'Sur',
  image: 'img/stone.svg',
  requiredLevel: 61,
  properties: {
    weapon: 'Hit Blinds Target',
    armorHelm: 'Maximum Mana 5%',
    shield: '+50 To Mana',
  }
}, {
  name: 'Ber',
  image: 'img/stone.svg',
  requiredLevel: 63,
  properties: {
    weapon: '20% Chance of Crushing Blow',
    armorHelm: 'Damage Reduced by 8%',
    shield: 'Damage Reduced by 8%',
  }
}, {
  name: 'Jah',
  image: 'img/stone.svg',
  requiredLevel: 65,
  properties: {
    weapon: 'Ignore Targets Defense',
    armorHelm: 'Increase Maximum Life 5%',
    shield: '+50 Life',
  }
}, {
  name: 'Cham',
  image: 'img/stone.svg',
  requiredLevel: 67,
  properties: {
    weapon: 'Freeze Target +3',
    armorHelm: 'Cannot Be Frozen',
    shield: 'Cannot Be Frozen',
  }
}, {
  name: 'Zod',
  image: 'img/stone.svg',
  requiredLevel: 69,
  properties: {
    weapon: 'Indestructible',
    armorHelm: 'Indestructible',
    shield: 'Indestructible',
  }
}]

new Vue({
  el: '#app',

  data: {
    search: '',
    runes: rune,
    runewords: runeword
  },

  methods: {

  }
})

// var audio = new Audio('../mp3/greetings.mp3');
// audio.play();