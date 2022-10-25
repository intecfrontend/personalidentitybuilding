import React, { useEffect } from 'react'

import styled from 'styled-components';
import Item from './Item-firma';
import axios from 'axios'

const Wrapper = styled.div`
      display: flex;
      justify-content: center;
      width: 100vw;
      padding: 50px 0px;

`;
const Main = styled.div`
      width: 95vw;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: center;
      gap: 10px
`;

const Firmaitem = () => {

  useEffect(() => {
    let query = "delhaize"
    let options = {
      "from": 0,
      "size": 30,
      "query": {
        "bool": {
          "minimum_should_match": 1,
          "should": [
            {
              "simple_query_string": {
                "query": `\"${query}\"`,
                "fields": [
                  "cmp_collectionlinks.name_nl",
                  "cmp_collectionlinks.name_fr",
                  "cmp_collectionlinks.name_de",
                  "cmp_collectionlinks.name_en"
                ],
                "boost": 1100
              }
            },
            {
              "simple_query_string": {
                "query": `\"${query}\"`,
                "fields": [
                  "cmp_collectionlinks.cmps.name_nl",
                  "cmp_collectionlinks.cmps.name_fr",
                  "cmp_collectionlinks.cmps.name_de",
                  "cmp_collectionlinks.cmps.name_en"
                ],
                "boost": 1100
              }
            },
            {
              "simple_query_string": {
                "query": `\"${query}\"`,
                "fields": [
                  "name_nl",
                  "name_fr",
                  "name_de",
                  "name_en",
                  "from_enterprise.official_name_nl",
                  "from_enterprise.official_name_fr",
                  "from_enterprise.official_name_de",
                  "from_enterprise.official_name_en",
                  "from_enterprise.name_nl",
                  "from_enterprise.name_fr",
                  "from_enterprise.name_de",
                  "from_enterprise.name_en"
                ],
                "boost": 90
              }
            },
            {
              "match_phrase_prefix": {
                "name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.official_name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "from_enterprise.name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 75
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.cmps.name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 900
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_nl": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_fr": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_de": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "match_phrase_prefix": {
                "cmp_collectionlinks.name_en": {
                  "query": `\"${query}*\"`,
                  "boost": 1000
                }
              }
            },
            {
              "fuzzy": {
                "name_nl": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "name_fr": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "name_de": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "name_en": {
                  "value": query,
                  "boost": 80,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_nl": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_fr": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_de": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.official_name_en": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_nl": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_fr": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_de": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "from_enterprise.name_en": {
                  "value": query,
                  "boost": 15,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_nl": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_fr": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_de": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.name_en": {
                  "value": query,
                  "boost": 300,
                  "fuzziness": 1
                }
              }
            },
                    {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_nl": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_fr": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_de": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            },
            {
              "fuzzy": {
                "cmp_collectionlinks.cmps.name_en": {
                  "value": query,
                  "boost": 250,
                  "fuzziness": 1
                }
              }
            }
          ],
          "filter": [
            {
              "term": {
                "active": true
              }
            },
            {
              "exists": {
                "field": "cmp_collectionlinks"
              }
            }
          ]
        }
      }
    }
    
    axios.get(`https://search-osn-management-hkfarflgp5aj2vbhfzvmyycuuy.eu-central-1.es.amazonaws.com/establishments/_search`,
    {
        auth: {
          username: `osn-admin`,
          password: `O15s19n14!`,
        },
        params: {
          source_content_type: "application/json",
          source: JSON.stringify(options),
        }
      })
      .then((res) => {
        console.log(res.data.hits.hits)
        console.log(res.data.hits.hits)
      })

  }, [])

  return (
    <>
      <Wrapper>
        <Main>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Main>
      </Wrapper>
    </>
  )
}

export default Firmaitem