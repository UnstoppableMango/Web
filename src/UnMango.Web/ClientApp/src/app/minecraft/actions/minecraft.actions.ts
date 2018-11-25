import { Action } from '@ngrx/store';

export enum MinecraftActionTypes {
  LoadMinecrafts = '[Minecraft] Load Minecrafts'
}

export class LoadMinecrafts implements Action {
  readonly type = MinecraftActionTypes.LoadMinecrafts;
}

export type MinecraftActions = LoadMinecrafts;
