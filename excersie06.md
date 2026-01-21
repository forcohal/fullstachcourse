sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a note and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Server saves the new note
    server-->>browser: 201 Created (JSON response)
    deactivate server

    Note right of browser: Browser updates UI using JavaScript
    Note right of browser: No page reload happens
