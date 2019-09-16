const getStructuredData = () => {
//Article, Author, mentions,  materialExtent, video, material, isFamilyFriendly, 
//creativeWorkStatus, creator/author, copyright holder, character, citation, , accessMode
//word count, about, organization
return JSON.stringify({
    "@context":"https://schema.org/",
    "@type":"VideoGame",
    "name":"Product Name",
    "playMode": "SinglePlayer",
    "gamePlatform": "browser",
    "downloadUrl": "https://earthy-games.itch.io/keep-calm-earthy",
    "screenshot": "https://img.itch.zone/aW1nLzI0OTIyNjgucG5n/347x500/orvskh.png",
    "about": "an infinite runner game where all profits go to charity",
    "applicationCategory": "Game",
    "operatingSystem": "web browser"
    });
}

export default getStructuredData;

/**
 *     "aggregateRating": {
      "@type":"AggregateRating",
      "ratingValue":4.3,
      "reviewCount":197
    },
    "review":[
      {
        "@type":"Review",
        "datePublished":"11/22/1963",
        "reviewBody":"This is Great! My family loves it",
        "name":"It's awesome",
        "author": {
          "@type":"Person",
          "name":"Jerry"
        },
        "locationCreated": {
          "@type":"AdministrativeArea",
          "name":"Chicago, IL"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5
        }
      },
      {
        "@type":"Review",
        "datePublished":"11/22/1963",
        "reviewBody":"I like this a lot. Very cool product",
        "name":"Very cool",
        "author":{
          "@type":"Person",
          "name":"Cool Carl"
        },
        "locationCreated": {
          "@type":"AdministrativeArea",
          "name":"Chicago, IL"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4
        }
      }
    ]
 */