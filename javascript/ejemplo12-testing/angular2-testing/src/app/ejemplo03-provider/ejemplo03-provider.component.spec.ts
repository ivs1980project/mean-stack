/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserService } from '../user.service';
import { MockusersService } from '../mockusers.service';

import { Ejemplo03ProviderComponent } from './ejemplo03-provider.component';

describe('Ejemplo03ProviderComponent', () => {
  let component: Ejemplo03ProviderComponent;
  let fixture: ComponentFixture<Ejemplo03ProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Ejemplo03ProviderComponent],
      providers: [{ provide: UserService, useClass: MockusersService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo03ProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Se renderizan los clientes que le llegan del servicio', async(() => {
    const element = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.querySelectorAll("span").length).toBe(3);
  }));
});
