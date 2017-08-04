import url from 'url';
import * as hexo from './hexoApi';

const rootURL = window.rootUrl || '/';
export const apiHref = process.env.NODE_ENV === 'production' ?
  url.resolve(rootURL, './api/') :
  url.resolve(rootURL, './api/');

export function getSite(href = apiHref) {
  return hexo.getSite(href);
}

export function getTheme(href = apiHref) {
  return hexo.getTheme(href);
}

export function getPosts(index, href = apiHref) {
  return hexo.getPosts(index, href);
}

export function getTags(name, href = apiHref) {
  return hexo.getTags(name, href);
}

export function getCategories(name, href = apiHref) {
  return hexo.getCategories(name, href);
}

export function getPost(name, href = apiHref) {
  return hexo.getPost(name, href);
}

export function getPage(name, href = apiHref) {
  return hexo.getPage(name, href);
}
