import axios, { isCancel, AxiosError } from 'axios';
import Notiflix from 'notiflix';


const form = document.querySelector('#search-form');
const input = document.getElementsByName('searchQuery');
const submit_BTN = document.querySelector('.btn-submit');
const gallery_Div = document.querySelector('.gallery');
const load_More_BTN = document.querySelector('.load-more').hidden = true;;