import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MinecraftEffects } from './minecraft.effects';

describe('MinecraftEffects', () => {
  let actions$: Observable<any>;
  let effects: MinecraftEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MinecraftEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(MinecraftEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
