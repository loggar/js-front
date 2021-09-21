const symbol = new CIMSymbol({
  data: {
    type: "CIMSymbolReference",
    symbol: {
      type: "CIMPointSymbol",
      symbolLayers: [
        {
          type: "CIMVectorMarker",
          enable: true,
          // defines the height of the marker. Modifying Size property actually changes the marker's height to the specified size and the width of marker is updated proportionally.
          size: 32,
          // an envelope which is a rectangle defined by a range of values for each coordinate and attribute
          frame: {
            xmin: 0,
            ymin: 0,
            xmax: 16,
            ymax: 16,
          },
          markerGraphics: [
            {
              type: "CIMMarkerGraphic",
              geometry: {
                // change the geometry from rings to paths
                paths: [
                  [
                    [0, 0],
                    [8, 16],
                    [16, 0],
                  ],
                ],
              },
              symbol: {
                // change the symbol type for the CIMMarkerGraphic from CIMPolygonSymbol to CIMLineSymbol
                type: "CIMLineSymbol",
                symbolLayers: [
                  {
                    type: "CIMSolidStroke",
                    width: 5,
                    color: [240, 94, 35, 255],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
});
