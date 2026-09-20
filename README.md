# Utrecht datamap

An interactive, browser-only Leaflet map for the Utrecht safety CSV exports. Every CSV in `data/` is bundled and loaded automatically; there is no upload workflow because the view is built from this dataset.

## How the app works

This is a small static web app rather than a React application or a backend service:

- `index.html` defines the page structure and loads the locally stored Leaflet library.
- `styles.css` contains the visual design and responsive layout.
- `app.js` parses both wide and long CSV layouts, normalizes the values, applies the filters, renders the map and table, and handles export.
- `data/` contains eight Utrecht exports covering wijken and subwijken for safety experience, street intimidation, noise nuisance, and violence.

The map uses Leaflet with OpenStreetMap tiles and real Utrecht wijk and buurt boundaries from the CBS Wijken en Buurten 2025 API at PDOK. The safety values themselves are read in the browser from the local CSV files. The app has no database, API server, build pipeline, or npm runtime dependency.

## Run locally

No dependency installation or build step is required:

```bash
npm run dev
```

Yes: in this project `npm run dev` is just a convenient alias for:

```bash
python3 -m http.server 4173
```

Python serves the project directory as static files at <http://localhost:4173>. Serving the files over HTTP is useful because the browser can then fetch the bundled CSVs and external map data; opening `index.html` directly as a `file://` URL may block those requests. `npm` is only being used to run the script from `package.json`—it is not starting a Node.js server.

Open <http://localhost:4173> after starting the server. Stop it with `Ctrl+C` in the terminal. The `preview` script currently runs the same Python server on the same port.

## Using the map

- Drag the **Year** slider across the available years (2006–2025).
- Search for a wijk or subwijk to narrow the map, cards, and source table.
- Use **Map detail** to choose **Wijken** or **Subwijken (buurten)**. The map opens on the more detailed subwijk boundaries.
- Open the **Data categories** accordions to see every individual measure from the CSVs. Toggle a whole category or select individual measures; the active measure count, map, insight cards, table, and export all follow those selections.
- Selecting a whole category calculates an arithmetic average per area and year for its available sub-indicators. Missing values are ignored; selecting an individual sub-indicator switches the map and cards back to that indicator's value.
- Averages are available for street intimidation, safety experience, noise nuisance, and violence. Noise nuisance contains both counts and rates per 1,000; those units are never averaged together, and the map uses the rate series for its category average.
- Click a wijk or subwijk on the map to select it in the area search; use **Centreren** to restore the Utrecht extent.
- **Export view** downloads the records matching the active filters as a CSV file.

## Data notes

The bundled files use semicolon separators and two layouts: some have areas as columns, while others have areas as rows. The parser detects both layouts, extracts years from `[2025]` and `|2025`, converts Dutch decimal commas, recognizes `%`, `aantal`, and `promillage`, and keeps `.`/`-`/empty cells unavailable instead of treating them as zero. Irregular survey years are preserved; missing years are not filled in or interpolated. `onbekend` and other null-only areas are excluded from visible records.

The current bundle is organized into four top-level categories with 25 selectable measures: street intimidation (12), safety and experience (10), noise nuisance (2), and violence (1). Noise count and per-1000 rate are kept as separate measures.

The source subwijk labels are grouped areas, for example `De Meern` and `Abstede, Gansstraat`, while the CBS boundary service exposes their constituent buurten separately. The map keeps the original source label and maps each grouped subwijk to its corresponding CBS buurt polygons, so grouped source values are visible across all relevant polygons.

The data source is [utrecht.incijfers.nl](https://utrecht.incijfers.nl/). Map boundaries are supplied separately by PDOK/CBS and are used only to draw the geographic context.

An internet connection is needed for the OpenStreetMap basemap and the PDOK wijk/buurt boundaries. Leaflet and the bundled safety CSVs are stored locally and remain available when the remote map data cannot be loaded.