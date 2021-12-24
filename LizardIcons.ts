export type LizardIconsId =
  | "bridge-draw"
  | "bridge-fixed"
  | "bridge"
  | "culvert-with-outlet"
  | "culvert"
  | "manhole"
  | "outlet"
  | "overflow-open"
  | "overflow"
  | "pipe"
  | "pumpstation-diesel"
  | "pumpstation-electric"
  | "pumpstation-wind"
  | "pumpstation"
  | "rwzi"
  | "satellite"
  | "terrain"
  | "weir-automatic"
  | "weir-controlable"
  | "weir";

export type LizardIconsKey =
  | "BridgeDraw"
  | "BridgeFixed"
  | "Bridge"
  | "CulvertWithOutlet"
  | "Culvert"
  | "Manhole"
  | "Outlet"
  | "OverflowOpen"
  | "Overflow"
  | "Pipe"
  | "PumpstationDiesel"
  | "PumpstationElectric"
  | "PumpstationWind"
  | "Pumpstation"
  | "Rwzi"
  | "Satellite"
  | "Terrain"
  | "WeirAutomatic"
  | "WeirControlable"
  | "Weir";

export enum LizardIcons {
  BridgeDraw = "bridge-draw",
  BridgeFixed = "bridge-fixed",
  Bridge = "bridge",
  CulvertWithOutlet = "culvert-with-outlet",
  Culvert = "culvert",
  Manhole = "manhole",
  Outlet = "outlet",
  OverflowOpen = "overflow-open",
  Overflow = "overflow",
  Pipe = "pipe",
  PumpstationDiesel = "pumpstation-diesel",
  PumpstationElectric = "pumpstation-electric",
  PumpstationWind = "pumpstation-wind",
  Pumpstation = "pumpstation",
  Rwzi = "rwzi",
  Satellite = "satellite",
  Terrain = "terrain",
  WeirAutomatic = "weir-automatic",
  WeirControlable = "weir-controlable",
  Weir = "weir",
}

export const LIZARD_ICONS_CODEPOINTS: { [key in LizardIcons]: string } = {
  [LizardIcons.BridgeDraw]: "61697",
  [LizardIcons.BridgeFixed]: "61698",
  [LizardIcons.Bridge]: "61699",
  [LizardIcons.CulvertWithOutlet]: "61700",
  [LizardIcons.Culvert]: "61701",
  [LizardIcons.Manhole]: "61702",
  [LizardIcons.Outlet]: "61703",
  [LizardIcons.OverflowOpen]: "61704",
  [LizardIcons.Overflow]: "61705",
  [LizardIcons.Pipe]: "61706",
  [LizardIcons.PumpstationDiesel]: "61707",
  [LizardIcons.PumpstationElectric]: "61708",
  [LizardIcons.PumpstationWind]: "61709",
  [LizardIcons.Pumpstation]: "61710",
  [LizardIcons.Rwzi]: "61711",
  [LizardIcons.Satellite]: "61712",
  [LizardIcons.Terrain]: "61713",
  [LizardIcons.WeirAutomatic]: "61714",
  [LizardIcons.WeirControlable]: "61715",
  [LizardIcons.Weir]: "61716",
};
