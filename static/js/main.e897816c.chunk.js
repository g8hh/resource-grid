(this.webpackJsonptest = this.webpackJsonptest || []).push([[0], {
    35: function (e, n, t) {},
    36: function (e, n, t) {},
    40: function (e, n, t) {
        "use strict";
        t.r(n);
        var o = t(1),
            r = t.n(o),
            a = t(14),
            i = t.n(a),
            c = t(6),
            s = (t(35), t(2)),
            l = (t(36), t(3)),
            u = t(7),
            d = t(8),
            p = t(4),
            m = "resource_grid",
            h = {
                resources: Array.from({
                    length: 81
                }, (function (e) {
                    return {
                        have: 0,
                        lastTime: null,
                        progress: 0,
                        unlocked: !1,
                        empower: 0,
                        automationDisabled: !1
                    }
                })),
                aside: {
                    unlockStatus: {
                        Prestige: !1,
                        NewGame: !1,
                        Booster: !1
                    }
                },
                prestige: {
                    doingPrestige: !1,
                    doingRespec: !1,
                    empowererRespecTime: 0,
                    totalPrestigeResourceQuantity: 0,
                    lastPrestigeResourceQuantity: 0,
                    tmpPrestigeResourceQuantity: 0
                }
            };
        h.resources[0].have = 1;
        var f = function () {
            var e;
            return v(null !== (e = JSON.parse(localStorage.getItem(m))) && void 0 !== e ? e : {}, h)
        }();

        function v(e, n) {
            var t;
            for (var o in e = null !== (t = e) && void 0 !== t ? t : {}, n) {
                var r;
                if (Array.isArray(n[o])) e[o] = null !== (r = e[o]) && void 0 !== r ? r : [], g(e[o], n[o]);
                else if (null === n[o]) {
                    var a;
                    e[o] = null !== (a = e[o]) && void 0 !== a ? a : n[o]
                } else if ("object" === typeof n[o]) e[o] = v(e[o], n[o]);
                else {
                    var i;
                    e[o] = n[o].constructor(null !== (i = e[o]) && void 0 !== i ? i : n[o])
                }
            }
            return e
        }

        function g(e, n) {
            for (var t = 0, o = n.length; t < o; t++)
                if (Array.isArray(n[t])) g(e[t], n[t]);
                else if (null === n[t]) {
                var r;
                e[t] = null !== (r = e[t]) && void 0 !== r ? r : n[t]
            } else if ("object" === typeof n[t]) e[t] = v(e[t], n[t]);
            else {
                var a;
                e[t] = n[t].constructor(null !== (a = e[t]) && void 0 !== a ? a : n[t])
            }
            return e
        }
        var b = t(10),
            w = t(23),
            O = t(24),
            j = function () {
                function e(n) {
                    var t;
                    Object(w.a)(this, e), this.name = n.name, this.description = n.description, this.unlockAt = n.unlockAt, this._cost = n.cost, this.craftTime = n.craftTime, this.craftMultiply = n.craftMultiply || 1, this._position = n.position, this.randomGrantOnCraft = null !== (t = n.randomGrantOnCraft) && void 0 !== t ? t : [], this._effectMultiply = n.effectMultiply, this.noCostIfAutomate = n.noCostIfAutomate || !1, this.defaultQuantity = n.defaultQuantity || 0, this.keepOnPrestige = n.keepOnPrestige || !1, this.automates = n.automates, this.order = 9 * this._position[0] + this._position[1], this.canEmpower = void 0 !== this.craftTime || void 0 !== this.automates
                }
                return Object(O.a)(e, [{
                    key: "position",
                    get: function () {
                        return {
                            x: this._position[1],
                            y: this._position[0]
                        }
                    }
                }, {
                    key: "effectMultiply",
                    value: function (e) {
                        var n = 1;
                        return "function" === typeof this._effectMultiply && (n *= this._effectMultiply(e)), n *= 1 + e[this.order].empower / 2
                    }
                }, {
                    key: "cost",
                    value: function (e, n) {
                        var t;
                        if ("undefined" === typeof this._cost || n && this.noCostIfAutomate) return null;
                        for (var o in t = "function" === typeof this._cost ? this._cost(e) : this._cost, t) t[o] = Math.ceil(t[o]), t[o] <= 0 && delete t[o];
                        return t
                    }
                }]), e
            }(),
            A = {
                TreeSeed: new j({
                    name: "TreeSeed",
                    description: "Generate tree",
                    automates: ["Tree"],
                    unlockAt: {},
                    defaultQuantity: 1,
                    position: [0, 0]
                }),
                Tree: new j({
                    name: "Tree",
                    craftTime: 20,
                    unlockAt: {},
                    position: [0, 1]
                }),
                Log: new j({
                    name: "Log",
                    cost: {
                        Tree: 1
                    },
                    craftTime: 20,
                    craftMultiply: 2,
                    randomGrantOnCraft: [[8e-4, "TreeSeed", 0], [.05, "Fruit"]],
                    unlockAt: {
                        Tree: 1
                    },
                    position: [0, 2]
                }),
                Plank: new j({
                    name: "Plank",
                    cost: {
                        Log: 1
                    },
                    craftTime: 15,
                    craftMultiply: 3,
                    unlockAt: {
                        Log: 1
                    },
                    position: [0, 3]
                }),
                Charcoal: new j({
                    name: "Charcoal",
                    cost: {
                        Plank: 3
                    },
                    craftTime: 3,
                    craftMultiply: 4,
                    unlockAt: {
                        CopperOre: 1
                    },
                    noCostIfAutomate: !0,
                    position: [0, 4]
                }),
                Vine: new j({
                    name: "Vine",
                    unlockAt: {
                        Vine: 1
                    },
                    position: [0, 5]
                }),
                Mushroom: new j({
                    name: "Mushroom",
                    unlockAt: {
                        Mushroom: 1
                    },
                    position: [0, 6]
                }),
                Fruit: new j({
                    name: "Fruit",
                    craftTime: 30,
                    unlockAt: {
                        Fruit: 1
                    },
                    position: [0, 7]
                }),
                Explorer: new j({
                    name: "Explorer",
                    cost: function (e) {
                        return {
                            Loot: 10 * Math.pow(e + 1, 1.2),
                            TreasureMap: 15 * Math.pow(e + 1, 1.1),
                            Citizen: 150 * Math.pow(e / 2 + 1, 1.1),
                            Animal: 15 * Math.pow(e + 1, 1.1),
                            Fruit: 1e3 * Math.pow(e + 1, 1.3),
                            Energy: Math.pow(10, 6.2 + Math.sqrt(e / 2))
                        }
                    },
                    automates: ["Trap", "Animal", "TreasureMap", "Loot"],
                    craftTime: 300,
                    unlockAt: {
                        Loot: 1
                    },
                    position: [0, 8]
                }),
                Orchard: new j({
                    name: "Orchard",
                    cost: function (e) {
                        return {
                            Citizen: 3 + Math.pow(2 * e, 1.2),
                            Fruit: 1,
                            Sand: 1e3 * (e + 1),
                            Water: 35 * Math.pow(e + 1, 1.1)
                        }
                    },
                    automates: ["Fruit"],
                    craftTime: 150,
                    unlockAt: {
                        Citizen: 1
                    },
                    position: [1, 0]
                }),
                Trap: new j({
                    name: "Trap",
                    cost: {
                        Iron: 150,
                        Energy: 50,
                        Glass: 100,
                        Fruit: 1
                    },
                    craftTime: 30,
                    unlockAt: {
                        Orchard: 1
                    },
                    position: [1, 1]
                }),
                Animal: new j({
                    name: "Animal",
                    cost: {
                        Trap: 1
                    },
                    randomGrantOnCraft: [[.5, "Animal"]],
                    craftTime: 30,
                    unlockAt: {
                        Trap: 1
                    },
                    position: [1, 2]
                }),
                TreasureMap: new j({
                    name: "TreasureMap",
                    cost: {
                        ShinyStone: 250,
                        Plank: 1e3,
                        Water: 50
                    },
                    randomGrantOnCraft: [[.75, "TreasureMap"]],
                    craftTime: 30,
                    unlockAt: {
                        Animal: 1
                    },
                    position: [1, 3]
                }),
                Loot: new j({
                    name: "Loot",
                    cost: {
                        Citizen: 1,
                        Animal: 1,
                        TreasureMap: 1,
                        Energy: 200
                    },
                    randomGrantOnCraft: [[.5, "TreeSeed"], [.7, "Vine"], [.35, "Mushroom"], [.08, "UpgradePotion"]],
                    craftTime: 30,
                    unlockAt: {
                        TreasureMap: 1
                    },
                    position: [1, 4]
                }),
                Wall: new j({
                    name: "Wall",
                    cost: {
                        Brick: 3
                    },
                    craftTime: 15,
                    unlockAt: {
                        Brick: 1
                    },
                    position: [1, 5]
                }),
                House: new j({
                    name: "House",
                    cost: {
                        Wall: 4,
                        Glass: 2
                    },
                    craftTime: 50,
                    unlockAt: {
                        Wall: 1
                    },
                    position: [1, 6]
                }),
                Citizen: new j({
                    name: "Citizen",
                    cost: {
                        House: 1,
                        Fruit: 5
                    },
                    craftTime: 30,
                    unlockAt: {
                        House: 1
                    },
                    position: [1, 7]
                }),
                CityBuilder: new j({
                    name: "CityBuilder",
                    cost: function (e) {
                        return {
                            Citizen: 3 * Math.pow(e + 1, 2),
                            Energy: 100 * Math.pow(e + 1, 1.6),
                            Iron: 300 * Math.pow(e + 1, 1.2),
                            Gold: 500 * Math.pow(e + 1, 1.2)
                        }
                    },
                    craftTime: 200,
                    automates: ["Brick", "Wall", "House", "Glass", "Citizen"],
                    unlockAt: {
                        Energy: 1
                    },
                    position: [1, 8]
                }),
                Stone: new j({
                    name: "Stone",
                    craftTime: 20,
                    randomGrantOnCraft: [[.07, "Sand"], [.07, "CopperOre"], [.03, "IronOre"], [.015, "GoldOre"], [.001, "EmeraldStone"]],
                    description: "Chance to grant some ore on craft.\nChance is based on Pickaxe",
                    effectMultiply: function (e) {
                        return Math.pow(e[A.Pickaxe.order].have, 1.3)
                    },
                    unlockAt: {
                        Pickaxe: 1
                    },
                    position: [2, 0]
                }),
                CopperOre: new j({
                    name: "CopperOre",
                    unlockAt: {
                        CopperOre: 1
                    },
                    position: [2, 1]
                }),
                IronOre: new j({
                    name: "IronOre",
                    unlockAt: {
                        IronOre: 1
                    },
                    position: [2, 2]
                }),
                GoldOre: new j({
                    name: "GoldOre",
                    unlockAt: {
                        GoldOre: 1
                    },
                    position: [2, 3]
                }),
                ShinyStone: new j({
                    name: "ShinyStone",
                    craftTime: 45,
                    randomGrantOnCraft: [[.03, "EmeraldStone"], [.015, "AmethystStone"], [.007, "RubyStone"], [.003, "SapphireStone"]],
                    description: "Chance to grant some gem on craft.\nChance is based on Gemstone Pickaxe",
                    effectMultiply: function (e) {
                        var n = 1;
                        return n *= e[A.GemstonePickaxe.order].have, n *= 1 + e[A.GemBoost.order].have / 3
                    },
                    unlockAt: {
                        GemstonePickaxe: 1
                    },
                    position: [2, 4]
                }),
                EmeraldStone: new j({
                    name: "EmeraldStone",
                    unlockAt: {
                        EmeraldStone: 1
                    },
                    position: [2, 5]
                }),
                AmethystStone: new j({
                    name: "AmethystStone",
                    unlockAt: {
                        AmethystStone: 1
                    },
                    position: [2, 6]
                }),
                RubyStone: new j({
                    name: "RubyStone",
                    unlockAt: {
                        RubyStone: 1
                    },
                    position: [2, 7]
                }),
                SapphireStone: new j({
                    name: "SapphireStone",
                    unlockAt: {
                        SapphireStone: 1
                    },
                    position: [2, 8]
                }),
                Brick: new j({
                    name: "Brick",
                    cost: {
                        Stone: 5,
                        Charcoal: 1
                    },
                    craftTime: 3,
                    unlockAt: {
                        Stone: 1,
                        Charcoal: 1
                    },
                    position: [3, 0]
                }),
                Copper: new j({
                    name: "Copper",
                    cost: {
                        CopperOre: 1,
                        Charcoal: 1
                    },
                    craftTime: 10,
                    unlockAt: {
                        CopperOre: 1
                    },
                    position: [3, 1]
                }),
                Iron: new j({
                    name: "Iron",
                    cost: {
                        IronOre: 1,
                        Charcoal: 2
                    },
                    craftTime: 15,
                    unlockAt: {
                        IronOre: 1
                    },
                    position: [3, 2]
                }),
                Gold: new j({
                    name: "Gold",
                    cost: {
                        GoldOre: 1,
                        Charcoal: 1
                    },
                    craftTime: 10,
                    unlockAt: {
                        GoldOre: 1
                    },
                    position: [3, 3]
                }),
                Emerald: new j({
                    name: "Emerald",
                    cost: {
                        EmeraldStone: 10,
                        Lava: 1
                    },
                    randomGrantOnCraft: [[.2, "Steam"]],
                    unlockAt: {
                        EmeraldStone: 1
                    },
                    craftTime: 30,
                    position: [3, 5]
                }),
                Amethyst: new j({
                    name: "Amethyst",
                    cost: {
                        AmethystStone: 10,
                        Lava: 2
                    },
                    randomGrantOnCraft: [[.4, "Steam"]],
                    craftTime: 40,
                    unlockAt: {
                        AmethystStone: 1
                    },
                    position: [3, 6]
                }),
                Ruby: new j({
                    name: "Ruby",
                    cost: {
                        RubyStone: 10,
                        Lava: 3
                    },
                    randomGrantOnCraft: [[.6, "Steam"]],
                    craftTime: 50,
                    unlockAt: {
                        RubyStone: 1
                    },
                    position: [3, 7]
                }),
                Sapphire: new j({
                    name: "Sapphire",
                    cost: {
                        SapphireStone: 10,
                        Lava: 4
                    },
                    randomGrantOnCraft: [[.8, "Steam"]],
                    craftTime: 60,
                    unlockAt: {
                        SapphireStone: 1
                    },
                    position: [3, 8]
                }),
                Energy: new j({
                    name: "Energy",
                    craftTime: 50,
                    randomGrantOnCraft: [[.01, "Replicanti"]],
                    unlockAt: {
                        Citizen: 1
                    },
                    position: [4, 0]
                }),
                PickaxeUpgrade: new j({
                    name: "PickaxeUpgrade",
                    cost: function (e) {
                        return {
                            Energy: 7 * Math.pow(1.2, e + 1),
                            Emerald: 3 * (e - 2)
                        }
                    },
                    craftTime: 30,
                    unlockAt: {
                        Energy: 1,
                        Pickaxe: 1
                    },
                    position: [4, 1]
                }),
                GemBoost: new j({
                    name: "GemBoost",
                    cost: function (e) {
                        return {
                            Energy: (100 + 10 * e) * Math.pow(1.5, e + 1),
                            Amethyst: 3 * Math.pow(e + 1, 1.1)
                        }
                    },
                    craftTime: 45,
                    unlockAt: {
                        Energy: 1,
                        ShinyStone: 1
                    },
                    position: [4, 2]
                }),
                MetalworkBoost: new j({
                    name: "MetalworkBoost",
                    cost: function (e) {
                        return {
                            Energy: 3e3 * Math.pow(2, e + 1),
                            UpgradePotion: 1 + Math.pow(e, 1.4) / 2,
                            Iron: 300 * Math.pow(e / 3 + 1, 1.2)
                        }
                    },
                    craftTime: 60,
                    unlockAt: {
                        UpgradePotion: 1
                    },
                    position: [4, 3]
                }),
                LiquidBoost: new j({
                    name: "LiquidBoost",
                    cost: function (e) {
                        return {
                            Energy: Math.pow(10, 6 + Math.pow(e, 1.1)),
                            UpgradePotion: 15 * (e + 1),
                            Ruby: 15 * (e + 1),
                            Water: 1e3 * Math.pow(e + 1, 1.2),
                            Lava: 250 * (e + 1)
                        }
                    },
                    craftTime: 75,
                    unlockAt: {
                        MetalworkBoost: 1
                    },
                    position: [4, 4]
                }),
                Generator: new j({
                    name: "Generator",
                    cost: function (e) {
                        return {
                            Iron: 30 * (e + 1),
                            Lava: 1 + e,
                            Steam: 3 * e,
                            Citizen: 1 + e
                        }
                    },
                    craftTime: 100,
                    effectMultiply: function (e) {
                        return Math.pow(4, e[A.GeneratorBoost.order].have)
                    },
                    automates: ["Energy"],
                    unlockAt: {
                        Citizen: 1
                    },
                    position: [4, 7]
                }),
                GeneratorBoost: new j({
                    name: "GeneratorBoost",
                    cost: function (e) {
                        return {
                            Steam: 50 * (e / 2 + 1),
                            Replicanti: Math.pow(100, e + 2)
                        }
                    },
                    craftTime: 60,
                    unlockAt: {
                        ReplicantiBoost: 1
                    },
                    position: [4, 8]
                }),
                Water: new j({
                    name: "Water",
                    craftTime: 100,
                    unlockAt: {
                        Copper: 1
                    },
                    position: [5, 0]
                }),
                Lava: new j({
                    name: "Lava",
                    cost: function (e) {
                        return {
                            Stone: 100 - 96 * (1 - 1 / (e / 14 + 1)),
                            Charcoal: 50 - 48 * (1 - 1 / (e / 7 + 1))
                        }
                    },
                    unlockAt: {
                        Stone: 1,
                        Charcoal: 1
                    },
                    craftTime: 150,
                    position: [5, 1]
                }),
                Steam: new j({
                    name: "Steam",
                    cost: {
                        Water: 10,
                        Lava: 5
                    },
                    craftTime: 60,
                    craftMultiply: 15,
                    unlockAt: {
                        Water: 1,
                        Lava: 1
                    },
                    position: [5, 2]
                }),
                UpgradePotion: new j({
                    name: "UpgradePotion",
                    cost: {
                        Vine: 2,
                        Mushroom: 1,
                        Water: 5,
                        Emerald: 10
                    },
                    craftTime: 10,
                    unlockAt: {
                        Vine: 1,
                        Mushroom: 1
                    },
                    position: [5, 5]
                }),
                UpgradePotionII: new j({
                    name: "UpgradePotionII",
                    cost: {
                        UpgradePotion: 100,
                        Fruit: 5e4,
                        Sand: 1e7,
                        Gold: 1e4,
                        Lava: 5e3,
                        DivineShard: 1
                    },
                    craftTime: 1e3,
                    unlockAt: {
                        UpgradePotion: 1,
                        DivineShard: 1,
                        Replicanti: 1e190
                    },
                    position: [5, 6]
                }),
                Sand: new j({
                    name: "Sand",
                    unlockAt: {
                        Sand: 1
                    },
                    position: [5, 7]
                }),
                Glass: new j({
                    name: "Glass",
                    cost: {
                        Sand: 1,
                        Charcoal: 1
                    },
                    craftTime: 6,
                    unlockAt: {
                        Sand: 1
                    },
                    position: [5, 8]
                }),
                Axe: new j({
                    name: "Axe",
                    description: "Cuts tree",
                    cost: function (e) {
                        return {
                            Plank: 3 * Math.pow(e + 1, 2)
                        }
                    },
                    craftTime: 5,
                    automates: ["Log"],
                    unlockAt: {
                        Plank: 1
                    },
                    position: [6, 0]
                }),
                Saw: new j({
                    name: "Saw",
                    description: "Automates Plank",
                    cost: function (e) {
                        return {
                            Plank: 10 * Math.pow(e + 1, 2),
                            Iron: 3 * Math.pow(e + 1, 1.2)
                        }
                    },
                    craftTime: 60,
                    automates: ["Plank"],
                    unlockAt: {
                        Iron: 1
                    },
                    position: [6, 1]
                }),
                Pickaxe: new j({
                    name: "Pickaxe",
                    description: "Automatically mines stone",
                    cost: function (e) {
                        return {
                            Plank: 10 * Math.pow(e + 1, e / 100 + 1),
                            Stone: 6 * Math.pow(e, 1.4),
                            Copper: 3 * Math.pow(Math.max(0, e - 4), 2),
                            Iron: 5 * Math.pow(Math.max(0, e - 9), 2),
                            Gold: 7 * Math.pow(Math.max(0, e - 14), 2)
                        }
                    },
                    craftTime: 30,
                    automates: ["Stone"],
                    effectMultiply: function (e) {
                        var n = 1;
                        return n *= e[A.GemstonePickaxe.order].have + 1, n *= e[A.PickaxeUpgrade.order].have / 3 + 1
                    },
                    unlockAt: {
                        Plank: 1
                    },
                    position: [6, 2]
                }),
                GemstonePickaxe: new j({
                    name: "GemstonePickaxe",
                    description: "Automatically mines Shiny stone & Boost Pickaxe",
                    cost: function (e) {
                        return {
                            Iron: 100 * (e + 1),
                            Emerald: 2 * (e + 1),
                            Amethyst: 2 * (e - 2),
                            Ruby: 2 * (e - 5),
                            Sapphire: 2 * (e - 8)
                        }
                    },
                    craftTime: 120,
                    automates: ["ShinyStone"],
                    effectMultiply: function (e) {
                        var n = 1;
                        return n *= e[A.PickaxeUpgrade.order].have / 3 + 1
                    },
                    unlockAt: {
                        Emerald: 1
                    },
                    position: [6, 3]
                }),
                Pump: new j({
                    name: "Pump",
                    description: "Generates Water",
                    cost: function (e) {
                        return {
                            Copper: 5 * Math.pow(e + 1, 1.2),
                            Iron: 3 * Math.pow(e + 1, 1.2),
                            Gold: 3 * Math.pow(e + 1, 1.2)
                        }
                    },
                    craftTime: 30,
                    automates: ["Water"],
                    effectMultiply: function (e) {
                        return e[A.LiquidBoost.order].have / 3 + 1
                    },
                    unlockAt: {
                        Copper: 1
                    },
                    position: [6, 4]
                }),
                Volcano: new j({
                    name: "Volcano",
                    description: "Automates Lava",
                    cost: function (e) {
                        return {
                            Stone: 200,
                            Lava: 1 * (e + 1) * (e / 15 + 1)
                        }
                    },
                    craftTime: 35,
                    automates: ["Lava"],
                    effectMultiply: function (e) {
                        return e[A.LiquidBoost.order].have / 3 + 1
                    },
                    unlockAt: {
                        Lava: 1
                    },
                    position: [6, 5]
                }),
                MetalworkFactory: new j({
                    name: "MetalworkFactory",
                    description: "Automates Copper, Iron and Gold",
                    cost: function (e) {
                        return {
                            Copper: 10 * Math.pow(e + 1, 1.15),
                            Iron: 10 * Math.pow(e + 1, 1.15),
                            Gold: 10 * Math.pow(e + 1, 1.15),
                            Pump: 2,
                            Volcano: 1
                        }
                    },
                    craftTime: 150,
                    automates: ["Iron", "Gold", "Copper"],
                    effectMultiply: function (e) {
                        return e[A.MetalworkBoost.order].have / 3 + 1
                    },
                    unlockAt: {
                        Pump: 1,
                        Volcano: 1
                    },
                    position: [6, 6]
                }),
                CharcoalMiner: new j({
                    name: "CharcoalMiner",
                    description: "Mines Charcoal without any cost",
                    cost: function (e) {
                        return {
                            Steam: 15 * Math.pow(e + 1, 1.2),
                            Pump: 2,
                            Iron: 50 * (e + 1) * (1 + e / 20),
                            Citizen: 1 + e
                        }
                    },
                    craftTime: 300,
                    automates: ["Charcoal"],
                    unlockAt: {
                        MetalworkFactory: 1
                    },
                    position: [6, 7]
                }),
                GemCutter: new j({
                    name: "GemCutter",
                    cost: function (e) {
                        return {
                            Energy: 200 * Math.pow(e + 1, 1.2),
                            Iron: 1e3 * Math.pow(e + 1, 1.1),
                            Water: 300 * Math.pow(e + 1, 1.1),
                            Lava: 100 * Math.pow(e + 1, 1.1)
                        }
                    },
                    automates: ["Emerald", "Amethyst", "Ruby", "Sapphire"],
                    craftTime: 300,
                    unlockAt: {
                        CharcoalMiner: 1,
                        Energy: 1,
                        Emerald: 1
                    },
                    position: [6, 8]
                }),
                Forest: new j({
                    name: "Forest",
                    position: [7, 0]
                }),
                Underground: new j({
                    name: "Underground",
                    position: [7, 1]
                }),
                Ocean: new j({
                    name: "Ocean",
                    position: [7, 2]
                }),
                City: new j({
                    name: "City",
                    position: [7, 3]
                }),
                EarthEssence: new j({
                    name: "EarthEssence",
                    unlockAt: {
                        Forest: 1,
                        Underground: 1,
                        Ocean: 1,
                        City: 1
                    },
                    position: [7, 4]
                }),
                DivinePowder: new j({
                    name: "DivinePowder",
                    cost: function (e) {
                        return {
                            Replicanti: Math.pow(10, Math.pow(e / 8, .87) + 6),
                            Energy: Math.pow(10, 2 + Math.pow(Math.log(e / 3 + 1), 1.3)),
                            Sapphire: 1 + Math.pow(e, .5),
                            UpgradePotion: Math.floor(e / 100)
                        }
                    },
                    craftTime: 3,
                    unlockAt: {
                        Replicanti: 1,
                        Energy: 1
                    },
                    position: [8, 0]
                }),
                DivineShard: new j({
                    name: "DivineShard",
                    unlockAt: {
                        DivinePowder: 1
                    },
                    keepOnPrestige: !0,
                    position: [8, 1]
                }),
                Empowerer: new j({
                    name: "Empowerer",
                    cost: function (e) {
                        return {
                            DivineShard: 1 + Math.floor(Math.pow(e, 1.2))
                        }
                    },
                    craftTime: 60,
                    unlockAt: {
                        DivineShard: 1
                    },
                    keepOnPrestige: !0,
                    position: [8, 2]
                }),
                FastForward: new j({
                    name: "FastForward",
                    cost: function (e) {
                        return {
                            DivineShard: 10 * (1 + Math.pow(e, 1.5) / 3),
                            Cluster: 1 + e
                        }
                    },
                    craftTime: 600,
                    unlockAt: {
                        Empowerer: 1
                    },
                    effectMultiply: function (e) {
                        var n = e[A.FastForward.order].have;
                        return 1 + n * (n + 1) / 10
                    },
                    keepOnPrestige: !0,
                    position: [8, 3]
                }),
                Cluster: new j({
                    name: "Cluster",
                    cost: function (e) {
                        return Object(b.a)({
                            UpgradePotionII: e >= 63 ? 1 / 0 : 0,
                            Replicanti: Math.floor(Math.pow(10, e - 2))
                        }, y[Math.min(71, e + 1)] ? y[Math.min(71, e + 1)].name : "DivineShard", 8 + e)
                    },
                    craftTime: 10,
                    unlockAt: {
                        Empowerer: 1
                    },
                    keepOnPrestige: !0,
                    position: [8, 6]
                }),
                ReplicantiBoost: new j({
                    name: "ReplicantiBoost",
                    cost: function (e) {
                        return {
                            Replicanti: Math.pow(10, e + 2),
                            Energy: Math.pow(10, 1.6 + Math.pow(e, .7))
                        }
                    },
                    craftTime: 100,
                    unlockAt: {
                        Replicanti: 1
                    },
                    position: [8, 7]
                }),
                Replicanti: new j({
                    name: "Replicanti",
                    cost: {
                        Replicanti: 1
                    },
                    craftMultiply: 2,
                    effectMultiply: function (e) {
                        var n = e[A.Replicanti.order].have,
                            t = e[A.ReplicantiBoost.order].have,
                            o = .6 + .35 * (1 - 1 / (t / 30 + 1));
                        return Math.pow(1.5, t + 1) * Math.pow(n + 1, o) / (n + 1)
                    },
                    unlockAt: {
                        Replicanti: 1
                    },
                    automates: ["Replicanti"],
                    craftTime: 30,
                    position: [8, 8]
                })
            },
            y = new Array(81).fill(null);
        for (var k in A) {
            var x = A[k],
                S = 9 * x.position.y + x.position.x;
            y[S] = x
        }
        var M = Array.from({
            length: 81
        }, (function (e, n) {
            return y[n] ? y.findIndex((function (e) {
                return !(!e || !e.automates) && e.automates.includes(y[n].name)
            })) : -1
        }));

        function C(e) {
            return A[e]
        }

        function R(e, n) {
            var t = C(e);
            if (null === n.resources[t.order].startTime) {
                var o = t.cost(n.resources[t.order].have),
                    r = 1 / 0;
                if (null === o) return r;
                for (var a in o) {
                    var i = o[a],
                        c = n.resources[C(a).order].have;
                    if (i > c) return !1;
                    r = Math.min(r, c / i)
                }
                return Math.floor(r)
            }
        }

        function T(e, n) {
            var t = A[e],
                o = t.order,
                r = 1e3 * t.craftTime;
            return -1 !== M[o] && (r /= Math.max(1, n.resources[M[o]].have), r /= y[M[o]].effectMultiply(n.resources)), r /= A.FastForward.effectMultiply(n.resources), r /= 1 + n.resources[o].empower / 2
        }

        function E(e, n) {
            var t = A[e];
            if (!t || !t.unlockAt) return !1;
            for (var o in t.unlockAt)
                if (n[A[o].order].have < t.unlockAt[o]) return !1;
            return !0
        }
        var G = "resource/CRAFT_START",
            P = "resource/CRAFT_UPDATE",
            z = "resource/RESOURCE_UNLOCK",
            B = "resource/TOGGLE_AUTO",
            I = "resource/EMPOWER",
            W = "resource/REMOVE_EMPOWERER",
            Q = "resource/RESET_RESOURCE_DATA",
            D = function (e, n) {
                return {
                    type: G,
                    order: e,
                    isAuto: n
                }
            },
            F = function (e) {
                var n = e.order,
                    t = e.isAuto,
                    o = e.Time,
                    r = e.progressIncrement,
                    a = e.dontUpdate;
                return {
                    type: P,
                    order: n,
                    isAuto: t,
                    Time: o,
                    progressIncrement: r,
                    dontUpdate: a
                }
            },
            L = function (e) {
                return {
                    type: z,
                    order: e
                }
            },
            H = function (e) {
                return {
                    type: W,
                    order: e
                }
            },
            U = function (e) {
                return {
                    type: Q,
                    order: e
                }
            };

        function V(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = t;
            for (var r in n) {
                var a = n[r],
                    i = A[r].order;
                o = Math.min(o, e[i].have / a)
            }
            if ((o = Math.floor(o)) <= 0) return !1;
            for (var c in n) {
                var s = n[c],
                    l = A[c].order;
                e[l] = Object(p.a)(Object(p.a)({}, e[l]), {}, {
                    have: e[l].have - s * o
                })
            }
            return o
        }
        var Z = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.resources,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    t = y[n.order];
                if (!t) return e;
                var o = n.order,
                    r = e[o].have,
                    a = !e[o].automationDisabled && n.isAuto,
                    i = t.cost(r, a);
                switch (n.type) {
                    case G:
                        if (null !== (e = Object(d.a)(e))[o].lastTime) return e;
                        var c = V(e, i, 1);
                        return c ? (e[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            lastTime: (new Date).getTime(),
                            progress: 0
                        }), e) : (0 !== e[o].progress && (e[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            progress: 0
                        })), e);
                    case P:
                        if (n.dontUpdate) return e;
                        if ((e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                lastTime: n.Time,
                                progress: e[o].progress + n.progressIncrement
                            }), e[o].progress >= 1) {
                            var s = 1;
                            a ? (s += V(e, i, Math.floor(e[o].progress) - 1), e[o].have += s * t.craftMultiply, (s <= 10 || s !== Math.floor(e[o].progress)) && (e[o].lastTime = null), e[o].progress %= 1) : (e[o].have += t.craftMultiply, e[o].progress = 0, e[o].lastTime = null);
                            for (var l = t.effectMultiply(e), m = 0; m < t.randomGrantOnCraft.length; m++) {
                                var h = Object(u.a)(t.randomGrantOnCraft[m], 2),
                                    v = h[0],
                                    g = h[1],
                                    b = v * l,
                                    w = 1 - Math.pow(1 - Math.min(1, b), s),
                                    O = s * w > 5 || w >= .99 ? Math.round(s * b) : +(Math.random() < w);
                                O >= 1 && (e[A[g].order] = Object(p.a)(Object(p.a)({}, e[A[g].order]), {}, {
                                    have: e[A[g].order].have + O
                                }))
                            }
                        }
                        return e;
                    case z:
                        return (e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            unlocked: !0
                        }), e;
                    case B:
                        return (e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            automationDisabled: !e[o].automationDisabled
                        }), e;
                    case I:
                        return !t.canEmpower || e[o].empower >= 5 || ((e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            empower: e[o].empower + 1
                        })), e;
                    case W:
                        return (e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            empower: 0
                        }), e;
                    case Q:
                        return e = Object(d.a)(e), t.keepOnPrestige || (e[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                            have: t.defaultQuantity,
                            lastTime: null,
                            progress: 0,
                            unlocked: !1
                        })), e;
                    default:
                        return e
                }
            },
            N = ["", "K", "M", "B", "T", "q", "Q", "s", "S", "O", "N"],
            K = ["", "U", "D", "T", "q", "Q", "s", "S", "O", "N"],
            Y = ["", "D", "V", "T", "q", "Q", "s", "S", "O", "N"];

        function J(e) {
            var n = Math.floor(Math.log10(Math.max(1, Math.abs(e)))),
                t = Math.floor(n / 3),
                o = (t < 10 ? N[t] : K[t % 10]) + Y[Math.floor(t / 10)],
                r = (e / Math.pow(10, 3 * t)).toFixed(Math.max(0, 3 - o.length - n % 3));
            return e < 1e3 && Number.isInteger(e) && (r = e), r + o
        }
        var X, q = t(0),
            _ = l.b.div(X || (X = Object(s.a)(["\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n  \n  display: inline-block;\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n"])), "data:image/png;base64,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");
        var $, ee = function (e) {
                var n = e.size,
                    t = e.position,
                    o = e.style,
                    r = e.content;
                return Object(q.jsx)(_, {
                    style: Object(p.a)({
                        "--imageSize": n,
                        backgroundPosition: "calc(var(--resourceGap) * -".concat(t.x, ") calc(var(--resourceGap) * -").concat(t.y, ")")
                    }, o),
                    children: r
                })
            },
            ne = l.b.div($ || ($ = Object(s.a)(["\n  --costCellWidth: calc(var(--cellWidth) / 2);\n  --costCellHeight: calc(var(--cellHeight) / 3);\n\n  display: grid;\n  grid-template-columns: repeat(2, minmax(calc(var(--cellWidth) / 2), 1fr));\n  grid-auto-rows: var(--costCellHeight);\n  grid-auto-columns: var(--costCellWidth);\n  place-items: center;\n"])));
        var te, oe, re = function (e) {
                var n = e.cost;
                return Object(q.jsx)(ne, {
                    children: n.map((function (e, n) {
                        var t = Object(u.a)(e, 2),
                            o = t[0],
                            r = t[1],
                            a = A[o];
                        return Object(q.jsx)("div", {
                            children: Object(q.jsx)(ee, {
                                size: "min(var(--costCellWidth), var(--costCellHeight))",
                                position: a.position,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    color: "var(--colReverse)",
                                    fontSize: "0.8em",
                                    fontWeight: 900,
                                    textShadow: "calc(var(--imageSize) / 30) calc(var(--imageSize) / 30) 0 var(--colMain1),\n                    calc(var(--imageSize) / -30) calc(var(--imageSize) / -30) 0 var(--colMain1),\n                    calc(var(--imageSize) / 30) calc(var(--imageSize) / -30) 0 var(--colMain1),\n                    calc(var(--imageSize) / -30) calc(var(--imageSize) / 30) 0 var(--colMain1)",
                                    textAlign: "right",
                                    border: "calc(var(--imageSize) / 15) solid var(--colMain2)",
                                    borderRadius: "calc(min(var(--costCellWidth), var(--costCellHeight)) / 2)",
                                    filter: "drop-shadow(var(--baseShadowSmall))"
                                },
                                content: J(r)
                            })
                        }, n)
                    }))
                })
            },
            ae = t(16),
            ie = t(17),
            ce = Object(l.c)(te || (te = Object(s.a)(["\n  from {\n    transform: scale(0, 1);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n"]))),
            se = l.b.div(oe || (oe = Object(s.a)(["\n  --height: calc(var(--cellHeight) / 10 * 1.75);\n\n  padding: calc(var(--height) * 0.15) 0;\n\n  position: absolute;\n  bottom: calc(var(--height) * -1.4);\n  \n  min-width: 80%;\n  height: var(--height);\n\n  display: flex;\n  justify-content: space-evenly;\n\n  background: var(--colMain4);\n  border-radius: calc(var(--height));\n  box-shadow: var(--baseShadow);\n  transform: scale(0, 1);\n\n  pointer-events: none;\n  animation: ", " 0.15s ease-out forwards;\n  z-index: 1;\n"])), ce);
        var le, ue, de, pe, me = function (e) {
                var n = e.Resource;
                return e.save, Object(q.jsx)(q.Fragment, {
                    children: n.automates && n.automates.length > 0 && Object(q.jsxs)(se, {
                        children: [Object(q.jsx)(ae.a, {
                            icon: ie.b,
                            style: {
                                position: "absolute",
                                color: "var(--colReverseWeak)",
                                left: 0,
                                bottom: 0,
                                transform: "translate(-50%, 50%)",
                                filter: "drop-shadow(var(--baseShadow))",
                                zIndex: 1
                            }
                        }), n.automates.map((function (e) {
                            var n = A[e];
                            return Object(q.jsx)(ee, {
                                size: "var(--height)",
                                position: n.position,
                                style: {
                                    filter: "drop-shadow(var(--baseShadowSmall))"
                                }
                            }, n.name)
                        }))]
                    })
                })
            },
            he = l.b.div(le || (le = Object(s.a)(["\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n\n  min-width: 60%;\n  height: var(--boxSize);\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 0 calc(var(--boxSize) / 10) calc(var(--boxSize) / 10) 0;\n  background-color: var(--colOverlayReverse);\n\n  pointer-events: none;\n"]))),
            fe = l.b.div(ue || (ue = Object(s.a)(['\n  flex: 1;\n\n  border-radius: 0 calc(var(--boxSize) / 10) 0 0;\n  background-color: var(--colOverlayReverse);\n\n  &::before {\n    font-size: 0.8em;\n    content: "效果 x";\n  }\n']))),
            ve = l.b.div(de || (de = Object(s.a)(["\n  flex: 5;\n"]))),
            ge = l.b.div(pe || (pe = Object(s.a)(["\n  --itemHeight: calc(var(--boxSize) / 6);\n\n  height: var(--itemHeight);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.8em;\n  font-weight: bold;\n"])));
        var be, we, Oe = Object(c.b)((function (e) {
                return {
                    save: e.resources
                }
            }), {})((function (e) {
                var n = e.Resource,
                    t = e.save,
                    o = n ? n.effectMultiply(t) : 1,
                    r = n.randomGrantOnCraft.map((function (e) {
                        return [Math.min(1, e[0] * o), e[1]]
                    }));
                return 0 !== r.length || 1 !== o ? Object(q.jsxs)(he, {
                    children: [Object(q.jsx)(fe, {
                        children: J(o)
                    }), Object(q.jsx)(ve, {
                        children: r.map((function (e) {
                            var n = Object(u.a)(e, 2),
                                o = n[0],
                                r = n[1],
                                a = A[r];
                            return Object(q.jsxs)(ge, {
                                children: [t[a.order].unlocked ? Object(q.jsx)(ee, {
                                    size: "var(--itemHeight)",
                                    position: a.position
                                }) : Object(q.jsx)("span", {
                                    children: "?\xa0"
                                }), Object(q.jsxs)("span", {
                                    children: [(100 * o).toFixed(2).padStart(6, "0"), "%"]
                                })]
                            }, a.name)
                        }))
                    })]
                }) : Object(q.jsx)(q.Fragment, {})
            })),
            je = Object(l.c)(be || (be = Object(s.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),
            Ae = l.b.div(we || (we = Object(s.a)(["\n  position: absolute;\n  bottom: 18%;\n  left: 47%;\n  transform: translateX(-100%);\n\n  padding: 2%;\n\n  color: var(--colReverse);\n  font-size: 0.7em;\n  font-weight: bold;\n\n  background-color: var(--colOverlayReverse);\n  border-radius: 25%;\n\n  animation: ", " 0.2s ease-out forwards;\n  z-index: 1;\n  pointer-events: none;\n"])), je);
        var ye, ke, xe, Se, Me, Ce = Object(c.b)((function (e) {
                return {
                    save: e
                }
            }))((function (e) {
                var n = e.Resource,
                    t = e.autoConnected,
                    o = e.save,
                    r = T(n.name, o) || 0,
                    a = -1 !== t && o.resources[t].have >= 1;
                return 0 !== r ? Object(q.jsx)(Ae, {
                    children: a ? J(Math.max(0, 1e3 / r)) + "/s" : (r / 1e3).toFixed(2) + "s"
                }) : Object(q.jsx)(q.Fragment, {})
            })),
            Re = Object(l.c)(ye || (ye = Object(s.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(100%) scale(0.2, 1);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1, 1);\n  }\n"]))),
            Te = l.b.div(ke || (ke = Object(s.a)(["\n  --margin: calc(var(--cellSize) / 10);\n  --boxRatio: 1.3;\n  --boxSize: calc(var(--cellSize) - var(--margin));\n  --cellWidth: calc(var(--boxSize) / var(--boxRatio));\n  --cellHeight: var(--boxSize);\n  --borderRadius: calc(var(--boxSize) / 15);\n\n  margin: calc(var(--margin) / 2);\n\n  width: var(--cellWidth);\n  height: var(--cellHeight);\n  \n  background-color: var(--colMain3);\n  border-radius: var(--borderRadius);\n  box-shadow: var(--baseShadow);\n\n  transform: scale(1);\n  cursor: pointer;\n\n  transition: all 0.3s cubic-bezier(0,.79,.32,1);\n\n  &:hover {\n    width: calc(var(--boxSize) / var(--boxRatio) * 2);\n    background-color: var(--colMain4);\n    transform: scale(1.4);\n    z-index: 1;\n  }\n\n  &:hover::before {\n    content: attr(name);\n\n    padding: 1% 5%;\n    \n    min-width: 60%;\n    height: 15%;\n\n    position: absolute;\n    top: -15%;\n    left: 5%;\n\n    color: var(--colMainReverse);\n    word-spacing: -0.3em;\n    font-size: 0.9em;\n    text-align: center;\n\n    background-color: var(--colMain4);\n    border-radius: calc(var(--cellSize) / 30);\n\n    animation: ", " 0.4s cubic-bezier(.12,.81,.31,.95);\n    \n    pointer-events: none;\n  }\n"])), Re),
            Ee = l.b.div(xe || (xe = Object(s.a)(["\n  display: flex;\n  overflow: hidden;\n  \n  & > span {\n    display: inline-block;\n\n    width: calc(var(--boxSize) / var(--boxRatio));\n    height: calc(var(--boxSize));\n  }\n"]))),
            Ge = l.b.span(Se || (Se = Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 0%;\n  max-height: 100%;\n\n  background-color: var(--colOverlay);\n  border-radius: var(--borderRadius);\n\n  z-index: -1;\n"]))),
            Pe = l.b.div(Me || (Me = Object(s.a)(["\n  padding-right: calc(var(--boxSize) / 20);\n\n  text-align: right;\n  font-weight: bolder;\n  color: var(--colReverse);\n"])));
        var ze = Object(c.b)((function () {
                return {}
            }), {
                craftStart: D,
                toggleAuto: function (e) {
                    return {
                        type: B,
                        order: e
                    }
                },
                resourceEmpower: function (e) {
                    return {
                        type: I,
                        order: e
                    }
                }
            })((function (e) {
                var n, t = e.Resource,
                    r = e.index,
                    a = e.craftStart,
                    i = e.selectMode,
                    s = e.toggleAuto,
                    l = e.resourceEmpower,
                    d = e.empowerLeft,
                    p = e.cooldown,
                    m = Object(o.useState)(!1),
                    h = Object(u.a)(m, 2),
                    f = h[0],
                    v = h[1],
                    g = t ? t.name.replace(/(.)([A-Z])/g, "$1 $2") : "",
                    b = Object(c.d)((function (e) {
                        return e.resources[r]
                    })),
                    w = t ? Object.entries(null !== (n = t.cost(b.have)) && void 0 !== n ? n : {}) : [],
                    O = M[r],
                    j = b.unlocked && ("AutoToggle" !== i || -1 !== O) && ("Empower" !== i || 75 !== r && t.canEmpower);
                return Object(q.jsx)(Te, {
                    onClick: function () {
                        var e;
                        switch (i) {
                            case "AutoToggle":
                                s(r);
                                break;
                            case "Empower":
                                d > 0 && l(r);
                                break;
                            default:
                                t && 0 !== Object.keys(null !== (e = t.cost(b.have)) && void 0 !== e ? e : {}).length && a(r)
                        }
                    },
                    onMouseEnter: function () {
                        return v(!0)
                    },
                    onMouseLeave: function () {
                        return v(!1)
                    },
                    name: cnItem(g),
                    style: {
                        backgroundColor: b.unlocked && (b.automationDisabled || "AutoToggle" === i && j) ? b.automationDisabled ? "#541212" : "#1c5412" : void 0,
                        opacity: j ? void 0 : .3,
                        pointerEvents: j ? void 0 : "none"
                    },
                    children: j && t && Object(q.jsxs)(Ee, {
                        children: [Object(q.jsxs)("span", {
                            children: [Object(q.jsx)(ee, {
                                size: "calc(var(--boxSize) / var(--boxRatio) - var(--margin))",
                                position: t.position,
                                style: {
                                    filter: "drop-shadow(var(--baseShadow))",
                                    margin: "calc(var(--margin) / 2)"
                                }
                            }), Object(q.jsx)(Pe, {
                                children: J(b.have)
                            }), Object(q.jsx)(Ge, {
                                style: p > 200 || b.automationDisabled ? {
                                    height: "".concat(100 * b.progress, "%")
                                } : {
                                    height: "100%",
                                    backgroundColor: "#fcc4",
                                    filter: "hue-rotate(".concat(Math.floor(new Date / 30) % 360, "deg)")
                                }
                            })]
                        }), f && Object(q.jsxs)(q.Fragment, {
                            children: [Object(q.jsx)(re, {
                                cost: w
                            }), Object(q.jsx)(Oe, {
                                Resource: t
                            }), Object(q.jsx)(me, {
                                Resource: t
                            }), Object(q.jsx)(Ce, {
                                Resource: t,
                                autoConnected: O
                            })]
                        }), t.canEmpower && ("Empower" === i || b.empower >= 1) && Object(q.jsx)(ee, {
                            size: "calc(var(--boxSize) / 2.6)",
                            position: {
                                x: 2,
                                y: 8
                            },
                            content: "Empower" === i ? "x".concat((1 + b.empower / 2).toFixed(1)) : b.empower,
                            style: {
                                position: "absolute",
                                transform: "translate(-50%, -50%)" + ("Empower" === i ? " scale(1.2)" : ""),
                                filter: "drop-shadow(var(--baseShadowSmall)) hue-rotate(-".concat(50 * Math.max(0, b.empower - 1), "deg)") + (0 === b.empower ? " grayscale(1)" : ""),
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textShadow: "var(--baseShadowSmall)",
                                fontWeight: "bold"
                            }
                        })]
                    })
                })
            })),
            Be = "prestige/DO_PRESTIGE",
            Ie = "prestige/END_PRESTIGE",
            We = "prestige/RESPEC_EMPOWERER",
            Qe = "prestige/END_RESPEC",
            De = 6e5;
        var Fe, Le, He, Ue = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.prestige,
                n = arguments.length > 1 ? arguments[1] : void 0,
                t = (new Date).getTime();
            switch (n.type) {
                case Be:
                    return f.prestige.doingPrestige = !0, f.prestige.tmpPrestigeResourceQuantity = n.prestigeResourceQuantity, f.prestige.lastPrestigeResourceQuantity = n.prestigeResourceQuantity, f.prestige.totalPrestigeResourceQuantity += n.prestigeResourceQuantity, e;
                case Ie:
                    return f.prestige.doingPrestige = !1, f.prestige.tmpPrestigeResourceQuantity = 0, e;
                case We:
                    return t - e.empowererRespecTime >= De && (e.doingRespec = !0, e.empowererRespecTime = t), e;
                case Qe:
                    return e.doingRespec = !1, e;
                default:
                    return e
            }
        };

        function Ve(e) {
            var n = Math.floor(e / 6e4),
                t = Math.floor(e % 6e4 / 1e3);
            return (n + "").padStart(2, "0") + ":" + (t + "").padStart(2, "0")
        }
        var Ze = l.b.div(Fe || (Fe = Object(s.a)(["\n  --cellSize: calc(var(--h) / 9);\n\n  flex: var(--resourceGridFlexGrow);\n\n  display: grid;\n  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));\n  grid-auto-rows: var(--cellSize);\n  grid-auto-columns: var(--cellSize);\n  place-items: center;\n"]))),
            Ne = l.b.div(Le || (Le = Object(s.a)(["\n  position: absolute;\n  left: calc(var(--h) / 50);\n  bottom: calc(var(--w) / 100);\n\n  z-index: 1;\n"]))),
            Ke = l.b.div(He || (He = Object(s.a)(["\n  padding: calc(var(--h) / 100) calc(var(--w) / 200);\n  margin: 0 calc(var(--w) / 200);\n\n  min-width: 20%;\n\n  display: inline-block;\n  \n  font-weight: bold;\n  color: var(--colReverseWeak);\n  text-align: center;\n\n  box-shadow: var(--baseShadow);\n  background-color: var(--colMain3);\n\n  cursor: pointer;\n\n  transition: all 0.5s cubic-bezier(.12,.74,.14,.99);\n\n  &:hover {\n    background-color: var(--colMain4);\n    transform: scale(1.2);\n  }\n"])));
        var Ye, Je, Xe, qe, _e, $e = function () {
                var e = Object(o.useState)(null),
                    n = Object(u.a)(e, 2),
                    t = n[0],
                    r = n[1],
                    a = Object(c.d)((function (e) {
                        return e
                    })),
                    i = a.resources,
                    s = i[74].have - i.reduce((function (e, n) {
                        return e + n.empower
                    }), 0),
                    l = 6e5 - ((new Date).getTime() - a.prestige.empowererRespecTime),
                    d = Object(c.c)();
                return Object(q.jsxs)(q.Fragment, {
                    children: [Object(q.jsxs)(Ne, {
                        children: [Object(q.jsx)(Ke, {
                            onClick: Object(o.useCallback)((function () {
                                r("AutoToggle" !== t ? "AutoToggle" : null)
                            }), [t]),
                            style: "AutoToggle" === t ? {
                                backgroundColor: "var(--colAlt1)",
                                color: "var(--colMain1)"
                            } : {},
                            children: "切换自动"
                        }), i[74].unlocked && Object(q.jsxs)(q.Fragment, {
                            children: [Object(q.jsxs)(Ke, {
                                onClick: function () {
                                    r("Empower" !== t ? "Empower" : null)
                                },
                                style: "Empower" === t ? {
                                    backgroundColor: "var(--colAlt1)",
                                    color: "var(--colMain1)"
                                } : {},
                                children: ["Empower (", s, ")"]
                            }), Object(q.jsx)(Ke, {
                                onClick: function () {
                                    return d({
                                        type: We
                                    })
                                },
                                style: l > 0 ? {
                                    opacity: .4,
                                    pointerEvents: "none"
                                } : {},
                                children: l > 0 ? Ve(l) : "Respec"
                            })]
                        })]
                    }), Object(q.jsx)(Ze, {
                        children: y.map((function (e, n) {
                            return Object(q.jsx)(ze, {
                                Resource: e,
                                selectMode: t,
                                index: n,
                                empowerLeft: s,
                                cooldown: null !== e && T(e.name, a) || 1 / 0
                            }, null !== e ? e.name : "empty_".concat(n))
                        }))
                    })]
                })
            },
            en = l.b.div(Ye || (Ye = Object(s.a)(["\n  flex: 1;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),
            nn = l.b.div(Je || (Je = Object(s.a)(["\n  padding: 0.5% 0;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.8em;\n\n  background-color: var(--colOverlay);\n"]))),
            tn = l.b.span(Xe || (Xe = Object(s.a)(["\n  margin-right: 1%;\n"]))),
            on = l.b.div(qe || (qe = Object(s.a)(["\n  flex: 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
            rn = l.b.span(_e || (_e = Object(s.a)(["\n  padding: 10% 10%;\n\n  font-size: 0.7em;\n\n  background-color: var(--colMain3);\n  border-radius: calc(var(--asideWidth) / 70);\n  box-shadow: var(--baseShadow);\n\n  cursor: pointer;\n  transition:\n    color 0.15s cubic-bezier(.06,.71,.44,1),\n    background-color 0.15s cubic-bezier(.06,.71,.44,1),\n    transform 0.15s cubic-bezier(.06,.71,.44,1);\n\n  &:hover {\n    background-color: var(--colMain4);\n    transform: scale(1.2);\n  }\n  &:active {\n    color: var(--colMain1);\n    background-color: var(--colAlt1);\n    transform: scale(1.05);\n  }\n"])));
        var an = Object(c.b)((function () {
            return {}
        }), {
            doPrestige: function (e) {
                return {
                    type: Be,
                    prestigeResourceQuantity: e
                }
            }
        })((function (e) {
            var n = e.isUnlocked,
                t = e.style,
                o = e.doPrestige,
                r = Object(c.d)((function (e) {
                    return e.resources[72].have
                })),
                a = Object(c.d)((function (e) {
                    return e.resources[73].have
                })),
                i = r >= 50;
            return Object(q.jsx)("div", {
                style: Object(p.a)(Object(p.a)({}, t), {}, {
                    "--_imageSize": "calc(var(--w) / 40)"
                }),
                children: n ? Object(q.jsxs)(q.Fragment, {
                    children: [Object(q.jsx)(en, {
                        children: "声望"
                    }), Object(q.jsxs)(nn, {
                        children: [Object(q.jsx)(tn, {
                            children: r
                        }), Object(q.jsx)(ee, {
                            size: "var(--_imageSize)",
                            position: {
                                x: 0,
                                y: 8
                            },
                            style: {
                                filter: "drop-shadow(var(--baseShadow))"
                            }
                        }), Object(q.jsx)(ae.a, {
                            icon: ie.a,
                            style: {
                                margin: "0 2%",
                                color: "var(--colReverseWeak)"
                            }
                        }), Object(q.jsx)(tn, {
                            children: "".concat(a, "(+").concat(r, ")")
                        }), Object(q.jsx)(ee, {
                            size: "var(--_imageSize)",
                            position: {
                                x: 1,
                                y: 8
                            },
                            style: {
                                filter: "drop-shadow(var(--baseShadow))"
                            }
                        })]
                    }), Object(q.jsx)(on, {
                        children: Object(q.jsx)(rn, {
                            style: i ? void 0 : {
                                opacity: .2,
                                pointerEvents: "none"
                            },
                            onClick: function () {
                                return i && window.confirm("Do you really want to Prestige?") && o(r)
                            },
                            children: i ? "声望!" : Object(q.jsxs)(q.Fragment, {
                                children: [Object(q.jsx)("span", {
                                    children: "".concat(50 - r, " 更多 ")
                                }), Object(q.jsx)(ee, {
                                    size: "calc(var(--_imageSize) / 2)",
                                    position: {
                                        x: 0,
                                        y: 8
                                    },
                                    style: {
                                        filter: "drop-shadow(var(--baseShadow))",
                                        margin: "0 5%"
                                    }
                                })]
                            })
                        })
                    })]
                }) : "Locked"
            })
        }));
        var cn = function (e) {
            var n = e.style;
            return Object(q.jsx)("div", {
                style: n
            })
        };
        var sn = function (e) {
            var n = e.style;
            return Object(q.jsx)("div", {
                style: n
            })
        };
        var ln, un = function (e) {
                var n = e.style;
                return Object(q.jsx)("div", {
                    style: n,
                    children: "统计即将推出！"
                })
            },
            dn = l.b.div(ln || (ln = Object(s.a)(['\n  --asideWidth: calc(var(--w) / var(--totalFlexGrow) * 7 * 0.97);\n\n  flex: var(--asideFlexGrow);\n\n  margin-left: 1.5%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  color: var(--colReverseWeak);\n  font-weight: bold;\n  font-size: 2em;\n\n  /* &::after {\n    position: absolute;\n\n    width: var(--asideWidth);\n    height: 3px;\n\n    background: linear-gradient(90deg, #f00 3%, #fff 1%);\n\n    content: "Aside Width";\n    opacity: 0.1;\n  } */\n\n  & > div {\n    margin: 1%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n\n    width: 100%;\n    background-color: var(--colMain2);\n    border-radius: calc(var(--asideWidth) / 60);\n    box-shadow: var(--baseShadow);\n  }\n\n  & > div:nth-child(1) {\n    flex: 2;\n  }\n  & > div:nth-child(2) {\n    flex: 1;\n  }\n  & > div:nth-child(3) {\n    flex: 3;\n  }\n  & > div:nth-child(4) {\n    flex: 5;\n  }\n'])));
        var pn, mn, hn = function () {
                var e = Object(c.d)((function (e) {
                        return e.aside.unlockStatus
                    })),
                    n = {
                        opacity: .4,
                        pointerEvents: "none"
                    };
                return Object(q.jsxs)(dn, {
                    children: [Object(q.jsx)(an, {
                        isUnlocked: e.Prestige,
                        style: e.Prestige ? {} : n
                    }), Object(q.jsx)(cn, {
                        isUnlocked: e.NewGame,
                        style: e.NewGame ? {} : n
                    }), Object(q.jsx)(sn, {
                        isUnlocked: e.Booster,
                        style: e.Booster ? {} : n
                    }), Object(q.jsx)(un, {
                        style: n
                    })]
                })
            },
            fn = Object(l.a)(pn || (pn = Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  \n    white-space: nowrap;\n    \n    user-select: none;\n  }\n  \n  body {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n\n    color: var(--colReverse);\n\n    background-color: var(--colMain1);\n  }\n  body#theme-dark, body:not(#theme-light){\n    --colStrong: #000000;\n    --colMain1: #191919;\n    --colMain2: #2a2a2a;\n    --colMain3: #3a3a3a;\n    --colMain4: #4a4a4a;\n    --colReverse: #ffffff;\n    --colReverseWeak: #efefef;\n    --colReverseWeaker: #cdcdcd;\n    --colAlt1: #13d1f2;\n    --colOverlay: #fff3;\n    --colOverlayReverse: #0006;\n  }\n  body#theme-light {\n    --colStrong: #ffffff;\n    --colMain1: #ffffff;\n    --colMain2: #efefef;\n    --colMain3: #dedede;\n    --colMain4: #cdcdcd;\n    --colReverse: #191919;\n    --colReverseWeak: #2a2a2a;\n    --colReverseWeaker: #4a4a4a;\n    --colAlt1: #f29913;\n    --colOverlay: #0003;\n    --colOverlayReverse: #fff6;\n  }\n"]))),
            vn = l.b.div(mn || (mn = Object(s.a)(["\n  --resourceGridFlexGrow: 9;\n  --asideFlexGrow: 7;\n  --totalFlexGrow: calc(var(--resourceGridFlexGrow) + var(--asideFlexGrow));\n\n  --baseShadow: calc(var(--h) / 250) calc(var(--h) / 250) 0 var(--colStrong);\n  --baseShadowSmall: calc(var(--h) / 500) calc(var(--h) / 500) 0 var(--colStrong);\n\n  display: flex;\n\n  width: var(--w);\n  height: var(--h);\n\n  border-radius: calc(var(--h) / 50);\n\n  transition: \n    background-image 0.5s linear,\n    background-color 0.3s ease-out;\n\n  @media only screen and (orientation: portrait) {\n    --baseSize: 90vw;\n  }\n  @media only screen and (orientation: landscape) {\n    --baseSize: min(83vw, 160vh);\n  }\n  --w: var(--baseSize);\n  --h: calc(var(--baseSize) * 9 / 16);\n  font-size: calc(var(--h) / 70);\n  @media only screen and (min-width: 1700px) and (min-height: 1000px) {\n    --w: 1600px;\n    --h: 900px;\n    font-size: calc(var(--h) / 70);\n  }\n"])));
        var gn = function () {
                return Object(q.jsxs)("div", {
                    className: "App",
                    children: [Object(q.jsx)(fn, {}), Object(q.jsxs)(vn, {
                        children: [!1, Object(q.jsx)($e, {}), Object(q.jsx)(hn, {})]
                    })]
                })
            },
            bn = function (e) {
                e && e instanceof Function && t.e(3).then(t.bind(null, 41)).then((function (n) {
                    var t = n.getCLS,
                        o = n.getFID,
                        r = n.getFCP,
                        a = n.getLCP,
                        i = n.getTTFB;
                    t(e), o(e), r(e), a(e), i(e)
                }))
            },
            wn = t(18),
            On = "aside/UNLOCK_TAB";
        var jn = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.aside,
                    n = arguments.length > 1 ? arguments[1] : void 0;
                switch (n.type) {
                    case On:
                        return e.unlockStatus = Object(p.a)(Object(p.a)({}, e.unlockStatus), {}, Object(b.a)({}, n.toUnlock, !0)), e;
                    default:
                        return e
                }
            },
            An = Object(wn.a)({
                resources: Z,
                aside: jn,
                prestige: Ue
            }),
            yn = Object(wn.b)(An),
            kn = (new Date).getTime();
        var xn = function () {
            var e = yn.getState(),
                n = (new Date).getTime();
            n - kn > 5e3 && (kn = n, function (e) {
                localStorage.setItem(m, JSON.stringify(e))
            }(e));
            for (var t = 0; t < y.length; t++) {
                var o, r = y[t];
                if (null !== r) {
                    var a = t,
                        i = e.resources[a],
                        c = 1 <= (null === (o = e.resources[M[a]]) || void 0 === o ? void 0 : o.have);
                    if (!i.unlocked && (i.have >= 1 || E(r.name, e.resources)) && yn.dispatch(L(a)), r.automates && i.have >= 1)
                        for (var s = 0; s < r.automates.length; s++) {
                            var l = A[r.automates[s]],
                                u = l.order;
                            null !== e.resources[u].lastTime || 0 === R(l.name, e) || e.resources[u].automationDisabled || yn.dispatch(D(u, !0))
                        }
                    var d = i.lastTime;
                    if (null !== d) {
                        var p = (n - d) / T(r.name, e) * 1;
                        yn.dispatch(F({
                            order: t,
                            isAuto: c,
                            Time: n,
                            progressIncrement: p,
                            dontUpdate: e.prestige.doingPrestige
                        }))
                    }
                }
            }
            if (!e.aside.unlockStatus.Prestige && e.resources[A.DivinePowder.order].have >= 1 && yn.dispatch({
                    type: On,
                    toUnlock: "Prestige"
                }), e.prestige.doingPrestige && e.prestige.tmpPrestigeResourceQuantity >= 1) {
                yn.dispatch(F({
                    order: A.DivineShard.order,
                    progressIncrement: e.prestige.lastPrestigeResourceQuantity,
                    isAuto: !0
                }));
                for (var h = 0; h < y.length; h++) yn.dispatch(U(h));
                yn.dispatch({
                    type: Ie
                })
            }
            if (e.prestige.doingRespec) {
                for (var f = 0; f < y.length; f++) yn.dispatch(H(f));
                yn.dispatch({
                    type: Qe
                })
            }
        };
        i.a.render(Object(q.jsx)(r.a.StrictMode, {
            children: Object(q.jsx)(c.a, {
                store: yn,
                children: Object(q.jsx)(gn, {})
            })
        }), document.getElementById("root")), setInterval((function () {
            return xn(f)
        }), 1e3 / 60), bn()
    }
}, [[40, 1, 2]]]);
//# sourceMappingURL=main.e897816c.chunk.js.map
//汉化杂项
var cnItems = {
    'Tree': '树',
    'Tree Seed': '树成长速度',
    'Log': '原木',
    'Plank': '木板',
    "Stone": "石头",
    "Glass": "玻璃",
    "Fruit": "水果",
    "Wall": "墙",
    "House": "房子",
    "Sand": "沙子",
    "Iron Ore": "铁矿石",
    "Copper Ore": "铜矿石",
    "Citizen": "市民",
    "Water": "水",
    "Sapphire": "蓝宝石",
    "Brick": "砖块",
    "Energy": "能源",
    "Iron": "铁",
    "Replicanti": "复制人",
    "Lava": "岩浆",
    "Charcoal": "木炭",
    "Gold Ore": "金矿石",
    "Amethyst Stone": "紫水晶石",
    "Emerald Stone": "翡翠石",
    "Shiny Stone": "闪亮的石头",
    "- Nothing -": "- 无 -",
    "Ruby Stone": "红宝石",
    "Sapphire Stone": "蓝宝石",
    "Steam": "蒸汽",
    "Replicanti Boost": "复制增强",
    "Divine Shard": "神圣碎片",
    "Divine Powder": "神粉",
    "Earth Essence": "大地精华",
    "City": "城市",
    "Ocean": "海洋",
    "Underground": "地下",
    "Forest": "森林",
    "Gem Cutter": "宝石切割",
    "Charcoal Miner": "木炭矿工",
    "Metalwork Factory": "金属制品厂",
    "Volcano": "火山",
    "Pump": "泵",
    "Gemstone Pickaxe": "宝石镐",
    "Pickaxe": "镐",
    "Saw": "锯",
    "Axe": "斧",
    "Upgrade Potion": "升级药水",
    "Gold": "黄金",
    "Emerald": "翡翠",
    "Gem Boost": "宝石提升",
    "Explorer": "探险者",
    "Loot": "战利品",
    "City Builder": "城市建设者",
    "Pickaxe Upgrade": "镐子升级",
    "Liquid Boost": "液体提升",
    "Generator Boost": "发生器提升",
    "Mushroom": "蘑菇",
    "Tree Seed": "树种子",
    "Generator": "发生器",
    "Vine": "藤蔓",
    "Metalwork Boost": "金属制品提升",
    "Copper": "铜",
    "Orchard": "果园",
    "Animal": "动物",
    "Trap": "陷阱",
    "Treasure Map": "藏宝图",
    "Amethyst": "紫水晶",
    "Ruby": "红宝石",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}