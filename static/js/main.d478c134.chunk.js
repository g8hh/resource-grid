(this.webpackJsonptest = this.webpackJsonptest || []).push([
    [0], {
        36: function (e, n, t) {},
        37: function (e, n, t) {},
        41: function (e, n, t) {
            "use strict";
            t.r(n);
            var o = t(1),
                a = t.n(o),
                r = t(16),
                i = t.n(r),
                c = t(6),
                s = (t(36), t(2)),
                l = (t(37), t(3)),
                u = t(7),
                d = t(9),
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
                            automationDisabled: !1,
                            automationManual: !1
                        }
                    })),
                    aside: {
                        unlockStatus: {
                            Prestige: !1,
                            NewGame: !1,
                            Booster: !1
                        }
                    },
                    stats: {
                        startTime: (new Date).getTime()
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

            function f(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m;
                localStorage.setItem(n, JSON.stringify(e))
            }

            function v() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m;
                return g(null !== (e = JSON.parse(localStorage.getItem(n))) && void 0 !== e ? e : {}, h)
            }

            function g(e, n) {
                var t;
                for (var o in e = null !== (t = e) && void 0 !== t ? t : {}, n) {
                    var a;
                    if (Array.isArray(n[o])) e[o] = null !== (a = e[o]) && void 0 !== a ? a : [], b(e[o], n[o]);
                    else if (null === n[o]) {
                        var r;
                        e[o] = null !== (r = e[o]) && void 0 !== r ? r : n[o]
                    } else if ("object" === typeof n[o]) e[o] = g(e[o], n[o]);
                    else {
                        var i;
                        e[o] = n[o].constructor(null !== (i = e[o]) && void 0 !== i ? i : n[o])
                    }
                }
                return e
            }

            function b(e, n) {
                for (var t = 0, o = n.length; t < o; t++)
                    if (Array.isArray(n[t])) b(e[t], n[t]);
                    else if (null === n[t]) {
                    var a;
                    e[t] = null !== (a = e[t]) && void 0 !== a ? a : n[t]
                } else if ("object" === typeof n[t]) e[t] = g(e[t], n[t]);
                else {
                    var r;
                    e[t] = n[t].constructor(null !== (r = e[t]) && void 0 !== r ? r : n[t])
                }
                return e
            }
            h.resources[0].have = 1;
            var w = t(12),
                O = t(23),
                y = t(24),
                j = function () {
                    function e(n) {
                        var t, o, a;
                        Object(O.a)(this, e), this.name = n.name, this.description = n.description, this.unlockAt = n.unlockAt, this._cost = n.cost, this.craftTime = n.craftTime, this.craftMultiply = n.craftMultiply || 1, this._position = n.position, this.randomGrantOnCraft = null !== (t = n.randomGrantOnCraft) && void 0 !== t ? t : [], this._effectMultiply = n.effectMultiply, this.noCostIfAutomate = n.noCostIfAutomate || !1, this.defaultQuantity = n.defaultQuantity || 0, this.keepOnPrestige = n.keepOnPrestige || !1, this.automates = n.automates, this.noConsume = n.noConsume || !1, this.order = 9 * this._position[0] + this._position[1], this.canBulkBuy = null !== (o = n.canBulkBuy) && void 0 !== o ? o : "function" !== typeof this._cost, this.canEmpower = null !== (a = n.canEmpower) && void 0 !== a ? a : void 0 !== this.craftTime || void 0 !== this.automates
                    }
                    return Object(y.a)(e, [{
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
                M = {
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
                        randomGrantOnCraft: [
                            [8e-4, "TreeSeed", 0],
                            [.05, "Fruit"]
                        ],
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
                            Glass: 30,
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
                        randomGrantOnCraft: [
                            [.5, "Animal"]
                        ],
                        craftTime: 30,
                        unlockAt: {
                            Trap: 1
                        },
                        position: [1, 2]
                    }),
                    TreasureMap: new j({
                        name: "TreasureMap",
                        cost: function (e) {
                            return {
                                ShinyStone: 250 - 225 * (1 - 1 / (Math.pow(e, .6) / 100 + 1)),
                                Plank: 500 - 450 * (1 - 1 / (Math.pow(e, .6) / 100 + 1)),
                                Water: 50 - 45 * (1 - 1 / (Math.pow(e, .6) / 100 + 1))
                            }
                        },
                        randomGrantOnCraft: [
                            [.75, "TreasureMap"]
                        ],
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
                        randomGrantOnCraft: [
                            [.5, "TreeSeed"],
                            [.7, "Vine"],
                            [.35, "Mushroom"],
                            [.08, "UpgradePotion"]
                        ],
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
                        randomGrantOnCraft: [
                            [.07, "Sand"],
                            [.07, "CopperOre"],
                            [.03, "IronOre"],
                            [.015, "GoldOre"],
                            [.001, "EmeraldStone"]
                        ],
                        description: "Chance to grant some ore on craft.\nChance is based on Pickaxe",
                        effectMultiply: function (e) {
                            return Math.pow(e[M.Pickaxe.order].have, 1.3)
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
                        randomGrantOnCraft: [
                            [.03, "EmeraldStone"],
                            [.015, "AmethystStone"],
                            [.007, "RubyStone"],
                            [.003, "SapphireStone"],
                            [1e-9, "Core"]
                        ],
                        description: "Chance to grant some gem on craft.\nChance is based on Gemstone Pickaxe",
                        effectMultiply: function (e) {
                            var n = 1;
                            return n *= e[M.GemstonePickaxe.order].have, n *= 1 + e[M.GemBoost.order].have / 3
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
                    Core: new j({
                        name: "Core",
                        unlockAt: {
                            Core: 1
                        },
                        position: [3, 4]
                    }),
                    Emerald: new j({
                        name: "Emerald",
                        cost: {
                            EmeraldStone: 10,
                            Lava: 1
                        },
                        randomGrantOnCraft: [
                            [.2, "Steam"]
                        ],
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
                        randomGrantOnCraft: [
                            [.4, "Steam"]
                        ],
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
                        randomGrantOnCraft: [
                            [.6, "Steam"]
                        ],
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
                        randomGrantOnCraft: [
                            [.8, "Steam"]
                        ],
                        craftTime: 60,
                        unlockAt: {
                            SapphireStone: 1
                        },
                        position: [3, 8]
                    }),
                    Energy: new j({
                        name: "Energy",
                        craftTime: 50,
                        randomGrantOnCraft: [
                            [.01, "Replicanti"]
                        ],
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
                        canEmpower: !1,
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
                        canEmpower: !1,
                        position: [4, 2]
                    }),
                    MetalworkUpgrade: new j({
                        name: "MetalworkUpgrade",
                        cost: function (e) {
                            return {
                                Energy: 3e3 * Math.pow(2, Math.pow(e, .92) + 1),
                                UpgradePotion: 1 + Math.pow(e, 1.4) / 2,
                                Iron: 300 * Math.pow(e / 3 + 1, 1.2)
                            }
                        },
                        craftTime: 60,
                        unlockAt: {
                            UpgradePotion: 1
                        },
                        canEmpower: !1,
                        position: [4, 3]
                    }),
                    LiquidUpgrade: new j({
                        name: "LiquidUpgrade",
                        cost: function (e) {
                            return {
                                Energy: Math.pow(10, 6 + Math.pow(e, .55) + e / 10),
                                UpgradePotion: 15 * (e + 1),
                                Ruby: 15 * (e + 1),
                                Water: 1e3 * Math.pow(e + 1, 1.2),
                                Lava: 250 * (e + 1)
                            }
                        },
                        craftTime: 75,
                        unlockAt: {
                            MetalworkUpgrade: 1
                        },
                        canEmpower: !1,
                        position: [4, 4]
                    }),
                    ReplicantiBoostII: new j({
                        name: "ReplicantiBoostII",
                        cost: function (e) {
                            return {
                                Energy: Math.pow(10, 12 + 2 * e),
                                Replicanti: Math.pow(10, 33 + 6 * e),
                                UpgradePotionII: 1 + Math.floor(Math.pow(e, 1.2)),
                                Sapphire: 1e3 * Math.pow(e + 1, 1.3)
                            }
                        },
                        craftTime: 90,
                        unlockAt: {
                            UpgradePotionII: 1
                        },
                        canEmpower: !1,
                        position: [4, 5]
                    }),
                    Generator: new j({
                        name: "Generator",
                        cost: function (e) {
                            return {
                                Iron: 30 * Math.pow(e + 1, .6),
                                Lava: 1 + e,
                                Steam: 3 * Math.pow(e, .6),
                                Citizen: 1 + Math.pow(e, .6)
                            }
                        },
                        craftTime: 100,
                        effectMultiply: function (e) {
                            return Math.pow(4, e[M.GeneratorUpgrade.order].have)
                        },
                        automates: ["Energy"],
                        unlockAt: {
                            Citizen: 1
                        },
                        position: [4, 7]
                    }),
                    GeneratorUpgrade: new j({
                        name: "GeneratorUpgrade",
                        cost: function (e) {
                            return {
                                Steam: Math.min(2e5, Math.pow(2, 5.2 + Math.pow(e, .75))) + 5e3 * Math.max(0, e - 30),
                                Replicanti: Math.pow(100, e + 2 + Math.pow(Math.max(0, e - 10), .7) + Math.max(0, e - 25))
                            }
                        },
                        craftTime: 60,
                        unlockAt: {
                            ReplicantiBoost: 1
                        },
                        canEmpower: !1,
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
                        canBulkBuy: !0,
                        position: [5, 1]
                    }),
                    Steam: new j({
                        name: "Steam",
                        cost: {
                            Water: 2,
                            Lava: 1
                        },
                        craftTime: 10,
                        craftMultiply: 3,
                        unlockAt: {
                            Water: 1,
                            Lava: 1
                        },
                        position: [5, 2]
                    }),
                    SteamProducer: new j({
                        name: "SteamProducer",
                        cost: function (e) {
                            return {
                                Copper: 1e4 * Math.pow(e + 1, 1.3),
                                Water: 4e3 * Math.pow(e + 1, 1.1),
                                Lava: 2e3 * Math.pow(e + 1, 1.1),
                                Energy: Math.pow(10, 3.6 + Math.sqrt(e / 10))
                            }
                        },
                        automates: ["Steam"],
                        craftTime: 600,
                        unlockAt: {
                            Steam: 15,
                            Energy: 1
                        },
                        position: [5, 3]
                    }),
                    Crucible: new j({
                        name: "Crucible",
                        cost: function (e) {
                            return {
                                UpgradePotionII: 1,
                                Gold: 2e4 * (e + 1),
                                Copper: 3e4 * (e + 1),
                                Water: 1e4 * (e + 1),
                                Volcano: 10 + 2 * e
                            }
                        },
                        automates: ["UpgradePotion", "UpgradePotionII"],
                        craftTime: 800,
                        unlockAt: {
                            UpgradePotionII: 1
                        },
                        position: [5, 4]
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
                            Core: 1,
                            Fruit: 5e3,
                            Sand: 25e6,
                            Lava: 5e3,
                            Sapphire: 1e3
                        },
                        craftTime: 1e3,
                        unlockAt: {
                            UpgradePotion: 1,
                            Core: 1
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
                                Copper: 2.5 * Math.pow(e + 1, 1.2),
                                Iron: 3 * Math.pow(e + 1, 1.2)
                            }
                        },
                        craftTime: 60,
                        automates: ["Plank"],
                        unlockAt: {
                            Copper: 1,
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
                            return n *= e[M.GemstonePickaxe.order].have / 3 + 1, n *= e[M.PickaxeUpgrade.order].have / 3 + 1
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
                            return n *= e[M.PickaxeUpgrade.order].have / 3 + 1
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
                            return e[M.LiquidUpgrade.order].have / 3 + 1
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
                            return e[M.LiquidUpgrade.order].have / 3 + 1
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
                            return e[M.MetalworkUpgrade.order].have / 3 + 1
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
                                Energy: Math.pow(10, 3 + Math.pow(2 * e, .55)) > 1e20 ? 1e20 * Math.pow(2, Math.pow(e - 86, .5)) : Math.pow(10, 3 + Math.pow(2 * e, .55)),
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
                    Overworld: new j({
                        name: "Overworld",
                        cost: function (e) {
                            return {
                                DivineShard: 75 * (e + 1),
                                Tree: 25e5 * (e + 1),
                                Vine: 1e3 * (e + 1),
                                Mushroom: 500 * (e + 1)
                            }
                        },
                        automates: ["Explorer", "Axe", "Saw", "CharcoalMiner", "GemBoost"],
                        craftTime: 1500,
                        unlockAt: {
                            FastForward: 3
                        },
                        keepOnPrestige: !0,
                        position: [7, 0]
                    }),
                    Underground: new j({
                        name: "Underground",
                        cost: function (e) {
                            return {
                                DivineShard: 150 * (e + 1),
                                Stone: 15e6 * (e + 1),
                                Core: 3 * (e + 1),
                                Volcano: 100 * (e + 1),
                                Sapphire: 5e3 * (e + 1)
                            }
                        },
                        craftTime: 3e3,
                        automates: ["Pickaxe", "GemstonePickaxe", "Volcano", "PickaxeUpgrade"],
                        unlockAt: {
                            Overworld: 1,
                            Core: 1
                        },
                        keepOnPrestige: !0,
                        position: [7, 1]
                    }),
                    Ocean: new j({
                        name: "Ocean",
                        cost: function (e) {
                            return {
                                DivineShard: 450 * (e + 1),
                                Water: 1e6 * (e + 1),
                                Sand: 1e9 * (e + 1),
                                Steam: 5e4 * (e + 1),
                                UpgradePotionII: 8 * (e + 1)
                            }
                        },
                        craftTime: 9e3,
                        automates: ["Orchard", "Pump", "SteamProducer", "Crucible", "LiquidUpgrade"],
                        unlockAt: {
                            Underground: 1
                        },
                        keepOnPrestige: !0,
                        position: [7, 2]
                    }),
                    City: new j({
                        name: "City",
                        cost: function (e) {
                            return {
                                DivineShard: 1800 * (e + 1),
                                Brick: 1e6 * (e + 1),
                                Citizen: 15e3 * (e + 1),
                                House: 5e3 * (e + 1),
                                Generator: 150 * (e + 1)
                            }
                        },
                        craftTime: 12e3,
                        automates: ["CityBuilder", "Generator", "MetalworkFactory", "GemCutter", "MetalworkUpgrade"],
                        unlockAt: {
                            Ocean: 1
                        },
                        keepOnPrestige: !0,
                        position: [7, 3]
                    }),
                    PlanetEssence: new j({
                        name: "PlanetEssence",
                        automates: ["ReplicantiBoost", "ReplicantiBoostII"],
                        keepOnPrestige: !0,
                        position: [7, 4]
                    }),
                    DivinePowder: new j({
                        name: "DivinePowder",
                        cost: function (e) {
                            return {
                                Replicanti: Math.pow(10, Math.pow(e / 8, .87) + 6) > 1e50 ? 10000000000000002e12 * Math.pow(e, 2 + 3 * Math.log(e / 100 + 1)) : Math.pow(10, Math.pow(e / 8, .87) + 6),
                                Energy: Math.pow(10, 2 + Math.pow(Math.log(e / 3 + 1), 1.3) * (1 + Math.log(e / 1e4 + 1))),
                                Sapphire: 1 + Math.pow(e, .3),
                                UpgradePotion: Math.pow(Math.floor(e / 100), .7),
                                UpgradePotionII: (e % 1e3 === 0 && 0 !== e) * Math.pow(Math.floor(e / 1e3), .7)
                            }
                        },
                        craftTime: 3,
                        unlockAt: {
                            Replicanti: 1,
                            Energy: 1
                        },
                        canEmpower: !1,
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
                        canEmpower: !1,
                        position: [8, 2]
                    }),
                    FastForward: new j({
                        name: "FastForward",
                        cost: function (e) {
                            return {
                                DivineShard: 10 * (1 + Math.pow(e, 1.5) / 3) * (1 + Math.max(0, e - 10) / 2),
                                Cluster: 1 + e
                            }
                        },
                        craftTime: 600,
                        unlockAt: {
                            Empowerer: 1
                        },
                        effectMultiply: function (e) {
                            var n = e[M.FastForward.order].have;
                            return 1 + n * (n + 1) / 10
                        },
                        canEmpower: !1,
                        keepOnPrestige: !0,
                        position: [8, 3]
                    }),
                    EmpowerCap: new j({
                        name: "EmpowerCap",
                        cost: function (e) {
                            return {
                                DivineShard: Math.pow(3, Math.sqrt(e) + 4.5) - 41,
                                Cluster: 10 * (e + 1),
                                UpgradePotionII: Math.pow(e + 1, 2 + e / 20)
                            }
                        },
                        craftTime: 5e3,
                        unlockAt: {
                            FastForward: 1,
                            UpgradePotionII: 1
                        },
                        canEmpower: !1,
                        keepOnPrestige: !0,
                        position: [8, 4]
                    }),
                    DivineFactory: new j({
                        name: "DivineFactory",
                        cost: function (e) {
                            return {
                                DivineShard: 100 * Math.pow(e + 1, 2),
                                Cluster: 37 + 3 * e,
                                MetalworkFactory: 25 * (e + 1)
                            }
                        },
                        automates: ["DivinePowder"],
                        craftTime: 6e3,
                        unlockAt: {
                            FastForward: 3
                        },
                        keepOnPrestige: !0,
                        canEmpower: !1,
                        position: [8, 5]
                    }),
                    Cluster: new j({
                        name: "Cluster",
                        cost: function (e) {
                            return Object(w.a)({
                                Replicanti: Math.floor(Math.pow(10, e - 2 + Math.pow(Math.max(0, e - 30), .6)))
                            }, x[(e + 1) % 63] ? x[(e + 1) % 63].name : "DivineShard", 1 + e)
                        },
                        craftTime: 100,
                        unlockAt: {
                            Empowerer: 1
                        },
                        keepOnPrestige: !0,
                        noConsume: !0,
                        canEmpower: !1,
                        position: [8, 6]
                    }),
                    ReplicantiBoost: new j({
                        name: "ReplicantiBoost",
                        cost: function (e) {
                            return {
                                Replicanti: Math.pow(10, e + 2),
                                Energy: Math.pow(10, 1.6 + Math.pow(e, .7) + Math.max(0, e - 80) / 4)
                            }
                        },
                        craftTime: 100,
                        unlockAt: {
                            Replicanti: 1
                        },
                        canEmpower: !1,
                        position: [8, 7]
                    }),
                    Replicanti: new j({
                        name: "Replicanti",
                        cost: {
                            Replicanti: 1
                        },
                        craftMultiply: 2,
                        effectMultiply: function (e) {
                            var n = e[M.Replicanti.order].have,
                                t = e[M.ReplicantiBoost.order].have,
                                o = e[M.ReplicantiBoostII.order].have,
                                a = .6 + .3 * (1 - 1 / (t / 25 + 1));
                            return Math.pow(3, o) * Math.pow(1.5, Math.min(17, t + 1) + Math.pow(Math.max(0, t - 17), .85)) * Math.pow(n + 1, a) / (n + 1)
                        },
                        unlockAt: {
                            Replicanti: 1
                        },
                        automates: ["Replicanti"],
                        craftTime: 20,
                        position: [8, 8]
                    })
                },
                x = new Array(81).fill(null);
            for (var S in M) {
                var k = M[S],
                    A = 9 * k.position.y + k.position.x;
                x[A] = k
            }
            var C = Array.from({
                length: 81
            }, (function (e, n) {
                return x[n] ? x.findIndex((function (e) {
                    return !(!e || !e.automates) && e.automates.includes(x[n].name)
                })) : -1
            }));

            function E(e) {
                return M[e]
            }

            function P(e, n) {
                var t = E(e);
                if (null === n.resources[t.order].startTime) {
                    var o = t.cost(n.resources[t.order].have),
                        a = 1 / 0;
                    if (null === o) return a;
                    for (var r in o) {
                        var i = o[r],
                            c = n.resources[E(r).order].have;
                        if (i > c) return !1;
                        a = Math.min(a, c / i)
                    }
                    return Math.floor(a)
                }
            }

            function R(e, n) {
                var t = M[e],
                    o = t.order,
                    a = 1e3 * t.craftTime;
                return -1 !== C[o] && (a /= Math.max(1, n.resources[C[o]].have), n.resources[C[o]].have >= 1 && (a /= x[C[o]].effectMultiply(n.resources))), a /= M.FastForward.effectMultiply(n.resources), a /= 1 + n.resources[o].empower / 2
            }

            function T(e, n) {
                var t = M[e];
                if (!t || !t.unlockAt) return !1;
                for (var o in t.unlockAt)
                    if (n[M[o].order].have < t.unlockAt[o]) return !1;
                return !0
            }
            var z = "resource/CRAFT_START",
                I = "resource/CRAFT_UPDATE",
                G = "resource/RESOURCE_UNLOCK",
                D = "resource/TOGGLE_AUTO",
                U = "resource/EMPOWER",
                F = "resource/REMOVE_EMPOWERER",
                B = "resource/RESET_RESOURCE_DATA",
                L = "resource/STOP_MANUAL_AUTOMATION",
                Q = function (e, n) {
                    return {
                        type: z,
                        order: e,
                        isAuto: n
                    }
                },
                N = function (e) {
                    var n = e.order,
                        t = e.isAuto,
                        o = e.Time,
                        a = e.progressIncrement,
                        r = e.dontUpdate;
                    return {
                        type: I,
                        order: n,
                        isAuto: t,
                        Time: o,
                        progressIncrement: a,
                        dontUpdate: r
                    }
                },
                H = function (e) {
                    return {
                        type: G,
                        order: e
                    }
                },
                q = function (e) {
                    return {
                        type: F,
                        order: e
                    }
                },
                W = function (e) {
                    return {
                        type: B,
                        order: e
                    }
                };

            function Z(e, n) {
                for (var t in n) {
                    var o = n[t];
                    if (e[M[t].order].have < o) return !1
                }
                return !0
            }

            function K(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    o = t;
                for (var a in n) {
                    var r = n[a],
                        i = M[a].order;
                    o = Math.min(o, e[i].have / r)
                }
                if ((o = Math.floor(o)) <= 0) return !1;
                for (var c in n) {
                    var s = M[c];
                    if (!s.noConsume) {
                        var l = n[c],
                            u = M[c].order;
                        e[u] = Object(p.a)(Object(p.a)({}, e[u]), {}, {
                            have: e[u].have - l * o
                        })
                    }
                }
                return o
            }
            var V = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v().resources,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = x[n.order];
                    if (!t) return e;
                    var o = n.order,
                        a = e[o].have,
                        r = e[o].automationManual,
                        i = !e[o].automationDisabled && n.isAuto,
                        c = t.cost(a, i);
                    switch (n.type) {
                        case z:
                            if (null !== (e = Object(d.a)(e))[o].lastTime) return e;
                            var s = K(e, c, 1);
                            return s ? (e[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                lastTime: (new Date).getTime(),
                                progress: 0,
                                automationManual: !0
                            }), e) : (0 !== e[o].progress && (e[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                progress: 0
                            })), e);
                        case I:
                            if (n.dontUpdate) return e;
                            if ((e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                    lastTime: n.Time,
                                    progress: (e[o].progress || 0) + (n.progressIncrement || 0)
                                }), e[o].progress >= 1) {
                                var l = 1,
                                    m = Math.floor(e[o].progress) - 1;
                                if (i || r) {
                                    if (t.canBulkBuy) l += K(e, c, m);
                                    else
                                        for (var h = 0; h < Math.min(50, m) && K(e, c = t.cost(a + h, i), 1); h++) l++;
                                    e[o].have += l * t.craftMultiply, Z(e, c) ? (K(e, c = t.cost(a, i), 1), e[o].progress %= 1) : (e[o].lastTime = null, e[o].progress = 0)
                                } else e[o].have += t.craftMultiply, e[o].progress = 0, e[o].lastTime = null;
                                for (var f = t.effectMultiply(e), g = 0; g < t.randomGrantOnCraft.length; g++) {
                                    var b = Object(u.a)(t.randomGrantOnCraft[g], 2),
                                        w = b[0],
                                        O = b[1],
                                        y = w * f,
                                        j = 1 - Math.pow(1 - Math.min(1, y), l),
                                        S = l * y > 5 || j >= .99 ? Math.round(l * y) : +(Math.random() < j);
                                    S >= 1 && (e[M[O].order] = Object(p.a)(Object(p.a)({}, e[M[O].order]), {}, {
                                        have: e[M[O].order].have + S
                                    }))
                                }
                            }
                            return e;
                        case G:
                            return (e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                unlocked: !0
                            }), e;
                        case D:
                            return (e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                automationDisabled: !e[o].automationDisabled
                            }), e;
                        case U:
                            return !t.canEmpower || e[o].empower >= 5 + e[M.EmpowerCap.order].have || ((e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                empower: e[o].empower + 1
                            })), e;
                        case F:
                            return (e = Object(d.a)(e))[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                empower: 0
                            }), e;
                        case B:
                            return e = Object(d.a)(e), t.keepOnPrestige || (e[o] = Object(p.a)(Object(p.a)({}, e[o]), {}, {
                                have: t.defaultQuantity,
                                lastTime: null,
                                progress: 0,
                                unlocked: !1
                            })), e;
                        case L:
                            e = Object(d.a)(e);
                            for (var k = 0; k < e.length; k++) e[k].automationManual && (e[k] = Object(p.a)(Object(p.a)({}, e[k]), {}, {
                                automationManual: !1
                            }));
                            return e;
                        default:
                            return e
                    }
                },
                X = ["", "K", "M", "B", "T", "q", "Q", "s", "S", "O", "N"],
                Y = ["", "U", "D", "T", "q", "Q", "s", "S", "O", "N"],
                J = ["", "D", "V", "Tg", "qu", "Qi", "sx", "Sp", "Oc", "No"];

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = n,
                    a = "",
                    r = Math.sign(e); - 1 === r && (o -= 1), 0 !== (e = Math.abs(e)) && e < Math.pow(10, -n) && (e = Math.pow(e, -1), a += "1/", o -= 2);
                var i = Math.floor(Math.log10(Math.max(1, Math.abs(e)))),
                    c = Math.floor(i / 3),
                    s = c < 11 ? X[c] : Y[(c - 1) % 10] + J[Math.floor((c - 1) / 10)];
                o -= s.length;
                var l = (e / Math.pow(10, 3 * c)).toFixed(Math.max(0, o - i % 3));
                return !t && e < 1e3 && Number.isInteger(e) && (l = e), a + l + s
            }
            var $, ee = t(0),
                ne = l.b.div($ || ($ = Object(s.a)(["\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n  \n  display: inline-block;\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n"])), "data:image/png;base64,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");
            var te, oe, ae, re = function (e) {
                    var n = e.size,
                        t = e.position,
                        o = e.style,
                        a = e.content;
                    return Object(ee.jsx)(ne, {
                        style: Object(p.a)({
                            "--imageSize": n,
                            backgroundPosition: "calc(var(--resourceGap) * -".concat(t.x, ") calc(var(--resourceGap) * -").concat(t.y, ")")
                        }, o),
                        children: a
                    })
                },
                ie = l.b.div(te || (te = Object(s.a)(["\n  --itemHeight: calc(var(--cellHeight) / 6);\n\n  display: flex;\n  flex-direction: column;\n\n  & > div:nth-child(1) {\n    border-radius: 0 var(--borderRadius) 0 0;\n  }\n  & > div:nth-child(2n-1) {\n    background-color: var(--colOverlay);\n  }\n"]))),
                ce = l.b.div(oe || (oe = Object(s.a)(["\n  width: var(--cellWidth);\n\n  display: flex;\n  align-items: center;\n"]))),
                se = l.b.span(ae || (ae = Object(s.a)(["\n  font-weight: bold;\n"])));
            var le, ue, de = function (e) {
                    var n = e.cost;
                    return Object(ee.jsx)(ie, {
                        children: n.map((function (e, n) {
                            var t = Object(u.a)(e, 2),
                                o = t[0],
                                a = t[1],
                                r = M[o];
                            return Object(ee.jsxs)(ce, {
                                children: [Object(ee.jsx)(re, {
                                    size: "min(var(--itemHeight), var(--itemHeight))",
                                    position: r.position,
                                    style: {
                                        filter: "drop-shadow(var(--baseShadowSmall))"
                                    }
                                }), Object(ee.jsx)(se, {
                                    children: _(a)
                                })]
                            }, n)
                        }))
                    })
                },
                pe = t(10),
                me = t(8),
                he = Object(l.c)(le || (le = Object(s.a)(["\n  from {\n    transform: scale(0, 1);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n"]))),
                fe = l.b.div(ue || (ue = Object(s.a)(["\n  --height: calc(var(--cellHeight) / 10 * 1.75);\n\n  padding: calc(var(--height) * 0.15) 0;\n\n  position: absolute;\n  bottom: calc(var(--height) * -1.4);\n  \n  min-width: 80%;\n  height: var(--height);\n\n  display: flex;\n  justify-content: space-evenly;\n\n  background: var(--colMain4);\n  border-radius: calc(var(--height));\n  box-shadow: var(--baseShadow);\n  transform: scale(0, 1);\n\n  pointer-events: none;\n  animation: ", " 0.15s ease-out forwards;\n  z-index: 1;\n"])), he);
            var ve, ge, be, we, Oe = function (e) {
                    var n = e.Resource;
                    return e.save, Object(ee.jsx)(ee.Fragment, {
                        children: n.automates && n.automates.length > 0 && Object(ee.jsxs)(fe, {
                            children: [Object(ee.jsx)(pe.a, {
                                icon: me.d,
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
                                var n = M[e];
                                return Object(ee.jsx)(re, {
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
                ye = l.b.div(ve || (ve = Object(s.a)(["\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n\n  min-width: 60%;\n  height: var(--boxSize);\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 0 calc(var(--boxSize) / 10) calc(var(--boxSize) / 10) 0;\n  background-color: var(--colOverlayReverse);\n\n  pointer-events: none;\n"]))),
                je = l.b.div(ge || (ge = Object(s.a)(['\n  flex: 1;\n\n  border-radius: 0 calc(var(--boxSize) / 10) 0 0;\n  background-color: var(--colOverlayReverse);\n\n  &::before {\n    font-size: 0.8em;\n    content: "效率 x";\n  }\n']))),
                Me = l.b.div(be || (be = Object(s.a)(["\n  flex: 5;\n"]))),
                xe = l.b.div(we || (we = Object(s.a)(["\n  --itemHeight: calc(var(--boxSize) / 6);\n\n  height: var(--itemHeight);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.8em;\n  font-weight: bold;\n"])));
            var Se, ke, Ae = Object(c.b)((function (e) {
                    return {
                        save: e.resources
                    }
                }), {})((function (e) {
                    var n = e.Resource,
                        t = e.save,
                        o = n ? n.effectMultiply(t) : 1,
                        a = n.randomGrantOnCraft.map((function (e) {
                            return [e[0] * o, e[1]]
                        }));
                    return 0 !== a.length || 1 !== o ? Object(ee.jsxs)(ye, {
                        children: [Object(ee.jsx)(je, {
                            children: _(o)
                        }), Object(ee.jsx)(Me, {
                            children: a.map((function (e) {
                                var n = Object(u.a)(e, 2),
                                    o = n[0],
                                    a = n[1],
                                    r = M[a];
                                return Object(ee.jsxs)(xe, {
                                    children: [t[r.order].unlocked ? Object(ee.jsx)(re, {
                                        size: "var(--itemHeight)",
                                        position: r.position
                                    }) : Object(ee.jsx)("span", {
                                        children: "?\xa0"
                                    }), Object(ee.jsx)("span", {
                                        children: o < 1e-5 ? _(o, 3, !0).padStart(6, "\xa0") : o < 1 ? _(100 * o, 3, !0).padStart(6, "\xa0") + "%" : "\xa0x" + _(o, 3, !0)
                                    })]
                                }, r.name)
                            }))
                        })]
                    }) : Object(ee.jsx)(ee.Fragment, {})
                })),
                Ce = Object(l.c)(Se || (Se = Object(s.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),
                Ee = l.b.div(ke || (ke = Object(s.a)(["\n  position: absolute;\n  bottom: 18%;\n  left: 47%;\n  transform: translateX(-100%);\n\n  padding: 2%;\n\n  color: var(--colReverse);\n  font-size: 0.7em;\n  font-weight: bold;\n\n  background-color: var(--colOverlayReverse);\n  border-radius: 25%;\n\n  animation: ", " 0.2s ease-out forwards;\n  z-index: 1;\n  pointer-events: none;\n"])), Ce);
            var Pe, Re, Te, ze, Ie, Ge = Object(c.b)((function (e) {
                    return {
                        save: e
                    }
                }))((function (e) {
                    var n = e.Resource,
                        t = e.autoConnected,
                        o = e.save,
                        a = R(n.name, o) || 0,
                        r = -1 !== t && o.resources[t].have >= 1;
                    return 0 !== a ? Object(ee.jsx)(Ee, {
                        children: r ? _(Math.max(0, 1e3 / a)) + "/s" : (a / 1e3).toFixed(2) + "s"
                    }) : Object(ee.jsx)(ee.Fragment, {})
                })),
                De = Object(l.c)(Pe || (Pe = Object(s.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(100%) scale(0.2, 1);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1, 1);\n  }\n"]))),
                Ue = l.b.div(Re || (Re = Object(s.a)(["\n  --margin: calc(var(--cellSize) / 10);\n  --boxRatio: 1.3;\n  --boxSize: calc(var(--cellSize) - var(--margin));\n  --cellWidth: calc(var(--boxSize) / var(--boxRatio));\n  --cellHeight: var(--boxSize);\n  --borderRadius: calc(var(--boxSize) / 15);\n\n  margin: calc(var(--margin) / 2);\n\n  width: var(--cellWidth);\n  height: var(--cellHeight);\n  \n  background-color: var(--colMain3);\n  border-radius: var(--borderRadius);\n  box-shadow: var(--baseShadow);\n\n  transform: scale(1);\n  cursor: pointer;\n\n  transition: all 0.3s cubic-bezier(0,.79,.32,1);\n\n  &:hover {\n    width: calc(var(--boxSize) / var(--boxRatio) * 2);\n    background-color: var(--colMain4);\n    transform: scale(1.4);\n    z-index: 1;\n  }\n\n  &:hover::before {\n    content: attr(name);\n\n    padding: 1% 5% 0 5%;\n    \n    min-width: 60%;\n    height: 15%;\n\n    position: absolute;\n    top: -16%;\n    left: 5%;\n\n    color: var(--colMainReverse);\n    word-spacing: -0.3em;\n    font-size: 0.9em;\n    text-align: center;\n\n    background-color: var(--colMain4);\n    border-radius: calc(var(--cellSize) / 30) calc(var(--cellSize) / 30) 0 0;\n\n    animation: ", " 0.4s cubic-bezier(.12,.81,.31,.95);\n    \n    pointer-events: none;\n  }\n"])), De),
                Fe = l.b.div(Te || (Te = Object(s.a)(["\n  display: flex;\n  overflow: hidden;\n  \n  & > span {\n    display: inline-block;\n\n    width: calc(var(--boxSize) / var(--boxRatio));\n    height: calc(var(--boxSize));\n  }\n"]))),
                Be = l.b.span(ze || (ze = Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 0%;\n  max-height: 100%;\n\n  background-color: var(--colOverlay);\n  border-radius: var(--borderRadius);\n\n  z-index: -1;\n"]))),
                Le = l.b.div(Ie || (Ie = Object(s.a)(["\n  padding-right: calc(var(--boxSize) / 20);\n\n  text-align: right;\n  font-weight: bolder;\n  color: var(--colReverse);\n"])));

            function Qe(e) {
                var n, t = e.Resource,
                    a = e.index,
                    r = e.craftStart,
                    i = e.stopManualAutomation,
                    s = e.selectMode,
                    l = e.toggleAuto,
                    d = e.resourceEmpower,
                    p = e.empowerLeft,
                    m = e.cooldown,
                    h = Object(o.useState)(!1),
                    f = Object(u.a)(h, 2),
                    v = f[0],
                    g = f[1],
                    b = t ? t.name.replace(/(.)([A-Z])/g, "$1 $2") : "",
                    w = Object(c.d)((function (e) {
                        return e.resources[a]
                    })),
                    O = t ? Object.entries(null !== (n = t.cost(w.have)) && void 0 !== n ? n : {}) : [],
                    y = C[a],
                    j = w.unlocked && ("AutoToggle" !== s || -1 !== y) && ("Empower" !== s || w.unlocked && t.canEmpower);
                return Object(ee.jsxs)(Ue, {
                    onClick: function () {
                        var e;
                        switch (s) {
                            case "AutoToggle":
                                l(a);
                                break;
                            case "Empower":
                                p > 0 && d(a);
                                break;
                            default:
                                t && 0 !== Object.keys(null !== (e = t.cost(w.have)) && void 0 !== e ? e : {}).length && r(a)
                        }
                    },
                    onMouseDown: function () {
                        var e;
                        switch (s) {
                            case "AutoToggle":
                            case "Empower":
                                break;
                            default:
                                t && 0 !== Object.keys(null !== (e = t.cost(w.have)) && void 0 !== e ? e : {}).length && r(a)
                        }
                    },
                    onMouseUp: function () {
                        return i(a)
                    },
                    onMouseEnter: function () {
                        return g(!0)
                    },
                    onMouseLeave: function () {
                        g(!1), i(a)
                    },
                    name: cnItem(b),
                    style: {
                        backgroundColor: w.unlocked && (w.automationDisabled || "AutoToggle" === s && j) ? w.automationDisabled ? "#541212" : "#1c5412" : void 0,
                        opacity: j ? void 0 : .3,
                        pointerEvents: j ? void 0 : "none"
                    },
                    children: [j && t && Object(ee.jsxs)(Fe, {
                        children: [Object(ee.jsxs)("span", {
                            children: [Object(ee.jsx)(re, {
                                size: "calc(var(--boxSize) / var(--boxRatio) - var(--margin))",
                                position: t.position,
                                style: {
                                    filter: "drop-shadow(var(--baseShadow))",
                                    margin: "calc(var(--margin) / 2)"
                                }
                            }), Object(ee.jsx)(Le, {
                                children: _(w.have)
                            }), Object(ee.jsx)(Be, {
                                style: {
                                    height: m > 200 || w.automationDisabled ? "".concat(100 * w.progress, "%") : "100%"
                                }
                            })]
                        }), v && Object(ee.jsxs)(ee.Fragment, {
                            children: [Object(ee.jsx)(de, {
                                cost: O
                            }), Object(ee.jsx)(Ae, {
                                Resource: t
                            }), Object(ee.jsx)(Oe, {
                                Resource: t
                            }), Object(ee.jsx)(Ge, {
                                Resource: t,
                                autoConnected: y
                            })]
                        })]
                    }), t && t.canEmpower && ("Empower" === s && w.unlocked || w.empower >= 1) && Object(ee.jsx)(re, {
                        size: "calc(var(--boxSize) / 2.6)",
                        position: {
                            x: 2,
                            y: 8
                        },
                        content: "Empower" === s ? "x".concat((1 + w.empower / 2).toFixed(1)) : w.empower,
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: "translate(-50%, -50%)" + ("Empower" === s ? " scale(1.2)" : ""),
                            filter: "drop-shadow(var(--baseShadowSmall)) hue-rotate(-".concat(50 * Math.max(0, w.empower - 1), "deg)") + (0 === w.empower ? " grayscale(1)" : ""),
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textShadow: "var(--baseShadowSmall)",
                            fontWeight: "bold",
                            pointerEvents: "none"
                        }
                    })]
                })
            }
            var Ne = Object(c.b)((function () {
                    return {}
                }), {
                    craftStart: Q,
                    toggleAuto: function (e) {
                        return {
                            type: D,
                            order: e
                        }
                    },
                    resourceEmpower: function (e) {
                        return {
                            type: U,
                            order: e
                        }
                    },
                    stopManualAutomation: function (e) {
                        return {
                            type: L,
                            order: e
                        }
                    }
                })(a.a.memo(Qe)),
                He = "prestige/DO_PRESTIGE",
                qe = "prestige/END_PRESTIGE",
                We = "prestige/RESPEC_EMPOWERER",
                Ze = "prestige/END_RESPEC",
                Ke = 6e5;
            var Ve, Xe, Ye, Je = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v().prestige,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    t = (new Date).getTime();
                switch (n.type) {
                    case He:
                        return e.doingPrestige = !0, e.tmpPrestigeResourceQuantity = n.prestigeResourceQuantity, e.lastPrestigeResourceQuantity = n.prestigeResourceQuantity, e.totalPrestigeResourceQuantity += n.prestigeResourceQuantity, e;
                    case qe:
                        return e.doingPrestige = !1, e.tmpPrestigeResourceQuantity = 0, e;
                    case We:
                        return t - e.empowererRespecTime >= Ke && (e.doingRespec = !0, e.empowererRespecTime = t), e;
                    case Ze:
                        return e.doingRespec = !1, e;
                    default:
                        return e
                }
            };

            function _e(e) {
                var n = Math.floor(e / 6e4),
                    t = Math.floor(e % 6e4 / 1e3);
                return (n + "").padStart(2, "0") + ":" + (t + "").padStart(2, "0")
            }
            var $e = l.b.div(Ve || (Ve = Object(s.a)(["\n  --cellSize: calc(var(--h) / 9);\n\n  flex: var(--resourceGridFlexGrow);\n\n  display: grid;\n  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));\n  grid-auto-rows: var(--cellSize);\n  grid-auto-columns: var(--cellSize);\n  place-items: center;\n"]))),
                en = l.b.div(Xe || (Xe = Object(s.a)(["\n  position: absolute;\n  left: calc(var(--h) / 50);\n  bottom: calc(var(--w) / 100);\n\n  z-index: 1;\n"]))),
                nn = l.b.div(Ye || (Ye = Object(s.a)(["\n  padding: calc(var(--h) / 100) calc(var(--w) / 200);\n  margin: 0 calc(var(--w) / 200);\n\n  min-width: 20%;\n\n  display: inline-block;\n  \n  font-weight: bold;\n  color: var(--colReverseWeak);\n  text-align: center;\n\n  box-shadow: var(--baseShadow);\n  background-color: var(--colMain3);\n\n  cursor: pointer;\n\n  transition: all 0.5s cubic-bezier(.12,.74,.14,.99);\n\n  &:hover {\n    background-color: var(--colMain4);\n    transform: scale(1.2);\n  }\n"])));
            var tn, on, an, rn, cn, sn = function () {
                    var e = Object(o.useState)(null),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        a = n[1],
                        r = Object(c.d)((function (e) {
                            return e
                        })),
                        i = r.resources,
                        s = i[74].have - i.reduce((function (e, n) {
                            return e + n.empower
                        }), 0),
                        l = 6e5 - ((new Date).getTime() - r.prestige.empowererRespecTime),
                        d = Object(c.c)();
                    return Object(ee.jsxs)(ee.Fragment, {
                        children: [Object(ee.jsxs)(en, {
                            children: [Object(ee.jsx)(nn, {
                                onClick: Object(o.useCallback)((function () {
                                    a("AutoToggle" !== t ? "AutoToggle" : null)
                                }), [t]),
                                style: "AutoToggle" === t ? {
                                    backgroundColor: "var(--colAlt1)",
                                    color: "var(--colMain1)"
                                } : {},
                                children: "切换自动"
                            }), i[74].unlocked && Object(ee.jsxs)(ee.Fragment, {
                                children: [Object(ee.jsxs)(nn, {
                                    onClick: function () {
                                        a("Empower" !== t ? "Empower" : null)
                                    },
                                    style: "Empower" === t ? {
                                        backgroundColor: "var(--colAlt1)",
                                        color: "var(--colMain1)"
                                    } : {},
                                    children: ["Empower (", s, ")"]
                                }), Object(ee.jsx)(nn, {
                                    onClick: function () {
                                        return d({
                                            type: We
                                        })
                                    },
                                    style: l > 0 ? {
                                        opacity: .4,
                                        pointerEvents: "none"
                                    } : {},
                                    children: l > 0 ? _e(l) : "重洗"
                                })]
                            })]
                        }), Object(ee.jsx)($e, {
                            children: x.map((function (e, n) {
                                return Object(ee.jsx)(Ne, {
                                    Resource: e,
                                    selectMode: t,
                                    index: n,
                                    empowerLeft: s,
                                    cooldown: null !== e && R(e.name, r) || 1 / 0
                                }, null !== e ? e.name : "empty_".concat(n))
                            }))
                        })]
                    })
                },
                ln = l.b.div(tn || (tn = Object(s.a)(["\n  flex: 1;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),
                un = l.b.div(on || (on = Object(s.a)(["\n  padding: 0.5% 0;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.8em;\n\n  background-color: var(--colOverlay);\n"]))),
                dn = l.b.span(an || (an = Object(s.a)(["\n  margin-right: 1%;\n"]))),
                pn = l.b.div(rn || (rn = Object(s.a)(["\n  flex: 2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                mn = l.b.span(cn || (cn = Object(s.a)(["\n  padding: 10% 10%;\n\n  font-size: 0.7em;\n\n  background-color: var(--colMain3);\n  border-radius: calc(var(--asideWidth) / 70);\n  box-shadow: var(--baseShadow);\n\n  cursor: pointer;\n  transition:\n    color 0.15s cubic-bezier(.06,.71,.44,1),\n    background-color 0.15s cubic-bezier(.06,.71,.44,1),\n    transform 0.15s cubic-bezier(.06,.71,.44,1);\n\n  &:hover {\n    background-color: var(--colMain4);\n    transform: scale(1.2);\n  }\n  &:active {\n    color: var(--colMain1);\n    background-color: var(--colAlt1);\n    transform: scale(1.05);\n  }\n"])));
            var hn = Object(c.b)((function () {
                return {}
            }), {
                doPrestige: function (e) {
                    return {
                        type: He,
                        prestigeResourceQuantity: e
                    }
                }
            })((function (e) {
                var n = e.isUnlocked,
                    t = e.style,
                    o = e.doPrestige,
                    a = Object(c.d)((function (e) {
                        return e.resources[72].have
                    })),
                    r = Object(c.d)((function (e) {
                        return e.resources[73].have
                    })),
                    i = a >= 50;
                return Object(ee.jsx)("div", {
                    style: Object(p.a)(Object(p.a)({}, t), {}, {
                        "--_imageSize": "calc(var(--w) / 40)"
                    }),
                    children: n ? Object(ee.jsxs)(ee.Fragment, {
                        children: [Object(ee.jsx)(ln, {
                            children: "声望"
                        }), Object(ee.jsxs)(un, {
                            children: [Object(ee.jsx)(dn, {
                                children: a
                            }), Object(ee.jsx)(re, {
                                size: "var(--_imageSize)",
                                position: {
                                    x: 0,
                                    y: 8
                                },
                                style: {
                                    filter: "drop-shadow(var(--baseShadow))"
                                }
                            }), Object(ee.jsx)(pe.a, {
                                icon: me.a,
                                style: {
                                    margin: "0 2%",
                                    color: "var(--colReverseWeak)"
                                }
                            }), Object(ee.jsx)(dn, {
                                children: "".concat(r, "(+").concat(a, ")")
                            }), Object(ee.jsx)(re, {
                                size: "var(--_imageSize)",
                                position: {
                                    x: 1,
                                    y: 8
                                },
                                style: {
                                    filter: "drop-shadow(var(--baseShadow))"
                                }
                            })]
                        }), Object(ee.jsx)(pn, {
                            children: Object(ee.jsx)(mn, {
                                style: i ? void 0 : {
                                    opacity: .2,
                                    pointerEvents: "none"
                                },
                                onClick: function () {
                                    return i && window.confirm("你确定要声望吗?") && o(a)
                                },
                                children: i ? "声望!" : Object(ee.jsxs)(ee.Fragment, {
                                    children: [Object(ee.jsx)("span", {
                                        children: "".concat(50 - a, " 还需 ")
                                    }), Object(ee.jsx)(re, {
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
                    }) : "未解锁"
                })
            }));
            var fn = function (e) {
                var n = e.style;
                return Object(ee.jsx)("div", {
                    style: n
                })
            };
            var vn = function (e) {
                var n = e.style;
                return Object(ee.jsx)("div", {
                    style: n
                })
            };
            var gn, bn = function (e) {
                    var n = e.style;
                    return Object(ee.jsx)("div", {
                        style: n,
                        children: "统计即将推出!"
                    })
                },
                wn = l.b.div(gn || (gn = Object(s.a)(['\n  --asideWidth: calc(var(--w) / var(--totalFlexGrow) * 7 * 0.97);\n\n  flex: var(--asideFlexGrow);\n\n  margin-left: 1.5%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  color: var(--colReverseWeak);\n  font-weight: bold;\n  font-size: 2em;\n\n  /* &::after {\n    position: absolute;\n\n    width: var(--asideWidth);\n    height: 3px;\n\n    background: linear-gradient(90deg, #f00 3%, #fff 1%);\n\n    content: "Aside Width";\n    opacity: 0.1;\n  } */\n\n  & > div {\n    margin: 1%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n\n    width: 100%;\n    background-color: var(--colMain2);\n    border-radius: calc(var(--asideWidth) / 60);\n    box-shadow: var(--baseShadow);\n  }\n\n  & > div:nth-child(1) {\n    flex: 2;\n  }\n  & > div:nth-child(2) {\n    flex: 1;\n  }\n  & > div:nth-child(3) {\n    flex: 3;\n  }\n  & > div:nth-child(4) {\n    flex: 5;\n  }\n'])));
            var On = function () {
                    var e = Object(c.d)((function (e) {
                            return e.aside.unlockStatus
                        })),
                        n = {
                            opacity: .4,
                            pointerEvents: "none"
                        };
                    return Object(ee.jsxs)(wn, {
                        children: [Object(ee.jsx)(hn, {
                            isUnlocked: e.Prestige,
                            style: e.Prestige ? {} : n
                        }), Object(ee.jsx)(fn, {
                            isUnlocked: e.NewGame,
                            style: e.NewGame ? {} : n
                        }), Object(ee.jsx)(vn, {
                            isUnlocked: e.Booster,
                            style: e.Booster ? {} : n
                        }), Object(ee.jsx)(bn, {
                            style: n
                        })]
                    })
                },
                yn = t(28),
                jn = t(18),
                Mn = "aside/UNLOCK_TAB";
            var xn = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v().aside,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case Mn:
                            return e.unlockStatus = Object(p.a)(Object(p.a)({}, e.unlockStatus), {}, Object(w.a)({}, n.toUnlock, !0)), e;
                        default:
                            return e
                    }
                },
                Sn = Object(jn.a)({
                    resources: V,
                    aside: xn,
                    prestige: Je
                }),
                kn = "dataManager/IMPORT";
            var An, Cn, En, Pn, Rn, Tn, zn = function (e) {
                    return function () {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case kn:
                                return f(t.data), t.data;
                            default:
                                return e(n, t)
                        }
                    }
                },
                In = Object(jn.b)(zn(Sn)),
                Gn = l.b.div(An || (An = Object(s.a)(["\n  position: absolute;\n  right: calc(var(--w) / 100 * 3);\n  bottom: calc(var(--h) / 100 * 3);\n\n  text-align: right;\n\n  z-index: 2;\n"]))),
                Dn = l.b.div(Cn || (Cn = Object(s.a)(["\n  border-radius: 50%;\n  background-color: var(--colMain4);\n  box-shadow: var(--baseShadow);\n\n  margin-left: auto; /** Self right align */\n  width: calc(var(--baseSize) / 25);\n\n  cursor: pointer;\n\n  transition: transform 0.5s cubic-bezier(0, 0.75, 0.21, 1),\n    background-color 0.3s cubic-bezier(0, 0.75, 0.21, 1);\n\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(1);\n    background-color: var(--colAlt1);\n\n    transition: transform 0.5s cubic-bezier(0, 0.75, 0.21, 1),\n      background-color 0s cubic-bezier(0, 0.75, 0.21, 1);\n  }\n"]))),
                Un = l.b.div(En || (En = Object(s.a)(["\n  padding: 3%;\n\n  width: calc(var(--baseSize) / 10);\n\n  backdrop-filter: blur(calc(var(--baseSize) / 1000));\n\n  z-index: 1;\n\n  & > div:not(::last-child) {\n    margin-bottom: calc(var(--h) / 100);\n  }\n"]))),
                Fn = Object(l.c)(Pn || (Pn = Object(s.a)(["\n  from {\n    opacity: 0;\n    transform: translateX(150%);\n  }\n  30% {\n    opacity: 0;\n    transform: translateX(150%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0%);\n  }\n"]))),
                Bn = l.b.div(Rn || (Rn = Object(s.a)(["\n  --itemHeight: calc(var(--h) / 45);\n  --gradientCol: var(--colMain4);\n\n  width: 100%;\n\n  padding: calc(var(--itemHeight) / 5);\n  margin: calc(var(--itemHeight) / 3);\n\n  border-radius: calc(var(--itemHeight) / 3);\n  background: linear-gradient(\n    to left,\n    var(--gradientCol) 0%,\n    rgba(0, 0, 0, 0) 70%\n  );\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  animation: ", " 0.4s cubic-bezier(0.11, 0.94, 0.37, 0.99);\n  cursor: pointer;\n  transition: width 0.4s cubic-bezier(0.11, 0.94, 0.37, 0.99),\n    background-size 0.4s cubic-bezier(0.11, 0.94, 0.37, 0.99),\n    transform 0.4s cubic-bezier(0.11, 0.94, 0.37, 0.99),\n    color 0.4s cubic-bezier(0.11, 0.94, 0.37, 0.99);\n\n  &:hover {\n    --gradientCol: var(--colAlt1);\n\n    width: 120%;\n    transform: translateX(calc(-20% / 1.2));\n    background-size: 200%;\n    color: var(--colAlt1);\n  }\n"])), Fn),
                Ln = l.b.span(Tn || (Tn = Object(s.a)(["\n  font-size: var(--itemHeight);\n  font-weight: bold;\n"]))),
                Qn = [{
                    title: "导出",
                    icon: me.e,
                    func: function () {
                        var e = window.btoa(JSON.stringify(In.getState())),
                            n = !1;
                        if (window.isSecureContext) try {
                            navigator.clipboard.writeText(e), n = !0
                        } catch (o) {}
                        if (!n) {
                            var t = document.createElement("textarea");
                            t.value = e, t.style.position = "fixed", document.body.appendChild(t), t.focus(), t.select();
                            try {
                                document.execCommand("copy"), n = !0
                            } catch (o) {}
                            document.body.removeChild(t)
                        }
                        n ? window.alert("Exported to clipboard!") : window.prompt("Copy failed, here's a text box to manual copy: ", e)
                    }
                }, {
                    title: "导入",
                    icon: me.c,
                    func: function () {
                        var e = window.prompt("Import Save"),
                            n = JSON.parse(window.atob(e));
                        In.dispatch({
                            type: kn,
                            data: n
                        })
                    }
                }, {
                    title: "恢复",
                    icon: me.f,
                    func: function () {
                        return alert("TBA!")
                    }
                }, {
                    title: "Discord",
                    icon: yn.a,
                    func: function () {
                        return window.open("https://discord.gg/wkdVQxT", "_blank")
                    }
                }];
            var Nn, Hn, qn = function () {
                    var e = Object(o.useState)(!1),
                        n = Object(u.a)(e, 2),
                        t = n[0],
                        a = n[1];
                    return Object(ee.jsx)(ee.Fragment, {
                        children: Object(ee.jsxs)(Gn, {
                            children: [t && Object(ee.jsx)(Un, {
                                children: Qn.map((function (e, n) {
                                    return Object(ee.jsxs)(Bn, {
                                        "data-animation-offset": n,
                                        onClick: function () {
                                            return e.func()
                                        },
                                        style: {
                                            animationDuration: 200 * (n + 1) + "ms"
                                        },
                                        children: [Object(ee.jsx)(pe.a, {
                                            icon: e.icon,
                                            style: {
                                                width: "var(--itemHeight)",
                                                height: "var(--itemHeight)"
                                            }
                                        }), Object(ee.jsx)(Ln, {
                                            children: e.title
                                        })]
                                    }, e.title)
                                }))
                            }), Object(ee.jsx)(Dn, {
                                onClick: function () {
                                    return a(!t)
                                },
                                style: t ? {
                                    backgroundColor: "var(--colAlt1)"
                                } : {},
                                children: Object(ee.jsx)(pe.a, {
                                    icon: me.b,
                                    style: {
                                        width: "calc(var(--baseSize) / 25)",
                                        height: "calc(var(--baseSize) / 25)",
                                        color: "var(--colReverse)",
                                        transform: "scale(0.4)"
                                    }
                                })
                            })]
                        })
                    })
                },
                Wn = Object(l.a)(Nn || (Nn = Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  \n    white-space: nowrap;\n    \n    user-select: none;\n  }\n  \n  body {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n\n    color: var(--colReverse);\n\n    background-color: var(--colMain1);\n\n    /** Size */\n    @media only screen and (orientation: portrait) {\n    --baseSize: 90vw;\n    }\n    @media only screen and (orientation: landscape) {\n      --baseSize: min(83vw, 160vh);\n    }\n    --w: var(--baseSize);\n    --h: calc(var(--baseSize) * 9 / 16);\n    font-size: calc(var(--h) / 70);\n    @media only screen and (min-width: 1700px) and (min-height: 1000px) {\n      --w: 1600px;\n      --h: 900px;\n      font-size: calc(var(--h) / 70);\n    }\n    --baseShadow: calc(var(--h) / 250) calc(var(--h) / 250) 0 var(--colStrong);\n    --baseShadowSmall: calc(var(--h) / 500) calc(var(--h) / 500) 0 var(--colStrong);\n  }\n  body#theme-dark, body:not(#theme-light){\n    --colStrong: #000000;\n    --colMain1: #191919;\n    --colMain2: #2a2a2a;\n    --colMain3: #3a3a3a;\n    --colMain4: #4a4a4a;\n    --colReverse: #ffffff;\n    --colReverseWeak: #efefef;\n    --colReverseWeaker: #cdcdcd;\n    --colAlt1: #13d1f2;\n    --colOverlay: #fff3;\n    --colOverlayReverse: #0006;\n  }\n  body#theme-light {\n    --colStrong: #ffffff;\n    --colMain1: #ffffff;\n    --colMain2: #efefef;\n    --colMain3: #dedede;\n    --colMain4: #cdcdcd;\n    --colReverse: #191919;\n    --colReverseWeak: #2a2a2a;\n    --colReverseWeaker: #4a4a4a;\n    --colAlt1: #f29913;\n    --colOverlay: #0003;\n    --colOverlayReverse: #fff6;\n  }\n"]))),
                Zn = l.b.div(Hn || (Hn = Object(s.a)(["\n  --resourceGridFlexGrow: 9;\n  --asideFlexGrow: 7;\n  --totalFlexGrow: calc(var(--resourceGridFlexGrow) + var(--asideFlexGrow));\n\n  display: flex;\n\n  width: var(--w);\n  height: var(--h);\n\n  border-radius: calc(var(--h) / 50);\n\n  transition: \n    background-image 0.5s linear,\n    background-color 0.3s ease-out;\n"])));
            var Kn = function () {
                    return Object(ee.jsxs)("div", {
                        className: "App",
                        children: [Object(ee.jsx)(Wn, {}), Object(ee.jsxs)(Zn, {
                            children: [!1, Object(ee.jsx)(sn, {}), Object(ee.jsx)(On, {})]
                        }), Object(ee.jsx)(qn, {})]
                    })
                },
                Vn = function (e) {
                    e && e instanceof Function && t.e(3).then(t.bind(null, 42)).then((function (n) {
                        var t = n.getCLS,
                            o = n.getFID,
                            a = n.getFCP,
                            r = n.getLCP,
                            i = n.getTTFB;
                        t(e), o(e), a(e), r(e), i(e)
                    }))
                },
                Xn = (new Date).getTime();
            var Yn = function () {
                var e = In.getState(),
                    n = (new Date).getTime();
                n - Xn > 5e3 && (Xn = n, f(e));
                for (var t = 0; t < x.length; t++) {
                    var o, a = x[t];
                    if (null !== a) {
                        var r = t,
                            i = e.resources[r],
                            c = 1 <= (null === (o = e.resources[C[r]]) || void 0 === o ? void 0 : o.have);
                        if (!i.unlocked && (i.have >= 1 || T(a.name, e.resources)) && In.dispatch(H(r)), a.automates && i.have >= 1)
                            for (var s = 0; s < a.automates.length; s++) {
                                var l = M[a.automates[s]],
                                    u = l.order;
                                null !== e.resources[u].lastTime || 0 === P(l.name, e) || e.resources[u].automationDisabled || In.dispatch(Q(u, !0))
                            }
                        e.resources[r].automationManual && 0 !== P(a.name, e) && In.dispatch(Q(r, !1));
                        var d = i.lastTime;
                        if (null !== d && void 0 !== a.craftTime) {
                            var p = (n - d) / R(a.name, e) * 1;
                            In.dispatch(N({
                                order: t,
                                isAuto: c,
                                Time: n,
                                progressIncrement: p,
                                dontUpdate: e.prestige.doingPrestige
                            }))
                        }
                    }
                }
                if (!e.aside.unlockStatus.Prestige && e.resources[M.DivinePowder.order].have >= 1 && In.dispatch({
                        type: Mn,
                        toUnlock: "Prestige"
                    }), e.prestige.doingPrestige && e.prestige.tmpPrestigeResourceQuantity >= 1) {
                    In.dispatch(N({
                        order: M.DivineShard.order,
                        progressIncrement: e.prestige.tmpPrestigeResourceQuantity,
                        isAuto: !0
                    }));
                    for (var m = 0; m < x.length; m++) In.dispatch(W(m));
                    In.dispatch({
                        type: qe
                    })
                }
                if (e.prestige.doingRespec) {
                    for (var h = 0; h < x.length; h++) In.dispatch(q(h));
                    In.dispatch({
                        type: Ze
                    })
                }
            };
            i.a.render(Object(ee.jsx)(a.a.StrictMode, {
                children: Object(ee.jsx)(c.a, {
                    store: In,
                    children: Object(ee.jsx)(Kn, {})
                })
            }), document.getElementById("root")), setInterval((function () {
                return Yn()
            }), 1e3 / 60), Vn()
        }
    },
    [
        [41, 1, 2]
    ]
]);
//# sourceMappingURL=main.d478c134.chunk.js.map

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
    "Fast Forward": "快进",
    "Empowerer": "增强",
    "Cluster": "星团",
    "Steam Producer": "蒸汽发生器",
    "Generator Upgrade": "发生器升级",
    "Toggle Auto": "切换自动",
    "Core": "核心",
    "Metalwork Upgrade": "金属制品升级",
    "Liquid Upgrade": "液体升级",
    "Replicanti Boost II": "复制品提升 II",
    "Crucible": "坩埚",
    "Upgrade Potion II": "升级药水 II",
    "Overworld": "主世界",
    "Planet Essence": "行星精华",
    "Empower Cap": "赋能上限",
    "Divine Factory": "神圣工厂",
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