import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class MarsHadDynosours extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.MARS_HAD_DYNOSOURS,
      tags: [],
      cost: 8,
      victoryPoints: 1,

      behavior: {
        stock: {
          ptfe: 2,
          pbi: 1,
        },
      },

      metadata: {
        cardNumber: 'G007',
        renderData: CardRenderer.builder((b) => {
          b.ptfe(2).br;
          b.pbi(1);
        }),
        description: 'Gain 2 PTFE and 1 PBI. 1 VP',
      },
    });
  }
} 