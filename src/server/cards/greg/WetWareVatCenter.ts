import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';
import {IPlayer} from '../../IPlayer';

export class WetWareVatCenter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.WETWARE_VAT_CENTER,
      tags: [Tag.SCIENCE, Tag.SCIENCE, Tag.SCIENCE, Tag.UHV],
      cost: 17,
      requirements: {tag: Tag.MICROBE},

      metadata: {
        cardNumber: 'GF01',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play this card, draw a fusion card.', (eb) => {
            eb.startEffect.cards(1);
          }).br;
          b.minus().radon(1);
        }),
        description: 'Requires a microbe tag. Spend 1 radon. Gain 3 science tags and 1 UHV tag.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.stock.get(Resource.RADON) >= 1;
  }

  public override bespokePlay(player: IPlayer) {
    player.stock.deduct(Resource.RADON, 1);
    // TODO: Implement drawing a fusion card when fusion cards are implemented
    return undefined;
  }
} 