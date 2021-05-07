const settings = {
  "name": "frontity-pri-test",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    // {
    //   "name": "@frontity/mars-theme",
    //   "state": {
    //     "theme": {
    //       "menu": [
    //         [
    //           "Home",
    //           "/"
    //         ],
    //         [
    //           "Nature",
    //           "/category/nature/"
    //         ],
    //         [
    //           "Travel",
    //           "/category/travel/"
    //         ],
    //         [
    //           "Japan",
    //           "/tag/japan/"
    //         ],
    //         [
    //           "About Us",
    //           "/about-us/"
    //         ]
    //       ],
    //       "featured": {
    //         "showOnList": false,
    //         "showOnPost": false
    //       }
    //     }
    //   }
    // },
    {
      "name": "maggies-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://frontity-pri-test",
          "homepage": "/homepage",
          "postsPage": "/posts",
          "postTypes": [
            // {
            //   type: "destinations",
            //   endpoint: "destinations",
            //   archive: "/destinations",
            // }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ]
};

export default settings;
