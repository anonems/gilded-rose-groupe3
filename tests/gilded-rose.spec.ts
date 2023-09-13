import { Item, GildedRose } from '../src/index';

describe("GildedRose", () => {
  describe("update quality for normal item", () => {
    it("should decrease quality by 1 avant sellIn date", () => {
      const item = new Item("Normal Item", 5, 10);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
    });

    it("should decrease 2 times quality after Sell In date", () => {
      const item = new Item("Normal Item", -1, 10);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
    });

    it("should not decrease quality below 0", () => {
      const item = new Item("Normal Item", 5, 0);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe("update quality for Aged Brie", () => {
    it("should increase 1 times quality after Sell In date", () => {
      const item = new Item("Aged Brie", 5, 10);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11);
    });

    it("should increase 2 times quality after Sell In date", () => {
      const item = new Item("Aged Brie", -1, 10);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12);
    });

    it("should not increase quality above 50", () => {
      const item = new Item("Aged Brie", 5, 50);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  // tests pour Sulfuras/Backstage passes

  describe("update quality for Sulfuras", () => {
    it("should not change quality or sellIn for Sulfuras", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 5, 80);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(5);
    });
  });

  describe("update quality for Backstage Passes", () => {
    it("should increase quality by 1 before sellIn date", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
      const gildedRose = new GildedRose([item]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    // Tests..
  });

    // Tests..
});
