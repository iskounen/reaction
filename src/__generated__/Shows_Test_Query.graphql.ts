/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { Shows_viewer$ref } from "./Shows_viewer.graphql";
export type Shows_Test_QueryVariables = {
    readonly artist_id: string;
};
export type Shows_Test_QueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": Shows_viewer$ref;
    }) | null;
};
export type Shows_Test_Query = {
    readonly response: Shows_Test_QueryResponse;
    readonly variables: Shows_Test_QueryVariables;
};



/*
query Shows_Test_Query(
  $artist_id: String!
) {
  viewer {
    ...Shows_viewer
  }
}

fragment Shows_viewer on Viewer {
  artist_currentShows: artist(id: $artist_id) {
    ...ArtistShows_artist_43oec1
    __id
  }
  artist_upcomingShows: artist(id: $artist_id) {
    ...ArtistShows_artist_12Fjro
    __id
  }
  artist_pastShows: artist(id: $artist_id) {
    ...ArtistShows_artist_3dp4w3
    __id
  }
}

fragment ArtistShows_artist_43oec1 on Artist {
  id
  showsConnection(first: 4, sort: END_AT_ASC, status: "running") {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    edges {
      node {
        partner {
          __typename
          ... on ExternalPartner {
            name
            __id
          }
          ... on Partner {
            name
          }
          ... on Node {
            __id
          }
        }
        name
        href
        exhibition_period
        cover_image {
          cropped(width: 800, height: 600) {
            url
          }
          __id: id
        }
        city
        __id
      }
    }
  }
  __id
}

fragment ArtistShows_artist_12Fjro on Artist {
  id
  showsConnection(first: 4, sort: START_AT_ASC, status: "upcoming") {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    edges {
      node {
        partner {
          __typename
          ... on ExternalPartner {
            name
            __id
          }
          ... on Partner {
            name
          }
          ... on Node {
            __id
          }
        }
        name
        href
        exhibition_period
        cover_image {
          cropped(width: 800, height: 600) {
            url
          }
          __id: id
        }
        city
        __id
      }
    }
  }
  __id
}

fragment ArtistShows_artist_3dp4w3 on Artist {
  id
  showsConnection(first: 4, sort: END_AT_DESC, status: "closed") {
    pageInfo {
      hasNextPage
      endCursor
    }
    pageCursors {
      ...Pagination_pageCursors
    }
    edges {
      node {
        partner {
          __typename
          ... on ExternalPartner {
            name
            __id
          }
          ... on Partner {
            name
          }
          ... on Node {
            __id
          }
        }
        name
        href
        exhibition_period
        cover_image {
          cropped(width: 800, height: 600) {
            url
          }
          __id: id
        }
        city
        __id
      }
    }
  }
  __id
}

fragment Pagination_pageCursors on PageCursors {
  around {
    cursor
    page
    isCurrent
  }
  first {
    cursor
    page
    isCurrent
  }
  last {
    cursor
    page
    isCurrent
  }
  previous {
    cursor
    page
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artist_id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artist_id",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 4,
  "type": "Int"
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "page",
  "args": null,
  "storageKey": null
},
v6 = [
  v4,
  v5,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "isCurrent",
    "args": null,
    "storageKey": null
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v9 = [
  v8
],
v10 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageInfo",
    "storageKey": null,
    "args": null,
    "concreteType": "PageInfo",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "pageCursors",
    "storageKey": null,
    "args": null,
    "concreteType": "PageCursors",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "around",
        "storageKey": null,
        "args": null,
        "concreteType": "PageCursor",
        "plural": true,
        "selections": v6
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "first",
        "storageKey": null,
        "args": null,
        "concreteType": "PageCursor",
        "plural": false,
        "selections": v6
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "last",
        "storageKey": null,
        "args": null,
        "concreteType": "PageCursor",
        "plural": false,
        "selections": v6
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "previous",
        "storageKey": null,
        "args": null,
        "concreteType": "PageCursor",
        "plural": false,
        "selections": [
          v4,
          v5
        ]
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "ShowEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Show",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              v7,
              {
                "kind": "InlineFragment",
                "type": "Partner",
                "selections": v9
              },
              {
                "kind": "InlineFragment",
                "type": "ExternalPartner",
                "selections": v9
              }
            ]
          },
          v8,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "exhibition_period",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cover_image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cropped",
                "storageKey": "cropped(height:600,width:800)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 600,
                    "type": "Int!"
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 800,
                    "type": "Int!"
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "url",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": "__id",
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "city",
            "args": null,
            "storageKey": null
          },
          v7
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "Shows_Test_Query",
  "id": null,
  "text": "query Shows_Test_Query(\n  $artist_id: String!\n) {\n  viewer {\n    ...Shows_viewer\n  }\n}\n\nfragment Shows_viewer on Viewer {\n  artist_currentShows: artist(id: $artist_id) {\n    ...ArtistShows_artist_43oec1\n    __id\n  }\n  artist_upcomingShows: artist(id: $artist_id) {\n    ...ArtistShows_artist_12Fjro\n    __id\n  }\n  artist_pastShows: artist(id: $artist_id) {\n    ...ArtistShows_artist_3dp4w3\n    __id\n  }\n}\n\nfragment ArtistShows_artist_43oec1 on Artist {\n  id\n  showsConnection(first: 4, sort: END_AT_ASC, status: \"running\") {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    edges {\n      node {\n        partner {\n          __typename\n          ... on ExternalPartner {\n            name\n            __id\n          }\n          ... on Partner {\n            name\n          }\n          ... on Node {\n            __id\n          }\n        }\n        name\n        href\n        exhibition_period\n        cover_image {\n          cropped(width: 800, height: 600) {\n            url\n          }\n          __id: id\n        }\n        city\n        __id\n      }\n    }\n  }\n  __id\n}\n\nfragment ArtistShows_artist_12Fjro on Artist {\n  id\n  showsConnection(first: 4, sort: START_AT_ASC, status: \"upcoming\") {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    edges {\n      node {\n        partner {\n          __typename\n          ... on ExternalPartner {\n            name\n            __id\n          }\n          ... on Partner {\n            name\n          }\n          ... on Node {\n            __id\n          }\n        }\n        name\n        href\n        exhibition_period\n        cover_image {\n          cropped(width: 800, height: 600) {\n            url\n          }\n          __id: id\n        }\n        city\n        __id\n      }\n    }\n  }\n  __id\n}\n\nfragment ArtistShows_artist_3dp4w3 on Artist {\n  id\n  showsConnection(first: 4, sort: END_AT_DESC, status: \"closed\") {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    pageCursors {\n      ...Pagination_pageCursors\n    }\n    edges {\n      node {\n        partner {\n          __typename\n          ... on ExternalPartner {\n            name\n            __id\n          }\n          ... on Partner {\n            name\n          }\n          ... on Node {\n            __id\n          }\n        }\n        name\n        href\n        exhibition_period\n        cover_image {\n          cropped(width: 800, height: 600) {\n            url\n          }\n          __id: id\n        }\n        city\n        __id\n      }\n    }\n  }\n  __id\n}\n\nfragment Pagination_pageCursors on PageCursors {\n  around {\n    cursor\n    page\n    isCurrent\n  }\n  first {\n    cursor\n    page\n    isCurrent\n  }\n  last {\n    cursor\n    page\n    isCurrent\n  }\n  previous {\n    cursor\n    page\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "Shows_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Shows_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Shows_Test_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "artist_currentShows",
            "name": "artist",
            "storageKey": null,
            "args": v1,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "showsConnection",
                "storageKey": "showsConnection(first:4,sort:\"END_AT_ASC\",status:\"running\")",
                "args": [
                  v3,
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "END_AT_ASC",
                    "type": "PartnerShowSorts"
                  },
                  {
                    "kind": "Literal",
                    "name": "status",
                    "value": "running",
                    "type": "String"
                  }
                ],
                "concreteType": "ShowConnection",
                "plural": false,
                "selections": v10
              },
              v7
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "artist_upcomingShows",
            "name": "artist",
            "storageKey": null,
            "args": v1,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "showsConnection",
                "storageKey": "showsConnection(first:4,sort:\"START_AT_ASC\",status:\"upcoming\")",
                "args": [
                  v3,
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "START_AT_ASC",
                    "type": "PartnerShowSorts"
                  },
                  {
                    "kind": "Literal",
                    "name": "status",
                    "value": "upcoming",
                    "type": "String"
                  }
                ],
                "concreteType": "ShowConnection",
                "plural": false,
                "selections": v10
              },
              v7
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "artist_pastShows",
            "name": "artist",
            "storageKey": null,
            "args": v1,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "showsConnection",
                "storageKey": "showsConnection(first:4,sort:\"END_AT_DESC\",status:\"closed\")",
                "args": [
                  v3,
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "END_AT_DESC",
                    "type": "PartnerShowSorts"
                  },
                  {
                    "kind": "Literal",
                    "name": "status",
                    "value": "closed",
                    "type": "String"
                  }
                ],
                "concreteType": "ShowConnection",
                "plural": false,
                "selections": v10
              },
              v7
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
(node as any).hash = 'c996feefc1689e71a7c56ffd8fb9f49a';
export default node;
