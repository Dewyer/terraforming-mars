import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class SugarCaneEthylaneFarms extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.SUGAR_CANE_ETHYLANE_FARMS,
      tags: [Tag.PLANT],
      cost: 8,

      behavior: {
        production: {ptfe: 1},
      },

      metadata: {
        cardNumber: 'G101',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.ptfe(1));
        }),
        description: 'Increase your PTFE production 1 step.',
      },
    });
  }
} 