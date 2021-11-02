import { FOneDrivers } from "../f-one-drivers/f-one-drivers";

export interface FOneTeam {
  
  id:number,
  teamName: string,
  engineManufacturer:string,
  constructorPoints: number,
  chassis:string,
  drivers: FOneDrivers[]
  imgSrc: string
}
