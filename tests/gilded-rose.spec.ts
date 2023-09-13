import { GildedRose, Item } from '../src/updated'; // Assurez-vous que l'importation de vos classes est correcte.

describe('Gilded Rose', () => {
  it('should match snapshot for Conjured item', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 2, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for Aged Brie with sellIn = 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for Backstage passes with sellIn = 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for Sulfuras with sellIn = 0', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for empty items array', () => {
    const gildedRose = new GildedRose([]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for normal item with sellIn > 0 and quality > 0', () => {
    const gildedRose = new GildedRose([new Item('Normal Item', 5, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for normal item with sellIn = 0 and quality > 0', () => {
    const gildedRose = new GildedRose([new Item('Normal Item', 0, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for normal item with sellIn > 0 and quality = 0', () => {
    const gildedRose = new GildedRose([new Item('Normal Item', 5, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

  it('should match snapshot for normal item with sellIn = 0 and quality = 0', () => {
    const gildedRose = new GildedRose([new Item('Normal Item', 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items).toMatchSnapshot();
  });

});
