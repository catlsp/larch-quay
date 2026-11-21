import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/global.css';
import { mount } from 'svelte';
import App from './App.svelte';
import { getJSONSync, formatUpdated } from './lib/api.js';

window.CHAT_WIDGET_KEY = import.meta.env.VITE_CHAT_WIDGET_KEY;

const config = getJSONSync('/api/config.json');
config.updatedLabel = formatUpdated(config.updatedAt);

window.appConfig = config;
window.appState = {
  flats: [],
  favorites: [],
  filters: {},
  user: null,
};

const app = mount(App, { target: document.getElementById('app') });

export default app;
