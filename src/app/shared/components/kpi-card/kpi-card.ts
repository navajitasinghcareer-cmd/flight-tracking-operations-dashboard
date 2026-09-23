import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-kpi-card',
  styleUrl: './kpi-card.scss',
  templateUrl: './kpi-card.html',
})
export class KpiCard {
  @Input() title = '';
  @Input() value = 0;
  @Input() icon = '';

}
