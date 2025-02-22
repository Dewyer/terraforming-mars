import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';

export class Nyipzuty extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.NYIPZUTY,
      tags: [Tag.IV],
      cost: 1,
      victoryPoints: 1,

      behavior: {
        stock: {megacredits: {tag: Tag.UHV, all: false}},
      },

      metadata: {
        cardNumber: 'G6',
        description: 'Incredibly based sound effects',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(1).slash().tag(Tag.UHV, {all});
        }),
      },
    });
  }
}
