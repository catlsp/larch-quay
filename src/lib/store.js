import { writable } from 'svelte/store';

export const flatsStore = writable([]);
export const filtersStore = writable({
  rooms: [],
  areaMin: 0,
  areaMax: 200,
  priceMin: 0,
  priceMax: 2000000,
  floorMin: 1,
  floorMax: 30,
  query: '',
  sort: 'price',
});
export const favoritesStore = writable([]);
export const uiStore = writable({
  modalOpen: false,
  callbackOpen: false,
  leadOpen: false,
  lightboxIndex: -1,
  activeFlat: null,
});
