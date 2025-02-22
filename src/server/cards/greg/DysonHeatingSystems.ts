import {IProjectCard} from '../IProjectCard';
import {IActionCard} from '../ICard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';

export class DysonHeatingSystems extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DYSON_HEATING_SYSTEMS,
      tags: [Tag.SPACE, Tag.VENUS],
      cost: 45,
      victoryPoints: 4,

      requirements: {tag: Tag.UHV},

      metadata: {
        cardNumber: 'G104',
        renderData: CardRenderer.builder((b) => {
          b.action('Generate 24 heat OR Increase Venus 3 steps', (eb) => {
            eb.empty().startAction.heat(24).or().venus(3);
          });
        }),
        description: 'Requires UHV tag. Action: Either gain 24 heat or increase Venus 3 steps.',
      },
    });
  }

  public canAct(): boolean {
    return true;
  }

  public action(player: IPlayer) {
    return new OrOptions(
        new SelectOption('Gain 24 heat', 'Gain heat').andThen(() => {
          player.stock.add(Resource.HEAT, 24, {log: true});
          return undefined;
        }),
        new SelectOption('Increase Venus 3 steps', 'Increase Venus 3 steps').andThen(() => {
            for (let i = 0; i < 3; i++) {
              if (player.game.getVenusScaleLevel() < 30) {
                  player.game.increaseVenusScaleLevel(player, 1);
              }
            }
          return undefined;
        }));
  }
} 