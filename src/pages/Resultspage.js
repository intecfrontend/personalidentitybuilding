import React, { useState, useEffect } from 'react'
import searchIcon from "../assets/search.png"
import { Link } from 'react-router-dom'
import HeaderInput from '../components/headerInput';
import axios from 'axios'
import styled from 'styled-components';
import FirmaCardsContainer from '../components/FirmaItems/Item-firmaLogoCont'


const FirmaItemTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: 30px 0px 0px 30px
`;

function Resultspage(props) {
  const [BladQuery, setBladQuery] = useState('');
  const bladQuery = props.BladQuery;
  const ondertxt = props.ondertxt;
  const [data, setData] = useState(['name', 'name', 'name'])
  // const [ondertxt, setOndertxt] = useState('Parent')
  let lang = 'nl'

  const handleChange = event => {
    setBladQuery(event.target.value);
    console.log('value is:', event.target.value);
  };

  useEffect(() => {
    let query = "identityBuilding"
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
        let copy = []
        res.data.hits.hits.map((item) => {

          let newItem = {}
            newItem.name = item._source[`name_${lang}`] || item._source.name_nl || item._source.name_fr || item._source.name_de || item._source.name_en
          newItem.logos = []

          item._source.logolinks.map((logo) => {

            let logoItem = logo[`png_${lang}`] || logo.png_nl || logo.png_fr || logo.png_de || logo.png_en
            newItem.logos.push(logoItem)

          })
          copy.push(newItem)
        })

        setData(copy); 
      })

  }, [])


  return (
    <div className="App">
      <div className="ONntwk__main">
        <div className="ONntwk__mainVertical ">
          <HeaderInput />


          <div className="ONntwk__inputwrapper">
            <input
              name="BladQuery"
              onChange={handleChange}
              value={BladQuery}
              className="ONntwk__input" placeholder="Ternat" type="text" />
            <Link className="ONntwk__sidebutton" to="/magazines">


              <img src={searchIcon} alt="searchIcon" className="Nntwk__searchIcon" />
            </Link>
          </div>
          {/* <FirmaCardsContainer /> */}
          <div className='card_wrapper'>
            {data.map((item, index) => (
              <div>
                {console.log("item" + item)}
                /* <FirmaItemTitle>{item.name}</FirmaItemTitle> */
              </div>

            ))}
          </div>
          <div className='card_wrapper'>
            {data.map((item, index) => (
              <div>
                {console.log("item" + item)}

                <img src={item.logos} alt="{item.logos}" />

                {item.logos}
                
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resultspage;
