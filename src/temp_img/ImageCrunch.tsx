// import staData from '../data/STA.json'
// https://cardgamebase.com/wp-content/uploads/
const default_route = 'https://cardgamebase.com/wp-content/uploads/';

export interface card_img_data {
  name: string,
  eng: string,
  jap: string
}
export const cardArray: card_img_data[] = [
  {
    name: 'Approach of the Second Sun',
    eng: default_route+'Approach-of-the-Second-Sun-Mystical-Archive-Cards-List-MTG.jpg',
    jap: default_route+'01-Approach-of-the-Second-Sun-Japanese-Mystical-Archive-Cards.jpg'
  },
  {
    name: 'Day of Judgement',
    eng: default_route+'Day-of-Judgement-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: default_route+'02-Day-of-Judgment-Japanese-Mystical-Archive.jpg'
  },
  {
    name: 'Defiant Strike',
    eng: default_route+'Defiant-Strike-Where-to-Get-Mystical-Archive-Cards.jpg',
    jap: default_route+'03-Defiant-Strike.jpg'
  },
  {
    name: 'Divine Gambit',
    eng: default_route+'Divine-Gambit-Mystical-Archive-Cards-List.jpg',
    jap: default_route+'04-Divine-Gambit-Japanese-Mystical-Archive.jpg'
  },
  {
    name: "Ephemerate",
    eng: default_route+'Ephemerate-Strixhaven.jpg',
    jap: default_route+'05-Ephemerate-Japanese-Alt-Art.jpg'
  },
  {
    name: "Gift of Estates",
    eng: default_route+'Gift-of-Estates-Strixhaven-Alt-Art.jpg',
    jap: default_route+'06-Gift-of-Estates-Japanese-Mystical-Archive-Cards.jpg'
  },
  {
    name: "Gods Willing",
    eng: default_route+'Gods-Willing-Mystical-Archive-Cards.jpg',
    jap: default_route+'07-Gods-Willing.jpg'
  },
  {
    name: "Mana Tithe",
    eng: default_route+'Mana-Tithe-Mystical-Archive-Cards-List-MTG.jpg',
    jap: default_route+'08-Mana-Tithe-Japanese-Alt-Art.jpg'
  },
  
  {
    name: 'Revitalize',
    eng: default_route+'Revitalize-Strixhaven-Special-Cards.jpg',
    jap: default_route+'09-Revitalize.jpg'
  },
  {
    name: 'Swords to Plowshares',
    eng: default_route+'Swords-to-Plowshares-Mystical-Archive.jpg',
    jap: default_route+'10-Swords-to-Plowshares.jpg'
  },
  {
    name: `Teferi's Protection`,
    eng: 'https://mtgazone.com/wp-content/uploads/2021/03/011-Mystical-Archives-Spoiler-Card-1.png',
    jap: default_route+'11-Teferis-Protection.jpg'
  },
  {
    name: `Blue Sun's Zenith`,
    eng: default_route+'Blue-Suns-Zenith-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: default_route+'12-Blue-Suns-Zenith.jpg'
  },
  {
    name: `Brainstorm`,
    eng: default_route+'Brainstorm-Mystical-Archive-Cards-List.jpg',
    jap: default_route+'13-Brainstorm.jpg'
  },
  {
    name: `Compulsive Research`,
    eng: default_route+'Compulsive-Research-1.jpg',
    jap: default_route+'14-Compulsive-Research.jpg'
  },
  {
    name: `Counterspell`,
    eng: default_route+'Counterspell-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: default_route+'15-Counterspell-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Memory Lapse`,
    eng: default_route+'Memory-Lapse-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: default_route+'16-Memory-Lapse.jpg'
  },
  {
    name: `Mind's Desire`,
    eng: default_route+'MInds-Desire-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: default_route+'17-Minds-Desire-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Negate`,
    eng: default_route+'Negate-Mystical-Archive-Cards-List-MTG.jpg',
    jap: default_route+'18-Negate.jpg'
  },
  {
    name: `Opt`,
    eng: default_route+'Opt-Mystical-Archive-Strixhaven.jpg',
    jap: default_route+'19-Opt-Japanese-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Strategic Planning`,
    eng: default_route+'Strategic-Planning-Alternate-Art-Cards-Strixhaven.jpg',
    jap: default_route+'20-Strategic-Planning.jpg'
  },
  {
    name: `Tezzeret's Gambit`,
    eng: default_route+'Tezzerets-Gambit.jpg',
    jap: default_route+'21-Tezzerets-Gambit.jpg'
  },
  {
    name: `Time Warp`,
    eng: default_route+'Time-Warp-Strixhaven-Mystical-Archive-Cards.jpg',
    jap: default_route+'22-Time-Warp-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Whirlwind Denial`,
    eng: default_route+'Whirlwind-Denial-Alt-Art.jpg',
    jap: default_route+'23-Whirlwind-Denial.jpg'
  },
  {
    name: `Agonizing Remorse`,
    eng: default_route+'Agonizing-Remorse-Strixhaven.jpg',
    jap: default_route+'24-Agonizing-Remorse-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Crux of Fate`,
    eng: default_route+'Crux-of-Fate-Mystical-Archive-Card-List.jpg',
    jap: default_route+'25-Crux-of-Fate-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Dark Ritual`,
    eng: default_route+'Dark-Ritual.jpg',
    jap: default_route+'26-Dark-Ritual-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Demonic Tutor`,
    eng: default_route+'Demonic-Tutor-Mystical-Archive-Strixhaven.jpg',
    jap: default_route+'27-Demonic-Tutor-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Doom Blade`,
    eng: default_route+'Doom-Blade-Mystical-Archive-Version.jpg',
    jap: default_route+'28-Doom-Blade-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Duress`,
    eng: default_route+'Duress-Strixhaven-Alternate-Art.jpg',
    jap: default_route+'29-Duress-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Eliminate`,
    eng: default_route+'Eliminate-Mystical-Archive-Cards-List.jpg',
    jap: default_route+'30-Eliminate.jpg'
  },
  {
    name: `Inquisition of Kozilek`,
    eng: default_route+'Inquisition-of-Kozilek-Mystical-Archive-Cards-List.jpg',
    jap: default_route+'31-Inquisition-of-Kozilek-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Sign in Blood`,
    eng: default_route+'Sign-in-Blood-Mystical-Archive-Cards-MTG.jpg',
    jap: default_route+'32-Sign-in-Blood.jpg'
  },
  {
    name: `Tainted Pact`,
    eng: default_route+'Tainted-Pact-Mystical-Archive-Cards-List.jpg',
    jap: default_route +'33-Tainted-Pact-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Tendrils of Agony`,
    eng: default_route+'Tendrils-of-Agony.jpg',
    jap: default_route +'34-Tendrils-of-Agony-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Village Rites`,
    eng: default_route+'Village-Rites-Special-Art-Strixhaven-Where-to-Get.jpg',
    jap: default_route +'35-Village-Rites-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Chaos Warp`,
    eng: default_route+'Chaos-Warp-Alternate-Art.jpg',
    jap: default_route +'36-Chaos-Warp-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Claim the Firstborn`,
    eng: default_route+'Claim-the-Firstborn-Alternate-Art.jpg',
    jap: default_route +'37-Claim-the-Firstborn-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Faithless Looting`,
    eng: default_route+'Faithless-Looting-Mystical-Archive-Card-List.jpg',
    jap: default_route +'38-Faithless-Looting-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Grapeshot`,
    eng: default_route+'Grapeshot-Mystical-Archive-Cards-List.jpg',
    jap: default_route +'39-Grapeshot.jpg'
  },
  {
    name: `Increasing Vengeance`,
    eng: default_route+'Increasing-Vengeance-MTG.jpg',
    jap: default_route +'40-Increasing-Vengeance-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Infuriate`,
    eng: default_route+'Infuriate-Alt-Art.jpg',
    jap: default_route +'41-Infuriate.jpg'
  },
  {
    name: `Lightning Bolt`,
    eng: default_route+'Lightning-Bolt-Mystical-Archive-Cards.jpg',
    jap: default_route +'42-Lightning-Bolt-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Mizzix's Mastery`,
    eng: default_route+'Mizzixs-Mastery-Mystical-Archive-Version.jpg',
    jap: default_route +'43-Mizzixs-Mastery-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Shock`,
    eng: default_route+'Shock-Mystical-Archive-Card-List.jpg',
    jap: default_route +'44-Shock-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Stone Rain`,
    eng: default_route+'Stone-Rain-Mystical-Archive-Version.jpg',
    jap: default_route +'45-Stone-Rain-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Thrill of Possibility`,
    eng: default_route+'Thrill-of-Possibility-MTG-Strixhaven-Special-Cards.jpg',
    jap: default_route +'46-Thrill-of-Possibility-Japanse-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Urza's Rage`,
    eng: default_route+'Urzas-Rage-Alternate-Art-Cards-Strixhaven.jpg',
    jap: default_route +'47-Urzas-Rage.jpg'
  },
  {
    name: `Abundant Harvest`,
    eng: default_route+'Abundant-Harvest-Mystical-Archive-Cards.jpg',
    jap: default_route +'48-Abundant-Harvest.jpg'
  },
  {
    name: `Adventurous Impulse`,
    eng: default_route+'Adventurous-Impulse-Mystical-Archive-All-Cards.jpg',
    jap: default_route +'49-Adventurous-Impulse-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Channel`,
    eng: default_route+'Channel-Mystical-Archive-Cards.jpg',
    jap: default_route +'50-Channel-Japanse-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Cultivate`,
    eng: default_route+'Cultivate-Mytical-Archive.jpg',
    jap: default_route +'51-Cultivate-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Harmonize`,
    eng: default_route+'Harmonize-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: default_route +'52-Harmonize-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Krosan Grip`,
    eng: default_route+'Krosan-Grip-Mystical-Archive.jpg',
    jap: default_route +'53-Krosan-Grip.jpg'
  },
  {
    name: `Natural Order`,
    eng: default_route+'Natural-Order-Mystical-Archive-Card-List.jpg',
    jap: default_route +'54-Natural-Order-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Primal Command`,
    eng: default_route+'Primal-Command-Strixhaven-Special-Cards.jpg',
    jap: default_route +'55-Primal-Command-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Regrowth`,
    eng: default_route+'Regrowth-MTG-Alt-Art.jpg',
    jap: default_route +'56-Regrowth-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Snakeskin Veil`,
    eng: default_route+'Snakeskin-Veil-Mystical-Archive-Cards.jpg',
    jap: default_route +'57-Snakeskin-Veil.jpg'
  },
  {
    name: `Weather the Storm`,
    eng: default_route+'Weather-the-Storm-MTG-Alt-Art.jpg',
    jap: default_route +'58-Weather-the-Storm.jpg'
  },
  {
    name: `Despark`,
    eng: default_route+'Despark-Mystical-Archive-Cards-List-MTG.jpg',
    jap: default_route +'59-Despark-Japanse-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Electrolyze`,
    eng: default_route+'Electrolyze-Alternate-Art.jpg',
    jap: default_route +'60-Electrolyze.jpg'
  },
  {
    name: `Growth Spiral`,
    eng: default_route+'Growth-Spiral-Mystical-Archive-Cards.jpg',
    jap: default_route +'61-Growth-Spiral.jpg'
  },
  {
    name: `Lightning Helix`,
    eng: default_route+'Lightning-Helix-Mystical-Archive-Card-List.jpg',
    jap: default_route +'62-Lightning-Helix.jpg'
  },
  {
    name: `Putrefy`,
    eng: default_route+'Putrefy-Strixhaven-Special-Cards.jpg',
    jap: default_route +'63-Putrefy-Japanse-Mystical-Archive-Cards.jpg'
  }
]