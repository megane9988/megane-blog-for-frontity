const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://jamstack.demodemo.link/",
      "title": "jamstack test mgn",
      "description": "WordPressでのWebサイトの制作"
    }
  },
  "packages": [
    {
	
      "name": "frontity-starter-theme",
      state: {
        theme: {
          // The logo can be a text or an image url
          logo: "mgn",
          // show background pattern
          showBackgroundPattern: true,
          // show social links
          showSocialLinks: true,
		  // the top-level navigation labels and links
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/about/"
            ],
          ],
          // the social links
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.instagram.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"]
          ],
          // color shades to use in the blog
          colors: {
            primary: {
              "50": "#000",
              "100": "#d4dcd9",
              "200": "#bbc3be",
              "300": "#a1aba5",
              "400": "#87938b",
              "500": "#6d7972",
              "600": "#555f58",
              "700": "#000000",
              "800": "#232924",
              "900": "#272727"
            },
            accent: {
              "50": "#ede4d3",
              "100": "#fbe3b2",
              "200": "#f6d086",
              "300": "#f1be58",
              "400": "#eca419",
              "500": "#d49212",
              "600": "#a5710b",
              "700": "#775105",
              "800": "#483100",
              "900": "#1d0f00"
            }
          }
        }
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://jamstack.demodemo.link/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
	"@frontity/html2react",
    "@frontity/head-tags"
  ]
};

export default settings;
