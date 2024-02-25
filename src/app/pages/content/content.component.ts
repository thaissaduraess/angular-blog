import { dataFake } from './../../data/dataFake';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '0'; // Se o ID não estiver presente, defina como '0'
      this.setValueToComponent(this.id);
    });
  }

  setValueToComponent(id: string) {
    const result = dataFake.find((article) => article.id === id);

    if (!result) {
      console.error(`Nenhum item encontrado com o ID ${id}`);
      return;
    }

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
