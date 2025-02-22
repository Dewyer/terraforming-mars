<template>
  <div class="resource_items_cont">
    <player-resource
      :type="Resource.MEGACREDITS"
      :count="player.megaCredits"
      :production="player.megaCreditProduction"
      :resourceProtection="player.protectedResources.megacredits"
      :productionProtection="player.protectedProduction.megacredits"/>
    <player-resource
      :type="Resource.STEEL"
      :count="player.steel"
      :production="player.steelProduction"
      :value="player.steelValue"
      :resourceProtection="player.protectedResources.steel"
      :productionProtection="player.protectedProduction.steel"/>
    <!-- TODO LUNA TRADE FEDERATION -->
    <player-resource
      :type="Resource.TITANIUM"
      :count="player.titanium"
      :production="player.titaniumProduction"
      :value="player.titaniumValue"
      :resourceProtection="player.protectedResources.titanium"
      :productionProtection="player.protectedProduction.titanium"/>
    <player-resource
      :type="Resource.PLANTS"
      :count="player.plants"
      :production="player.plantProduction"
      :resourceProtection="player.protectedResources.plants"
      :productionProtection="player.protectedProduction.plants"/>
    <player-resource
      :type="Resource.ENERGY"
      :count="player.energy"
      :production="player.energyProduction"
      :resourceProtection="player.protectedResources.energy"
      :productionProtection="player.protectedProduction.energy"/>
    <player-resource
      :type="Resource.HEAT"
      :count="player.heat"
      :production="player.heatProduction"
      :value="canUseHeatAsMegaCredits ? 1 : 0"
      :resourceProtection="player.protectedResources.heat"
      :productionProtection="player.protectedProduction.heat"/>
    <player-resource
      :type="Resource.TUNGSTENSTEEL"
      :count="player.tungstensteel"
      :production="player.tungstensteelProduction"
      :value="4"
      :resourceProtection="player.protectedResources.tungstensteel"
      :productionProtection="player.protectedProduction.tungstensteel"/>
    <player-resource
      :type="Resource.NAQUADAH"
      :count="player.naquadah"
      :production="player.naquadahProduction"
      :value="8"
      :resourceProtection="player.protectedResources.naquadah"
      :productionProtection="player.protectedProduction.naquadah"/>
    <player-resource
      :type="Resource.NEUTRONIUM"
      :count="player.neutronium"
      :production="player.neutroniumProduction"
      :value="10"
      :resourceProtection="player.protectedResources.neutronium"
      :productionProtection="player.protectedProduction.neutronium"/>
    <player-resource
        :type="Resource.OXYGEN"
        :count="player.oxygen"
        :production="player.oxygenProduction"
        :value="1"
        :resourceProtection="player.protectedResources.oxygen"
        :productionProtection="player.protectedProduction.oxygen"/>
    <player-resource
        :type="Resource.RADON"
        :count="player.radon"
        :production="player.radonProduction"
        :value="1"
        :resourceProtection="player.protectedResources.radon"
        :productionProtection="player.protectedProduction.radon"/>
    <player-resource
        :type="Resource.PTFE"
        :count="player.ptfe"
        :production="player.ptfeProduction"
        :value="1"
        :resourceProtection="player.protectedResources.ptfe"
        :productionProtection="player.protectedProduction.ptfe"/>
    <player-resource
        :type="Resource.PBI"
        :count="player.pbi"
        :production="player.pbiProduction"
        :value="1"
        :resourceProtection="player.protectedResources.pbi"
        :productionProtection="player.protectedProduction.pbi"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {CardName} from '@/common/cards/CardName';
import {PublicPlayerModel} from '@/common/models/PlayerModel';
import PlayerResource from '@/client/components/overview/PlayerResource.vue';
import {Resource} from '@/common/Resource';

export default Vue.extend({
  name: 'PlayerResources',
  props: {
    player: {
      type: Object as () => PublicPlayerModel,
    },
  },
  computed: {
    Resource(): typeof Resource {
      return Resource;
    },
    // TODO LUNA TRADE FEDERATION
    canUseHeatAsMegaCredits(): boolean {
      return this.player.tableau.some((card) => card.name === CardName.HELION);
    },
  },
  components: {
    'player-resource': PlayerResource,
  },
});
</script>
