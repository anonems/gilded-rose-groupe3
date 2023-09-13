export class Item {
    name: string; //intitulé de l'article
    sellIn: number; //nombre de jours max pour vendre un article
    quality: number; //valeur de l'objet (selon sa qualité) toujours positive et inferieur a 50. (>=50)

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private updateAgedBrie(item) {
        if (item.quality < 50) {
            item.quality++;
        }
    }

    private updateBackstage(item) {
        if (item.quality < 50) {
            item.quality++;
            if (item.sellIn < 11 && item.quality < 50) {
                item.quality++;
            }
            if (item.sellIn < 6 && item.quality < 50) {
                item.quality++;
            }
        }
        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }

    private update(item) {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
            if (item.quality > 0) {
                item.quality--;
            }
            if (item.sellIn < 0 && item.quality > 0) {
                item.quality--;
            }
        }
    }

    updateQuality() {
        this.items.forEach(item => {
            // logs to display the state avant update de la qualité
            console.log(`Item: ${item.name}, SellIn: ${item.sellIn}, Quality: ${item.quality}`);

            switch (item.name) {
                case "Aged Brie":
                    this.updateAgedBrie(item);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    this.updateBackstage(item);
                    break;
                default:
                    this.update(item);
            }

            // logs to display the state après update de la qualité
            console.log(`Updated - Item: ${item.name}, SellIn: ${item.sellIn}, Quality: ${item.quality}`);
        });

        return this.items;
    }
}
