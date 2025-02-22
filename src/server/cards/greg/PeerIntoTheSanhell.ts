import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class PeerIntoTheSanhell extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.PEER_INTO_THE_SANHELL,
      tags: [Tag.IV, Tag.ZPM],
      cost: 6,

      metadata: {
        cardNumber: 'G14',
        description: 'Draw 2 Greg cards.',
        renderData: CardRenderer.builder((b) => {
          b.cards(2).asterix();
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.drawCard(2, {include: ((card) => card.metadata.cardNumber?.startsWith('G') || false)});
    return undefined;
  }
} 