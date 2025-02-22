export enum Resource {
    MEGACREDITS = 'megacredits',
    STEEL = 'steel',
    TITANIUM = 'titanium',
    PLANTS = 'plants',
    ENERGY = 'energy',
    HEAT = 'heat',
    TUNGSTENSTEEL = 'tungstensteel',
    NAQUADAH = 'naquadah',
    NEUTRONIUM = 'neutronium',
    OXYGEN = 'oxygen',
    RADON = 'radon',
    PTFE = 'ptfe',
    PBI = 'pbi',
}

export const ALL_RESOURCES = [Resource.MEGACREDITS, Resource.STEEL, Resource.TITANIUM, Resource.PLANTS, Resource.ENERGY, Resource.HEAT, Resource.TUNGSTENSTEEL, Resource.NAQUADAH, Resource.NEUTRONIUM, Resource.OXYGEN, Resource.RADON, Resource.PTFE, Resource.PBI] as const;
