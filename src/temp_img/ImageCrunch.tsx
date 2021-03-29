import staData from '../data/STA.json'

const default_route = 'https://cdn.cardsrealm.com/images/uploads/';
export const cardArray = [
  {
    name: 'Approach of the Second Sun',
    eng: 'https://cardgamebase.com/wp-content/uploads/Approach-of-the-Second-Sun-Mystical-Archive-Cards-List-MTG.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/01-Approach-of-the-Second-Sun-Japanese-Mystical-Archive-Cards.jpg'
  },
  {
    name: 'Day of Judgement',
    eng: 'https://cardgamebase.com/wp-content/uploads/Day-of-Judgement-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/02-Day-of-Judgment-Japanese-Mystical-Archive.jpg'
  },
  {
    name: 'Defiant Strike',
    eng: 'https://cardgamebase.com/wp-content/uploads/Defiant-Strike-Where-to-Get-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/03-Defiant-Strike.jpg'
  },
  {
    name: 'Divine Gambit',
    eng: 'https://cardgamebase.com/wp-content/uploads/Divine-Gambit-Mystical-Archive-Cards-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/04-Divine-Gambit-Japanese-Mystical-Archive.jpg'
  },
  {
    name: "Ephemerate",
    eng: 'https://cardgamebase.com/wp-content/uploads/Ephemerate-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/05-Ephemerate-Japanese-Alt-Art.jpg'
  },
  {
    name: "Gift of Estates",
    eng: 'https://cardgamebase.com/wp-content/uploads/Gift-of-Estates-Strixhaven-Alt-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/06-Gift-of-Estates-Japanese-Mystical-Archive-Cards.jpg'
  },
  {
    name: "Gods Willing",
    eng: 'https://cardgamebase.com/wp-content/uploads/Gods-Willing-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/07-Gods-Willing.jpg'
  },
  {
    name: "Mana Tithe",
    eng: 'https://cardgamebase.com/wp-content/uploads/Mana-Tithe-Mystical-Archive-Cards-List-MTG.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/08-Mana-Tithe-Japanese-Alt-Art.jpg'
  },
  
  {
    name: 'Revitalize',
    eng: 'https://cardgamebase.com/wp-content/uploads/Revitalize-Strixhaven-Special-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/09-Revitalize.jpg'
  },
  {
    name: 'Swords to Plowshares',
    eng: 'https://cardgamebase.com/wp-content/uploads/Swords-to-Plowshares-Mystical-Archive.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/10-Swords-to-Plowshares.jpg'
  },
  {
    name: `Teferi's Protection`,
    eng: 'https://cdn1.mtggoldfish.com/images/h/Teferis-Protection-STA-672.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/11-Teferis-Protection.jpg'
  },
  {
    name: `Blue Sun's Zenith`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Blue-Suns-Zenith-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/12-Blue-Suns-Zenith.jpg'
  },
  {
    name: `Brainstorm`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Brainstorm-Mystical-Archive-Cards-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/13-Brainstorm.jpg'
  },
  {
    name: `Compulsive Research`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Compulsive-Research-1.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/14-Compulsive-Research.jpg'
  },
  {
    name: `Counterspell`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Counterspell-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/15-Counterspell-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Memory Lapse`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Memory-Lapse-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/16-Memory-Lapse.jpg'
  },
  {
    name: `Mind's Desire`,
    eng: 'https://cardgamebase.com/wp-content/uploads/MInds-Desire-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/17-Minds-Desire-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Negate`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Negate-Mystical-Archive-Cards-List-MTG.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/18-Negate.jpg'
  },
  {
    name: `Opt`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Opt-Mystical-Archive-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/19-Opt-Japanese-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Strategic Planning`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Strategic-Planning-Alternate-Art-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/20-Strategic-Planning.jpg'
  },
  {
    name: `Tezzeret's Gambit`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Tezzerets-Gambit.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/21-Tezzerets-Gambit.jpg'
  },
  {
    name: `Time Warp`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Time-Warp-Strixhaven-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/22-Time-Warp-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Whirlwind Denial`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Whirlwind-Denial-Alt-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/23-Whirlwind-Denial.jpg'
  },
  {
    name: `Agonizing Remorse`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Agonizing-Remorse-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/24-Agonizing-Remorse-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Crux of Fate`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Crux-of-Fate-Mystical-Archive-Card-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/25-Crux-of-Fate-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Dark Ritual`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Dark-Ritual.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/26-Dark-Ritual-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Demonic Tutor`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Demonic-Tutor-Mystical-Archive-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/27-Demonic-Tutor-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Doom Blade`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Doom-Blade-Mystical-Archive-Version.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/28-Doom-Blade-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Duress`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Duress-Strixhaven-Alternate-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/29-Duress-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Eliminate`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Eliminate-Mystical-Archive-Cards-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/30-Eliminate.jpg'
  },
  {
    name: `Inquisition of Kozilek`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Inquisition-of-Kozilek-Mystical-Archive-Cards-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/31-Inquisition-of-Kozilek-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Sign in Blood`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Sign-in-Blood-Mystical-Archive-Cards-MTG.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/32-Sign-in-Blood.jpg'
  },
  {
    name: `Tainted Pact`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Tainted-Pact-Mystical-Archive-Cards-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/33-Tainted-Pact-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Tendrils of Agony`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Tendrils-of-Agony.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/34-Tendrils-of-Agony-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Village Rites`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Village-Rites-Special-Art-Strixhaven-Where-to-Get.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/35-Village-Rites-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Chaos Warp`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Chaos-Warp-Alternate-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/36-Chaos-Warp-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Claim the Firstborn`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Claim-the-Firstborn-Alternate-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/37-Claim-the-Firstborn-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Faithless Looting`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Faithless-Looting-Mystical-Archive-Card-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/38-Faithless-Looting-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Grapeshot`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Grapeshot-Mystical-Archive-Cards-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/39-Grapeshot.jpg'
  },
  {
    name: `Increasing Vengeance`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Increasing-Vengeance-MTG.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/40-Increasing-Vengeance-Japanese-Mystical-Archive-Card-List.jpg'
  },
  {
    name: `Infuriate`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Infuriate-Alt-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/41-Infuriate.jpg'
  },
  {
    name: `Lightning Bolt`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Lightning-Bolt-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/42-Lightning-Bolt-Japanese-Alt-Art-Strixhaven.jpg'
  },
  {
    name: `Mizzix's Mastery`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Mizzixs-Mastery-Mystical-Archive-Version.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/43-Mizzixs-Mastery-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Shock`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Shock-Mystical-Archive-Card-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/44-Shock-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Stone Rain`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Stone-Rain-Mystical-Archive-Version.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/45-Stone-Rain-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Thrill of Possibility`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Thrill-of-Possibility-MTG-Strixhaven-Special-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/46-Thrill-of-Possibility-Japanse-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Urza's Rage`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Urzas-Rage-Alternate-Art-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/47-Urzas-Rage.jpg'
  },
  {
    name: `Abundant Harvest`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Abundant-Harvest-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/48-Abundant-Harvest.jpg'
  },
  {
    name: `Adventurous Impulse`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Adventurous-Impulse-Mystical-Archive-All-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/49-Adventurous-Impulse-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Channel`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Channel-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/50-Channel-Japanse-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Cultivate`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Cultivate-Mytical-Archive.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/51-Cultivate-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Harmonize`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Harmonize-Mystical-Archive-Cards-Strixhaven.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/52-Harmonize-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Krosan Grip`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Krosan-Grip-Mystical-Archive.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/53-Krosan-Grip.jpg'
  },
  {
    name: `Natural Order`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Natural-Order-Mystical-Archive-Card-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/54-Natural-Order-Japanese-Alt-Arts.jpg'
  },
  {
    name: `Primal Command`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Primal-Command-Strixhaven-Special-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/55-Primal-Command-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Regrowth`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Regrowth-MTG-Alt-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/56-Regrowth-Japanese-Mystical-Archive.jpg'
  },
  {
    name: `Snakeskin Veil`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Snakeskin-Veil-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/57-Snakeskin-Veil.jpg'
  },
  {
    name: `Weather the Storm`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Weather-the-Storm-MTG-Alt-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/58-Weather-the-Storm.jpg'
  },
  {
    name: `Despark`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Despark-Mystical-Archive-Cards-List-MTG.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/59-Despark-Japanse-Mystical-Archive-Cards.jpg'
  },
  {
    name: `Electrolyze`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Electrolyze-Alternate-Art.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/60-Electrolyze.jpg'
  },
  {
    name: `Growth Spiral`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Growth-Spiral-Mystical-Archive-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/61-Growth-Spiral.jpg'
  },
  {
    name: `Lightning Helix`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Lightning-Helix-Mystical-Archive-Card-List.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/62-Lightning-Helix.jpg'
  },
  {
    name: `Putrefy`,
    eng: 'https://cardgamebase.com/wp-content/uploads/Putrefy-Strixhaven-Special-Cards.jpg',
    jap: 'https://cardgamebase.com/wp-content/uploads/63-Putrefy-Japanse-Mystical-Archive-Cards.jpg'
  }
]