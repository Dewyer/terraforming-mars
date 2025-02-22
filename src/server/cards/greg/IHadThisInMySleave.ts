import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {inplaceShuffle} from '../../utils/shuffle';
import {UnseededRandom} from '../../../common/utils/Random';

export class IHadThisInMySleave extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.I_HAD_THIS_IN_MY_SLEAVE,
      tags: [Tag.WILD],
      cost: 10,

      metadata: {
        cardNumber: 'G15',
        renderData: CardRenderer.builder((b) => {
          b.action('50% chance to draw a card.', (eb) => {
            eb.empty().startAction.cards(1).asterix();
          });
        }),
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: IPlayer) {
    const choices = [true, false];
    inplaceShuffle(choices, UnseededRandom.INSTANCE);
    if (choices[0] === true) {
      player.drawCard();
    }
    return undefined;
  }
} 