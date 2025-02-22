import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectOption} from '../../inputs/SelectOption';
import {OrOptions} from '../../inputs/OrOptions';
import {IActionCard} from '../ICard';

export class FusionReactorMK3 extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FUSION_REACTOR_MK3,
      tags: [Tag.POWER, Tag.UHV],
      cost: 60,
      victoryPoints: 5,

      requirements: {
        tag: Tag.ZPM,
      },

      metadata: {
        cardNumber: 'GF04',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 3 radon to gain 1 neutronium', (eb) => {
            eb.radon(3).startAction.neutronium(1);
          }).br;
          b.or().br;
          b.action('Extract radon from atmosphere (gain 1 radon)', (eb) => {
            eb.empty().startAction.radon(1);
          });
        }),
        description: 'Requires 1 PBI production. Ultimate fusion reactor capable of neutronium FUSION, the ultimate fronttier.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.production.pbi >= 1;
  }

  public canAct(): boolean {
    return true; // Can always act since we can at least generate radon
  }

  public action(player: IPlayer) {
    const options: Array<SelectOption> = [];

    if (player.stock.get(Resource.RADON) >= 3) {
      options.push(new SelectOption('Fuse 3 radon into neutronium (gain 1 neutronium)').andThen(() => {
        player.stock.deduct(Resource.RADON, 3);
        player.stock.add(Resource.NEUTRONIUM, 1);
        return undefined;
      }));
    }

    options.push(new SelectOption('Extract radon from atmosphere (gain 1 radon)').andThen(() => {
      player.stock.add(Resource.RADON, 1);
      return undefined;
    }));

    if (options.length === 1) return options[0];
    return new OrOptions(...options);
  }
} 