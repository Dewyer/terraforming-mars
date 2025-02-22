import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class OpenTopIrradiationPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.OPEN_TOP_IRRADIATION_PLANT,
      tags: [Tag.BUILDING, Tag.POWER],
      cost: 20,
      victoryPoints: -2,

      behavior: {
        production: {radon: 1},
        global: {temperature: 1},
      },

      metadata: {
        cardNumber: 'G71',
        renderData: CardRenderer.builder((b) => {
          b.temperature(1).br;
          b.production((pb) => {
            pb.radon(1);
          });
        }),
        description: 'Increase temprature 1 step and radon production 1. -2 VP',
      },
    });
  }

} 