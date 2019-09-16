const getStructuredData = () => {
//Article, Author, mentions,  materialExtent, video, material, isFamilyFriendly, 
//creativeWorkStatus, creator/author, copyright holder, character, citation, , accessMode
//word count, about, organization
return JSON.stringify({
    "@context":"https://schema.org/",
    "@type":"Product",
    "name":"Product Name",
    "aggregateRating": {
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
    });
}

export default getStructuredData;

