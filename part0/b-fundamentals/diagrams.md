# Exercises 0.4 - 0.6

## 0.4 New Note Diagram

Creating a new note in a traditional web app

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST Form Submission to https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 Redirect to /notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML: Notes Page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Main CSS File
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Main JavaScript File
    deactivate server

    Note right of browser: Browser executes client code, leading to GET of note data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2024-12-8" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

## 0.5 Single Page App Diagram

Visiting an SPA-style web app

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML: Notes SPA Page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Main CSS File
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Main SPA JavaScript File
    deactivate server

    Note right of browser: Browser executes client code, leading to GET of note data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2024-12-8" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

## 0.6 New Note in Single Page App Diagram

Creating a new note in an SPA-style web app

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser executes a function to add the new note to the list without reloading
    browser->>server: POST of New Note JSON to https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created: Page is not Refreshed
    deactivate server
```
