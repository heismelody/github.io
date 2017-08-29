<template lang="html">
  <div class="aaa">
    <site-header></site-header>
    <div class="container">
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>
      <post-box></post-box>

      <pagination></pagination>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import siteFooter from 'component/Footer';
import siteHeader from 'component/Header';
import postBox from 'component/HomePage/PostBox';

const data1 = {
  "total": 16,
  "pageSize": 10,
  "pageCount": 2,
  "data": [
    {
      "title": "Hello World",
      "slug": "hello-world13",
      "date": "2017-07-11T01:35:15.000Z",
      "updated": "2017-07-11T01:35:15.000Z",
      "comments": true,
      "path": "api/articles/hello-world13.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world12",
      "date": "2017-07-11T01:35:15.000Z",
      "updated": "2017-07-11T01:35:15.000Z",
      "comments": true,
      "path": "api/articles/hello-world12.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world14",
      "date": "2017-07-11T01:35:15.000Z",
      "updated": "2017-07-11T01:35:15.000Z",
      "comments": true,
      "path": "api/articles/hello-world14.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world11",
      "date": "2017-07-11T01:35:14.000Z",
      "updated": "2017-07-11T01:35:14.000Z",
      "comments": true,
      "path": "api/articles/hello-world11.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world8",
      "date": "2017-07-11T01:35:14.000Z",
      "updated": "2017-07-11T01:35:14.000Z",
      "comments": true,
      "path": "api/articles/hello-world8.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world10",
      "date": "2017-07-11T01:35:14.000Z",
      "updated": "2017-07-11T01:35:14.000Z",
      "comments": true,
      "path": "api/articles/hello-world10.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world9",
      "date": "2017-07-11T01:35:14.000Z",
      "updated": "2017-07-11T01:35:14.000Z",
      "comments": true,
      "path": "api/articles/hello-world9.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world7",
      "date": "2017-07-11T01:35:13.000Z",
      "updated": "2017-07-11T01:35:13.000Z",
      "comments": true,
      "path": "api/articles/hello-world7.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world3",
      "date": "2017-07-11T01:35:13.000Z",
      "updated": "2017-07-11T01:35:13.000Z",
      "comments": true,
      "path": "api/articles/hello-world3.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world4",
      "date": "2017-07-11T01:35:13.000Z",
      "updated": "2017-07-11T01:35:13.000Z",
      "comments": true,
      "path": "api/articles/hello-world4.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    }
  ]
};

const data2 = {
  "total": 16,
  "pageSize": 10,
  "pageCount": 2,
  "data": [
    {
      "title": "Hello World",
      "slug": "hello-world5",
      "date": "2017-07-11T01:35:13.000Z",
      "updated": "2017-07-11T01:35:13.000Z",
      "comments": true,
      "path": "api/articles/hello-world5.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world6",
      "date": "2017-07-11T01:35:13.000Z",
      "updated": "2017-07-11T01:35:13.000Z",
      "comments": true,
      "path": "api/articles/hello-world6.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world2",
      "date": "2017-07-11T01:35:12.000Z",
      "updated": "2017-07-11T01:35:12.000Z",
      "comments": true,
      "path": "api/articles/hello-world2.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world1",
      "date": "2017-07-11T01:35:11.000Z",
      "updated": "2017-07-11T01:35:11.000Z",
      "comments": true,
      "path": "api/articles/hello-world1.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world0",
      "date": "2017-07-11T01:34:58.000Z",
      "updated": "2017-07-11T01:35:15.000Z",
      "comments": true,
      "path": "api/articles/hello-world0.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    },
    {
      "title": "Hello World",
      "slug": "hello-world",
      "date": "2017-07-10T14:01:53.000Z",
      "updated": "2017-07-10T14:01:53.000Z",
      "comments": true,
      "path": "api/articles/hello-world.json",
      "excerpt": "",
      "keywords": null,
      "content": null,
      "raw": null,
      "categories": [

      ],
      "tags": [

      ]
    }
  ]
};
import pagination from './HomePage/Pagination';

export default {
  name: 'blog',

  components: {
    pagination,
    siteFooter,
    siteHeader,
    postBox
  }
}
</script>

<style lang="css">
body {
    font-family: 'Cutive Mono', monospace;
    font-size: 16.5px;
    line-height: 1.5;
    color: #2D2D2D;
    background-color: #F9F9F9;
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
}

.container {
    background-color: #fff;
    padding: 50px;
}
</style>
