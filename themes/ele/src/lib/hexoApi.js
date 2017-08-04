import url from 'url';
require('isomorphic-fetch');

export var apiHref = "https://heismelody.github.io"

const fetchConfig = {
}

export function getSite(href = apiHref) {
  if (typeof window.one !== "undefined"){
    if (typeof window.one.site !== "undefined"){
      return Promise.resolve(
        value(window.one.site)
      );
    }
  }
  return fetch(url.resolve(href,"./site.json"),fetchConfig).then((res) => {
    return new Promise.resolve(res.json());
  })
}

export function getTheme(href = apiHref) {
  if (typeof window.one !== "undefined"){
    if (typeof window.one.theme !== "undefined"){
      return Promise.resolve(
        value(window.one.theme)
      );
    }
  }
  return fetch(url.resolve(href,"./theme.json"),fetchConfig).then((res) => {
    return new Promise.resolve(res.json());
  })
}

export function getPosts(index, href = apiHref) {
  if (typeof index === 'undefined') {
    return fetch(url.resolve(href,"./posts.json"),fetchConfig)
      .then((res) => {
        return res.json().then(date => {
          date.pageIndex = 0;
          return new Promise.resolve(date);
        });
      })
  } else {
    return fetch(url.resolve(href,`./posts/${index}.json`),fetchConfig)
      .then((res) => {
        console.warn(res);
        return res.json().then(date => {
          date.pageIndex = index - 1;
          return new Promise.resolve(date);
        });
      })
  }
}

export function getTags(name, href = apiHref) {
  if (typeof name === 'undefined') {
    return fetch(url.resolve(href, "./tags.json"),fetchConfig)
      .then((res) => {
        return new Promise.reslove(res.json());
      });
  } else {
    return fetch(url.resolve(href, `./tags/${name}.json`),fetchConfig)
      .then((res) => {
        return new Promise.reslove(res.json());
      });
  }
}

export function getCategories(name, href = apiHref) {
  if (typeof name === 'undefined') {
    return fetch(url.resolve(href, "./categories.json"), fetchConfig)
      .then((res) => {
        return  new Promise.reslove(res.json());
      });
  } else {
    return fetch(url.resolve(href, `./categories/${name}.json`), fetchConfig)
      .then((res) => {
        return new Promise.reslove(res.json());
      });
  }
}

export function getPost(name, href = apiHref) {
  return fetch(url.resolve(href, `./articles/${name}.json`), fetchConfig)
    .then(res => {
      return new Promise.resolve(res.json());
    });
}

export function getPage(name, href = apiHref) {
  return fetch(url.resolve(href, `./page/${name}.json`), fetchConfig)
    .then(res => {
      return new Promise.resolve(res.json());
    });
}
