var map = L.map("map").setView([51.505, -0.09], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  }
}

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          170.3061,
          69.7097,
          0
        ]
      },
      "properties": {
        "name": "Akademik Lomonosov",
        "amenity":"Akademik Lomonsov",
        "popupContent": "Akademik Lomonosov",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-3\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          33.5411111111111,
          36.1444444444444,
          0
        ]
      },
      "properties": {
        "name": "Akkuyu Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-3\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -5.69694444444445,
          39.8080555555556,
          0
        ]
      },
      "properties": {
        "name": "Almaraz Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-3\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -44.4738888888889,
          -23.0083333333333,
          0
        ]
      },
      "properties": {
        "name": "Angra Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.2313888888889,
          35.3102777777778,
          0
        ]
      },
      "properties": {
        "name": "Arkansas Nuclear One",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.569444444444444,
          41.2,
          0
        ]
      },
      "properties": {
        "name": "Ascó Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -59.205,
          -33.9675,
          0
        ]
      },
      "properties": {
        "name": "Atucha Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.9552777777778,
          52.0911111111111,
          0
        ]
      },
      "properties": {
        "name": "Balakovo Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          52.2836111111111,
          23.985,
          0
        ]
      },
      "properties": {
        "name": "Braka Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-5\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.4305555555556,
          40.6233333333333,
          0
        ]
      },
      "properties": {
        "name": "Beaver Valley Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-5\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.12,
          54.7619444444444,
          0
        ]
      },
      "properties": {
        "name": "Belarusian Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.875,
          47.5097222222222,
          0
        ]
      },
      "properties": {
        "name": "Belleville Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-8\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          61.3225,
          56.8416666666667,
          0
        ]
      },
      "properties": {
        "name": "Beloyarsk Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          166.538611111111,
          68.0502777777778,
          0
        ]
      },
      "properties": {
        "name": "#14",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.693055555555556,
          45.2558333333333,
          0
        ]
      },
      "properties": {
        "name": "Blayais Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.6819444444444,
          48.4944444444444,
          0
        ]
      },
      "properties": {
        "name": "#16",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-11\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.71833333333333,
          51.4308333333333,
          0
        ]
      },
      "properties": {
        "name": "#17",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-11\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.2291666666667,
          41.2436111111111,
          0
        ]
      },
      "properties": {
        "name": "Braidwood Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-11\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.1186111111111,
          34.7038888888889,
          0
        ]
      },
      "properties": {
        "name": "Browns Ferry Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-11\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5994444444444,
          44.3252777777778,
          0
        ]
      },
      "properties": {
        "name": "Bruce Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-11\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.0102777777778,
          33.9583333333333,
          0
        ]
      },
      "properties": {
        "name": "Brunswick Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-14\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.27083333333333,
          45.8,
          0
        ]
      },
      "properties": {
        "name": "Bugey Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-15\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.8861111111111,
          28.8297222222222,
          0
        ]
      },
      "properties": {
        "name": "Bushehr Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.2819444444444,
          42.0741666666667,
          0
        ]
      },
      "properties": {
        "name": "Byron Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.78,
          38.7616666666667,
          0
        ]
      },
      "properties": {
        "name": "Callaway Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.4422222222222,
          38.4319444444444,
          0
        ]
      },
      "properties": {
        "name": "Calvert Cliffs Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.07,
          35.0516666666667,
          0
        ]
      },
      "properties": {
        "name": "Catawba Nuclear Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          6.21805555555556,
          49.4158333333333,
          0
        ]
      },
      "properties": {
        "name": "Cattenom Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.0572222222222,
          44.3222222222222,
          0
        ]
      },
      "properties": {
        "name": "Cernavoda Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-3\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.9,
          19.4602777777778,
          0
        ]
      },
      "properties": {
        "name": "Changjiang Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-17\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          71.4625,
          32.3902777777778,
          0
        ]
      },
      "properties": {
        "name": "Chashma Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-cn_18-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.170555555555556,
          47.2305555555556,
          0
        ]
      },
      "properties": {
        "name": "Chinon Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-19\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.78944444444444,
          50.09,
          0
        ]
      },
      "properties": {
        "name": "Chooz Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-20\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.652777777777778,
          46.4566666666667,
          0
        ]
      },
      "properties": {
        "name": "Civaux Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-5\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.835,
          40.1722222222222,
          0
        ]
      },
      "properties": {
        "name": "Clinton Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.05,
          39.2166666666667,
          0
        ]
      },
      "properties": {
        "name": "Cofrentes Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.333888888889,
          46.4711111111111,
          0
        ]
      },
      "properties": {
        "name": "Columbia Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.785,
          32.2983333333333,
          0
        ]
      },
      "properties": {
        "name": "Comanche Peak Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.6413888888889,
          40.3619444444444,
          0
        ]
      },
      "properties": {
        "name": "#39",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.75666666666667,
          44.6330555555556,
          0
        ]
      },
      "properties": {
        "name": "Cruas Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.51666666666667,
          47.7330555555556,
          0
        ]
      },
      "properties": {
        "name": "Dampierre Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-7\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.7197222222222,
          43.8727777777778,
          0
        ]
      },
      "properties": {
        "name": "Darlington Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-8\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.0863888888889,
          41.5966666666667,
          0
        ]
      },
      "properties": {
        "name": "#43",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-8\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          114.543611111111,
          22.5977777777778,
          0
        ]
      },
      "properties": {
        "name": "Daya Bay Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-8\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.856111111111,
          35.2108333333333,
          0
        ]
      },
      "properties": {
        "name": "Diablo Canyon Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.25861111111111,
          51.3247222222222,
          0
        ]
      },
      "properties": {
        "name": "Doel Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.5658333333333,
          41.9752777777778,
          0
        ]
      },
      "properties": {
        "name": "Donald Cook Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.2680555555555,
          41.3897222222222,
          0
        ]
      },
      "properties": {
        "name": "Dresden Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-22\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.1488888888889,
          49.085,
          0
        ]
      },
      "properties": {
        "name": "Dukovany Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-22\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.3438888888889,
          31.9341666666667,
          0
        ]
      },
      "properties": {
        "name": "Edwin Hatch Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-22\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -64.443,
          -32.232,
          0
        ]
      },
      "properties": {
        "name": "#51",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-22\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.2575,
          41.9627777777778,
          0
        ]
      },
      "properties": {
        "name": "Enrico Fermi Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-24\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          108.563055555556,
          21.6666666666667,
          0
        ]
      },
      "properties": {
        "name": "Fangchenggang Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-25\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.941666666667,
          30.4413888888889,
          0
        ]
      },
      "properties": {
        "name": "Fangjiashan Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-cn_18-2\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.88166666666667,
          49.5363888888889,
          0
        ]
      },
      "properties": {
        "name": "Flamanville Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-26\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.1666666666667,
          60.4033333333333,
          0
        ]
      },
      "properties": {
        "name": "Forsmark Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-9\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          119.446111111111,
          25.4441666666667,
          0
        ]
      },
      "properties": {
        "name": "Fuqing Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-9\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          129.837222222222,
          33.5155555555556,
          0
        ]
      },
      "properties": {
        "name": "Genkai Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-27\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.31,
          43.2777777777778,
          0
        ]
      },
      "properties": {
        "name": "#59",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-Genkai_Nuclear_Power_Plant_29-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.96666666666667,
          47.3658333333333,
          0
        ]
      },
      "properties": {
        "name": "Goesgen Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-Genkai_Nuclear_Power_Plant_29-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.845277777777778,
          44.1066666666667,
          0
        ]
      },
      "properties": {
        "name": "Golfech Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-Genkai_Nuclear_Power_Plant_29-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.0483333333333,
          32.0066666666667,
          0
        ]
      },
      "properties": {
        "name": "Grand Gulf Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          2.13611111111111,
          51.0152777777778,
          0
        ]
      },
      "properties": {
        "name": "Gravelines Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.381666666667,
          36.7091666666667,
          0
        ]
      },
      "properties": {
        "name": "Haiyang Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-30\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          138.1425,
          34.6236111111111,
          0
        ]
      },
      "properties": {
        "name": "Hamaoka Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-31\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          126.423888888889,
          35.415,
          0
        ]
      },
      "properties": {
        "name": "Hanbit Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          129.383611111111,
          37.0927777777778,
          0
        ]
      },
      "properties": {
        "name": "Hanul Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-33\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -1.18083333333333,
          54.635,
          0
        ]
      },
      "properties": {
        "name": "Hartlepool Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-ko_32-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.1583333333333,
          34.4027777777778,
          0
        ]
      },
      "properties": {
        "name": "#69",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-ko_32-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -2.91611111111111,
          54.0288888888889,
          0
        ]
      },
      "properties": {
        "name": "Heysham nuclear power station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-ko_32-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.390277777778,
          41.1880555555556,
          0
        ]
      },
      "properties": {
        "name": "Higashidōri Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-ko_32-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.471944444444,
          39.7977777777778,
          0
        ]
      },
      "properties": {
        "name": "Hongyanhe Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-2\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.5380555555556,
          39.4677777777778,
          0
        ]
      },
      "properties": {
        "name": "Hope Creek Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          132.311388888889,
          33.4908333333333,
          0
        ]
      },
      "properties": {
        "name": "#74",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.3983333333333,
          43.5233333333333,
          0
        ]
      },
      "properties": {
        "name": "#75",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.1116666666667,
          31.2230555555556,
          0
        ]
      },
      "properties": {
        "name": "Joseph Farley Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          35.0602777777778,
          57.9055555555556,
          0
        ]
      },
      "properties": {
        "name": "Kalinin Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          74.4394444444444,
          14.8652777777778,
          0
        ]
      },
      "properties": {
        "name": "#78",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.35,
          21.2386111111111,
          0
        ]
      },
      "properties": {
        "name": "Kakrapar Atomic Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-34\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          66.78825,
          24.8471666666667,
          0
        ]
      },
      "properties": {
        "name": "Karachi Nuclear Power Complex",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-35\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          138.595277777778,
          37.4291666666667,
          0
        ]
      },
      "properties": {
        "name": "Kashiwazaki-Kariwa Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-37\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.6497222222222,
          50.3013888888889,
          0
        ]
      },
      "properties": {
        "name": "Khmelnytskyi Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-39\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.4319444444444,
          -33.6763888888889,
          0
        ]
      },
      "properties": {
        "name": "Koeberg Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-39\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          32.4666666666667,
          67.4666666666667,
          0
        ]
      },
      "properties": {
        "name": "Kola Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-39\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          129.3,
          35.3169444444444,
          0
        ]
      },
      "properties": {
        "name": "Kori Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-40\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.7705555555556,
          43.7461111111111,
          0
        ]
      },
      "properties": {
        "name": "Kozloduy Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-41\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.5155555555556,
          45.9383333333333,
          0
        ]
      },
      "properties": {
        "name": "#87",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-41\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.7125,
          8.16833333333333,
          0
        ]
      },
      "properties": {
        "name": "Koodankulam Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-42\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          35.6055555555556,
          51.675,
          0
        ]
      },
      "properties": {
        "name": "Kursk Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-43\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.4063888888889,
          19.7208333333333,
          0
        ]
      },
      "properties": {
        "name": "Laguna Verde Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-43\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.6691666666667,
          41.2455555555556,
          0
        ]
      },
      "properties": {
        "name": "LaSalle County Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-43\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.18472222222222,
          47.6030555555556,
          0
        ]
      },
      "properties": {
        "name": "Leibstadt Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-43\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.0436111111111,
          59.8472222222222,
          0
        ]
      },
      "properties": {
        "name": "Leningrad Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-44\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          29.0572222222222,
          59.8305555555556,
          0
        ]
      },
      "properties": {
        "name": "Leningrad Nuclear Power Plant II",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-44\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.5872222222222,
          40.2266666666667,
          0
        ]
      },
      "properties": {
        "name": "Limerick Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-44\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          114.551388888889,
          22.6047222222222,
          0
        ]
      },
      "properties": {
        "name": "Ling Ao Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-44\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.3472222222222,
          60.3722222222222,
          0
        ]
      },
      "properties": {
        "name": "Loviisa Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-2\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.9483333333333,
          35.4325,
          0
        ]
      },
      "properties": {
        "name": "McGuire Nuclear Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-2\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.751666666667,
          21.9580555555556,
          0
        ]
      },
      "properties": {
        "name": "Maanshan Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-2\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.175,
          12.5575,
          0
        ]
      },
      "properties": {
        "name": "#100",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-0\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          44.1488888888889,
          40.1808333333333,
          0
        ]
      },
      "properties": {
        "name": "#101",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-46\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          135.963333333333,
          35.7033333333333,
          0
        ]
      },
      "properties": {
        "name": "#102",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-46\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.1686111111111,
          41.3119444444444,
          0
        ]
      },
      "properties": {
        "name": "Millstone Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-47\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.8491666666667,
          45.3336111111111,
          0
        ]
      },
      "properties": {
        "name": "Monticello Nuclear Generating Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-47\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.4569444444444,
          48.2638888888889,
          0
        ]
      },
      "properties": {
        "name": "#105",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-48\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4094444444444,
          28.1580555555556,
          0
        ]
      },
      "properties": {
        "name": "#106",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-48\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.4069444444444,
          43.5208333333333,
          0
        ]
      },
      "properties": {
        "name": "Nine Mile Point Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-48\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.288333333333,
          27.0461111111111,
          0
        ]
      },
      "properties": {
        "name": "Ningde Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-48\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.51777777777778,
          48.5152777777778,
          0
        ]
      },
      "properties": {
        "name": "Nogent Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-3\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.7894444444444,
          38.0605555555556,
          0
        ]
      },
      "properties": {
        "name": "North Anna Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-12\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          39.2,
          51.275,
          0
        ]
      },
      "properties": {
        "name": "Novovoronezhskaya Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-49\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.8980555555556,
          34.7938888888889,
          0
        ]
      },
      "properties": {
        "name": "Oconee Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-49\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          135.651944444444,
          35.5405555555556,
          0
        ]
      },
      "properties": {
        "name": "Ōi Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-50\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.4408333333333,
          61.2369444444444,
          0
        ]
      },
      "properties": {
        "name": "Olkiluoto Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.499722222222,
          38.4011111111111,
          0
        ]
      },
      "properties": {
        "name": "Onagawa Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-51\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.6711111111111,
          57.4155555555556,
          0
        ]
      },
      "properties": {
        "name": "Oskarshamn Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-52\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.8541666666667,
          46.5725,
          0
        ]
      },
      "properties": {
        "name": "Paks Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-52\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.865,
          33.3891666666667,
          0
        ]
      },
      "properties": {
        "name": "Palo Verde Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-52\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.635555555555556,
          49.8580555555556,
          0
        ]
      },
      "properties": {
        "name": "Paluel Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-52\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.21194444444444,
          49.9766666666667,
          0
        ]
      },
      "properties": {
        "name": "Penly Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-13\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.2680555555555,
          39.7583333333333,
          0
        ]
      },
      "properties": {
        "name": "Peach Bottom Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-53\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.1433333333333,
          41.8008333333333,
          0
        ]
      },
      "properties": {
        "name": "Perry Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-53\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.0658333333333,
          43.8116666666667,
          0
        ]
      },
      "properties": {
        "name": "Pickering Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-54\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.5366666666667,
          44.2811111111111,
          0
        ]
      },
      "properties": {
        "name": "Point Beach Nuclear Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-54\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -66.4547222222222,
          45.0688888888889,
          0
        ]
      },
      "properties": {
        "name": "#126",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-54\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.6330555555555,
          44.6216666666667,
          0
        ]
      },
      "properties": {
        "name": "Prairie Island Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-54\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.956388888889,
          30.4355555555556,
          0
        ]
      },
      "properties": {
        "name": "Qinshan Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-54\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.31,
          41.7263888888889,
          0
        ]
      },
      "properties": {
        "name": "Quad Cities Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-4\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          75.6138888888889,
          24.8722222222222,
          0
        ]
      },
      "properties": {
        "name": "Rajasthan Atomic Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-55\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.1108333333333,
          57.2597222222222,
          0
        ]
      },
      "properties": {
        "name": "Ringhals Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-56\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.3333333333333,
          30.7566666666667,
          0
        ]
      },
      "properties": {
        "name": "#132",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-56\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          25.8916666666667,
          51.3277777777778,
          0
        ]
      },
      "properties": {
        "name": "Rivne Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-56\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          42.3719444444444,
          47.5994444444444,
          0
        ]
      },
      "properties": {
        "name": "Rostov Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-56\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.75444444444444,
          45.4044444444444,
          0
        ]
      },
      "properties": {
        "name": "Saint-Alban Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-56\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.5775,
          47.72,
          0
        ]
      },
      "properties": {
        "name": "Saint-Laurent Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-58\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.2463888888889,
          27.3486111111111,
          0
        ]
      },
      "properties": {
        "name": "Saint Lucie Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.5355555555555,
          39.4627777777778,
          0
        ]
      },
      "properties": {
        "name": "Salem Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-16\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.639722222222,
          29.1011111111111,
          0
        ]
      },
      "properties": {
        "name": "Sanmen",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-59\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.8508333333333,
          42.8988888888889,
          0
        ]
      },
      "properties": {
        "name": "Seabrook Station Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-cn_18-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          130.189722222222,
          31.8336111111111,
          0
        ]
      },
      "properties": {
        "name": "Sendai Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-cn_18-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.0916666666667,
          35.2263888888889,
          0
        ]
      },
      "properties": {
        "name": "Sequoyah Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.955,
          35.6333333333333,
          0
        ]
      },
      "properties": {
        "name": "#143",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          122.528888888889,
          36.9722222222222,
          0
        ]
      },
      "properties": {
        "name": "#144",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          136.726388888889,
          37.0611111111111,
          0
        ]
      },
      "properties": {
        "name": "Shika Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-6\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          132.999166666667,
          35.5383333333333,
          0
        ]
      },
      "properties": {
        "name": "Shimane Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          1.61861111111111,
          52.2133333333333,
          0
        ]
      },
      "properties": {
        "name": "Sizewell-B Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          33.2466666666667,
          54.1691666666667,
          0
        ]
      },
      "properties": {
        "name": "Smolensk Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.0488888888889,
          28.7955555555556,
          0
        ]
      },
      "properties": {
        "name": "South Texas Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.2166666666667,
          47.8166666666667,
          0
        ]
      },
      "properties": {
        "name": "South Ukraine Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.6977777777778,
          37.1655555555556,
          0
        ]
      },
      "properties": {
        "name": "Surry Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.1488888888889,
          41.0888888888889,
          0
        ]
      },
      "properties": {
        "name": "Susquehanna Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.979166666667,
          21.9094444444444,
          0
        ]
      },
      "properties": {
        "name": "Taishan",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-60\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          135.504722222222,
          35.5222222222222,
          0
        ]
      },
      "properties": {
        "name": "Takahama Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-cn_18-11\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.6611111111111,
          19.8277777777778,
          0
        ]
      },
      "properties": {
        "name": "Tarapur Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-7\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.3761111111111,
          49.18,
          0
        ]
      },
      "properties": {
        "name": "Temelin Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-7\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          119.459722222222,
          34.6869444444444,
          0
        ]
      },
      "properties": {
        "name": "Tianwan Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-61\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.2725,
          50.5347222222222,
          0
        ]
      },
      "properties": {
        "name": "Tihange Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearChina_21-5\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          140.606666666667,
          36.4663888888889,
          0
        ]
      },
      "properties": {
        "name": "Tokai Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-62\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          140.5125,
          43.0361111111111,
          0
        ]
      },
      "properties": {
        "name": "Tomari Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-8\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -2.40916666666667,
          55.9680555555556,
          0
        ]
      },
      "properties": {
        "name": "Torness Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-9\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          4.73222222222222,
          44.3297222222222,
          0
        ]
      },
      "properties": {
        "name": "Tricastin Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-9\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -2.62194444444444,
          40.7011111111111,
          0
        ]
      },
      "properties": {
        "name": "Trillo Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearFrance_9-17\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          136.077222222222,
          35.6727777777778,
          0
        ]
      },
      "properties": {
        "name": "Tsuruga Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-63\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.3305555555555,
          25.4341666666667,
          0
        ]
      },
      "properties": {
        "name": "Turkey Point Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-IndustryCardsNuclearJapan_28-10\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.866666666666667,
          40.9513888888889,
          0
        ]
      },
      "properties": {
        "name": "Vandellos Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-64\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.3147222222222,
          34.2986111111111,
          0
        ]
      },
      "properties": {
        "name": "#167",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-64\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7658333333333,
          33.1430555555556,
          0
        ]
      },
      "properties": {
        "name": "Vogtle Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-65\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.4711111111111,
          29.9952777777778,
          0
        ]
      },
      "properties": {
        "name": "Waterford Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-65\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.7894444444444,
          35.6027777777778,
          0
        ]
      },
      "properties": {
        "name": "Watts Bar Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-65\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.6888888888889,
          38.2388888888889,
          0
        ]
      },
      "properties": {
        "name": "Wolf Creek Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-65\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          129.475,
          35.7111111111111,
          0
        ]
      },
      "properties": {
        "name": "Wolseong Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-66\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          112.260555555556,
          21.7097222222222,
          0
        ]
      },
      "properties": {
        "name": "Yangjiang Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-66\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          34.5858333333333,
          47.5122222222222,
          0
        ]
      },
      "properties": {
        "name": "Zaporizhzhia Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-cn_18-13\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          33.5411111111111,
          36.1444444444444,
          0
        ]
      },
      "properties": {
        "name": "Akkuyu Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Under_construction\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.4977777777778,
          31.0441666666667,
          0
        ]
      },
      "properties": {
        "name": "#176",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Under_construction\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.14388888888889,
          51.2061111111111,
          0
        ]
      },
      "properties": {
        "name": "Hinkley Point C  Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Under_construction\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          140.910277777778,
          41.5097222222222,
          0
        ]
      },
      "properties": {
        "name": "Ōma Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Under_construction\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          89.0472222222222,
          24.0666666666667,
          0
        ]
      },
      "properties": {
        "name": "Rooppur Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Under_construction\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.515555555556,
          27.2013888888889,
          0
        ]
      },
      "properties": {
        "name": "#180",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-69\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.546388888889,
          40.3513888888889,
          0
        ]
      },
      "properties": {
        "name": "#181",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-69\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          117.491666666667,
          23.8291666666667,
          0
        ]
      },
      "properties": {
        "name": "#183",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-69\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.9208333333333,
          55.7444444444444,
          0
        ]
      },
      "properties": {
        "name": "Barsebäck Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Permanently_shut_down\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.41527777777778,
          49.71,
          0
        ]
      },
      "properties": {
        "name": "Biblis Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Permanently_shut_down\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.34472222222222,
          53.8508333333333,
          0
        ]
      },
      "properties": {
        "name": "Brokdorf Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Permanently_shut_down\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.87222222222222,
          45.0722222222222,
          0
        ]
      },
      "properties": {
        "name": "#187",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#Permanently_shut_down\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.5875,
          25.2861111111111,
          0
        ]
      },
      "properties": {
        "name": "Chin Shan Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          30.0991666666667,
          51.3894444444444,
          0
        ]
      },
      "properties": {
        "name": "Chernobyl Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          0.963888888888889,
          50.9138888888889,
          0
        ]
      },
      "properties": {
        "name": "Dungeness Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.31777777777778,
          52.4741666666667,
          0
        ]
      },
      "properties": {
        "name": "Emsland Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.2775,
          45.1841666666667,
          0
        ]
      },
      "properties": {
        "name": "#192",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.56305555555556,
          47.9030555555556,
          0
        ]
      },
      "properties": {
        "name": "Fessenheim Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.0772222222222,
          41.5202777777778,
          0
        ]
      },
      "properties": {
        "name": "Fort Calhoun Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.0325,
          37.4213888888889,
          0
        ]
      },
      "properties": {
        "name": "Fukushima I Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.021111111111,
          37.3194444444444,
          0
        ]
      },
      "properties": {
        "name": "Fukushima Daini Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.8347222222222,
          41.2583333333333,
          0
        ]
      },
      "properties": {
        "name": "#197",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.1847222222222,
          49.9838888888889,
          0
        ]
      },
      "properties": {
        "name": "Grafenrheinfeld Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.6644444444444,
          54.1405555555556,
          0
        ]
      },
      "properties": {
        "name": "Greifswald Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.41333333333333,
          52.0352777777778,
          0
        ]
      },
      "properties": {
        "name": "Grohnde Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.4022222222222,
          48.5147222222222,
          0
        ]
      },
      "properties": {
        "name": "Gundremmingen Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.13374166666667,
          51.2087388888889,
          0
        ]
      },
      "properties": {
        "name": "#202",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.128,
          51.209,
          0
        ]
      },
      "properties": {
        "name": "#203",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.89,
          55.722,
          0
        ]
      },
      "properties": {
        "name": "#204",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.56,
          55.6044444444444,
          0
        ]
      },
      "properties": {
        "name": "Ignalina Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9522222222222,
          41.2697222222222,
          0
        ]
      },
      "properties": {
        "name": "Indian Point Energy Center",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-tai_45-1\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.2930555555556,
          48.6055555555556,
          0
        ]
      },
      "properties": {
        "name": "Isar Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-70\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.4088888888889,
          53.41,
          0
        ]
      },
      "properties": {
        "name": "Krummel Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-70\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          12.8069444444444,
          41.4252777777778,
          0
        ]
      },
      "properties": {
        "name": "#209",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-70\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.49,
          50.4080555555556,
          0
        ]
      },
      "properties": {
        "name": "Mülheim-Kärlich Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-70\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.175,
          49.0416666666667,
          0
        ]
      },
      "properties": {
        "name": "Neckarwestheim Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.3144444444444,
          42.3227777777778,
          0
        ]
      },
      "properties": {
        "name": "Palisades Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.43638888888889,
          49.2525,
          0
        ]
      },
      "properties": {
        "name": "Philippsburg Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.5783333333333,
          41.945,
          0
        ]
      },
      "properties": {
        "name": "Pilgrim Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.7247222222222,
          40.1538888888889,
          0
        ]
      },
      "properties": {
        "name": "Three Mile Island Nuclear Generating Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.555,
          33.3688888888889,
          0
        ]
      },
      "properties": {
        "name": "San Onofre Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -3.20729166666667,
          42.7753,
          0
        ]
      },
      "properties": {
        "name": "Santa María de Garoña Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          5.47222222222222,
          45.7583333333333,
          0
        ]
      },
      "properties": {
        "name": "Superphénix",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.885,
          46.0383333333333,
          0
        ]
      },
      "properties": {
        "name": "Trojan Nuclear Power Plant",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.48027777777778,
          53.4277777777778,
          0
        ]
      },
      "properties": {
        "name": "Unterweser Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.8030555555556,
          42.4463888888889,
          0
        ]
      },
      "properties": {
        "name": "Zion Nuclear Power Station",
        "description": {
          "@type": "html",
          "value": "<br>Source: Wikipedia article <a href=\"https://en.wikipedia.org/wiki/List_of_nuclear_power_stations#cite_ref-71\">List of nuclear power stations</a>"
        }
      }
    }
  ]
}

L.geoJSON(geojsonFeature, {
  onEachFeature: onEachFeature
}).addTo(map);
