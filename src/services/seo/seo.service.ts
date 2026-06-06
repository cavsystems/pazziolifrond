import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export interface SeoConfig {
  title?: string;
  description?: string;
}

const BASE_TITLE = 'Pazzioli Web';
const BASE_URL = 'https://pazzioliweb.cavsystems.com.co';

const ROUTE_META: Record<string, SeoConfig> = {
  'auth/login': {
    title: 'Iniciar Sesión',
    description: 'Accede a tu cuenta en Pazzioli Web para gestionar ventas y pedidos.',
  },
  'admin/tienda': {
    title: 'Tienda',
    description: 'Catálogo de productos y toma de pedidos en Pazzioli Web.',
  },
  'admin/pedido': {
    title: 'Pedidos',
    description: 'Consulta y gestiona los pedidos registrados en Pazzioli Web.',
  },
  'admin/cartera': {
    title: 'Cartera',
    description: 'Consulta la cartera de clientes y cuentas por cobrar.',
  },
  'admin/recibodecaja': {
    title: 'Recibo de Caja',
    description: 'Crear y consultar recibos de caja en Pazzioli Web.',
  },
  'admin/inventariofisico': {
    title: 'Inventario Físico',
    description: 'Gestión de inventario físico de productos.',
  },
  'admin/inventario': {
    title: 'Inventario',
    description: 'Consulta el inventario de productos disponibles.',
  },
  'admin/auxcliente': {
    title: 'Auxiliar Cliente',
    description: 'Consulta el auxiliar de cuentas por cobrar por cliente.',
  },
  'admin/cuadre': {
    title: 'Cuadre de Caja',
    description: 'Consulta y gestiona el cuadre de caja diario.',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  init(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const url = this.router.url.replace(/^\//, '').split('?')[0];
          return ROUTE_META[url] ?? {};
        })
      )
      .subscribe((config) => this.apply(config));
  }

  private apply(config: SeoConfig): void {
    const pageTitle = config.title
      ? `${config.title} | ${BASE_TITLE}`
      : BASE_TITLE;
    const description =
      config.description ??
      'Pazzioli Web - Plataforma de gestión de ventas, pedidos, cartera e inventario en línea.';

    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({
      property: 'og:url',
      content: `${BASE_URL}${this.router.url}`,
    });
  }
}
