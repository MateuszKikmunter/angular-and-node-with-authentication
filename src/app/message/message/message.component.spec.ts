import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from './../../material/material.module';

import { MessageComponent } from './message.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        SharedModule,
      ],
      declarations: [
        MessageComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
